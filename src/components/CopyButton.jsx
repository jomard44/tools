import { useState } from "react";
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

export default function CopyButton({ text, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1 px-3 py-1 text-sm rounded-md transition-colors ${
        copied
          ? "bg-green-100 text-green-700"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      } ${className}`}
    >
      {copied ? (
        <>
          <ClipboardDocumentCheckIcon className="w-4 h-4" />
          Copied!
        </>
      ) : (
        <>
          <ClipboardDocumentIcon className="w-4 h-4" />
          Copy
        </>
      )}
    </button>
  );
}
