import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — ZapConvert",
  description: "Get in touch with the ZapConvert team. We respond within 24 hours.",
};

// To activate this form:
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form and copy the endpoint (looks like https://formspree.io/f/xyzabcde)
// 3. Replace FORMSPREE_ENDPOINT below with your actual endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgqewra";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
        <p className="text-xl text-slate-600">
          Have a question, found a bug, or want to suggest a new converter? We would love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
        {[
          { icon: "🐛", title: "Report a Bug", desc: "Something not working? Tell us what happened and we will fix it fast." },
          { icon: "💡", title: "Feature Request", desc: "Need a conversion type we do not have yet? Request it here." },
          { icon: "🤝", title: "Business Inquiry", desc: "Interested in partnership or API opportunities? Get in touch." },
        ].map((item) => (
          <div key={item.title} className="bg-slate-50 rounded-2xl p-5 text-center">
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Send us a message</h2>
        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Smith"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 placeholder-slate-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 placeholder-slate-400"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-1">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 bg-white"
            >
              <option>Bug Report</option>
              <option>Feature Request</option>
              <option>Business Inquiry</option>
              <option>General Question</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Describe your question or issue in detail..."
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 placeholder-slate-400 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Send Message →
          </button>
        </form>
      </div>

      <div className="mt-8 text-center text-slate-500 text-sm">
        <p>
          Or email us directly at{" "}
          <a href="mailto:support@zapconvert.net" className="text-indigo-600 font-semibold hover:underline">
            support@zapconvert.net
          </a>
        </p>
        <p className="mt-1">We typically respond within 24 hours on business days.</p>
      </div>
    </div>
  );
}
