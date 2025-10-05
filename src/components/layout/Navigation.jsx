import { NavLink } from "react-router-dom";

const tools = [
  {
    category: "Text & Code",
    items: [
      {
        name: "JSON Formatter",
        path: "/tools/json-formatter",
        description: "Format, validate, and beautify JSON",
        icon: "{ }",
      },
      {
        name: "Word Counter",
        path: "/tools/word-counter",
        description: "Count words, characters, and more",
        icon: "📝",
      },
      {
        name: "Markdown Previewer",
        path: "/tools/markdown-previewer",
        description: "Live markdown preview",
        icon: "📄",
      },
    ],
  },
  {
    category: "Converters",
    items: [
      {
        name: "Unit Converter",
        path: "/tools/unit-converter",
        description: "Convert between different units",
        icon: "↔️",
      },
      {
        name: "Base64 Tool",
        path: "/tools/base64",
        description: "Encode/decode Base64",
        icon: "🔄",
      },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      {
        name: "Regex Tester",
        path: "/tools/regex-tester",
        description: "Test regular expressions",
        icon: "🎯",
      },
      {
        name: "Color Picker",
        path: "/tools/color-picker",
        description: "Pick colors & convert formats",
        icon: "🎨",
      },
      {
        name: "Password Generator",
        path: "/tools/password-generator",
        description: "Generate secure passwords",
        icon: "🔒",
      },
    ],
  },
  {
    category: "Media",
    items: [
      {
        name: "Image Resizer",
        path: "/tools/image-resizer",
        description: "Resize images client-side",
        icon: "🖼️",
      },
    ],
  },
];

export default function Navigation() {
  return (
    <nav className="w-full md:w-72 md:flex-shrink-0 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 md:min-h-[calc(100vh-4rem)] transition-colors">
      <div className="space-y-6">
        {tools.map((category) => (
          <div key={category.category}>
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              {category.category}
            </h2>
            <div className="space-y-1">
              {category.items.map((tool) => (
                <NavLink
                  key={tool.path}
                  to={tool.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-sm transition-all ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`
                  }
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg" role="img" aria-label={tool.name}>
                      {tool.icon}
                    </span>
                    <div>
                      <div className="font-medium">{tool.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {tool.description}
                      </div>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
