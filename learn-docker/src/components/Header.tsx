'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-rose-900 text-rose-100 shadow-md border-b border-rose-200">
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        <Link href="/Guide" className="text-xl font-semibold tracking-tight text-rose-200">
          DockIt
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-sm sm:text-base font-medium items-center">
          <Link href="/" className="hover:underline hover:text-rose-700 transition">
            Know more
          </Link>
        </nav>
      </div>
    </header>
  );
}
