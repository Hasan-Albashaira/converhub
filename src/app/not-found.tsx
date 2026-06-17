import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-24 text-center px-4">
      <div className="text-6xl mb-6">🤔</div>
      <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Page not found</h1>
      <p className="text-slate-500 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. Try searching for a converter below.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
      >
        Browse All Converters
      </Link>
    </div>
  );
}
