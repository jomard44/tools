import { useState, useEffect } from "react";
import CopyButton from "../components/CopyButton";

export default function WordCounter() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    lines: 0,
  });

  useEffect(() => {
    const calculateStats = () => {
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const characters = text.length;
      const charactersNoSpaces = text.replace(/\s/g, "").length;
      const sentences = text.trim()
        ? text.split(/[.!?]+/).filter(Boolean).length
        : 0;
      const paragraphs = text.trim()
        ? text.split(/\n\s*\n/).filter(Boolean).length
        : 0;
      const lines = text.trim() ? text.split(/\n/).length : 0;

      setStats({
        characters,
        charactersNoSpaces,
        words,
        sentences,
        paragraphs,
        lines,
      });
    };

    calculateStats();
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
    localStorage.setItem("wordCounter.lastInput", e.target.value);
  };

  // Load last input from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("wordCounter.lastInput");
    if (saved) setText(saved);
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Word & Character Counter
        </h1>
        <p className="text-gray-600">
          Count words, characters, sentences, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter your text
          </label>
          <textarea
            value={text}
            onChange={handleTextChange}
            className="w-full h-96 p-4 border rounded-md font-mono text-sm"
            placeholder="Type or paste your text here..."
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Statistics</h2>

          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600">
                Characters (with spaces)
              </label>
              <p className="text-2xl font-bold text-blue-600">
                {stats.characters}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Characters (no spaces)
              </label>
              <p className="text-2xl font-bold text-blue-600">
                {stats.charactersNoSpaces}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-600">Words</label>
              <p className="text-2xl font-bold text-blue-600">{stats.words}</p>
            </div>

            <div>
              <label className="text-sm text-gray-600">Sentences</label>
              <p className="text-2xl font-bold text-blue-600">
                {stats.sentences}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-600">Paragraphs</label>
              <p className="text-2xl font-bold text-blue-600">
                {stats.paragraphs}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-600">Lines</label>
              <p className="text-2xl font-bold text-blue-600">{stats.lines}</p>
            </div>
          </div>

          <CopyButton
            text={`Characters (with spaces): ${stats.characters}
Characters (no spaces): ${stats.charactersNoSpaces}
Words: ${stats.words}
Sentences: ${stats.sentences}
Paragraphs: ${stats.paragraphs}
Lines: ${stats.lines}`}
            className="w-full justify-center mt-4"
          />
        </div>
      </div>
    </div>
  );
}
