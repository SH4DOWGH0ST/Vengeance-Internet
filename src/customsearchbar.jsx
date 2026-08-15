import React, { useState } from 'react';

export default function CustomSearchBar() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    // We will add the search/navigation logic in the next step
    console.log('Searching for:', query);
  };

  return (
    <div className="search-container flex justify-center items-center w-full my-4">
      <form onSubmit={handleSubmit} className="w-full max-w-xl flex items-center bg-gray-800 rounded-lg p-2 shadow-md">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search or enter a URL..."
          className="w-full bg-transparent px-4 py-2 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
}
