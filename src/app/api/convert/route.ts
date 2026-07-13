import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import os from "os";
import { randomUUID } from "crypto";

// ── Image conversion via Sharp ─────────────────────────────────────────────────
// Sharp 0.33+ bundles libvips in its pre-built Linux binary — no system
// libvips needed. Handles PNG, JPEG, WebP, GIF, BMP, TIFF, SVG, HEIC correctly.
async function convertImage(
  buffer: Buffer,
  to: string
): Promise<{ buffer: Buffer; mime: string }> {
  const sharp = (await import("sharp")).default;
  const image = sharp(buffer);
  switch (to) {
    case "jpg":
    case "jpeg":
      return {
        buffer: await image.flatten({ background: { r: 255, g: 255, b: 255 } }).jpeg({ quality: 90 }).toBuffer(),
        mime: "image/jpeg",
      };
    case "png":
      return { buffer: await image.png().toBuffer(), mime: "image/png" };
    case "webp":
      return { buffer: await image.webp({ quality: 85 }).toBuffer(), mime: "image/webp" };
    default:
      throw new Error(`Unsupported image output format: ${to}`);
  }
}

// ── PDF → image (pdfjs-dist + @napi-rs/canvas) ────────────────────────────────
// Single page → returns the image directly.
// Multi-page → returns a ZIP containing one image per page.
async function pdfToImage(
  buffer: Buffer,
  outputFormat: "jpg" | "png"
): Promise<{ buffer: Buffer; mime: string; ext: string }> {
  const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const { createCanvas } = await import("@napi-rs/canvas");

  const pdfDoc = await pdfjsLib.getDocument({ data: new Uint8Array(buffer) }).promise;
  const numPages = pdfDoc.numPages;
  const imgMime = outputFormat === "png" ? "image/png" : "image/jpeg";

  const renderPage = async (pageNum: number): Promise<Buffer> => {
    const page = await pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 2.0 });
    const canvas = createCanvas(viewport.width, viewport.height);
    const ctx = canvas.getContext("2d");
    await page.render({
      canvasContext: ctx as unknown as CanvasRenderingContext2D,
      viewport,
      canvas: canvas as unknown as HTMLCanvasElement,
    }).promise;
    return (outputFormat === "png" ? canvas.toBuffer("image/png") : canvas.toBuffer("image/jpeg")) as Buffer;
  };

  if (numPages === 1) {
    return { buffer: await renderPage(1), mime: imgMime, ext: outputFormat };
  }

  // Render all pages then zip them
  const pageBuffers: Buffer[] = [];
  for (let i = 1; i <= numPages; i++) {
    pageBuffers.push(await renderPage(i));
  }

  const { default: createArchive } = await import("archiver") as unknown as {
    default: (fmt: string, opts: object) => import("archiver").Archiver;
  };
  const chunks: Buffer[] = [];
  const zipBuffer = await new Promise<Buffer>((resolve, reject) => {
    const archive = createArchive("zip", { zlib: { level: 6 } });
    archive.on("data", (chunk: unknown) => chunks.push(Buffer.from(chunk as Buffer)));
    archive.on("end", () => resolve(Buffer.concat(chunks)));
    archive.on("error", (err: Error) => reject(err));
    pageBuffers.forEach((pg, i) => {
      archive.append(pg, { name: `page-${String(i + 1).padStart(2, "0")}.${outputFormat}` });
    });
    archive.finalize();
  });

  return { buffer: zipBuffer, mime: "application/zip", ext: "zip" };
}

// ── Image → PDF (pdf-lib, pure JS) ────────────────────────────────────────────
async function imageToPdf(
  buffer: Buffer,
  inputMime: string
): Promise<{ buffer: Buffer; mime: string }> {
  const { PDFDocument } = await import("pdf-lib");
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  // pdf-lib only embeds JPEG and PNG natively; convert everything else to PNG first
  let embedBuffer = buffer;
  let embedMime = inputMime;
  if (!inputMime.includes("png") && !inputMime.includes("jpeg") && !inputMime.includes("jpg")) {
    const converted = await convertImage(buffer, "png");
    embedBuffer = converted.buffer;
    embedMime = "image/png";
  }

  const img = embedMime.includes("png")
    ? await pdfDoc.embedPng(new Uint8Array(embedBuffer))
    : await pdfDoc.embedJpg(new Uint8Array(embedBuffer));

  const { width, height } = img.scale(1);
  page.setSize(width, height);
  page.drawImage(img, { x: 0, y: 0, width, height });

  return { buffer: Buffer.from(await pdfDoc.save()), mime: "application/pdf" };
}

// ── Audio / Video via FFmpeg (ffmpeg-static bundles the binary) ───────────────
async function convertMedia(
  buffer: Buffer,
  inputExt: string,
  outputExt: string
): Promise<{ buffer: Buffer; mime: string }> {
  const ffmpeg = (await import("fluent-ffmpeg")).default;
  // ffmpeg-static provides the correct binary path for the current OS/arch
  const ffmpegStatic = (await import("ffmpeg-static")).default;
  ffmpeg.setFfmpegPath(ffmpegStatic as string);

  const tmpDir = os.tmpdir();
  const id = randomUUID();
  const inputPath = path.join(tmpDir, `${id}-input.${inputExt}`);
  const outputPath = path.join(tmpDir, `${id}-output.${outputExt}`);

  await fs.writeFile(inputPath, buffer);

  await new Promise<void>((resolve, reject) => {
    const cmd = ffmpeg(inputPath).output(outputPath);

    if (outputExt === "mp3") {
      cmd.audioCodec("libmp3lame").audioBitrate("192k").noVideo();
    } else if (outputExt === "wav") {
      cmd.audioCodec("pcm_s16le").noVideo();
    } else if (outputExt === "ogg") {
      cmd.audioCodec("libvorbis").noVideo();
    } else if (outputExt === "mp4") {
      cmd.videoCodec("libx264").audioCodec("aac").outputOptions(["-crf 23", "-preset fast"]);
    } else if (outputExt === "webm") {
      cmd.videoCodec("libvpx-vp9").audioCodec("libvorbis").outputOptions(["-crf 30", "-b:v 0"]);
    } else if (outputExt === "gif") {
      cmd
        .outputOptions([
          "-vf",
          "fps=10,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse",
          "-loop",
          "0",
        ])
        .noAudio();
    }

    cmd
      .on("end", () => resolve())
      .on("error", (err: Error) => reject(err))
      .run();
  });

  const result = await fs.readFile(outputPath);
  await fs.unlink(inputPath).catch(() => {});
  await fs.unlink(outputPath).catch(() => {});

  const mimeMap: Record<string, string> = {
    mp3: "audio/mpeg",
    wav: "audio/wav",
    ogg: "audio/ogg",
    flac: "audio/flac",
    mp4: "video/mp4",
    webm: "video/webm",
    mov: "video/quicktime",
    avi: "video/x-msvideo",
    gif: "image/gif",
  };

  return { buffer: result, mime: mimeMap[outputExt] ?? "application/octet-stream" };
}

// ── PDF → DOCX via pdf2docx (Python) — preserves layout, tables, images ──────
async function pdfToDocx(buffer: Buffer): Promise<{ buffer: Buffer; mime: string }> {
  const { exec } = await import("child_process");
  const { promisify } = await import("util");
  const execAsync = promisify(exec);

  const id = randomUUID();
  const tmpDir = os.tmpdir();
  const inputPath = path.join(tmpDir, `${id}.pdf`);
  const outputPath = path.join(tmpDir, `${id}.docx`);

  await fs.writeFile(inputPath, buffer);

  try {
    let convError = "";
    try {
      await execAsync(
        `python3 -c "from pdf2docx import Converter; cv = Converter('${inputPath}'); cv.convert('${outputPath}'); cv.close()"`,
        { timeout: 120_000 }
      );
    } catch (err) {
      convError = err instanceof Error ? err.message : String(err);
    }

    try {
      const result = await fs.readFile(outputPath);
      return {
        buffer: Buffer.from(result),
        mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      };
    } catch {
      throw new Error(convError || "PDF to Word conversion failed.");
    }
  } finally {
    await fs.unlink(inputPath).catch(() => {});
    await fs.unlink(outputPath).catch(() => {});
  }
}

// ── LibreOffice conversion (Office→PDF) ───────────────────────────────────────
const officeMime: Record<string, string> = {
  pdf:  "application/pdf",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  doc:  "application/msword",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ppt:  "application/vnd.ms-powerpoint",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xls:  "application/vnd.ms-excel",
};

async function convertOffice(
  buffer: Buffer,
  inputExt: string,
  outputExt: string = "pdf"
): Promise<{ buffer: Buffer; mime: string }> {
  const { exec } = await import("child_process");
  const { promisify } = await import("util");
  const execAsync = promisify(exec);

  const id = randomUUID();
  const tmpDir = os.tmpdir();
  const loHome = path.join(tmpDir, `lo-${id}`);
  const inputPath = path.join(tmpDir, `${id}.${inputExt}`);
  // LibreOffice names output as <basename>.<outputExt> in --outdir
  const outputPath = path.join(tmpDir, `${id}.${outputExt}`);

  await fs.mkdir(loHome, { recursive: true });
  await fs.writeFile(inputPath, buffer);

  try {
    // --invisible and --nofirststartwizard are Windows-only flags that break Linux.
    // HOME override gives each request an isolated LO profile (no lock conflicts).
    let loError = "";
    try {
      await execAsync(
        `soffice --headless --norestore --convert-to ${outputExt} --outdir "${tmpDir}" "${inputPath}"`,
        { timeout: 120_000, env: { ...process.env, HOME: loHome } }
      );
    } catch (err) {
      loError = err instanceof Error ? err.message : String(err);
    }

    // LibreOffice sometimes exits non-zero despite successfully creating the output.
    // Check whether the output file actually exists before reporting failure.
    try {
      const result = await fs.readFile(outputPath);
      return {
        buffer: Buffer.from(result),
        mime: officeMime[outputExt] ?? "application/octet-stream",
      };
    } catch {
      throw new Error(
        loError || "Conversion failed. The document may use unsupported features."
      );
    }
  } finally {
    await fs.unlink(inputPath).catch(() => {});
    await fs.unlink(outputPath).catch(() => {});
    await fs.rm(loHome, { recursive: true, force: true }).catch(() => {});
  }
}

// ── Main route handler ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const from = (formData.get("from") as string | null)?.toLowerCase();
    const to = (formData.get("to") as string | null)?.toLowerCase();

    if (!file || !from || !to) {
      return NextResponse.json(
        { error: "Missing file, from, or to parameter." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const originalName = file.name.replace(/\.[^.]+$/, "");

    let resultBuffer: Buffer;
    let mime: string;
    let ext = to;

    // Sharp handles all these input formats (bundles libvips, librsvg, libheif)
    const imageInputFormats = [
      "jpg", "jpeg", "png", "webp", "gif", "bmp", "tiff", "tif", "svg", "heic", "heif",
    ];
    const imageOutputFormats = ["jpg", "jpeg", "png", "webp"];
    const audioFormats = ["mp3", "wav", "m4a", "ogg", "flac", "aac"];
    const videoFormats = ["mp4", "mov", "avi", "webm"];
    const officeFormats = ["docx", "doc", "pptx", "ppt", "xlsx", "xls"];

    if (imageInputFormats.includes(from) && imageOutputFormats.includes(to)) {
      ({ buffer: resultBuffer, mime } = await convertImage(buffer, to));
      ext = to === "jpeg" ? "jpg" : to;
    } else if (imageInputFormats.includes(from) && to === "pdf") {
      ({ buffer: resultBuffer, mime } = await imageToPdf(buffer, file.type));
      ext = "pdf";
    } else if (from === "pdf" && (to === "jpg" || to === "png")) {
      ({ buffer: resultBuffer, mime, ext } = await pdfToImage(buffer, to as "jpg" | "png"));
    } else if (
      [...audioFormats, ...videoFormats].includes(from) &&
      [...audioFormats, ...videoFormats, "gif"].includes(to)
    ) {
      ({ buffer: resultBuffer, mime } = await convertMedia(buffer, from, to));
      ext = to;
    } else if (officeFormats.includes(from) && to === "pdf") {
      ({ buffer: resultBuffer, mime } = await convertOffice(buffer, from, "pdf"));
      ext = "pdf";
    } else if (from === "pdf" && to === "docx") {
      ({ buffer: resultBuffer, mime } = await pdfToDocx(buffer));
      ext = "docx";
    } else {
      return NextResponse.json(
        { error: `Unsupported conversion: ${from} → ${to}` },
        { status: 400 }
      );
    }

    const filename = `${originalName}-zapconvert.${ext}`;

    return new NextResponse(resultBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": mime,
        "Content-Disposition": `attachment; filename="${filename}"`,
        "X-Filename": filename,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unexpected server error.";
    console.error("[zapconvert] conversion error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
