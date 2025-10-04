export default function Privacy() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-300">
          This Privacy Policy explains how TinyTools Hub ("we", "us", "our") collects,
          uses, and discloses information when you use our website and services.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>Information We Collect</h2>
        <p>
          We do not require user accounts and we do not collect personal information
          for the purposes of providing the core functionality of our tools. Some
          features may store non-personal data in your browser (for example,
          preferences or last inputs) using localStorage solely to improve your
          experience on this site.
        </p>

        <h2>Third‑Party Services</h2>
        <p>
          We use third-party services such as Google AdSense for advertising and
          Vercel Analytics for site metrics. These services may collect information
          about your visit (e.g., IP address, device, browser, pages visited). We
          do not share personal data with advertisers; advertising services may use
          cookies or other identifiers to serve ads and measure performance. For
          more details, refer to Google’s Privacy Policy and the privacy notices of
          any third-party services used on this site.
        </p>

        <h2>Advertising & Ads Policy Compliance</h2>
        <p>
          Ads served via Google AdSense are shown only on pages with meaningful
          publisher content. We have implemented checks to ensure ads are not
          displayed on low-value or under-construction pages. If you see an ad on a
          page with little content, please contact us so we can investigate.
        </p>

        <h2>Cookies and Local Storage</h2>
        <p>
          We use localStorage to store non-sensitive preferences (like theme
          choice) and tool inputs to improve usability. Third-party services may
          set cookies — for example ad networks or analytics providers. You can
          control cookie settings via your browser.
        </p>

        <h2>Data Retention</h2>
        <p>
          Data stored in your browser (localStorage) remains until you clear it or
          it is programmatically removed. We do not retain server-side user data
          because the site is primarily client-side.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this policy or wish to request removal of any
          content, please visit the <a href="/contact">Contact</a> page.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. The updated policy will be
          posted on this page with the date of the last revision.
        </p>
      </div>
    </div>
  );
}