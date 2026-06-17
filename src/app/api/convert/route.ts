import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import os from "os";
import { randomUUID } from "crypto";

// ── Image conversion (Sharp) ───────────────────────────────────────────────────
async function convertImage(
  buffer: Buffer,
  to: string
): Promise<{ buffer: Buffer; mime: string }> {
  // Dynamic import so a missing Sharp binary only breaks image conversions,
  // not the entire API route module.
  const sharp = (await import("sharp")).default;
  const pipeline = sharp(buffer, { failOnError: false });

  switch (to) {
    case "jpg":
    case "jpeg":
      return {
        buffer: await pipeline.flatten({ background: "#ffffff" }).jpeg({ quality: 90 }).toBuffer(),
        mime: "image/jpeg",
      };
    case "png":
      return { buffer: await pipeline.png().toBuffer(), mime: "image/png" };
    case "webp":
      return { buffer: await pipeline.webp({ quality: 85 }).toBuffer(), mime: "image/webp" };
    default:
      throw new Error(`Unsupported image output format: ${to}`);
  }
}

// ── PDF → image ────────────────────────────────────────────────────────────────
async function pdfToImage(
  buffer: Buffer,
  outputFormat: "jpg" | "png"
): Promise<{ buffer: Buffer; mime: string }> {
  const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const { createCanvas } = await import("@napi-rs/canvas");

  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(buffer) });
  const pdfDoc = await loadingTask.promise;
  const page = await pdfDoc.getPage(1);
  const viewport = page.getViewport({ scale: 2.0 });

  const canvas = createCanvas(viewport.width, viewport.height);
  const ctx = canvas.getContext("2d");

  await page.render({
    canvasContext: ctx as unknown as CanvasRenderingContext2D,
    viewport,
    canvas: canvas as unknown as HTMLCanvasElement,
  }).promise;

  const imageBuffer =
    outputFormat === "png"
      ? canvas.toBuffer("image/png")
      : canvas.toBuffer("image/jpeg");

  return {
    buffer: imageBuffer as Buffer,
    mime: outputFormat === "png" ? "image/png" : "image/jpeg",
  };
}

// ── Image → PDF ────────────────────────────────────────────────────────────────
async function imageToPdf(
  buffer: Buffer,
  mime: string
): Promise<{ buffer: Buffer; mime: string }> {
  const { PDFDocument } = await import("pdf-lib");
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  // pdf-lib natively embeds JPG and PNG; convert everything else to PNG first
  let embedBuffer = buffer;
  let embedMime = mime;
  if (!mime.includes("png") && !mime.includes("jpeg") && !mime.includes("jpg")) {
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

// ── Audio / Video via FFmpeg ───────────────────────────────────────────────────
async function convertMedia(
  buffer: Buffer,
  inputExt: string,
  outputExt: string
): Promise<{ buffer: Buffer; mime: string }> {
  const ffmpeg = (await import("fluent-ffmpeg")).default;

  const ffmpegPath =
    process.platform === "win32"
      ? "C:\\Users\\DELL\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.1.1-full_build\\bin\\ffmpeg.exe"
      : "ffmpeg";
  ffmpeg.setFfmpegPath(ffmpegPath);

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

    const imageInputFormats = [
      "jpg", "jpeg", "png", "webp", "heic", "heif",
      "svg", "bmp", "tiff", "tif", "gif",
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
      ({ buffer: resultBuffer, mime } = await pdfToImage(buffer, to as "jpg" | "png"));
      ext = to;
    } else if (
      [...audioFormats, ...videoFormats].includes(from) &&
      [...audioFormats, ...videoFormats, "gif"].includes(to)
    ) {
      ({ buffer: resultBuffer, mime } = await convertMedia(buffer, from, to));
      ext = to;
    } else if (officeFormats.includes(from) || officeFormats.includes(to)) {
      return NextResponse.json(
        {
          error:
            "Office document conversion (Word, PowerPoint, Excel to PDF) is coming soon! " +
            "In the meantime, try our free PDF, image, audio, and video converters.",
        },
        { status: 400 }
      );
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
