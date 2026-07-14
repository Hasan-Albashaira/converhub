"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const GA_ID = "G-KXSMKXG2LS";

function loadGoogleAnalytics() {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga-script")) return; // already loaded

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) { window.dataLayer.push(args); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID, { cookie_domain: "zapconvert.net" });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted") {
      // User already accepted in a previous visit — load GA immediately
      loadGoogleAnalytics();
    }
    // If consent === "declined", we do nothing — GA is not loaded
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    loadGoogleAnalytics();
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
          We use cookies to analyze site traffic and improve your experience. By clicking{" "}
          <strong className="text-white">Accept</strong>, you consent to our use of cookies as described in our{" "}
          <Link href="/privacy" className="text-indigo-400 underline hover:text-indigo-300">
            Privacy Policy
          </Link>.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium text-slate-300 border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
