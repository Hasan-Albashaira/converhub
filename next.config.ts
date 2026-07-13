import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@napi-rs/canvas", "pdfjs-dist", "fluent-ffmpeg", "ffmpeg-static", "archiver"],
  // Force Vercel to include native binaries that are dynamically loaded
  // but not automatically traced by Next.js's file tracer
  outputFileTracingIncludes: {
    "/api/convert": [
      "./node_modules/pdfjs-dist/**/*",
      "./node_modules/@napi-rs/canvas/**/*",
      "./node_modules/ffmpeg-static/**/*",
    ],
  },
};

export default nextConfig;
