export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-sm transition-colors mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">About</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              TinyTools Hub provides free online utilities for developers and users.
              All tools run locally in your browser with no data collection.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/jomard44/tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jomard44/tools/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Support</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              If you find these tools helpful, consider{" "}
              <a
                href="https://github.com/sponsors/jomard44"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                sponsoring the project
              </a>{" "}
              or giving it a star on GitHub.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p>
              © {new Date().getFullYear()} TinyTools Hub. All tools are free to use.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
