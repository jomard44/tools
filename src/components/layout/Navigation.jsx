import { NavLink } from "react-router-dom";

const tools = [
  {
    name: "JSON Formatter",
    path: "/tools/json-formatter",
    description: "Format, validate, and beautify JSON",
  },
  {
    name: "Word Counter",
    path: "/tools/word-counter",
    description: "Count words, characters, and more",
  },
  {
    name: "Markdown Previewer",
    path: "/tools/markdown-previewer",
    description: "Live markdown preview",
  },
  {
    name: "Unit Converter",
    path: "/tools/unit-converter",
    description: "Convert between different units",
  },
  {
    name: "Regex Tester",
    path: "/tools/regex-tester",
    description: "Test regular expressions",
  },
  {
    name: "Base64 Tool",
    path: "/tools/base64",
    description: "Encode/decode Base64",
  },
  {
    name: "Image Resizer",
    path: "/tools/image-resizer",
    description: "Resize images client-side",
  },
  {
    name: "Color Picker",
    path: "/tools/color-picker",
    description: "Pick colors & convert formats",
  },
  {
    name: "Password Generator",
    path: "/tools/password-generator",
    description: "Generate secure passwords",
  },
];

export default function Navigation() {
  return (
    <nav className="w-full md:w-64 md:flex-shrink-0 border-b md:border-b-0 md:border-r p-4">
      <div className="space-y-1">
        {tools.map((tool) => (
          <NavLink
            key={tool.path}
            to={tool.path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            <div className="font-medium">{tool.name}</div>
            <div className="text-xs text-gray-500">{tool.description}</div>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
