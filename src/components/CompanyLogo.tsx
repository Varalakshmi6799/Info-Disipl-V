import React from 'react';

interface CompanyLogoProps {
  variant?: 'full' | 'emblem';
  theme?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = 'h-12 w-auto',
  showSubtitle = true
}) => {
  const isDark = theme === 'dark';

  if (variant === 'emblem') {
    return (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Deekshith Infra Solutions Emblem"
      >
        <defs>
          <linearGradient id="emblemStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFB326" />
            <stop offset="100%" stop-color="#F59E0B" />
          </linearGradient>
          <linearGradient id="emblemGoldArc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FBBF24" />
            <stop offset="100%" stop-color="#D97706" />
          </linearGradient>
        </defs>

        <g transform="translate(10, 4)">
          {/* Tilted Golden Star */}
          <path
            d="M 64 2 
               L 77 43 
               L 121 43 
               L 86 68 
               L 100 109 
               L 64 84 
               L 28 109 
               L 42 68 
               L 7 43 
               L 51 43 Z"
            fill="url(#emblemStarGrad)"
            transform="rotate(6, 64, 55)"
          />

          {/* Sweeping Outer Arc (Navy in light theme, Cyan/Sky Blue in dark theme) */}
          <path
            d="M 148 38
               C 95 36, 42 74, 18 124
               C 12 136, 10 150, 11 156
               C 15 156, 20 146, 26 132
               C 48 90, 100 58, 148 38 Z"
            fill={isDark ? '#60A5FA' : '#203056'}
          />

          {/* Sweeping Inner Arc (Golden Yellow) */}
          <path
            d="M 130 56
               C 88 56, 46 88, 28 128
               C 24 136, 21 146, 22 152
               C 25 152, 29 144, 34 132
               C 50 100, 90 74, 130 56 Z"
            fill="url(#emblemGoldArc)"
          />
        </g>
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Scalable SVG Emblem matching user's image */}
      <svg
        viewBox="0 0 170 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto shrink-0 aspect-[170/160]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFB326" />
            <stop offset="100%" stop-color="#F59E0B" />
          </linearGradient>
          <linearGradient id="logoGoldArc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FBBF24" />
            <stop offset="100%" stop-color="#D97706" />
          </linearGradient>
        </defs>

        <g transform="translate(4, 2)">
          {/* Tilted Golden Star */}
          <path
            d="M 64 2 
               L 77 43 
               L 121 43 
               L 86 68 
               L 100 109 
               L 64 84 
               L 28 109 
               L 42 68 
               L 7 43 
               L 51 43 Z"
            fill="url(#logoStarGrad)"
            transform="rotate(6, 64, 55)"
          />

          {/* Upper/Outer Arc */}
          <path
            d="M 166 36
               C 105 34, 46 74, 19 124
               C 12 136, 10 150, 11 156
               C 15 156, 20 146, 27 132
               C 52 88, 110 54, 166 36 Z"
            fill={isDark ? '#60A5FA' : '#203056'}
          />

          {/* Lower/Inner Golden Arc */}
          <path
            d="M 144 54
               C 96 54, 48 88, 28 128
               C 24 136, 21 146, 22 152
               C 25 152, 29 144, 35 132
               C 52 98, 98 72, 144 54 Z"
            fill="url(#logoGoldArc)"
          />
        </g>
      </svg>

      {/* Corporate Typographic Wordmark from the Logo */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-heading font-black tracking-tight uppercase text-sm sm:text-base md:text-lg ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
          style={{ letterSpacing: '-0.025em' }}
        >
          DEEKSHITH INFRA SOLUTIONS
        </span>
        {showSubtitle && (
          <span
            className={`font-heading font-extrabold uppercase tracking-wide text-[10px] sm:text-xs md:text-xs mt-0.5 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
            style={{ letterSpacing: '0.04em' }}
          >
            INDIA PRIVATE LIMITED
          </span>
        )}
      </div>
    </div>
  );
};
