export default function Privacy() {
  const lastUpdated = "October 7, 2025";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Last updated: {lastUpdated}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          This Privacy Policy explains how TinyTools Hub ("we", "us", "our")
          collects, uses, stores, and discloses information when you visit and
          use our website and tools.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>Data Controller</h2>
        <p>
          The site operator and data controller for the purposes of this policy
          is the site owner. For questions or requests about privacy, contact us
          at <a href="mailto:hello@tinytoolshub.com">hello@tinytoolshub.com</a>.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We strive to minimize data collection. Most tools run entirely in your
          browser and do not require accounts. However, some information may be
          collected automatically or stored locally:
        </p>
        <ul>
          <li>
            Browser storage: Non-sensitive preferences and last inputs may be
            stored in localStorage to improve your experience (theme, last input
            for tools, etc.).
          </li>
          <li>
            Analytics and logs: We use analytics services (e.g., Vercel
            Analytics) which may collect aggregated usage data, and third-party
            services may log IP addresses, user-agent, and request timestamps.
          </li>
          <li>
            Advertising identifiers: Ad networks (Ezoic, Google AdSense) may set
            cookies or other identifiers to serve and measure ads.
          </li>
        </ul>

        <h2>How We Use Information</h2>
        <ul>
          <li>Provide and improve the site and tools.</li>
          <li>Measure and analyze traffic and performance.</li>
          <li>Serve and measure advertising where applicable.</li>
        </ul>

        <h2>Third‑Party Services & Advertising</h2>
        <p>
          We use third-party services to provide analytics and advertising. We
          currently work with Ezoic and Google AdSense for ad delivery. These
          providers may collect information about your visit (for example IP
          address, device, browser, pages visited) to deliver and measure ads.
        </p>
        <p>
          To support Ezoic's Ads.txt Manager integration, requests to{" "}
          <code>/ads.txt</code>
          may be redirected to an Ads.txt Manager URL. This is normal when Ezoic
          manages the domain's ads.txt file.
        </p>
        <p>
          For details on how these services use data, please review their
          privacy policies: Ezoic, Google AdSense, and any analytics providers
          listed on this site.
        </p>

        <h2>Cookies and Local Storage</h2>
        <p>
          The site uses localStorage for non-sensitive preferences. Third-party
          services may set cookies. You can control or block cookies through
          your browser settings. Note that blocking cookies may affect ad
          personalization and some site features.
        </p>
        <p>
          To opt out of Google Analytics tracking, you can install the Google
          Analytics Opt-out Browser Add-on. For advertising opt-out and
          personalization controls, consult the privacy controls provided by ad
          networks (for example Google Ad Settings) or use a browser-level
          ad/tracking blocker.
        </p>

        <h2>Data Retention</h2>
        <p>
          Data stored in your browser (localStorage) remains until you clear it
          or it is programmatically removed. Aggregated analytics and logs are
          retained by third-party providers according to their policies.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your jurisdiction you may have rights to access, correct,
          delete, or restrict processing of your personal data (for example
          under GDPR or CCPA). To make a request, contact us at
          <a href="mailto:hello@tinytoolshub.com">
            {" "}
            hello@tinytoolshub.com
          </a>{" "}
          and include details about your request. We will respond in accordance
          with applicable law.
        </p>

        <h2>Children</h2>
        <p>
          The site is not directed to children under 13. We do not knowingly
          collect personal information from children.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this policy, want to exercise your data
          rights, or request removal of content, please contact us via the
          <a href="/contact"> Contact page</a> or by email at
          <a href="mailto:hello@tinytoolshub.com"> hello@tinytoolshub.com</a>.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. The date at the top of
          this page will indicate when the policy was last revised.
        </p>
      </div>
    </div>
  );
}
