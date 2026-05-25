"use client";

import React from "react";
import Link from "next/link";
import { ARTICLES } from "@/data/articles";

export default function TooRealSection() {
  // Filter and sort articles that contain comparison data (newest first)
  const comparisonArticles = ARTICLES
    .filter((a) => a.tooReal !== undefined)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="w-full py-16 border-b border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-accent-red text-cream-50 dark:bg-cream-100 dark:text-charcoal-900 text-[10px] font-sans font-black uppercase tracking-widest px-3 py-1.5 rounded">
            The Reality Contrast
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal-900 dark:text-cream-50 leading-tight">
            Too Real To Be Satire
          </h2>
          <p className="text-sm font-serif text-charcoal-800/70 dark:text-cream-100/70 leading-relaxed">
            Comparing the sober, mechanical reporting of mainstream media against the terrifying accuracy of our editorial projections.
          </p>
        </div>

        {/* Comparison List */}
        <div className="space-y-12">
          {comparisonArticles.map((article, idx) => {
            const data = article.tooReal!;
            return (
              <div
                key={article.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-black/10 dark:border-white/10 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Left Side: Cold Hard Reality */}
                <div className="lg:col-span-6 bg-black/[0.03] dark:bg-white/[0.02] p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10 flex flex-col justify-between space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-black/10 dark:bg-white/10 text-charcoal-800 dark:text-cream-100 text-[9px] font-sans font-black uppercase tracking-widest px-2.5 py-1 rounded">
                        Factual Reportage
                      </span>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-800/40 dark:text-cream-100/40">
                        {data.realDate}
                      </span>
                    </div>

                    <h4 className="font-sans text-lg sm:text-xl font-bold leading-relaxed text-charcoal-800/80 dark:text-cream-100/80">
                      “{data.realHeadline}”
                    </h4>
                  </div>

                  <div className="flex items-center space-x-2 text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-800/40 dark:text-cream-100/40">
                    <span>Source:</span>
                    <span className="italic underline text-charcoal-900 dark:text-cream-50">
                      {data.realSource}
                    </span>
                  </div>
                </div>

                {/* Right Side: Our Editorial Satire */}
                <div className="lg:col-span-6 bg-cream-50 dark:bg-charcoal-800/10 p-8 sm:p-10 flex flex-col justify-between space-y-8 group hover:bg-cream-100/30 dark:hover:bg-charcoal-800/20 transition-colors duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-accent-red/10 text-accent-red dark:bg-red-500/10 dark:text-red-500 text-[9px] font-sans font-black uppercase tracking-widest px-2.5 py-1 rounded">
                        Our Perspective
                      </span>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-800/40 dark:text-cream-100/40">
                        {article.date}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl font-black leading-snug text-charcoal-900 dark:text-cream-50 group-hover:text-accent-red dark:group-hover:text-red-500 transition-colors">
                      “{data.satireHeadline}”
                    </h4>

                    <p className="text-xs sm:text-sm font-serif text-charcoal-800/70 dark:text-cream-100/70 leading-relaxed">
                      {data.satireExcerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Link
                      href={`/article/${data.satireSlug}`}
                      className="text-xs font-sans font-black uppercase tracking-wider text-accent-red dark:text-red-500 group-hover:underline flex items-center"
                    >
                      Read Full Investigation
                      <svg className="h-3 w-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-800/40 dark:text-cream-100/40">
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
