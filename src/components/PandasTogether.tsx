import React from 'react';

export const PandasTogether = () => (
  <svg width="192" height="128" viewBox="0 0 150 100" className="pandas-together">
    {/* Brown Panda */}
    <g transform="translate(0, 0)">
      <circle cx="50" cy="50" r="40" fill="#B08968" />
      <circle cx="25" cy="25" r="12" fill="#8B6B4D" />
      <circle cx="75" cy="25" r="12" fill="#8B6B4D" />
      <circle cx="35" cy="45" r="5" fill="#4A3728" />
      <circle cx="65" cy="45" r="5" fill="#4A3728" />
      <circle cx="30" cy="55" r="8" fill="#D4A98C" />
      <circle cx="70" cy="55" r="8" fill="#D4A98C" />
      <path d="M45 60 Q50 65 55 60" stroke="#4A3728" strokeWidth="2" fill="none" />
    </g>
    
    {/* Heart */}
    <path
      d="M75 40 C75 30 85 20 95 20 C105 20 115 30 115 40 C115 50 95 60 75 80 C55 60 35 50 35 40 C35 30 45 20 55 20 C65 20 75 30 75 40"
      fill="#FF6B6B"
      className="heart"
    />
    
    {/* White Panda */}
    <g transform="translate(50, 0)">
      <circle cx="50" cy="50" r="40" fill="#FFFFFF" />
      <circle cx="25" cy="25" r="12" fill="#4A3728" />
      <circle cx="75" cy="25" r="12" fill="#4A3728" />
      <circle cx="35" cy="45" r="5" fill="#4A3728" />
      <circle cx="65" cy="45" r="5" fill="#4A3728" />
      <circle cx="30" cy="55" r="8" fill="#FFB7B7" />
      <circle cx="70" cy="55" r="8" fill="#FFB7B7" />
      <path d="M45 58 Q50 65 55 58" stroke="#4A3728" strokeWidth="2" fill="none" />
    </g>
  </svg>
);