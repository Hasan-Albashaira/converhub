import Link from "next/link";
import { converters, getConvertersByCategory, categoryColors, categoryLabels, type ConverterCategory } from "@/lib/converters";

const stats = [
  { value: "18+", label: "File formats" },
  { value: "100%", label: "Free to start" },
  { value: "1 hr", label: "Auto file delete" },
  { value: "256-bit", label: "SSL encryption" },
];

const popularSlugs = ["pdf-to-jpg", "jpg-to-png", "mp4-to-mp3", "png-to-jpg", "wav-to-mp3", "mov-to-mp4"];

export default function HomePage() {
  const byCategory = getConvertersByCategory();
  const popular = popularSlugs.map((s) => converters.find((c) => c.slug === s)!).filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            Free · No signup required · Files auto-deleted
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-5">
            Convert Any File,<br />
            <span className="text-indigo-600">Instantly Free</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            PDF, images, audio, video and more — converted in seconds. No software to install, works on any device.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {popular.slice(0, 4).map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-indigo-400 hover:text-indigo-600 shadow-sm transition-all"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-indigo-600">{s.value}</div>
                <div className="text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Popular Converters</h2>
        <p className="text-slate-500 mb-8">The most used conversion tools, always free.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popular.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="group flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-2xl hover:border-indigo-400 hover:shadow-md transition-all"
            >
              <div className="text-3xl">{c.icon}</div>
              <div>
                <h3 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {c.label}
                </h3>
                <p className="text-sm text-slate-500 mt-0.5 line-clamp-2">{c.description}</p>
                <span className={`inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[c.category]}`}>
                  {categoryLabels[c.category]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All tools by category */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">All Conversion Tools</h2>
          <div className="space-y-10">
            {(Object.entries(byCategory) as [ConverterCategory, typeof converters][]).map(([cat, items]) => (
              <div key={cat}>
                <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-sm ${categoryColors[cat]}`}>
                    {categoryLabels[cat]}
                  </span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {items.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/${c.slug}`}
                      className="flex items-center gap-2.5 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-indigo-400 hover:text-indigo-600 hover:shadow-sm transition-all"
                    >
                      <span>{c.icon}</span>
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">How It Works</h2>
        <p className="text-slate-500 text-center mb-10">Three steps. That&apos;s it.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Choose a tool", desc: "Pick the converter you need from our library of 18+ tools.", icon: "🔍" },
            { step: "2", title: "Upload your file", desc: "Drag and drop or click to browse. Up to 25 MB on the free tier.", icon: "📁" },
            { step: "3", title: "Download the result", desc: "Your converted file is ready in seconds. Files auto-deleted after 1 hour.", icon: "⬇️" },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-3">Need more power?</h2>
          <p className="text-indigo-200 mb-6 text-lg">
            Upgrade to Pro for unlimited conversions, larger files, and batch processing.
          </p>
          <Link
            href="/pricing"
            className="inline-block px-8 py-3.5 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
          >
            See Pricing →
          </Link>
        </div>
      </section>
    </>
  );
}
