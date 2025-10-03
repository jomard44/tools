import { useState, useEffect } from "react";
import CopyButton from "../components/CopyButton";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode"); // encode or decode
  const [error, setError] = useState("");

  // Load last input from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("base64Tool.lastInput");
    if (saved) setInput(saved);
  }, []);

  const handleConversion = () => {
    try {
      if (mode === "encode") {
        const encoded = btoa(input);
        setOutput(encoded);
        setError("");
      } else {
        const decoded = atob(input);
        setOutput(decoded);
        setError("");
      }
      localStorage.setItem("base64Tool.lastInput", input);
    } catch (err) {
      setError(
        mode === "decode" ? "Invalid Base64 string" : "Cannot encode this input"
      );
      setOutput("");
    }
  };

  // Auto-convert when input changes
  useEffect(() => {
    if (input) {
      handleConversion();
    } else {
      setOutput("");
      setError("");
    }
  }, [input, mode]);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Base64 Encoder/Decoder
        </h1>
        <p className="text-gray-600">
          Convert text to and from Base64 encoding.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setMode("encode")}
            className={`px-4 py-2 rounded-md ${
              mode === "encode"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Encode
          </button>
          <button
            onClick={() => setMode("decode")}
            className={`px-4 py-2 rounded-md ${
              mode === "decode"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Decode
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                {mode === "encode" ? "Text to Encode" : "Base64 to Decode"}
              </label>
              <CopyButton text={input} />
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-64 p-4 border rounded-md font-mono text-sm"
              placeholder={
                mode === "encode"
                  ? "Enter text to encode..."
                  : "Enter Base64 to decode..."
              }
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                {mode === "encode" ? "Base64 Output" : "Decoded Text"}
              </label>
              <CopyButton text={output} />
            </div>
            <textarea
              value={output}
              readOnly
              className="w-full h-64 p-4 border rounded-md font-mono text-sm bg-gray-50"
              placeholder="Result will appear here..."
            />
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-md">{error}</div>
        )}
      </div>
    </div>
  );
}
