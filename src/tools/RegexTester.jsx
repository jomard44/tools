import { useState, useEffect } from "react";
import CopyButton from "../components/CopyButton";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState("");

  // Load last input from localStorage
  useEffect(() => {
    const savedPattern = localStorage.getItem("regexTester.pattern");
    const savedText = localStorage.getItem("regexTester.text");
    if (savedPattern) setPattern(savedPattern);
    if (savedText) setText(savedText);
  }, []);

  // Test regex and find matches
  useEffect(() => {
    if (!pattern || !text) {
      setMatches([]);
      setError("");
      return;
    }

    try {
      const regex = new RegExp(pattern, flags);
      const results = [];
      let match;

      if (flags.includes("g")) {
        while ((match = regex.exec(text)) !== null) {
          results.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1),
          });
        }
      } else {
        match = regex.exec(text);
        if (match) {
          results.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1),
          });
        }
      }

      setMatches(results);
      setError("");

      // Save to localStorage
      localStorage.setItem("regexTester.pattern", pattern);
      localStorage.setItem("regexTester.text", text);
    } catch (err) {
      setError(err.message);
      setMatches([]);
    }
  }, [pattern, flags, text]);

  // Highlight matches in text
  const renderHighlightedText = () => {
    if (!matches.length || error) return text;

    let lastIndex = 0;
    const elements = [];

    matches.forEach((match, i) => {
      // Add text before match
      if (match.index > lastIndex) {
        elements.push(
          <span key={`text-${i}`}>{text.slice(lastIndex, match.index)}</span>
        );
      }

      // Add highlighted match
      elements.push(
        <span
          key={`match-${i}`}
          className="bg-yellow-200 rounded px-0.5"
          title={`Match ${i + 1}`}
        >
          {match.match}
        </span>
      );

      lastIndex = match.index + match.match.length;
    });

    // Add remaining text
    if (lastIndex < text.length) {
      elements.push(<span key="text-end">{text.slice(lastIndex)}</span>);
    }

    return elements;
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Regex Tester</h1>
        <p className="text-gray-600">
          Test and visualize your regular expressions.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Pattern
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
                placeholder="Enter regex pattern..."
                className="flex-1 p-2 border rounded-md font-mono"
              />
              <input
                type="text"
                value={flags}
                onChange={(e) => setFlags(e.target.value)}
                placeholder="flags"
                className="w-20 p-2 border rounded-md font-mono"
                title="Regex flags (g, i, m, s, u, y)"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Test String
              </label>
              <CopyButton text={text} />
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter test string..."
              className="w-full h-24 p-2 border rounded-md font-mono"
            />
          </div>
        </div>

        {error ? (
          <div className="p-4 bg-red-50 text-red-700 rounded-md">{error}</div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 border rounded-md bg-gray-50 font-mono whitespace-pre-wrap">
              {renderHighlightedText()}
            </div>

            {matches.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-900">
                  Matches ({matches.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {matches.map((match, i) => (
                    <div key={i} className="p-3 border rounded-md space-y-1">
                      <div className="text-sm text-gray-500">Match {i + 1}</div>
                      <div className="font-mono text-sm">{match.match}</div>
                      <div className="text-xs text-gray-500">
                        Index: {match.index}
                      </div>
                      {match.groups.length > 0 && (
                        <div className="text-xs">
                          Groups: {match.groups.join(", ")}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
