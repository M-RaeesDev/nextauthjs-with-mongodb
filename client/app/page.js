import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-100 text-gray-800">
      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-center flex-grow p-8">
        {/* Left Content */}
        <div className="max-w-lg space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 leading-tight">
            👋 Welcome, Developer!
          </h2>
          <p className="text-gray-600 text-lg">
            Want to learn how to integrate{" "}
            <span className="font-semibold text-indigo-600">Google Login</span>
            with{" "}
            <span className="font-semibold text-indigo-600">NextAuth.js</span>?
            Login now and get step-by-step guidance with easy-to-follow
            examples.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/login"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-lg"
            >
              Login to Learn
            </a>
            <a
              href="/logout"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
            >
              Create Account
            </a>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="mt-10 md:mt-0 md:ml-16">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
            alt="Google Login Illustration"
            className="w-72 md:w-96 drop-shadow-lg"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-4 text-gray-500 text-sm shadow-inner">
        © {new Date().getFullYear()} NextAuth.js Guide. Built with ❤️ for
        developers.
      </footer>
    </div>
  );
}
