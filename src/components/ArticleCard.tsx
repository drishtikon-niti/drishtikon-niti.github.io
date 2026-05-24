"use client";

import React from "react";
import Link from "next/link";
import { Article } from "@/data/articles";
import EditorialIllustration from "./EditorialIllustration";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <Link
        href={`/article/${article.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b border-black/10 dark:border-white/10"
      >
        {/* Featured Image Vector */}
        <div className="lg:col-span-7 overflow-hidden border border-black/10 dark:border-white/10 shadow-sm relative aspect-video w-full rounded">
          <EditorialIllustration
            categorySlug={article.categorySlug}
            className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-charcoal-900 dark:bg-cream-50 text-cream-50 dark:text-charcoal-900 text-[10px] font-sans font-black uppercase tracking-widest px-3 py-1.5 rounded shadow">
            {article.category}
          </div>
        </div>

        {/* Featured Copy */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            {/* Metadata */}
            <div className="flex items-center space-x-3 text-[11px] font-sans font-bold uppercase tracking-wider text-charcoal-800/60 dark:text-cream-100/60">
              <span>{article.author.name}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>

            {/* Headline */}
            <h3 className="font-serif text-2xl sm:text-3xl xl:text-4xl font-extrabold text-charcoal-900 dark:text-cream-50 leading-tight group-hover:text-accent-red dark:group-hover:text-red-500 transition-colors">
              {article.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm font-serif text-charcoal-800/80 dark:text-cream-100/80 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-sans font-black uppercase tracking-wider text-accent-red dark:text-red-500">
              Read Journal Entry
            </span>
            <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-charcoal-800/50 dark:text-cream-100/50">
              {article.readTime}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Standard Card Grid Layout
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group flex flex-col justify-between p-5 border border-black/10 dark:border-white/10 hover:border-black/35 dark:hover:border-white/35 bg-cream-50 dark:bg-charcoal-800/20 hover:shadow-md transition-all duration-300 rounded"
    >
      <div className="space-y-4">
        {/* SVG Illustration thumbnail */}
        <div className="overflow-hidden border border-black/5 dark:border-white/5 relative aspect-video w-full rounded">
          <EditorialIllustration
            categorySlug={article.categorySlug}
            className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 bg-cream-100 dark:bg-charcoal-800 border border-black/10 dark:border-white/10 text-charcoal-900 dark:text-cream-50 text-[9px] font-sans font-black uppercase tracking-widest px-2.5 py-1 rounded">
            {article.category}
          </span>
        </div>

        {/* Copy */}
        <div className="space-y-2">
          {/* Metadata */}
          <div className="flex items-center space-x-2 text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-800/50 dark:text-cream-100/50">
            <span>{article.author.name}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          {/* Headline */}
          <h4 className="font-serif text-lg sm:text-xl font-bold leading-snug text-charcoal-900 dark:text-cream-50 group-hover:text-accent-red dark:group-hover:text-red-500 transition-colors">
            {article.title}
          </h4>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm font-serif text-charcoal-800/70 dark:text-cream-100/70 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-4 mt-6">
        <span className="text-[10px] font-sans font-black uppercase tracking-wider text-accent-red dark:text-red-500">
          Open Story
        </span>
        <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-800/40 dark:text-cream-100/40">
          {article.readTime}
        </span>
      </div>
    </Link>
  );
}
