import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import os from "os";
import { randomUUID } from "crypto";

export const config = { api: { bodyParser: false } };

// ── Image conversion ──────────────────────────────────────────────────────────
async function convertImage(
  buffer: Buffer,
  to: string
): Promise<{ buffer: Buffer; mime: string }> {
  const pipeline = sharp(buffer);
  switch (to) {
    case "jpg":
    case "jpeg":
      return { buffer: await pipeline.jpeg({ quality: 90 }).toBuffer(), mime: "image/jpeg" };
    case "png":
      return { buffer: await pipeline.png().toBuffer(), mime: "image/png" };
    case "webp":
      return { buffer: await pipeline.webp({ quality: 85 }).toBuffer(), mime: "image/webp" };
    default:
      throw new Error(`Unsupported image output format: ${to}`);
  }
}

// ── PDF → image ───────────────────────────────────────────────────────────────
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

// ── Image → PDF ───────────────────────────────────────────────────────────────
async function imagesToPdf(buffer: Buffer, mime: string): Promise<{ buffer: Buffer; mime: string }> {
  const { PDFDocument } = await import("pdf-lib");
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  const img = mime.includes("png")
    ? await pdfDoc.embedPng(new Uint8Array(buffer))
    : await pdfDoc.embedJpg(new Uint8Array(buffer));

  const { width, height } = img.scale(1);
  page.setSize(width, height);
  page.drawImage(img, { x: 0, y: 0, width, height });

  return { buffer: Buffer.from(await pdfDoc.save()), mime: "application/pdf" };
}

// ── Audio / Video via FFmpeg ──────────────────────────────────────────────────
async function convertMedia(
  buffer: Buffer,
  inputExt: string,
  outputExt: string
): Promise<{ buffer: Buffer; mime: string }> {
  const ffmpeg = (await import("fluent-ffmpeg")).default;

  // Point to the exact FFmpeg binary location (works on Windows dev + Linux servers)
  const ffmpegPath =
    process.platform === "win32"
      ? "C:\\Users\\DELL\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.1.1-full_build\\bin\\ffmpeg.exe"
      : "ffmpeg";
  ffmpeg.setFfmpegPath(ffmpegPath);

  // Write input to a temp file
  const tmpDir = os.tmpdir();
  const id = randomUUID();
  const inputPath = path.join(tmpDir, `${id}-input.${inputExt}`);
  const outputPath = path.join(tmpDir, `${id}-output.${outputExt}`);

  await fs.writeFile(inputPath, buffer);

  await new Promise<void>((resolve, reject) => {
    const cmd = ffmpeg(inputPath).output(outputPath);

    // Format-specific settings for best quality / smallest size
    if (outputExt === "mp3") {
      cmd.audioCodec("libmp3lame").audioBitrate("192k").noVideo();
    } else if (outputExt === "wav") {
      cmd.audioCodec("pcm_s16le").noVideo();
    } else if (outputExt === "mp4") {
      cmd.videoCodec("libx264").audioCodec("aac").outputOptions(["-crf 23", "-preset fast"]);
    }

    cmd.on("end", () => resolve())
      .on("error", (err: Error) => reject(err))
      .run();
  });

  const result = await fs.readFile(outputPath);

  // Clean up temp files
  await fs.unlink(inputPath).catch(() => {});
  await fs.unlink(outputPath).catch(() => {});

  const mimeMap: Record<string, string> = {
    mp3: "audio/mpeg",
    wav: "audio/wav",
    mp4: "video/mp4",
    m4a: "audio/mp4",
    ogg: "audio/ogg",
  };

  return { buffer: result, mime: mimeMap[outputExt] ?? "application/octet-stream" };
}

// ── Main route handler ────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const from = (formData.get("from") as string | null)?.toLowerCase();
    const to = (formData.get("to") as string | null)?.toLowerCase();

    if (!file || !from || !to) {
      return NextResponse.json({ error: "Missing file, from, or to parameter." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const originalName = file.name.replace(/\.[^.]+$/, "");

    let resultBuffer: Buffer;
    let mime: string;
    let ext = to;

    const imageFormats = ["jpg", "jpeg", "png", "webp", "heic"];
    const audioFormats = ["mp3", "wav", "m4a", "ogg"];
    const videoFormats = ["mp4", "mov", "avi", "webm"];

    if (imageFormats.includes(from) && imageFormats.filter(f => f !== "heic").includes(to)) {
      ({ buffer: resultBuffer, mime } = await convertImage(buffer, to));
      ext = to === "jpeg" ? "jpg" : to;
    } else if (["jpg", "jpeg", "png"].includes(from) && to === "pdf") {
      ({ buffer: resultBuffer, mime } = await imagesToPdf(buffer, file.type));
    } else if (from === "pdf" && (to === "jpg" || to === "png")) {
      ({ buffer: resultBuffer, mime } = await pdfToImage(buffer, to));
    } else if ([...audioFormats, ...videoFormats].includes(from) && [...audioFormats, ...videoFormats].includes(to)) {
      ({ buffer: resultBuffer, mime } = await convertMedia(buffer, from, to));
    } else {
      return NextResponse.json({ error: `Unsupported conversion: ${from} → ${to}` }, { status: 400 });
    }

    const filename = `${originalName}-converhub.${ext}`;

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
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
