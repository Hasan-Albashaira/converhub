import { NextRequest, NextResponse } from "next/server";
import { isAllowed, getClientIp } from "@/lib/rate-limit";

async function multiImagesToPdf(
  files: { buffer: Buffer; mime: string }[]
): Promise<Buffer> {
  const { PDFDocument } = await import("pdf-lib");
  const sharp = (await import("sharp")).default;

  const pdfDoc = await PDFDocument.create();

  for (const { buffer, mime } of files) {
    let embedBuffer: Buffer;
    let isJpeg: boolean;

    if (mime === "image/jpeg" || mime === "image/jpg") {
      embedBuffer = buffer;
      isJpeg = true;
    } else {
      // Convert everything else (PNG, WebP, GIF, BMP, TIFF, HEIC…) to PNG via sharp
      embedBuffer = await sharp(buffer).png().toBuffer();
      isJpeg = false;
    }

    const img = isJpeg
      ? await pdfDoc.embedJpg(new Uint8Array(embedBuffer))
      : await pdfDoc.embedPng(new Uint8Array(embedBuffer));

    const { width, height } = img.scale(1);
    const page = pdfDoc.addPage([width, height]);
    page.drawImage(img, { x: 0, y: 0, width, height });
  }

  return Buffer.from(await pdfDoc.save());
}

export async function POST(req: NextRequest) {
  // Rate limit: 10 merges per 10 minutes per IP (heavier operation)
  const ip = getClientIp(req);
  if (!isAllowed(ip, 10, 10 * 60 * 1000)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files provided." }, { status: 400 });
    }

    if (files.length > 20) {
      return NextResponse.json(
        { error: "Maximum 20 images allowed per merge." },
        { status: 400 }
      );
    }

    const MAX_TOTAL = 50 * 1024 * 1024;
    const totalSize = files.reduce((sum, f) => sum + f.size, 0);
    if (totalSize > MAX_TOTAL) {
      return NextResponse.json(
        { error: "Total file size exceeds the 50 MB limit." },
        { status: 400 }
      );
    }

    const imageFiles = await Promise.all(
      files.map(async (f) => ({
        buffer: Buffer.from(await f.arrayBuffer()),
        mime: f.type,
      }))
    );

    const pdfBuffer = await multiImagesToPdf(imageFiles);

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="merged-images.pdf"; filename*=UTF-8''merged-images.pdf`,
        "X-Filename": "merged-images.pdf",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[zapconvert] merge-images-to-pdf error:", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: "Merge failed. One or more images may be corrupted or in an unsupported format." },
      { status: 500 }
    );
  }
}
