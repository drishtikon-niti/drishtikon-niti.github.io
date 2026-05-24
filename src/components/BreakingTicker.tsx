"use client";

import React from "react";
import { BREAKING_NEWS } from "@/data/articles";

export default function BreakingTicker() {
  // Duplicate the headlines to ensure continuous seamless scrolling
  const scrollHeadlines = [...BREAKING_NEWS, ...BREAKING_NEWS];

  return (
    <div className="w-full bg-accent-red text-cream-50 dark:bg-cream-100 dark:text-charcoal-900 border-y border-black/10 dark:border-white/10 h-10 flex items-center overflow-hidden relative z-40 transition-colors duration-300">
      {/* Live Badge */}
      <div className="absolute left-0 top-0 bottom-0 bg-charcoal-900 dark:bg-accent-red text-cream-50 font-sans text-[10px] font-black uppercase tracking-wider px-4 flex items-center z-10 border-r border-black/20 shadow-md">
        <span className="h-2 w-2 bg-red-500 dark:bg-cream-50 rounded-full mr-2 animate-pulse"></span>
        Live Dispatch
      </div>

      {/* Marquee Wrapper */}
      <div className="flex h-full items-center whitespace-nowrap overflow-hidden pl-[110px]">
        <div className="flex space-x-12 animate-ticker hover:[animation-play-state:paused] cursor-pointer">
          {scrollHeadlines.map((headline, idx) => (
            <span
              key={idx}
              className="text-xs sm:text-sm font-sans font-semibold tracking-wide flex items-center shrink-0"
            >
              <span className="text-cream-50/50 dark:text-charcoal-900/40 mx-3 select-none">✦</span>
              {headline}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
