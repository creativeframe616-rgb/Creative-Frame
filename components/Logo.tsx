import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      fill="none" 
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan */}
          <stop offset="50%" stopColor="#3b82f6" /> {/* Blue */}
          <stop offset="100%" stopColor="#d946ef" /> {/* Fuchsia */}
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#glow)">
        {/* The 'C' Frame - Stylized open hexagon/box */}
        <path 
          d="M 80 30 L 70 20 H 30 L 20 30 V 70 L 30 80 H 70 L 80 70" 
          stroke="url(#logoGradient)" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* The 'F' - Sleek lines inside */}
        <path 
          d="M 40 35 V 65" 
          stroke="white" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
        <path 
          d="M 40 35 H 65" 
          stroke="white" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
        <path 
          d="M 40 50 H 60" 
          stroke="white" 
          strokeWidth="6" 
          strokeLinecap="round"
        />

        {/* Cinematic Record Dot */}
        <circle cx="75" cy="75" r="4" fill="#ef4444" className="animate-pulse" />
      </g>
    </svg>
  );
};

export default Logo;