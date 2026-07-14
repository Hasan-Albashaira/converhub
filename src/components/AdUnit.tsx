"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function AdUnit() {
  const pushed = useRef(false);

  useEffect(() => {
    if (!pushed.current) {
      pushed.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // AdSense script not ready
      }
    }
  }, []);

  return (
    <div className="my-6 min-h-[100px]">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5488522956972594"
        data-ad-slot="2149038221"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
