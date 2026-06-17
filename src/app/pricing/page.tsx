import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — ConvertHub",
  description: "Simple, transparent pricing. Start free, upgrade when you need more.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for occasional use.",
    color: "border-slate-200",
    badge: "",
    cta: "Start Converting",
    ctaHref: "/",
    ctaStyle: "bg-slate-900 text-white hover:bg-slate-700",
    features: [
      "3 conversions per day",
      "Max 25 MB per file",
      "18+ conversion formats",
      "Instant download",
      "Files deleted after 1 hour",
      "SSL encrypted",
    ],
    missing: ["Batch conversion", "Priority queue", "API access", "500 MB+ files"],
  },
  {
    name: "Pro",
    price: "$5.99",
    period: "per month",
    description: "For power users and professionals.",
    color: "border-indigo-500 ring-2 ring-indigo-500",
    badge: "Most Popular",
    cta: "Get Pro",
    ctaHref: "#",
    ctaStyle: "bg-indigo-600 text-white hover:bg-indigo-700",
    features: [
      "Unlimited conversions",
      "Max 500 MB per file",
      "18+ conversion formats",
      "Batch convert up to 20 files",
      "Priority processing queue",
      "Instant download",
      "Files deleted after 1 hour",
      "SSL encrypted",
      "Email support",
    ],
    missing: ["API access", "White-label widget"],
  },
  {
    name: "Business",
    price: "$19.99",
    period: "per month",
    description: "For teams and developers.",
    color: "border-slate-200",
    badge: "",
    cta: "Get Business",
    ctaHref: "#",
    ctaStyle: "bg-slate-900 text-white hover:bg-slate-700",
    features: [
      "Unlimited conversions",
      "Max 2 GB per file",
      "18+ conversion formats",
      "Batch convert up to 100 files",
      "Priority processing queue",
      "REST API access",
      "API key management",
      "Webhook notifications",
      "Instant download",
      "Files deleted after 1 hour",
      "SSL encrypted",
      "Priority support",
    ],
    missing: [],
  },
];

const faqs = [
  {
    q: "Is the free plan really free forever?",
    a: "Yes. The free plan is completely free with no credit card required. You get 3 conversions per day and files up to 25 MB.",
  },
  {
    q: "Are my files safe?",
    a: "All files are encrypted in transit using TLS 1.3. Files are stored temporarily and automatically deleted from our servers 1 hour after conversion.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Absolutely. You can cancel at any time with no cancellation fees. Your plan stays active until the end of the billing period.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, Amex) and PayPal via Stripe, our secure payment processor.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes, we offer a 7-day money-back guarantee on all paid plans, no questions asked.",
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Simple, Transparent Pricing</h1>
        <p className="text-lg text-slate-600">Start free. Upgrade when you need more.</p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-white rounded-2xl border p-8 flex flex-col ${plan.color}`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
                  {plan.badge}
                </span>
              </div>
            )}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">{plan.name}</h2>
              <p className="text-slate-500 text-sm mt-1">{plan.description}</p>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="text-slate-400 mb-1 text-sm">/{plan.period}</span>
              </div>
            </div>

            <Link
              href={plan.ctaHref}
              className={`block text-center py-3 rounded-xl font-semibold transition-colors mb-6 ${plan.ctaStyle}`}
            >
              {plan.cta}
            </Link>

            <ul className="space-y-3 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
              {plan.missing.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <svg className="w-4 h-4 text-slate-300 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-slate-100 pb-6">
              <h3 className="font-semibold text-slate-800 mb-2">{faq.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
