"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons
import { useSession, signOut } from "next-auth/react";
import ContinueGoogleBtn from "./ContinueGoogle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Left: Logo / Title */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              NextAuth.js
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {session ? (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-4 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <div>
                <ContinueGoogleBtn/>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white shadow-lg">
          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="block w-full text-left px-4 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <ContinueGoogleBtn/>
          )}
        </div>
      )}
    </nav>
  );
}
