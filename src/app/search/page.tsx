"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreakingTicker from "@/components/BreakingTicker";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES, Article } from "@/data/articles";

const POPULAR_TAGS = ["AI", "Bureaucracy", "Economy", "MentalHealth", "GenZ", "VentureCapital"];

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Article[]>([]);

  useEffect(() => {
    setQuery(initialQuery);
    if (!initialQuery.trim()) {
      setResults(ARTICLES);
      return;
    }

    const lowerQuery = initialQuery.toLowerCase().trim();
    const filtered = ARTICLES.filter((article) => {
      const matchTitle = article.title.toLowerCase().includes(lowerQuery);
      const matchExcerpt = article.excerpt.toLowerCase().includes(lowerQuery);
      const matchCategory = article.category.toLowerCase().includes(lowerQuery);
      const matchTags = article.tags.some((t) => t.toLowerCase().includes(lowerQuery));
      return matchTitle || matchExcerpt || matchCategory || matchTags;
    });

    setResults(filtered);
  }, [initialQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const handleTagClick = (tag: string) => {
    setQuery(tag);
    router.push(`/search?q=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="space-y-8">
      {/* Search Bar Input */}
      <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex gap-3">
        <input
          type="text"
          placeholder="Filter the skepticism database..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-cream-100 dark:bg-charcoal-800 border border-black/10 dark:border-white/10 px-5 py-3.5 text-sm sm:text-base rounded font-sans focus:outline-none focus:border-accent-red dark:focus:border-red-500 transition-colors w-full"
        />
        <button
          type="submit"
          className="bg-charcoal-900 hover:bg-accent-red text-cream-50 dark:bg-cream-100 dark:text-charcoal-900 dark:hover:bg-red-500 dark:hover:text-cream-50 transition-all font-sans font-black text-xs uppercase tracking-widest px-8 rounded shadow cursor-pointer"
        >
          Search
        </button>
      </form>

      {/* Popular tags */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto pt-2">
        <span className="text-[10px] font-sans font-black uppercase tracking-wider text-charcoal-800/40 dark:text-cream-100/40 mr-1">
          Trending Tag filters:
        </span>
        {POPULAR_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-3 py-1.5 rounded-full text-xs font-sans font-bold border transition-colors ${
              initialQuery.toLowerCase() === tag.toLowerCase()
                ? "bg-accent-red text-cream-50 border-accent-red dark:bg-red-500 dark:border-red-500"
                : "border-black/10 dark:border-white/10 text-charcoal-800 hover:border-black/30 dark:text-cream-100 dark:hover:border-white/30"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Query Status */}
      <div className="border-b border-black/10 dark:border-white/10 pb-4 pt-10">
        <h2 className="font-serif text-2xl font-black text-charcoal-900 dark:text-cream-50">
          {initialQuery.trim() ? (
            <>
              Search Results for <span className="italic text-accent-red dark:text-red-500">“{initialQuery}”</span>
            </>
          ) : (
            "Complete Archive Catalog"
          )}
        </h2>
        <p className="text-xs font-sans font-bold uppercase tracking-wider text-charcoal-800/50 dark:text-cream-100/50 mt-1">
          Found {results.length} articles matching parameters
        </p>
      </div>

      {/* Results grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {results.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-black/15 dark:border-white/15 rounded space-y-4">
          <svg className="h-10 w-10 mx-auto text-charcoal-800/30 dark:text-cream-100/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-charcoal-900 dark:text-cream-50">
              Absence of Skepticism
            </h4>
            <p className="text-xs font-serif text-charcoal-800/60 dark:text-cream-100/60 max-w-md mx-auto">
              Our editorial team hasn't compiled any satirical commentaries on that precise query. Try searching for "AI", "EMI", "Capitalism" or "Valuation".
            </p>
          </div>
          <button
            onClick={() => {
              setQuery("");
              router.push("/search");
            }}
            className="text-xs font-sans font-black uppercase tracking-wider text-accent-red dark:text-red-500 hover:underline pt-2"
          >
            Clear Search filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <BreakingTicker />
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Suspense
          fallback={
            <div className="text-center py-20">
              <span className="h-8 w-8 animate-spin rounded-full border-4 border-accent-red border-t-transparent inline-block"></span>
              <p className="text-xs font-sans font-bold uppercase tracking-widest text-charcoal-800/50 dark:text-cream-100/50 mt-4">
                Accessing archives...
              </p>
            </div>
          }
        >
          <SearchContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
