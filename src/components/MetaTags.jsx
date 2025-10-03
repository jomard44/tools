import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_META = {
  title: "TinyTools Hub - Free Online Utilities",
  description:
    "Collection of free online tools for developers and users. Format JSON, count words, preview markdown, convert units, and more.",
};

const ROUTE_META = {
  "/tools/json-formatter": {
    title: "JSON Formatter & Validator - TinyTools Hub",
    description:
      "Format, beautify, minify and validate JSON data with this free online tool.",
  },
  "/tools/word-counter": {
    title: "Word & Character Counter - TinyTools Hub",
    description:
      "Count words, characters, sentences, and paragraphs in your text. Free online counter tool.",
  },
  "/tools/markdown-previewer": {
    title: "Markdown Previewer - TinyTools Hub",
    description:
      "Live markdown preview tool. Write markdown and see it rendered in real-time.",
  },
  "/tools/unit-converter": {
    title: "Unit Converter - TinyTools Hub",
    description:
      "Convert between different units of length, weight, and temperature. Free online converter.",
  },
  "/tools/regex-tester": {
    title: "Regex Tester - TinyTools Hub",
    description:
      "Test and visualize regular expressions with this interactive regex testing tool.",
  },
  "/tools/base64": {
    title: "Base64 Encoder/Decoder - TinyTools Hub",
    description:
      "Encode and decode text to and from Base64 format. Free online Base64 converter.",
  },
  "/tools/image-resizer": {
    title: "Image Resizer - TinyTools Hub",
    description:
      "Resize images online without losing quality. Free image resizing tool.",
  },
  "/tools/color-picker": {
    title: "Color Picker & Converter - TinyTools Hub",
    description:
      "Pick colors and convert between HEX and RGB formats. Free online color tool.",
  },
  "/tools/password-generator": {
    title: "Password Generator - TinyTools Hub",
    description:
      "Generate secure passwords with custom requirements. Includes password strength meter.",
  },
};

export default function MetaTags() {
  const location = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[location.pathname] || DEFAULT_META;

    document.title = meta.title;

    // Update meta description
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", meta.description);
  }, [location]);

  return null;
}
