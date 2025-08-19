"use client";
import Image from "next/image";
import { signIn} from "next-auth/react";

export default function ContinueGoogleBtn() {


  return (

    <button 
  onClick={() => signIn("google",{ callbackUrl: "/" })} 
  className="flex items-center gap-3 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-200"
>
  <div className="flex items-center justify-center bg-white">
    <Image 
      src="/google-logo.png" 
      alt="Google" 
      width={28} 
      height={28} 
      className="object-contain"
    />
  </div>

  <span className="bg-blue-500 text-white p-1 text-sm sm:text-base md:text-lg font-medium">
    Continue with Google
  </span>
</button>

  )
}