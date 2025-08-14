import React from 'react'

export default function Guest() {
   return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-center flex-grow p-8">
        {/* Left Content */}
        <div className="max-w-lg space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 leading-tight">
            Welcome to Your  
            <span className="text-indigo-500"> NextAuth.js </span>  
            Google Login Guide
          </h2>
          <p className="text-gray-600 text-lg">
            This page shows you how to integrate Google Login with NextAuth.js in a clean and simple way.  
            Follow the steps below to connect your app with Google authentication.
          </p>

          {/* Step-by-Step Guide */}
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-indigo-600">1. Install NextAuth.js</h3>
              <p className="text-gray-600 text-sm">Run <code className="bg-gray-100 px-1 rounded">npm install next-auth</code></p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-indigo-600">2. Setup API Route</h3>
              <p className="text-gray-600 text-sm">Create <code className="bg-gray-100 px-1 rounded">/pages/api/auth/[...nextauth].ts</code> and configure the Google provider.</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-indigo-600">3. Add Google Credentials</h3>
              <p className="text-gray-600 text-sm">Get <strong>Client ID</strong> & <strong>Client Secret</strong> from Google Cloud Console and add them to <code className="bg-gray-100 px-1 rounded">.env.local</code>.</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-indigo-600">4. Use signIn("google")</h3>
              <p className="text-gray-600 text-sm">Call <code className="bg-gray-100 px-1 rounded">signIn("google")</code> in your login button to trigger Google login.</p>
            </div>
          </div>

          {/* Placeholder Button */}
          <button className="mt-6 w-full md:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-lg">
            Continue with Google
          </button>
        </div>

        {/* Right Image */}
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
        © {new Date().getFullYear()} My Next.js App. Built with ❤️ for developers.
      </footer>
    </div>
  );
}
