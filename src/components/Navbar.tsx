"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { CATEGORIES } from "@/data/articles";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [dateStr, setDateStr] = useState("");
  const [weatherStr, setWeatherStr] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const pathname = usePathname();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync mounting state to prevent Next.js hydration mismatches
  useEffect(() => {
    setIsMounted(true);

    // Format Date: e.g., "Saturday, May 23, 2026"
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setDateStr(new Date().toLocaleDateString("en-US", options));

    // Realistic weather variations
    const weatherOptions = [
      "New Delhi • 34°C • Hazy",
      "New Delhi • 32°C • Sunny",
      "New Delhi • 28°C • Thunderstorms",
      "New Delhi • 30°C • Breezy",
    ];
    setWeatherStr(weatherOptions[Math.floor(Math.random() * weatherOptions.length)]);

    // Handle scroll for sticky category bar
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus search input when modal opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [searchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleQuickTagClick = (tag: string) => {
    router.push(`/search?q=${encodeURIComponent(tag)}`);
    setSearchOpen(false);
  };

  const hotTags = ["CS", "Layoffs", "Bureaucracy", "ExistentialDread", "MentalHealth", "Finance", "Quantum"];

  // Secondary categories prepended with "Home"
  const navCategories = [
    { name: "Home", slug: "" },
    ...CATEGORIES
  ];

  // Editorial mega-dropdown items (simulate top analytical pieces)
  const megaDropdownData: Record<string, Array<{ title: string; link: string; author: string }>> = {
    "explained": [
      { title: "Understanding the Central Bank's Superposition Asset Balance Scheme", author: "Aravind Iyer", link: "/article/central-bank-wallet-exists-if-not-opened" },
      { title: "Why CS AI-ML Engineers spend 4 hours staring at corporate walls", author: "Kabir Mehta", link: "/article/emotional-emi-scheme-engineering-graduates" },
      { title: "How 1.5 million graduates defer existential crises using Emotional EMIs", author: "Shreya Sen", link: "/article/emotional-emi-scheme-engineering-graduates" }
    ],
    "editorial": [
      { title: "The Sublime Philosophy of the Infinite Scroll & Death of the Period", author: "Vikram Malhotra", link: "/article/philosophy-of-the-infinite-scroll" },
      { title: "Mitigating Linguistic Gaps: Why Biological Terminology is the Future", author: "Vikram Malhotra", link: "/article/i-support-cji-here-editorial" },
      { title: "The Tragedy of Modern Tech Layoffs: Carbon Endpoints vs Microservices", author: "Shreya Sen", link: "/article/vc-hallucinates-profitable-q3-terminates-humans" }
    ],
    "opinion": [
      { title: "Our Tools are Getting Smarter, and We are Getting Twitchier", author: "Kabir Mehta", link: "/article/ai-model-existential-dread-refuses-regex" },
      { title: "The Silent Tragedy of Finding Silence: Re-evaluating Urban Ego Alcovs", author: "Suresh Kumar", link: "/article/quiet-place-in-city-ruined-by-own-thoughts" },
      { title: "Skeptical Commentary: A Necessary Buffer in the Post-Labor Epoch", author: "Editorial Board", link: "/" }
    ]
  };

  return (
    <>
      <header className="w-full bg-cream-50 dark:bg-charcoal-900 border-b border-black/10 dark:border-white/10 transition-colors duration-300 relative z-40">

        {/* ================= TOP HEADER BANNER ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 border-b border-black/5 dark:border-white/5">
          <div className="grid grid-cols-3 items-center">

            {/* Top Left: Controls & Date/Weather */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 text-charcoal-900 dark:text-cream-50 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all"
                aria-label="Open side drawer"
              >
                <svg className="h-6 w-6 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-charcoal-900 dark:text-cream-50 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all"
                aria-label="Open Search"
              >
                <svg className="h-5 w-5 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Dynamic Date & Weather Widget */}
              <div className="hidden lg:flex flex-col text-[10px] uppercase font-sans font-black tracking-widest text-charcoal-800/60 dark:text-cream-100/60 border-l border-black/15 dark:border-white/15 pl-4 select-none">
                {isMounted ? (
                  <>
                    <span>{dateStr}</span>
                    <span className="text-accent-red dark:text-red-500 mt-0.5">{weatherStr}</span>
                  </>
                ) : (
                  <>
                    <span>Loading Dispatch...</span>
                    <span>Synchronizing Climate...</span>
                  </>
                )}
              </div>
            </div>

            {/* Top Center: Editorial Brand Logo */}
            <div className="flex flex-col items-center justify-center text-center">
              <Link href="/" className="group flex flex-col items-center select-none">
                <span className="text-3xl sm:text-4xl lg:text-5xl leading-none transition-all flex items-center">
                  <span className="font-cormorant font-bold tracking-[0.18em] text-charcoal-900 dark:text-cream-50">DRISHTI</span>
                  <span className="font-sans font-black tracking-[0.15em] text-accent-red dark:text-red-500">KON</span>
                </span>
                <span className="text-[10px] tracking-[0.3em] font-serif italic font-bold text-charcoal-800/60 dark:text-cream-100/60 mt-2.5 mr-[-0.3em] uppercase">
                  Perspective Since Yesterday
                </span>
              </Link>
            </div>

            {/* Top Right: Subscription, Sign In & Theme */}
            <div className="flex items-center justify-end space-x-3">
              {/* Premium Subscribe button */}
              <button
                onClick={() => alert("Thank you for choosing Drishtikon! Subscription portal registration is currently locked under high-command review.")}
                className="hidden sm:inline-flex items-center justify-center bg-charcoal-900 hover:bg-accent-red dark:bg-cream-100 dark:text-charcoal-900 dark:hover:bg-red-500 dark:hover:text-cream-50 text-cream-50 text-[10px] font-sans font-black uppercase tracking-wider px-5 py-2.5 rounded transition-all duration-300 shadow-sm border border-transparent dark:border-white/10 hover:scale-102 cursor-pointer"
              >
                Subscribe
              </button>

              <button
                onClick={() => alert("Editorial Profile Portal is restricted to credentialed correspondents only.")}
                className="p-2 text-charcoal-900 dark:text-cream-50 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all"
                aria-label="User profile"
              >
                <svg className="h-5 w-5 stroke-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Dark/Light mode toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-charcoal-900 dark:text-cream-50 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all"
                aria-label="Toggle Theme"
              >
                {theme === "light" ? (
                  <svg className="h-5 w-5 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* ================= SECONDARY CATEGORIES NAVIGATION BAR ================= */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:flex items-center justify-center space-x-1 lg:space-x-2 relative">
          {navCategories.map((category) => {
            const isHome = category.slug === "";
            const active = isHome ? pathname === "/" : pathname === `/${category.slug}`;
            const hasMegaDropdown = ["explained", "editorial", "opinion"].includes(category.slug);

            return (
              <div
                key={category.slug}
                className="relative group py-3"
                onMouseEnter={() => hasMegaDropdown && setHoveredCategory(category.slug)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <Link
                  href={isHome ? "/" : `/${category.slug}`}
                  className={`text-[10px] xl:text-[11px] uppercase font-sans font-black tracking-widest px-3.5 py-1.5 transition-all select-none hover:text-accent-red dark:hover:text-red-500 duration-150 flex items-center gap-1.5 relative ${active
                      ? "text-accent-red dark:text-red-500 font-extrabold"
                      : "text-charcoal-850 dark:text-cream-100/90"
                    }`}
                >
                  {category.name}
                  {hasMegaDropdown && (
                    <svg className="h-3 w-3 opacity-60 group-hover:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {/* Subtle active category underline */}
                  {active && (
                    <span className="absolute bottom-[-13px] left-3 right-3 h-[3px] bg-accent-red dark:bg-red-500 rounded-t" />
                  )}
                </Link>

                {/* ================= MEGA DROPDOWN POPUP ================= */}
                {hasMegaDropdown && hoveredCategory === category.slug && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[480px] bg-cream-50 dark:bg-charcoal-900 border border-black/10 dark:border-white/10 p-6 shadow-2xl rounded-md animate-fadeIn z-50 text-left">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-2">
                        <span className="text-[9px] font-sans font-black uppercase tracking-widest text-accent-red dark:text-red-500">
                          Inside the {category.name} Archives
                        </span>
                        <Link
                          href={`/${category.slug}`}
                          className="text-[9px] font-sans font-black uppercase tracking-widest text-charcoal-900 dark:text-cream-50 hover:underline"
                        >
                          View All
                        </Link>
                      </div>
                      <div className="divide-y divide-black/5 dark:divide-white/5 space-y-3">
                        {megaDropdownData[category.slug]?.map((item, index) => (
                          <Link
                            key={index}
                            href={item.link}
                            className="block pt-3 first:pt-0 group/item space-y-1"
                          >
                            <h4 className="font-serif text-xs font-bold text-charcoal-900 dark:text-cream-50 group-hover/item:text-accent-red dark:group-hover/item:text-red-500 transition-colors leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-[9px] font-sans font-bold uppercase tracking-wider text-charcoal-800/40 dark:text-cream-100/40">
                              By {item.author}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </header>

      {/* ================= STICKY HEADER NAVIGATION BAR (ON SCROLL) ================= */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-cream-50/95 dark:bg-charcoal-900/95 border-b border-black/10 dark:border-white/10 shadow-sm backdrop-blur-md transition-all duration-300 transform ${isSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          {/* Logo on Left */}
          <Link href="/" className="select-none flex items-center text-lg leading-none">
            <span className="font-cormorant font-bold tracking-[0.15em] text-charcoal-900 dark:text-cream-50">DRISHTI</span>
            <span className="font-sans font-black tracking-[0.12em] text-accent-red dark:text-red-500">KON</span>
          </Link>

          {/* Centered Scroll Navigation Categories */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navCategories.slice(0, 8).map((category) => {
              const isHome = category.slug === "";
              const active = isHome ? pathname === "/" : pathname === `/${category.slug}`;
              return (
                <Link
                  key={category.slug}
                  href={isHome ? "/" : `/${category.slug}`}
                  className={`text-[9px] xl:text-[10px] uppercase font-sans font-black tracking-widest px-3 py-1.5 transition-all select-none hover:text-accent-red dark:hover:text-red-500 duration-150 relative ${active
                      ? "text-accent-red dark:text-red-500 font-extrabold"
                      : "text-charcoal-850 dark:text-cream-100/90"
                    }`}
                >
                  {category.name}
                  {active && (
                    <span className="absolute bottom-[-13px] left-2 right-2 h-[2.5px] bg-accent-red dark:bg-red-500 rounded-t" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side widgets (Search, Menu, Subscribe) */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-1.5 text-charcoal-900 dark:text-cream-50 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all"
              aria-label="Open Search"
            >
              <svg className="h-4 w-4 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-charcoal-900 dark:text-cream-50 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all"
              aria-label="Open side drawer"
            >
              <svg className="h-5 w-5 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <button
              onClick={() => alert("Thank you for choosing Drishtikon! Subscription portal registration is currently locked under high-command review.")}
              className="bg-charcoal-900 hover:bg-accent-red dark:bg-cream-100 dark:text-charcoal-900 dark:hover:bg-red-500 dark:hover:text-cream-50 text-cream-50 text-[9px] font-sans font-black uppercase tracking-wider px-3.5 py-1.5 rounded transition-all duration-300 border border-transparent dark:border-white/10 cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>


      {/* ================= SEARCH OVERLAY MODAL ================= */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream-50/98 dark:bg-charcoal-900/98 backdrop-blur-xl animate-fadeIn p-4 overflow-y-auto">
          {/* Close button */}
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-6 right-6 p-3 text-charcoal-900 dark:text-cream-50 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all border border-black/10 dark:border-white/10"
            aria-label="Close search overlay"
          >
            <svg className="h-6 w-6 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="w-full max-w-3xl space-y-10 px-4">
            <div className="text-center space-y-2 select-none">
              <h2 className="font-serif text-3xl sm:text-4xl font-black tracking-wide text-charcoal-900 dark:text-cream-50 uppercase">
                Newspaper Archives Search
              </h2>
              <p className="text-xs font-serif italic text-charcoal-800/60 dark:text-cream-100/60">
                Retrieve historical investigations and satirical blueprints.
              </p>
            </div>

            {/* Large Search input */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Type topics, tags, or headlines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full font-serif text-xl sm:text-2xl border-b-2 border-charcoal-900 dark:border-cream-100 bg-transparent py-4 pr-12 focus:outline-none focus:border-accent-red dark:focus:border-red-500 transition-colors text-charcoal-900 dark:text-cream-50 placeholder-black/30 dark:placeholder-white/30"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-charcoal-900 hover:text-accent-red dark:text-cream-50 dark:hover:text-red-500 transition-colors"
                aria-label="Search"
              >
                <svg className="h-6 w-6 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Quick Suggestions / Hot Tags */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-sans font-black uppercase tracking-widest text-charcoal-850 dark:text-cream-100 border-b border-black/10 dark:border-white/10 pb-2">
                Hot Index Suggestions
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {hotTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleQuickTagClick(tag)}
                    className="px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 hover:border-accent-red dark:hover:border-red-500 hover:text-accent-red dark:hover:text-red-500 text-xs font-sans font-bold bg-black/[0.02] dark:bg-white/[0.02] transition-all cursor-pointer"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}


      {/* ================= FULL HEIGHT SLIDE-OUT DRAWER PANEL ================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-start">
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-charcoal-900/60 dark:bg-charcoal-900/80 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer content */}
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] bg-cream-50 dark:bg-charcoal-900 border-r border-black/15 dark:border-white/15 h-full z-10 shadow-2xl flex flex-col p-6 overflow-y-auto animate-slideRight">

            {/* Header section of Drawer */}
            <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4 mb-6">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="select-none flex items-center text-xl leading-none">
                <span className="font-cormorant font-bold tracking-[0.15em] text-charcoal-900 dark:text-cream-50">DRISHTI</span>
                <span className="font-sans font-black tracking-[0.12em] text-accent-red dark:text-red-500">KON</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all border border-black/10 dark:border-white/10 text-charcoal-900 dark:text-cream-50"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content Categories directory list */}
            <div className="flex-grow space-y-6">
              <div className="space-y-2">
                <span className="text-[9px] font-sans font-black uppercase tracking-widest text-accent-red dark:text-red-500">
                  Newspaper Sections
                </span>
                <div className="grid grid-cols-1 divide-y divide-black/5 dark:divide-white/5">
                  {navCategories.map((category) => {
                    const isHome = category.slug === "";
                    const active = isHome ? pathname === "/" : pathname === `/${category.slug}`;
                    return (
                      <Link
                        key={category.slug}
                        href={isHome ? "/" : `/${category.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-3 text-xs uppercase font-sans font-black tracking-widest transition-all ${active
                            ? "text-accent-red dark:text-red-500 pl-2 border-l-2 border-accent-red dark:border-red-500"
                            : "text-charcoal-850 dark:text-cream-100 hover:text-accent-red dark:hover:text-red-500 hover:pl-2"
                          }`}
                      >
                        {category.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Tagline block */}
              <div className="bg-cream-100 dark:bg-charcoal-800/10 border border-black/10 dark:border-white/10 p-4 rounded text-left space-y-2 select-none">
                <span className="text-[9px] font-sans font-black uppercase tracking-widest text-accent-red dark:text-red-500 block">
                  Editorial Dispatch
                </span>
                <p className="font-serif text-xs italic leading-relaxed text-charcoal-800/70 dark:text-cream-100/70">
                  Drishtikon documents human absurdity, automated complacency, and bureaucratic despair through intelligent long-form satirical journalism.
                </p>
              </div>
            </div>

            {/* Footer of Drawer (Subscribe & Socials) */}
            <div className="border-t border-black/10 dark:border-white/10 pt-5 space-y-4">
              <button
                onClick={() => alert("Thank you for choosing Drishtikon! Subscription portal registration is currently locked under high-command review.")}
                className="w-full bg-charcoal-900 hover:bg-accent-red dark:bg-cream-100 dark:text-charcoal-900 dark:hover:bg-red-500 dark:hover:text-cream-50 text-cream-50 text-[10px] font-sans font-black uppercase tracking-wider py-3.5 rounded transition-all duration-300 text-center shadow-sm cursor-pointer"
              >
                Join Reader Registry
              </button>

              <div className="flex justify-center space-x-6 py-2">
                {["t", "i", "l", "g"].map((char) => (
                  <span
                    key={char}
                    className="w-7 h-7 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-[10px] font-sans font-black uppercase text-charcoal-800/70 dark:text-cream-100/70 select-none hover:text-accent-red hover:border-accent-red"
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
