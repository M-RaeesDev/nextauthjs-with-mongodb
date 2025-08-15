"use client";
import Image from "next/image";
export default function ContinueGoogleBtn() {
  return (
    <button className="flex items-center gap-3 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-200">
      <div className="flex items-center justify-center bg-white p-2">
        <Image
          src="/google-logo.png"
          alt="Google"
          width={28}
          height={28}
          className="object-contain"
        />
      </div>

      <span className="bg-blue-500 text-white px-4 py-2 text-sm sm:text-base md:text-lg font-medium">
        Continue with Google
      </span>
    </button>
  );
}
