import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["sharp", "pdfjs-dist", "@napi-rs/canvas", "fluent-ffmpeg"],
  // Force Vercel to bundle these files that pdfjs-dist and @napi-rs/canvas
  // load dynamically (not automatically traced by Next.js)
  outputFileTracingIncludes: {
    "/api/convert": [
      "./node_modules/pdfjs-dist/**/*",
      "./node_modules/@napi-rs/canvas/**/*",
    ],
  },
};

export default nextConfig;
