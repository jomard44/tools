import { useState, useEffect } from "react";
import CopyButton from "../components/CopyButton";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [lastValidInput, setLastValidInput] = useState("");

  // Load last input from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem("jsonFormatter.lastInput");
    if (saved) setInput(saved);
  }, []);

  const formatJson = (minify = false) => {
    try {
      // First parse to validate
      const parsed = JSON.parse(input);
      // Then stringify with proper spacing
      const formatted = JSON.stringify(parsed, null, minify ? 0 : 2);
      setOutput(formatted);
      setError("");
      setLastValidInput(input);
      localStorage.setItem("jsonFormatter.lastInput", input);
    } catch (err) {
      setError(err.message);
      setOutput("");
    }
  };

  const validate = () => {
    try {
      JSON.parse(input);
      setError("JSON is valid!");
      setLastValidInput(input);
      localStorage.setItem("jsonFormatter.lastInput", input);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          JSON Formatter & Validator
        </h1>
        <p className="text-gray-600">
          Format, minify, and validate your JSON data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Input JSON
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-64 p-2 border rounded-md font-mono text-sm"
            placeholder="Paste your JSON here..."
          />
          <div className="flex gap-2">
            <button
              onClick={() => formatJson(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Beautify
            </button>
            <button
              onClick={() => formatJson(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Minify
            </button>
            <button
              onClick={validate}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Validate
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Output
          </label>
          <textarea
            value={output}
            readOnly
            className="w-full h-64 p-2 border rounded-md font-mono text-sm bg-gray-50"
            placeholder="Formatted JSON will appear here..."
          />
          {output && (
            <CopyButton text={output} className="w-full justify-center" />
          )}
        </div>
      </div>

      {error && (
        <div
          className={`p-4 rounded-md ${
            error === "JSON is valid!"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {error}
        </div>
      )}
    </div>
  );
}
