export default function Footer() {
  return (
    <footer className="bg-white shadow mt-8">
      <div className="container mx-auto px-4 py-4">
        <div className="text-center text-gray-600 text-sm">
          <p>
            © {new Date().getFullYear()} TinyTools Hub. All tools are free to
            use.
          </p>
        </div>
      </div>
    </footer>
  );
}
