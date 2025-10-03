import { useState, useEffect } from "react";
import { marked } from "marked";
import CopyButton from "../components/CopyButton";

// Configure marked for safe rendering
marked.setOptions({
  breaks: true,
  gfm: true,
  sanitize: true,
});

const defaultMarkdown = `# Welcome to Markdown Previewer!

## Try out these markdown elements:

### Headers, Lists & Links
- Bullet point 1
- Bullet point 2
  - Nested point
  
1. Numbered list
2. Another item

### Emphasis
*This text is italic*
**This text is bold**
***Bold and italic!***

### Code
Inline \`code\` looks like this.

\`\`\`javascript
// Code block
function greet(name) {
  console.log('Hello, ' + name + '!');
}
\`\`\`

### Blockquotes
> This is a blockquote
> It can span multiple lines

### Tables
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |

### Links & Images
[Visit GitHub](https://github.com)
![Alt text](https://via.placeholder.com/150)
`;

export default function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");

  useEffect(() => {
    // Load last input from localStorage or use default
    const saved = localStorage.getItem("markdownPreviewer.lastInput");
    setMarkdown(saved || defaultMarkdown);
  }, []);

  useEffect(() => {
    // Convert markdown to HTML and update preview
    const htmlContent = marked(markdown);
    setHtml(htmlContent);
    localStorage.setItem("markdownPreviewer.lastInput", markdown);
  }, [markdown]);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Markdown Previewer
        </h1>
        <p className="text-gray-600">
          Write markdown and see it rendered in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">
              Markdown Input
            </label>
            <CopyButton text={markdown} />
          </div>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="w-full h-[calc(100vh-300px)] min-h-[400px] p-4 border rounded-md font-mono text-sm"
            placeholder="Write your markdown here..."
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">
              Preview
            </label>
            <CopyButton text={html} />
          </div>
          <div
            className="w-full h-[calc(100vh-300px)] min-h-[400px] p-4 border rounded-md overflow-auto prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
}
