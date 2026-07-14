import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import MultiImageToPdfConverter from "@/components/MultiImageToPdfConverter";

export const metadata: Metadata = {
  title: "Images to PDF — Merge Multiple Images into One PDF | ZapConvert",
  description:
    "Combine multiple JPG, PNG, WebP, GIF, BMP, and TIFF images into a single PDF file. Free, instant, no signup. Reorder pages then download.",
};

export default function ImagesToPdfPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span>/</span>
        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
          Documents
        </span>
        <span>/</span>
        <span className="text-slate-700 font-medium">Images to PDF</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">🖼️</div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Images to PDF</h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          Combine multiple images into a single PDF file. Upload JPG, PNG, WebP and more — reorder pages with the arrows, then download your merged PDF.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-sm text-slate-500">
          {["Free", "No signup", "SSL secured", "Max 50 MB total", "Up to 20 images"].map((badge) => (
            <span key={badge} className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Tool */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm mb-10">
        <MultiImageToPdfConverter />
      </div>

      <AdUnit />

      {/* How to use */}
      <div className="bg-slate-50 rounded-2xl p-6 mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-4">How to merge images into PDF</h2>
        <ol className="space-y-3">
          {[
            "Click the upload area or drag and drop your images — supports JPG, PNG, WebP, GIF, BMP, and TIFF.",
            "Your images appear as a list with thumbnails. Use the ↑ ↓ arrows to set the page order.",
            "Click \"Merge images into PDF\" to combine them into one PDF document.",
            "Download your PDF. Files are automatically deleted from our servers after 1 hour.",
          ].map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-600">
              <span className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Format info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h2 className="text-base font-bold text-blue-900 mb-2">Supported image formats</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Upload JPG, JPEG, PNG, WebP, GIF, BMP, and TIFF images. Each image becomes one page in the PDF, sized to the image&apos;s original pixel dimensions for perfect quality — no compression, no quality loss.
          </p>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
          <h2 className="text-base font-bold text-indigo-900 mb-2">Is image quality preserved?</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Yes. Images are embedded at full resolution with no quality reduction. The output PDF page is sized exactly to each image&apos;s dimensions, so every pixel is preserved exactly as in the original.
          </p>
        </div>
      </div>

      {/* Why section */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Why merge images into a PDF?</h2>
        <ul className="space-y-3">
          {[
            "Share multiple photos as one file: Instead of sending 10 separate images by email, share a single PDF that opens on any device without special software.",
            "Submit documents and ID scans: Many services and portals require a single multi-page PDF — merge your scanned images into one file for easy submission.",
            "Create a photo portfolio or report: Combine screenshots, product photos, or scanned documents into a professional multi-page PDF presentation.",
            "Archive images with guaranteed compatibility: PDF is universally supported and ideal for long-term storage across all platforms.",
            "Control page order: Reorder your images with the arrows before merging to get exactly the page sequence you need.",
          ].map((reason, i) => {
            const [title, ...rest] = reason.split(": ");
            return (
              <li key={i} className="flex gap-3 text-sm text-slate-600">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>
                  <strong className="text-slate-800">{title}:</strong> {rest.join(": ")}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* FAQ */}
      <div className="mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-5">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How many images can I merge into one PDF?",
              a: "You can merge up to 20 images at once with a combined total size of up to 50 MB. For larger batches, merge one group, download the PDF, then start a second merge with the remaining images.",
            },
            {
              q: "Can I change the order of pages before merging?",
              a: "Yes — use the ↑ ↓ arrow buttons next to each image to move it up or down. The order shown in the list is exactly the order pages will appear in your PDF. The top image becomes page 1.",
            },
            {
              q: "What happens to my images after conversion?",
              a: "All uploaded images and the generated PDF are automatically deleted from our servers after 1 hour. We do not store, share, or analyze your files in any way.",
            },
            {
              q: "Will the PDF be the same quality as my original images?",
              a: "Yes. Each page in the PDF is sized exactly to its source image pixel dimensions and the image is embedded without compression. A 1920×1080 photo produces a 1920×1080 point page in the PDF.",
            },
            {
              q: "Is this tool free?",
              a: "Completely free with no signup required. Upload up to 20 images totaling 50 MB, merge them, and download the PDF — no account, no watermark, no fees.",
            },
          ].map((faq, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-800 text-sm mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related converters */}
      <div>
        <h2 className="text-lg font-bold text-slate-800 mb-4">Related converters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: "/jpg-to-pdf", label: "JPG to PDF", icon: "🖼️" },
            { href: "/png-to-pdf", label: "PNG to PDF", icon: "🖼️" },
            { href: "/pdf-to-jpg", label: "PDF to JPG", icon: "📄" },
            { href: "/pdf-to-word", label: "PDF to Word", icon: "📄" },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="flex items-center gap-2 px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-indigo-400 hover:text-indigo-600 transition-all"
            >
              <span>{c.icon}</span>
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
