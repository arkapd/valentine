import React from 'react';

export const WhitePanda = () => (
  <svg width="128" height="128" viewBox="0 0 100 100" className="panda-svg">
    {/* Body */}
    <circle cx="50" cy="50" r="40" fill="#FFFFFF" />
    
    {/* Ears */}
    <circle cx="25" cy="25" r="12" fill="#4A3728" />
    <circle cx="75" cy="25" r="12" fill="#4A3728" />
    
    {/* Face */}
    <circle cx="35" cy="45" r="5" fill="#4A3728" className="eye" />
    <circle cx="65" cy="45" r="5" fill="#4A3728" className="eye" />
    
    {/* Cheeks */}
    <circle cx="30" cy="55" r="8" fill="#FFB7B7" className="cheek" />
    <circle cx="70" cy="55" r="8" fill="#FFB7B7" className="cheek" />
    
    {/* Mouth */}
    <path d="M45 58 Q50 65 55 58" stroke="#4A3728" strokeWidth="2" fill="none" />
  </svg>
);