import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Starfield from '../components/Starfield';

export default function Nav() {
  return (
    <>
      {/* Animated Neon Starfield Background */}
      <Starfield />

      {/* Navigation Bar Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between bg-transparent backdrop-blur-sm border-b border-purple-900/30">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Right side navigation links are cleaned up as requested */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-gray-300 hover:text-purple-400 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/search"
            className="text-gray-300 hover:text-purple-400 font-medium transition-colors"
          >
            Search
          </Link>
        </div>
      </header>
    </>
  );
}
