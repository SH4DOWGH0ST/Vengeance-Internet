import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/title.png"
        alt="Logo"
        className="h-10 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] hover:drop-shadow-[0_0_25px_rgba(236,72,153,1)] transition-all duration-300"
      />
    </div>
  );
}
