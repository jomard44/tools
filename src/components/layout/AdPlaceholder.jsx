import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function AdPlaceholder({ position, className = "" }) {
  const [shouldRenderAd, setShouldRenderAd] = useState(false);

  useEffect(() => {
    // Determine whether the current page has sufficient publisher content
    function hasPublisherContent() {
      try {
        const main = document.querySelector("main") || document.querySelector("#root");
        if (!main) return false;

        const text = (main.innerText || "").trim();
        const wordCount = text ? text.split(/\s+/).length : 0;

        // Count interactive / media elements which indicate real content
        const interactiveCount = main.querySelectorAll("img, video, canvas, textarea, input, pre, code, table, svg").length;

        // Heuristics: consider page to have content if there's >= 80 words OR any interactive/media elements
        return wordCount >= 80 || interactiveCount > 0;
      } catch (err) {
        console.error("Error checking publisher content:", err);
        return false;
      }
    }

    const hasContent = hasPublisherContent();
    setShouldRenderAd(hasContent);

    try {
      // Only initialize ads when in production AND there is publisher content
      if (process.env.NODE_ENV === "production" && hasContent) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("Error initializing ad:", err);
    }
  }, []);

  const baseClasses = "w-full overflow-hidden transition-all duration-200";
  const positionClasses = {
    header: "py-4 mb-4",
    sidebar: "my-4",
    bottom: "py-4 mt-4 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90"
  };

  // Development placeholder: show explanatory, non-ad visual that matches site style
  if (process.env.NODE_ENV !== "production") {
    return (
      <div
        className={`${baseClasses} ${positionClasses[position]} ${className}
          bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
          rounded-lg shadow-sm p-4 text-center transition-colors`}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-400 dark:text-gray-500"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6c-.621 0-1.125-.504-1.125-1.125v-3.75zm12 1.5c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zm-10.5 7.5c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Advertisement (dev)
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-prose">
            Ads are disabled in development. In production ads will only show when there is sufficient publisher content on the page to comply with AdSense policies.
          </p>
        </div>
      </div>
    );
  }

  // In production: only render ad element when page has publisher content
  if (!shouldRenderAd) {
    // Render nothing to avoid serving ads on low-value screens
    return null;
  }

  return (
    <div className={`${baseClasses} ${positionClasses[position]} ${className}`} aria-hidden="false">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9587370950538764"
        data-ad-slot="5695311938"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

AdPlaceholder.propTypes = {
  position: PropTypes.oneOf(["header", "sidebar", "bottom"]).isRequired,
  className: PropTypes.string,
};
