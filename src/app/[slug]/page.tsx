import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getConverter, converters, categoryColors, categoryLabels } from "@/lib/converters";
import { converterContent } from "@/lib/converter-content";
import FileConverter from "@/components/FileConverter";
import AdUnit from "@/components/AdUnit";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return converters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const converter = getConverter(slug);
  if (!converter) return {};
  return {
    title: `${converter.label} — Free Online Converter | ZapConvert`,
    description: `${converter.description} Free, fast, and secure. No signup required. Files auto-deleted after 1 hour.`,
  };
}

export default async function ConverterPage({ params }: Props) {
  const { slug } = await params;
  const converter = getConverter(slug);
  if (!converter) notFound();

  const content = converterContent[slug];

  const related = converters
    .filter((c) => c.slug !== converter.slug && c.category === converter.category)
    .slice(0, 4);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span>/</span>
        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[converter.category]}`}>
          {categoryLabels[converter.category]}
        </span>
        <span>/</span>
        <span className="text-slate-700 font-medium">{converter.label}</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">{converter.icon}</div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3">{converter.label}</h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">{converter.description}</p>
        <div className="flex items-center justify-center gap-4 mt-4 text-sm text-slate-500">
          {["Free", "No signup", "SSL secured", `Max ${converter.maxSizeMB} MB`].map((badge) => (
            <span key={badge} className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Converter tool */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm mb-10">
        <FileConverter converter={converter} />
      </div>

      {/* Ad unit */}
      <AdUnit />

      {/* How to use */}
      <div className="bg-slate-50 rounded-2xl p-6 mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-4">
          How to convert {converter.from.toUpperCase()} to {converter.to.toUpperCase()}
        </h2>
        <ol className="space-y-3">
          {[
            `Click the upload area or drag your ${converter.from.toUpperCase()} file into the box above.`,
            `Your file appears with its name and size — confirm it looks correct.`,
            `Click "Convert to ${converter.to.toUpperCase()}" and wait a few seconds.`,
            `Download your converted file. It is automatically deleted from our servers after 1 hour.`,
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

      {/* Format descriptions — unique content per converter */}
      {content && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h2 className="text-base font-bold text-blue-900 mb-2">
                What is {converter.from.toUpperCase()}?
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">{content.fromDesc}</p>
            </div>
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
              <h2 className="text-base font-bold text-indigo-900 mb-2">
                What is {converter.to.toUpperCase()}?
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">{content.toDesc}</p>
            </div>
          </div>

          {/* Why convert */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-slate-800 mb-4">
              Why convert {converter.from.toUpperCase()} to {converter.to.toUpperCase()}?
            </h2>
            <ul className="space-y-3">
              {content.whyConvert.map((reason, i) => {
                const [title, ...rest] = reason.split(": ");
                return (
                  <li key={i} className="flex gap-3 text-sm text-slate-600">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>
                      {rest.length > 0 ? (
                        <><strong className="text-slate-800">{title}:</strong> {rest.join(": ")}</>
                      ) : reason}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* FAQ section */}
          <div className="mb-10">
            <h2 className="text-lg font-bold text-slate-800 mb-5">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {content.faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-800 text-sm mb-2">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Related converters */}
      {related.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-slate-800 mb-4">Related converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {related.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="flex items-center gap-2 px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-indigo-400 hover:text-indigo-600 transition-all"
              >
                <span>{c.icon}</span>
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
