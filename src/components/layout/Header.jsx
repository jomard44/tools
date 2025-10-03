import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-900">
            TinyTools Hub
          </Link>
          <nav className="hidden md:block">
            <a
              href="https://github.com/jomard44/tools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
