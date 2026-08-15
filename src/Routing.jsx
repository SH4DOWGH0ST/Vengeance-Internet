import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './pages/Search';
import Apps from './pages/Apps';
import Settings from './pages/Settings';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
