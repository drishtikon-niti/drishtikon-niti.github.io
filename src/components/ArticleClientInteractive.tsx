"use client";

import React, { useState, useEffect } from "react";

interface InteractiveProps {
  title: string;
  slug: string;
}

export default function ArticleClientInteractive({ title, slug }: InteractiveProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}/article/${slug}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleShareTwitter = () => {
    const fullUrl = `${window.location.origin}/article/${slug}`;
    const text = encodeURIComponent(`“${title}” — Drishtikon Satire:`);
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${text}`, "_blank");
  };

  const handleShareLinkedIn = () => {
    const fullUrl = `${window.location.origin}/article/${slug}`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`, "_blank");
  };

  return (
    <>
      {/* 1. Sticky Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/5 dark:bg-white/5 z-55">
        <div
          className="h-full bg-accent-red dark:bg-red-500 transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Interactive Social Share Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-black/10 dark:border-white/10 mt-10">
        <span className="text-[10px] font-sans font-black uppercase tracking-wider text-charcoal-800/40 dark:text-cream-100/40 mr-2">
          Share Perspective:
        </span>
        
        {/* Copy Link Button */}
        <button
          onClick={handleCopyLink}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-sans font-bold border transition-colors cursor-pointer ${
            copied
              ? "bg-green-500/10 border-green-500 text-green-600 dark:text-green-400"
              : "border-black/10 dark:border-white/10 text-charcoal-800 hover:border-black/30 dark:text-cream-100 dark:hover:border-white/30"
          }`}
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          {copied ? "Link Copied!" : "Copy Link"}
        </button>

        {/* Twitter Share */}
        <button
          onClick={handleShareTwitter}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-sans font-bold border border-black/10 dark:border-white/10 text-charcoal-800 hover:border-black/30 dark:text-cream-100 dark:hover:border-white/30 cursor-pointer"
        >
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Share on X
        </button>

        {/* LinkedIn Share */}
        <button
          onClick={handleShareLinkedIn}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-sans font-bold border border-black/10 dark:border-white/10 text-charcoal-800 hover:border-black/30 dark:text-cream-100 dark:hover:border-white/30 cursor-pointer"
        >
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Share
        </button>
      </div>
    </>
  );
}
