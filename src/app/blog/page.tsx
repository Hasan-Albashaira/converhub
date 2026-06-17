import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — ZapConvert",
  description: "Tips, guides, and tutorials on file conversion, document management, and image formats.",
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Blog</h1>
      <p className="text-slate-500 mb-10">Guides, tips, and tutorials on file formats and conversion.</p>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
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
