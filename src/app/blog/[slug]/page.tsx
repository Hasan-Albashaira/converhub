import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, type BlogSection } from "@/lib/blog-posts";
import AdUnit from "@/components/AdUnit";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — ZapConvert Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function RenderSection({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "h2":
      return <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{section.text}</h2>;
    case "h3":
      return <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">{section.text}</h3>;
    case "p":
      return <p className="text-slate-700 leading-relaxed mb-4">{section.text}</p>;
    case "ul":
      return (
        <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700">
          {section.items?.map((item, i) => <li key={i} className="leading-relaxed">{item}</li>)}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-slate-700">
          {section.items?.map((item, i) => <li key={i} className="leading-relaxed">{item}</li>)}
        </ol>
      );
    case "tip":
      return (
        <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl px-5 py-4 my-6">
          <p className="text-indigo-800 text-sm leading-relaxed"><strong>Tip:</strong> {section.text}</p>
        </div>
      );
    case "cta":
      return (
        <div className="bg-slate-900 rounded-2xl px-6 py-5 my-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-medium text-sm">Try it free — no signup required</p>
          <Link
            href={section.ctaHref ?? "/"}
            className="px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-xl hover:bg-indigo-400 transition-colors whitespace-nowrap text-sm"
          >
            {section.ctaLabel}
          </Link>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-8">
        <Link href="/blog" className="text-sm text-indigo-600 hover:underline font-medium">
          ← Back to Blog
        </Link>
      </div>

      <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
        <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full font-medium">{post.category}</span>
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>

      <h1 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">{post.title}</h1>
      <p className="text-lg text-slate-500 mb-10 leading-relaxed">{post.excerpt}</p>

      <div className="border-t border-slate-100 pt-8">
        {post.content.map((section, i) => (
          <RenderSection key={i} section={section} />
        ))}
      </div>

      <AdUnit />

      {otherPosts.length > 0 && (
        <div className="mt-16 border-t border-slate-100 pt-10">
          <h2 className="text-xl font-bold text-slate-900 mb-6">More Articles</h2>
          <div className="grid gap-4">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="block bg-slate-50 rounded-xl p-4 hover:bg-indigo-50 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                  <span className="text-indigo-600 font-medium">{p.category}</span>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
                <p className="font-semibold text-slate-800">{p.title}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
