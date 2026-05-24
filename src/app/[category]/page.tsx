import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreakingTicker from "@/components/BreakingTicker";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES, CATEGORIES } from "@/data/articles";
import Link from "next/link";

interface PageProps {
  params: Promise<{ category: string }>;
}

// Generate dynamic SEO metadata based on category
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${category.name} | Drishtikon Satirical Archives`,
    description: `${category.description} Read modern editorial satire and commentary on Drishtikon.`,
    alternates: {
      canonical: `/${categorySlug}`,
    },
  };
}

// Pre-render static paths for categories (extremely fast performance)
export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({
    category: c.slug,
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  
  // Find current category configuration
  const currentCategory = CATEGORIES.find((c) => c.slug === categorySlug);
  if (!currentCategory) {
    notFound();
  }

  // Filter articles belonging to this category
  const categoryArticles = ARTICLES.filter((a) => a.categorySlug === categorySlug);

  // Lead Featured article in this category
  const featuredArticle = categoryArticles[0];

  // Rest of the articles in this category for grid
  const gridArticles = categoryArticles.slice(1);

  // Global trending stories for sidebar
  const trendingArticles = ARTICLES.filter((a) => a.isTrending && a.slug !== featuredArticle?.slug).slice(0, 3);

  // Extract all unique tags in this category for filters
  const categoryTags = Array.from(new Set(categoryArticles.flatMap((a) => a.tags)));

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <BreakingTicker />
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Category Header Banner */}
        <div className="border-b-4 border-charcoal-900 dark:border-cream-100 pb-6 mb-10 text-left">
          <div className="text-xs font-sans font-black uppercase tracking-widest text-accent-red dark:text-red-500 mb-1">
            Satirical Dispatch
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-black text-charcoal-900 dark:text-cream-50 leading-none capitalize">
            {currentCategory.name}
          </h1>
          <p className="text-sm sm:text-base font-serif text-charcoal-800/70 dark:text-cream-100/70 mt-3 max-w-2xl leading-relaxed">
            {currentCategory.description}
          </p>
        </div>

        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Primary content area: Featured article and grid list (Left 8 Columns) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Featured article layout */}
              {featuredArticle && (
                <div className="border-b border-black/10 dark:border-white/10 pb-10">
                  <ArticleCard article={featuredArticle} featured={true} />
                </div>
              )}

              {/* Supplementary grid */}
              {gridArticles.length > 0 ? (
                <div className="space-y-6">
                  <h3 className="font-sans text-xs font-black uppercase tracking-wider text-charcoal-800/40 dark:text-cream-100/40 border-b border-black/5 dark:border-white/5 pb-2 mb-6">
                    Supplementary Chronicles
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {gridArticles.map((article) => (
                      <ArticleCard key={article.slug} article={article} />
                    ))}
                  </div>
                </div>
              ) : (
                featuredArticle && (
                  <div className="p-8 bg-cream-100 dark:bg-charcoal-800/20 text-center font-serif text-xs italic text-charcoal-800/60 dark:text-cream-100/60 border border-black/10 dark:border-white/10 rounded">
                    "This sector currently holds a single investigative report. Further updates are pending bureau clearance."
                  </div>
                )
              )}
            </div>

            {/* Sidebar Column: Tags, Trending Articles (Right 4 Columns) */}
            <aside className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-black/10 dark:border-white/10 pt-8 lg:pt-0 lg:pl-8 space-y-8">
              
              {/* Category tags */}
              {categoryTags.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-sans text-xs font-black uppercase tracking-wider text-charcoal-900 dark:text-cream-50 border-b border-black/10 dark:border-white/10 pb-2">
                    Topic Filter Indices
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categoryTags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/search?q=${encodeURIComponent(tag)}`}
                        className="px-2.5 py-1 bg-black/[0.04] dark:bg-white/[0.04] hover:bg-accent-red/10 hover:text-accent-red dark:hover:bg-red-500/10 dark:hover:text-red-500 rounded border border-black/5 dark:border-white/5 text-[11px] font-sans font-bold text-charcoal-850 dark:text-cream-100 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Trending Stories panel */}
              <div className="space-y-5">
                <h3 className="font-sans text-xs font-black uppercase tracking-wider text-charcoal-900 dark:text-cream-50 border-b border-black/10 dark:border-white/10 pb-2 flex items-center">
                  <svg className="h-4 w-4 mr-1.5 text-accent-red dark:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Trending updates
                </h3>
                <div className="divide-y divide-black/10 dark:divide-white/10 space-y-4">
                  {trendingArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/article/${article.slug}`}
                      className="group block pt-4 first:pt-0 space-y-1.5"
                    >
                      <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-accent-red dark:text-red-500">
                        {article.category}
                      </span>
                      <h4 className="font-serif text-sm font-bold leading-snug text-charcoal-900 dark:text-cream-50 group-hover:text-accent-red dark:group-hover:text-red-500 transition-colors">
                        {article.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Independent Satire Disclaimer box */}
              <div className="bg-cream-100 dark:bg-charcoal-800/10 border border-black/10 dark:border-white/10 p-5 rounded space-y-3">
                <h4 className="text-[10px] font-sans font-black uppercase tracking-wider text-accent-red dark:text-red-500">
                  Satire Disclaimer
                </h4>
                <p className="font-serif text-xs leading-relaxed text-charcoal-800/80 dark:text-cream-100/80">
                  Reports filed in the <span className="font-bold underline">{currentCategory.name}</span> archive represent satirical and fictional editorial commentaries designed for social criticism. Reader discretion is advised.
                </p>
              </div>

            </aside>

          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-black/15 dark:border-white/15 rounded space-y-4 max-w-lg mx-auto">
            <svg className="h-10 w-10 mx-auto text-charcoal-800/30 dark:text-cream-100/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <div>
              <h3 className="font-serif text-lg font-bold text-charcoal-900 dark:text-cream-50">
                Vacant Archive Room
              </h3>
              <p className="text-xs font-serif text-charcoal-800/60 dark:text-cream-100/60 mt-1 leading-relaxed">
                The editorial board has not compiled any dispatches for the "{currentCategory.name}" archive room in this current cycle. Please check back later.
              </p>
            </div>
            <Link
              href="/"
              className="inline-block border border-black dark:border-white text-xs font-sans font-black uppercase tracking-wider px-6 py-2.5 rounded hover:bg-charcoal-900 hover:text-cream-50 dark:hover:bg-cream-50 dark:hover:text-charcoal-900 transition-all cursor-pointer"
            >
              Return Home
            </Link>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
