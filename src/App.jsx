import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import AdPlaceholder from "./components/layout/AdPlaceholder";
import MetaTags from "./components/MetaTags";

// Tool imports
import JsonFormatter from "./tools/JsonFormatter";
import WordCounter from "./tools/WordCounter";
import MarkdownPreviewer from "./tools/MarkdownPreviewer";
import UnitConverter from "./tools/UnitConverter";
import RegexTester from "./tools/RegexTester";
import Base64Tool from "./tools/Base64Tool";
import ImageResizer from "./tools/ImageResizer";
import ColorPicker from "./tools/ColorPicker";
import PasswordGenerator from "./tools/PasswordGenerator";

function App() {
  return (
    <Router>
      <MetaTags />
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header />
        <AdPlaceholder position="header" />
        <div className="flex-1 container mx-auto px-4 py-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-colors">
            <div className="flex flex-col md:flex-row">
              <Navigation />
              <main className="flex-1 min-w-0 p-6">
                <Routes>
                  <Route path="/" element={<JsonFormatter />} />
                  <Route path="/tools/json-formatter" element={<JsonFormatter />} />
                  <Route path="/tools/word-counter" element={<WordCounter />} />
                  <Route path="/tools/markdown-previewer" element={<MarkdownPreviewer />} />
                  <Route path="/tools/unit-converter" element={<UnitConverter />} />
                  <Route path="/tools/regex-tester" element={<RegexTester />} />
                  <Route path="/tools/base64" element={<Base64Tool />} />
                  <Route path="/tools/image-resizer" element={<ImageResizer />} />
                  <Route path="/tools/color-picker" element={<ColorPicker />} />
                  <Route path="/tools/password-generator" element={<PasswordGenerator />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
        <AdPlaceholder position="bottom" className="sticky bottom-0" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
