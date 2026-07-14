import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — ZapConvert",
  description: "Learn about ZapConvert, the free online file converter built for everyone worldwide.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center mb-14">
        <div className="text-6xl mb-4">⚡</div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">About ZapConvert</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          We built ZapConvert because file conversion should be fast, free, and private — for everyone, everywhere.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {[
          { icon: "🌍", title: "Built for Everyone", desc: "ZapConvert works on any device, any browser, in any country. No software to install, no account required." },
          { icon: "🔒", title: "Privacy First", desc: "Your files are yours. We never read, store, or share your files. Everything is auto-deleted within 1 hour." },
          { icon: "⚡", title: "Lightning Fast", desc: "Most conversions complete in under 5 seconds. We use the latest technology to deliver results instantly." },
        ].map((item) => (
          <div key={item.title} className="bg-slate-50 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          ZapConvert was created with one goal: make file conversion accessible to everyone for free. Whether you are a student converting a PDF for school, a professional converting documents for work, or a creator converting videos for social media — ZapConvert is built for you.
        </p>
        <p className="text-slate-600 leading-relaxed">
          We support 38+ conversion types across documents, images, audio, and video. And the best part — the core service is completely free, with no signup required.
        </p>
      </div>

      <div className="bg-indigo-50 rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">By the numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "38+", label: "Conversion types" },
            { value: "100%", label: "Free to use" },
            { value: "1 hour", label: "File deletion" },
            { value: "0", label: "Accounts required" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-indigo-600">{s.value}</div>
              <div className="text-sm text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to convert?</h2>
        <p className="text-slate-600 mb-6">No signup. No downloads. Just instant file conversion.</p>
        <Link href="/" className="inline-block px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
          Start Converting for Free →
        </Link>
      </div>
    </div>
  );
}
