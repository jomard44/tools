import { useLocation } from "react-router-dom";

const toolsMetaData = {
  "/": {
    title: "TinyTools Hub - Free Online Developer Tools",
    description:
      "Collection of free online utilities for developers. Format JSON, count words, preview markdown, test regex, and more.",
  },
  "/tools/json-formatter": {
    title: "JSON Formatter & Validator | TinyTools Hub",
    description:
      "Free online JSON formatter, validator and beautifier. Instantly format and validate your JSON with proper indentation.",
  },
  "/tools/word-counter": {
    title: "Word & Character Counter | TinyTools Hub",
    description:
      "Free online word counter tool. Count words, characters, sentences and paragraphs in your text instantly.",
  },
  "/tools/markdown-previewer": {
    title: "Markdown Live Preview | TinyTools Hub",
    description:
      "Free online markdown previewer with live preview. Write and preview markdown in real-time.",
  },
  "/tools/unit-converter": {
    title: "Unit Converter | TinyTools Hub",
    description:
      "Free online unit converter. Convert between different units of length, weight, temperature, and more.",
  },
  "/tools/regex-tester": {
    title: "Regex Tester & Debugger | TinyTools Hub",
    description:
      "Free online regex tester and debugger. Test your regular expressions with live matching and highlighting.",
  },
  "/tools/base64": {
    title: "Base64 Encoder/Decoder | TinyTools Hub",
    description:
      "Free online Base64 encoder and decoder. Convert text to Base64 and decode Base64 strings instantly.",
  },
  "/tools/image-resizer": {
    title: "Image Resizer | TinyTools Hub",
    description:
      "Free online image resizer. Resize your images without uploading them to a server.",
  },
  "/tools/color-picker": {
    title: "Color Picker & Converter | TinyTools Hub",
    description:
      "Free online color picker and format converter. Pick colors and convert between HEX, RGB, and HSL.",
  },
  "/tools/password-generator": {
    title: "Password Generator | TinyTools Hub",
    description:
      "Free online password generator. Create strong, secure passwords with custom options.",
  },
};

export default function MetaTags() {
  const location = useLocation();
  const metaData = toolsMetaData[location.pathname] || toolsMetaData["/"];

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{metaData.title}</title>
      <meta name="title" content={metaData.title} />
      <meta name="description" content={metaData.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://www.supertoolshub.com${location.pathname}`}
      />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://www.supertoolshub.com${location.pathname}`}
      />
      <meta property="twitter:title" content={metaData.title} />
      <meta property="twitter:description" content={metaData.description} />
    </>
  );
}
