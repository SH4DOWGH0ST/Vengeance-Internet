import React, { useState } from 'react';

export default function SearchContainer() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Check if the input is a URL or a search query
    let url = query.trim();
    const isUrl = /^(https?:\/\/)?([\w.-]+)+(\/[^\s]*)?$/i.test(url) && url.includes('.');

    if (!isUrl) {
      // Default search engine (e.g., Google)
      url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    // Navigate or load via ultraviolet/proxy config if available, or fallback to direct navigation
    // Using standard encoded search or proxy routing hook from the project if applicable:
    console.log('Navigating to:', url);
    window.location.href = url;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-8">
      <div className="w-full max-w-2xl bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-800">
        <h2 className="text-xl font-bold text-white mb-4 text-center">Custom Search</h2>
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search the web or type a URL..."
            className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-blue-600/20"
          >
            Go
          </button>
        </form>
      </div>
    </div>
  );
}
