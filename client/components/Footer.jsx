export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Section 1 - Brand / About */}
        <div>
          <h2 className="text-xl font-bold text-indigo-600">NextAuth.js Guide</h2>
          <p className="mt-3 text-gray-600 text-sm">
            Built with ❤️ for developers who want to learn and implement
            <span className="font-medium text-indigo-600"> Google Login</span> 
            using NextAuth.js in the simplest way.
          </p>
        </div>

        {/* Section 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-700">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="/" className="text-gray-600 hover:text-indigo-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/login" className="text-gray-600 hover:text-indigo-600 transition">
                Login
              </a>
            </li>
            <li>
              <a href="/signup" className="text-gray-600 hover:text-indigo-600 transition">
                Signup
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3 - Social */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-700">Connect</h3>
          <p className="mt-3 text-gray-600 text-sm">
            Explore more projects and contribute on GitHub.
          </p>
          <a
            href="https://github.com/M-RaeesDev"
            target="_blank"
            className="inline-block mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NextAuth.js Guide. All rights reserved.
      </div>
    </footer>
  );
}
