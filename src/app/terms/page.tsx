import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — ZapConvert",
  description: "Terms of Service for ZapConvert file conversion service.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Terms of Service</h1>
      <p className="text-slate-500 mb-10">Last updated: June 17, 2026</p>

      <div className="space-y-8 text-slate-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">1. Acceptance of Terms</h2>
          <p>By accessing or using ZapConvert at zapconvert.net, you agree to be bound by these Terms of Service. If you do not agree, please do not use our service.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">2. Description of Service</h2>
          <p>ZapConvert provides a free online file conversion service that allows users to convert files between various formats including images, documents, audio, and video. Some features require a paid subscription.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">3. Acceptable Use</h2>
          <p>You agree to use ZapConvert only for lawful purposes. You must not:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Upload files that contain viruses, malware, or malicious code.</li>
            <li>Upload files that violate copyright, trademark, or any intellectual property rights.</li>
            <li>Upload illegal content of any kind.</li>
            <li>Attempt to overload, hack, or disrupt our servers.</li>
            <li>Use automated bots to make excessive conversion requests.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">4. Your Files</h2>
          <p>You retain full ownership of all files you upload. By uploading a file, you grant ZapConvert a temporary, limited license to process that file solely for the purpose of conversion. All files are permanently deleted from our servers within 1 hour of upload.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">5. Free Tier Limitations</h2>
          <p>The free tier of ZapConvert currently allows unlimited conversions with a maximum file size of 25 MB per file (100 MB for video and audio). We reserve the right to introduce usage limits in the future with advance notice to users.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">6. Paid Subscriptions</h2>
          <p>ZapConvert is currently free to use. Paid plans with additional features may be introduced in the future. Any paid plans will include clear pricing and a cancellation option.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">7. Disclaimer of Warranties</h2>
          <p>ZapConvert is provided "as is" without warranties of any kind. We do not guarantee that the service will be uninterrupted, error-free, or that converted files will be perfect in all cases. File conversion quality depends on the input file and format.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">8. Limitation of Liability</h2>
          <p>ZapConvert shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service, including loss of data or files. Always keep a copy of your original files.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">9. Changes to Terms</h2>
          <p>We reserve the right to update these Terms of Service at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">10. Contact</h2>
          <p>For any questions regarding these terms, contact us at: <a href="mailto:hasanabd9191@gmail.com" className="text-indigo-600 underline">hasanabd9191@gmail.com</a></p>
        </section>

      </div>
    </div>
  );
}
