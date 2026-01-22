"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-zinc-950 text-white p-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-white mb-4">404</h1>
        <p className="text-xl mb-8">There's Nothing Here</p>
        
        <Link href="/">
          <span className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors duration-300 inline-block">
            Kembali ke Beranda
          </span>
        </Link>
      </div>
    </div>
  );
}