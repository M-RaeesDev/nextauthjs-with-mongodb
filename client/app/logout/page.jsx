"use client";
import ContinueGoogleBtn from "@/components/ContinueGoogle";
import { useState } from "react";

export default function SignupPage() {
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);

  const handleSignup = () => {
    e.preventDefault();
    // UI only — no logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-indigo-700">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Join us to continue with your journey
          </p>
        </div>

       <div className="flex items-center justify-center h-full"><ContinueGoogleBtn/></div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Muhammad Raees"
              className="w-full px-4 py-2.5 text-gray-500 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 text-gray-500 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-500 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 text-gray-500 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-indigo-600 hover:underline"
                aria-label="Toggle password visibility"
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Use at least 8 characters with a mix of letters & numbers.
            </p>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-3 text-sm ">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded text-indigo-600 border-gray-300"
              required
            />
            <span className="text-indigo-600  hover:underline">
              I agree to the{" "}
              <a href="/terms" className="text-indigo-600  hover:underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-indigo-600 hover:underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-lg"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
