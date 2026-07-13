import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZapConvert — Convert Any File Free Online",
  description:
    "Free online file converter. Convert PDF, images, audio, video, and more instantly. Fast, secure, no signup required. Files deleted after 1 hour.",
  keywords:
    "file converter, pdf to jpg, jpg to png, mp4 to mp3, online converter, free converter, zapconvert",
  openGraph: {
    title: "ZapConvert — Convert Any File Free Online",
    description: "Fast, free, and secure file conversion for everyone.",
    type: "website",
  },
  verification: {
    google: "IPEqRY6TwcLcA5tYF1Zs3DW1MfvSKeokO5G3eRvGBw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5488522956972594"
          crossOrigin="anonymous"
        />
        {/* Google Analytics — must be in <head> for Search Console verification */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KXSMKXG2LS"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KXSMKXG2LS', {
                cookie_domain: 'zapconvert.net'
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
