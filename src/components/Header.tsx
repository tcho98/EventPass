"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">
          EventPass
        </a>

        <div className="hidden lg:flex space-x-6">
          <a href="/" className="text-gray-300 hover:text-purple-400">
            Home
          </a>
          <a href="/add" className="text-gray-300 hover:text-purple-400">
            Add Issue
          </a>
          <a href="/saved" className="text-gray-300 hover:text-purple-400">
            Saved Issue
          </a>
          <a href="/about" className="text-gray-300 hover:text-purple-400">
            About
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="/dashboard"
            className="border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-gray-900"
          >
            Dashboard
          </a>
          <a
            href="/guest"
            className="border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-gray-900"
          >
            Log out
          </a>
        </div>

        <button
          id="mobile-menu-toggle"
          className="lg:hidden focus:outline-none"
        ></button>
      </nav>

      <div id="mobile-menu" className="lg:hidden hidden px-4 pb-4 space-y-2">
        <a href="/" className="block text-gray-300 hover:text-purple-400">
          Home
        </a>
        <a href="/add" className="block text-gray-300 hover:text-purple-400">
          Add Issue
        </a>
        <a href="/saved" className="block text-gray-300 hover:text-purple-400">
          Saved Issue
        </a>
        <a href="/about" className="block text-gray-300 hover:text-purple-400">
          About
        </a>
        <a
          href="/"
          className="block text-sm mt-2 border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-900"
        >
          Dashboard
        </a>
        <a
          href="/guest"
          className="block text-sm border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-900"
        >
          Log out
        </a>
      </div>
    </header>
  );
};

export default Header;
