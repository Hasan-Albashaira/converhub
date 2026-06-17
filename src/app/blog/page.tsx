import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — ZapConvert",
  description: "Tips, guides, and tutorials on file conversion and document management.",
};

const posts = [
  {
    slug: "what-is-webp",
    title: "What Is WebP and Why Should You Use It?",
    excerpt: "WebP is a modern image format that delivers smaller files with the same quality. Learn when and why to convert your images to WebP.",
    date: "2026-06-10",
    category: "Images",
    readTime: "4 min read",
  },
  {
    slug: "pdf-to-word-guide",
    title: "How to Convert PDF to Word Without Losing Formatting",
    excerpt: "Converting PDFs to editable Word documents can be tricky. Here's what to expect and how to get the best results.",
    date: "2026-06-05",
    category: "Documents",
    readTime: "5 min read",
  },
  {
    slug: "heic-explained",
    title: "What Is a HEIC File? (And How to Open It on Windows)",
    excerpt: "HEIC is the default photo format on iPhones. It's efficient but not universally supported. Here's how to convert it to JPG.",
    date: "2026-05-28",
    category: "Images",
    readTime: "3 min read",
  },
  {
    slug: "compress-audio",
    title: "MP3 vs WAV: Which Audio Format Should You Use?",
    excerpt: "Both MP3 and WAV have their place. We break down the differences in quality, file size, and use cases.",
    date: "2026-05-20",
    category: "Audio",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Blog</h1>
      <p className="text-slate-500 mb-10">Guides, tips, and tutorials on file formats and conversion.</p>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
              <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full font-medium">{post.category}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">{post.title}</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm font-medium text-indigo-600 hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
