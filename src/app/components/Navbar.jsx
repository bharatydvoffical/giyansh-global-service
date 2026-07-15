"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white text-slate-900 shadow-md dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-4 max-w-7xl px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-900 dark:text-blue-300">
          GIYANSH
          <span className="block text-sm font-medium text-slate-600 dark:text-slate-400">
            GLOBAL SERVICES
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center gap-4 md:gap-8">
          <a href="#about" className="text-slate-900 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-300">
            About
          </a>
          <a href="#program" className="text-slate-900 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-300">
            Program
          </a>
          <a href="#benefits" className="text-slate-900 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-300">
            Benefits
          </a>
          <a href="#contact" className="text-slate-900 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-300">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="https://wa.me/917877349895"
          className="rounded-lg bg-blue-700 px-5 py-2 text-white transition hover:bg-blue-800"
        >
          Enroll Now
        </a>
      </div>
    </header>
  );
}