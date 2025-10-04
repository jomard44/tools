export default function Contact() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Contact</h1>
        <p className="text-gray-600 dark:text-gray-300">
          If you have questions about the site, privacy, or an ad you saw, please contact the site owner using the form below or by email.
        </p>
      </div>

      <div className="max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your name</label>
            <input type="text" className="mt-1 w-full p-2 border rounded-md bg-white dark:bg-gray-700" placeholder="Optional" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your email</label>
            <input type="email" className="mt-1 w-full p-2 border rounded-md bg-white dark:bg-gray-700" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea className="mt-1 w-full p-2 border rounded-md bg-white dark:bg-gray-700" rows={6} placeholder="Describe your question or issue..." />
          </div>

          <div className="flex gap-2">
            <button type="submit" className="btn-primary">Send (client-only)</button>
            <a href="mailto:hello@tinytoolshub.com" className="btn-secondary inline-flex items-center">Or email directly</a>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            Note: This form is client-side only. Use the email link to reach the site owner.
          </p>
        </form>
      </div>
    </div>
  );
}