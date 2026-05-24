"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreakingTicker from "@/components/BreakingTicker";
import ArticleCard from "@/components/ArticleCard";
import TooRealSection from "@/components/TooRealSection";
import Newsletter from "@/components/Newsletter";
import EditorialIllustration from "@/components/EditorialIllustration";
import { ARTICLES, Article } from "@/data/articles";

export default function Home() {
  // Take the first article as the absolute Lead Hero Story
  const heroArticle = ARTICLES[0];
  
  // Trending articles (take next 3 trending ones)
  const trendingArticles = ARTICLES.filter((a) => a.isTrending && a.slug !== heroArticle.slug);
  
  // Editorial spotlight (filter articles with isEditorial === true)
  const editorialArticles = ARTICLES.filter((a) => a.isEditorial);

  // Other regular articles for grid & pagination
  const initialRegularArticles = ARTICLES.filter(
    (a) => a.slug !== heroArticle.slug && !editorialArticles.includes(a)
  );

  // Dynamic pagination state
  const [visibleCount, setVisibleCount] = useState(3);
  const paginatedArticles = initialRegularArticles.slice(0, visibleCount);
  const hasMore = visibleCount < initialRegularArticles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, initialRegularArticles.length));
  };

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      {/* Dynamic News Ticker */}
      <BreakingTicker />

      {/* Global Header */}
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* SECTION 1: HERO FRONT-PAGE SEGMENT */}
        <section className="border-b border-black/10 dark:border-white/10 pb-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Lead Story (Left Column - 8/12 grid span) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-sans font-bold uppercase tracking-wider text-accent-red dark:text-red-500">
                <span className="h-2 w-2 bg-accent-red dark:bg-red-500 rounded-full"></span>
                <span>Lead Investigation</span>
                <span>•</span>
                <span className="text-charcoal-800/60 dark:text-cream-100/60">{heroArticle.category}</span>
              </div>

              <Link href={`/article/${heroArticle.slug}`} className="group space-y-4 block">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 dark:text-cream-50 leading-tight group-hover:text-accent-red dark:group-hover:text-red-500 transition-colors">
                  {heroArticle.title}
                </h1>
                <p className="text-base sm:text-lg font-serif text-charcoal-800/80 dark:text-cream-100/80 leading-relaxed">
                  {heroArticle.excerpt}
                </p>
                
                {/* Hero Illustration */}
                <div className="overflow-hidden border border-black/10 dark:border-white/10 rounded aspect-video w-full relative shadow-sm">
                  <EditorialIllustration
                    categorySlug={heroArticle.categorySlug}
                    className="w-full h-full object-cover transform group-hover:scale-101 transition-transform duration-500"
                  />
                </div>
              </Link>

              {/* Author & Read details */}
              <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/5 text-xs font-sans font-bold uppercase tracking-wider text-charcoal-800/60 dark:text-cream-100/60">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-charcoal-900 dark:bg-cream-100 text-cream-50 dark:text-charcoal-900 flex items-center justify-center text-[10px] font-black">
                    {heroArticle.author.avatar}
                  </div>
                  <div>
                    <p className="text-charcoal-900 dark:text-cream-50 font-black">{heroArticle.author.name}</p>
                    <p className="text-[10px] text-charcoal-800/40 dark:text-cream-100/40 font-bold">{heroArticle.author.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p>{heroArticle.date}</p>
                  <p className="text-[10px] text-charcoal-800/40 dark:text-cream-100/40">{heroArticle.readTime}</p>
                </div>
              </div>
            </div>

            {/* Trending Column (Right Column - 4/12 grid span) */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-black/10 dark:border-white/10 pt-8 lg:pt-0 lg:pl-8 space-y-6">
              <h2 className="font-sans text-xs font-black uppercase tracking-widest text-charcoal-900 dark:text-cream-50 border-b border-black/10 dark:border-white/10 pb-3 flex items-center">
                <svg className="h-4 w-4 mr-1.5 text-accent-red dark:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Trending Dispatch
              </h2>

              <div className="divide-y divide-black/10 dark:divide-white/10 space-y-5">
                {trendingArticles.map((article, index) => (
                  <Link
                    key={article.slug}
                    href={`/article/${article.slug}`}
                    className="group block pt-5 first:pt-0 space-y-2.5"
                  >
                    <div className="flex items-center space-x-2 text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-800/50 dark:text-cream-100/50">
                      <span className="text-accent-red dark:text-red-500">0{index + 1}</span>
                      <span>•</span>
                      <span>{article.category}</span>
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold leading-snug text-charcoal-900 dark:text-cream-50 group-hover:text-accent-red dark:group-hover:text-red-500 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs font-serif text-charcoal-800/60 dark:text-cream-100/60 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Static mini-editorial quote card */}
              <div className="bg-cream-100 dark:bg-charcoal-800/10 border border-black/10 dark:border-white/10 p-5 rounded space-y-3 mt-6">
                <p className="font-serif text-xs italic leading-relaxed text-charcoal-800/70 dark:text-cream-100/70">
                  "Skeptical commentary is the final buffer between a highly automated society and terminal intellectual complacency. We document the friction."
                </p>
                <p className="text-[9px] font-sans font-black uppercase tracking-wider text-charcoal-900 dark:text-cream-50">
                  — The Editorial Board
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: TOO REAL TO BE SATIRE */}
        <TooRealSection />

        {/* SECTION 3: FEATURED INTELLECTUAL EDITORIALS */}
        <section className="py-16 border-b border-black/10 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-black/10 dark:border-white/10 pb-4 mb-12 gap-4">
            <div>
              <h2 className="font-serif text-3xl font-extrabold text-charcoal-900 dark:text-cream-50">
                Featured Editorials
              </h2>
              <p className="text-xs font-sans font-bold uppercase tracking-wider text-charcoal-800/50 dark:text-cream-100/50 mt-1">
                Deep prose on shallow modern conventions
              </p>
            </div>
            <Link
              href="/editorial"
              className="text-xs font-sans font-black uppercase tracking-wider text-accent-red dark:text-red-500 hover:underline flex items-center shrink-0"
            >
              Open Editorial Room
              <svg className="h-3.5 w-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {editorialArticles.map((article) => (
              <div
                key={article.slug}
                className="group border border-black/10 dark:border-white/10 p-6 sm:p-8 bg-cream-50 dark:bg-charcoal-800/20 rounded shadow-inner flex flex-col justify-between space-y-6 hover:border-black/35 dark:hover:border-white/35 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-800/50 dark:text-cream-100/50">
                    <span>{article.author.name}</span>
                    <span>{article.date}</span>
                  </div>

                  <Link href={`/article/${article.slug}`}>
                    <h3 className="font-serif text-xl sm:text-2xl font-black leading-tight text-charcoal-900 dark:text-cream-50 group-hover:text-accent-red dark:group-hover:text-red-500 transition-colors">
                      {article.title}
                    </h3>
                  </Link>

                  {/* Editorial style drop-cap sample */}
                  <p className="text-sm font-serif leading-relaxed text-charcoal-800/80 dark:text-cream-100/80 line-clamp-4">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-4">
                  <Link
                    href={`/article/${article.slug}`}
                    className="text-xs font-sans font-black uppercase tracking-wider text-accent-red dark:text-red-500 flex items-center"
                  >
                    Enter Long-Form Prose
                    <svg className="h-3 w-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-800/40 dark:text-cream-100/40">
                    {article.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: THE GENERAL CHRONICLE (PAGINATED GRID) */}
        <section className="py-16">
          <div className="border-b border-black/10 dark:border-white/10 pb-4 mb-8">
            <h2 className="font-serif text-3xl font-extrabold text-charcoal-900 dark:text-cream-50">
              The General Chronicle
            </h2>
            <p className="text-xs font-sans font-bold uppercase tracking-wider text-charcoal-800/50 dark:text-cream-100/50 mt-1">
              Complete catalog of societal skepticism
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {/* Pagination Trigger */}
          {hasMore && (
            <div className="flex justify-center pt-12">
              <button
                onClick={handleLoadMore}
                className="group border border-charcoal-900 dark:border-cream-100 hover:bg-charcoal-900 hover:text-cream-50 dark:hover:bg-cream-100 dark:hover:text-charcoal-900 px-8 py-3.5 text-xs font-sans font-black uppercase tracking-widest transition-all rounded shadow-sm hover:shadow flex items-center cursor-pointer"
              >
                Archive Retrieval
                <svg className="h-3.5 w-3.5 ml-2 transform group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </section>

        {/* SECTION 5: NEWSLETTER SUBSCRIPTION */}
        <Newsletter />

      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
