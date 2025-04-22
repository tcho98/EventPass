"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          EventPass
        </Link>

        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-purple-400">
            Home
          </Link>
          <Link href="/add" className="text-gray-300 hover:text-purple-400">
            Add Issue
          </Link>
          <Link href="/saved" className="text-gray-300 hover:text-purple-400">
            Saved Issue
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-purple-400">
            About
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-gray-900"
          >
            Dashboard
          </Link>
          <Link
            href="/guest"
            className="border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-gray-900"
          >
            Log out
          </Link>
        </div>

        <button
          id="mobile-menu-toggle"
          className="lg:hidden focus:outline-none"
        ></button>
      </nav>

      <div id="mobile-menu" className="lg:hidden hidden px-4 pb-4 space-y-2">
        <Link href="/" className="block text-gray-300 hover:text-purple-400">
          Home
        </Link>
        <Link href="/add" className="block text-gray-300 hover:text-purple-400">
          Add Issue
        </Link>
        <Link
          href="/saved"
          className="block text-gray-300 hover:text-purple-400"
        >
          Saved Issue
        </Link>
        <Link
          href="/about"
          className="block text-gray-300 hover:text-purple-400"
        >
          About
        </Link>
        <Link
          href="/"
          className="block text-sm mt-2 border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-900"
        >
          Dashboard
        </Link>
        <Link
          href="/guest"
          className="block text-sm border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-900"
        >
          Log out
        </Link>
      </div>
    </header>
  );
};

export default Header;
