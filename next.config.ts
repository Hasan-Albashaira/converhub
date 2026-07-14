import type { NextConfig } from "next";

// Security headers applied to every response
const securityHeaders = [
  // Prevent the site from being embedded in an iframe on other domains (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Stop browsers from MIME-sniffing the content type
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Control how much referrer info is sent to third parties
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable browser features the site doesn't use
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Tell browsers to always use HTTPS for this domain
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // CSP: Google AdSense and Analytics require wide script/frame permissions.
  // 'unsafe-inline' is required by AdSense — remove it only if you drop ads.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com https://partner.googleadservices.com https://tpc.googlesyndication.com https://adservice.google.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://formspree.io https://pagead2.googlesyndication.com",
      "frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com",
      "object-src 'none'",
      "base-uri 'self'",
    ].join("; "),
  },
];

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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
