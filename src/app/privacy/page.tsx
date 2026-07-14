import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ZapConvert",
  description: "Privacy Policy for ZapConvert. Learn how we handle your files and data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
      <p className="text-slate-500 mb-10">Last updated: June 17, 2026</p>

      <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">1. Introduction</h2>
          <p>Welcome to ZapConvert ("we", "our", or "us"). We operate the website zapconvert.net. This Privacy Policy explains how we collect, use, and protect your information when you use our file conversion service.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">2. Files You Upload</h2>
          <p>Your privacy is our highest priority when it comes to your files:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Files you upload are used <strong>only</strong> for the conversion you requested.</li>
            <li>All uploaded files are <strong>automatically and permanently deleted</strong> from our servers within <strong>1 hour</strong> of upload.</li>
            <li>We do not read, analyze, share, or sell the contents of your files.</li>
            <li>All file transfers are encrypted using HTTPS/TLS.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">3. Information We Collect</h2>
          <p>We collect minimal data necessary to operate the service:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Usage data:</strong> Pages visited, conversion types used, browser type, and general location (country/city level) via Google Analytics.</li>
            <li><strong>Log data:</strong> IP address, browser type, referring pages, and timestamps for security and debugging purposes.</li>
            <li><strong>Cookies:</strong> We use cookies for analytics (Google Analytics) and to improve your experience.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">4. Google Analytics</h2>
          <p>We use Google Analytics to understand how visitors use our website. Google Analytics collects data such as pages visited, time on site, and general geographic location. This data is anonymized and aggregated. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-indigo-600 underline">Google Analytics Opt-out Browser Add-on</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">5. Advertising</h2>
          <p>We display advertisements served by Google AdSense. Google may use cookies to show you relevant ads based on your browsing history. You can manage your ad preferences at <a href="https://adssettings.google.com" className="text-indigo-600 underline">Google Ad Settings</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">6. Data Sharing</h2>
          <p>We do not sell, trade, or share your personal data with third parties except:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Google Analytics (anonymized usage data)</li>
            <li>Google AdSense (advertising)</li>
            <li>Railway (website hosting — your file data is processed on their infrastructure)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">7. Your Rights (GDPR)</h2>
          <p>If you are in the European Union, you have the right to access, correct, or delete any personal data we hold about you. Since we collect minimal personal data and delete all files within 1 hour, there is little data to manage. For any requests, contact us at the email below.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">8. Children's Privacy</h2>
          <p>ZapConvert is not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify users by updating the "Last updated" date at the top of this page.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, contact us at: <a href="mailto:support@zapconvert.net" className="text-indigo-600 underline">support@zapconvert.net</a></p>
        </section>

      </div>
    </div>
  );
}
