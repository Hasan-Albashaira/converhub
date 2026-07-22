import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ZapConvert — Free Online File Converter",
  description: "ZapConvert is a free online file converter supporting 38+ formats. Learn about our mission, technology stack, privacy commitment, and the team behind the tool.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

      <div className="text-center mb-12">
        <div className="text-6xl mb-4">⚡</div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">About ZapConvert</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          A free, fast, and private file conversion tool built for students, professionals, and creators worldwide.
        </p>
      </div>

      {/* Story */}
      <div className="prose prose-slate max-w-none space-y-5 text-slate-700 leading-relaxed mb-12">
        <h2 className="text-2xl font-bold text-slate-900">Why We Built ZapConvert</h2>
        <p>
          Every day, millions of people run into the same frustrating problem: they have a file in one format, and they need it in another. A student receives a PDF assignment they need to edit. A freelancer gets a batch of HEIC photos from an iPhone that will not open on their Windows laptop. A content creator wants to turn a short video clip into a GIF for a presentation. These are not exotic technical problems — they are everyday tasks that ordinary people face constantly.
        </p>
        <p>
          The tools that existed to solve these problems were, frankly, terrible. The popular converters were cluttered with ads, forced you to create an account before you could do anything, imposed strict limits on free users, or — most concerningly — kept your files on their servers indefinitely. We believed people deserved better: a tool that is genuinely free, respects your privacy, works instantly without any signup, and handles dozens of conversion types under one roof.
        </p>
        <p>
          That is why we built ZapConvert. Our goal from day one has been simple: make file conversion fast, free, and private for everyone on the planet — regardless of what device they use, what country they are in, or what their technical expertise level is.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8">What ZapConvert Can Do</h2>
        <p>
          ZapConvert supports over 38 conversion types across four major categories: documents, images, audio, and video. On the document side, we handle the most requested conversions — PDF to Word, Word to PDF, PDF to JPG, and more — using industry-standard libraries including LibreOffice for document conversion and pdf-lib for PDF manipulation. Image conversions are powered by Sharp, one of the fastest image processing libraries available, supporting JPG, PNG, WebP, GIF, HEIC, SVG, BMP, TIFF, and more. Audio and video conversions run on FFmpeg, the gold standard for media processing used by platforms like YouTube and VLC.
        </p>
        <p>
          All processing happens on our secure servers — not in your browser. This means conversions work equally well on low-powered devices like older phones and tablets, where in-browser processing would be too slow or would crash. You get server-grade conversion quality regardless of what hardware you are using.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8">Our Privacy Commitment</h2>
        <p>
          Privacy is not a feature we added as an afterthought — it is a core design principle of ZapConvert. When you upload a file, it is transmitted to our servers over an encrypted HTTPS connection. The file is processed, the converted output is generated, and you download the result. After that, both the original file and the converted file are automatically and permanently deleted from our servers within one hour.
        </p>
        <p>
          We never read the contents of your files. We never analyze them for data. We never share them with third parties. We do not sell your data. We do not even require you to create an account, which means we do not collect your email address, name, or any personal information just to use the converter. The only data we collect is standard analytics (pages visited, conversion types used) via Google Analytics, and this data is anonymized.
        </p>
        <p>
          This approach is particularly important for the types of files people commonly convert — resumes, contracts, financial documents, personal photos, medical records, and confidential business documents. We designed ZapConvert to handle sensitive files responsibly, even though users never asked us to. It is simply the right way to build a tool that people trust with their important documents.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8">Who Uses ZapConvert</h2>
        <p>
          ZapConvert is used by people across dozens of countries for an enormous variety of tasks. Students use it to convert PDFs into editable Word documents for assignments, or to convert images they need for presentations. Office professionals use it to prepare files for submission — whether that means converting a Word document to PDF for a job application, or converting a scanned receipt from HEIC to JPG to attach to an expense report.
        </p>
        <p>
          Creative professionals and content creators use ZapConvert for media format conversions — extracting the audio from a video file as an MP3, converting MOV footage from an iPhone into a universally compatible MP4, or turning a video clip into an animated GIF for use in a slide deck or social post. Web developers and designers use it to convert logos from SVG to PNG for platforms that do not support vector images, or to convert images to WebP format for faster web performance.
        </p>
        <p>
          In short, ZapConvert is for anyone who has ever been frustrated by a file format. You do not need to be technical. You do not need to install anything. You just need a web browser and the file you want to convert.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8">Free to Use — Here Is Why</h2>
        <p>
          ZapConvert is free because we believe access to basic digital tools should not require a subscription. We sustain the service through non-intrusive display advertising powered by Google AdSense. These ads appear on the site but never inside your conversion experience — we do not inject ads into your converted files, show pop-ups mid-conversion, or use any dark patterns to get you to upgrade.
        </p>
        <p>
          The free tier has generous limits: files up to 25 MB for most conversions (100 MB for audio and video), with no daily conversion cap. We may introduce optional paid plans in the future with features like larger file size limits, batch processing, and priority queue — but the core conversion service will always remain free for individual use.
        </p>
      </div>

      {/* Stats */}
      <div className="bg-indigo-50 rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">ZapConvert at a Glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "38+", label: "Conversion types" },
            { value: "100%", label: "Free core service" },
            { value: "1 hr", label: "Auto file deletion" },
            { value: "0", label: "Accounts required" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-indigo-600">{s.value}</div>
              <div className="text-sm text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: "🌍", title: "Works Everywhere", desc: "Any device, any browser, any country. ZapConvert is a web app — no installation, no OS restrictions, no software updates." },
          { icon: "🔒", title: "Privacy by Design", desc: "Files are deleted within 1 hour. No accounts, no file reading, no data selling. Privacy is not optional — it is built in." },
          { icon: "⚡", title: "Server-Side Speed", desc: "Conversions run on our servers using FFmpeg, LibreOffice, and Sharp — the same tools used by major tech companies." },
        ].map((item) => (
          <div key={item.title} className="bg-slate-50 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Questions</h2>
        <div className="space-y-5">
          {[
            { q: "Is ZapConvert really free?", a: "Yes. All 38+ converters are free to use with no signup required. The service is sustained by non-intrusive Google AdSense ads. We may add optional paid tiers in the future, but the core conversion service will always remain free." },
            { q: "Are my files safe and private?", a: "Yes. Files are uploaded over HTTPS, processed on our servers, and automatically deleted within 1 hour. We never read, analyze, share, or sell the contents of your files." },
            { q: "What is the maximum file size?", a: "Most conversions support files up to 25 MB. Audio and video conversions support files up to 100 MB. These limits apply to the free tier." },
            { q: "Do I need to create an account?", a: "No. ZapConvert requires no account, no email address, and no personal information to use any converter." },
            { q: "What technology does ZapConvert use?", a: "ZapConvert is built with Next.js (React) on the frontend and uses LibreOffice for document conversions, FFmpeg for audio and video, and Sharp for image processing. All conversions happen on our servers hosted on Railway." },
            { q: "How do I contact ZapConvert?", a: "You can reach us at support@zapconvert.net or via the contact form on our Contact page. We typically respond within 24 hours on business days." },
          ].map((item) => (
            <div key={item.q} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
              <h3 className="font-semibold text-slate-800 mb-1">{item.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to convert a file?</h2>
        <p className="text-slate-600 mb-6">No signup. No downloads. 38+ formats supported. Completely free.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="inline-block px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
            Start Converting for Free →
          </Link>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl hover:border-indigo-400 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
