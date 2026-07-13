import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@napi-rs/canvas", "pdfjs-dist", "fluent-ffmpeg", "ffmpeg-static", "archiver", "sharp"],
  outputFileTracingIncludes: {
    "/api/convert": [
      "./node_modules/pdfjs-dist/**/*",
      "./node_modules/@napi-rs/canvas/**/*",
      "./node_modules/ffmpeg-static/**/*",
      "./node_modules/sharp/**/*",
    ],
  },
};

export default nextConfig;
