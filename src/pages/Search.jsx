import React from 'react';
import SearchContainer from '../components/SearchContainer';
import Navbar from '../layouts/Nav'; // Adjust if your navigation layout path is different

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-3xl text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Web Search & Proxy</h1>
          <p className="text-gray-400">Browse securely and privately using your custom search setup.</p>
        </div>

        {/* The Search Container Component */}
        <SearchContainer />
      </main>
    </div>
  );
}
