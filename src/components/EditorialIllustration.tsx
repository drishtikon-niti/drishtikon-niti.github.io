"use client";

import React from "react";

interface IllustrationProps {
  categorySlug: string;
  className?: string;
}

export default function EditorialIllustration({
  categorySlug,
  className = "w-full h-full",
}: IllustrationProps) {
  // Render high-end custom SVGs resembling technical/editorial newspaper engravings
  switch (categorySlug) {
    case "politics":
      return (
        <svg className={`${className} bg-cream-100 dark:bg-charcoal-800 text-charcoal-900 dark:text-cream-50 transition-colors p-6`} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" rx="4" fill="none" />
          <path d="M20 100 H180" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Classical Greek/Bureaucratic Column Structures */}
          <path d="M40 99 V40 H60 V99" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
          <path d="M90 99 V25 H110 V99" stroke="currentColor" strokeWidth="1.5" />
          <path d="M140 99 V45 H160 V99" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Pediment triangle */}
          <path d="M80 25 L100 10 L120 25 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
          {/* Bureaucratic red-tape circular swirl */}
          <path d="M30 60 C 60 20, 140 20, 170 60 C 200 100, 0 100, 30 60" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 4" />
        </svg>
      );

    case "startup-circus":
      return (
        <svg className={`${className} bg-cream-100 dark:bg-charcoal-800 text-charcoal-900 dark:text-cream-50 transition-colors p-6`} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" rx="4" fill="none" />
          {/* The Unprofitable Upward Trend Line leading to a cliff */}
          <path d="M20 100 L60 80 L100 85 L140 40 L160 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="160" cy="90" r="4" fill="currentColor" />
          {/* Unicorn horn / cone outline */}
          <path d="M100 20 L85 60 H115 Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
          <line x1="100" y1="20" x2="100" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          {/* Quantum valuation loops */}
          <circle cx="100" cy="85" r="15" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
          <circle cx="100" cy="85" r="22" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      );

    case "campus-republic":
      return (
        <svg className={`${className} bg-cream-100 dark:bg-charcoal-800 text-charcoal-900 dark:text-cream-50 transition-colors p-6`} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" rx="4" fill="none" />
          {/* Mortarboard Academic Hat lineart */}
          <path d="M100 20 L160 40 L100 60 L40 40 Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
          <path d="M70 50 V75 C70 90, 130 90, 130 75 V50" stroke="currentColor" strokeWidth="1.5" />
          {/* Subway surfers screen split line */}
          <path d="M20 100 H180" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          {/* Dopamine wave */}
          <path d="M20 100 C 60 70, 100 110, 140 85 C 160 70, 170 85, 180 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "tech-panic":
      return (
        <svg className={`${className} bg-cream-100 dark:bg-charcoal-800 text-charcoal-900 dark:text-cream-50 transition-colors p-6`} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" rx="4" fill="none" />
          {/* Melting Computer Terminal Outline */}
          <rect x="50" y="20" width="100" height="60" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
          <path d="M70 80 L60 100 H140 L130 80" stroke="currentColor" strokeWidth="1.5" />
          {/* The melting organic grid lines */}
          <path d="M52 50 H148" stroke="currentColor" strokeWidth="1" />
          <path d="M60 20 V80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M100 20 V80" stroke="currentColor" strokeWidth="1.5" />
          <path d="M140 20 V80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          {/* Existential neural eye in center */}
          <circle cx="100" cy="50" r="10" fill="var(--background)" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="50" r="4" fill="currentColor" />
        </svg>
      );

    case "economy":
      return (
        <svg className={`${className} bg-cream-100 dark:bg-charcoal-800 text-charcoal-900 dark:text-cream-50 transition-colors p-6`} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" rx="4" fill="none" />
          {/* Classical unbalanced balance scales */}
          <path d="M100 25 V95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M100 95 H120 M100 95 H80" stroke="currentColor" strokeWidth="2" />
          {/* Balance beam tilted */}
          <path d="M60 40 L140 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="100" cy="35" r="4" stroke="currentColor" strokeWidth="1.5" />
          {/* Left hanging pan (higher - wealthy) */}
          <path d="M60 40 L50 70 H70 Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.2" />
          {/* Right hanging pan (lower - empty superposition) */}
          <path d="M140 50 L130 85 H150 Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.2" />
          {/* Quantum wallet waves */}
          <path d="M20 20 C 60 5, 140 5, 180 20" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
        </svg>
      );

    case "editorial":
      return (
        <svg className={`${className} bg-cream-100 dark:bg-charcoal-800 text-charcoal-900 dark:text-cream-50 transition-colors p-6`} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" rx="4" fill="none" />
          {/* Fountain pen nib engraving */}
          <path d="M100 20 L120 70 H80 Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100 70 V105" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Ink split line */}
          <line x1="100" y1="20" x2="100" y2="55" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="55" r="2.5" fill="currentColor" />
          {/* Infinite ink ring orbits */}
          <path d="M70 75 C 70 65, 130 65, 130 75 C 130 85, 70 85, 70 75 Z" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 2" />
        </svg>
      );

    default: // reality-check
      return (
        <svg className={`${className} bg-cream-100 dark:bg-charcoal-800 text-charcoal-900 dark:text-cream-50 transition-colors p-6`} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" rx="4" fill="none" />
          {/* Comparison Split Circle */}
          <circle cx="100" cy="60" r="35" stroke="currentColor" strokeWidth="1.5" />
          {/* Left shading (Real news - structured vertical lines) */}
          <mask id="left-circle-mask">
            <rect x="0" y="0" width="100" height="120" fill="white" />
          </mask>
          <g mask="url(#left-circle-mask)">
            <line x1="70" y1="25" x2="70" y2="95" stroke="currentColor" strokeWidth="0.8" />
            <line x1="75" y1="25" x2="75" y2="95" stroke="currentColor" strokeWidth="0.8" />
            <line x1="80" y1="25" x2="80" y2="95" stroke="currentColor" strokeWidth="0.8" />
            <line x1="85" y1="25" x2="85" y2="95" stroke="currentColor" strokeWidth="0.8" />
            <line x1="90" y1="25" x2="90" y2="95" stroke="currentColor" strokeWidth="0.8" />
            <line x1="95" y1="25" x2="95" y2="95" stroke="currentColor" strokeWidth="0.8" />
          </g>
          {/* Right side (Satire - fluid spiral lines or blank space) */}
          <path d="M100 25 C125 35, 125 85, 100 95" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Editorial horizontal dividing line */}
          <line x1="20" y1="60" x2="180" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      );
  }
}
