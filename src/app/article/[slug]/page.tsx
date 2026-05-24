import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreakingTicker from "@/components/BreakingTicker";
import EditorialIllustration from "@/components/EditorialIllustration";
import ArticleClientInteractive from "@/components/ArticleClientInteractive";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES, Article } from "@/data/articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic metadata for SEO optimization
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Drishtikon Commentary`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://drishtikon.news/article/${slug}`,
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author.name],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
    alternates: {
      canonical: `/article/${slug}`,
    },
  };
}

// Pre-render static paths for articles (lightning fast loading times)
export async function generateStaticParams() {
  return ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  
  // Find current article from central store
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  // Related articles (matching category, excluding current, limit 3)
  let related = ARTICLES.filter((a) => a.categorySlug === article.categorySlug && a.slug !== slug).slice(0, 3);
  // Fallback to general articles if no category matches are found
  if (related.length === 0) {
    related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);
  }

  // JSON-LD Structured Data Schema for search indexing compliance
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": new Date(article.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": article.author.name,
      "jobTitle": article.author.role,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Drishtikon",
      "logo": {
        "@type": "ImageObject",
        "url": "https://drishtikon.news/logo.png",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 relative">
      {/* Dynamic Structured Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BreakingTicker />
      <Navbar />

      {/* Sticky Progress bar and Share actions are loaded in this client wrapper */}
      <ArticleClientInteractive title={article.title} slug={article.slug} />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="max-w-3xl mx-auto space-y-8">
          
          {/* Section 1: Editorial Header */}
          <div className="space-y-4 border-b border-black/10 dark:border-white/10 pb-6">
            <Link
              href={`/${article.categorySlug}`}
              className="inline-block text-xs font-sans font-black uppercase tracking-widest text-accent-red dark:text-red-500 hover:underline"
            >
              {article.category} Archive
            </Link>
            
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 dark:text-cream-50 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl font-serif italic text-charcoal-800/70 dark:text-cream-100/70 leading-relaxed pt-2">
              {article.excerpt}
            </p>

            {/* Author Credit and Date */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 text-xs font-sans font-bold uppercase tracking-wider text-charcoal-800/60 dark:text-cream-100/60">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-charcoal-900 dark:bg-cream-100 text-cream-50 dark:text-charcoal-900 flex items-center justify-center text-xs font-black shadow-sm">
                  {article.author.avatar}
                </div>
                <div>
                  <p className="text-charcoal-900 dark:text-cream-50 font-black">{article.author.name}</p>
                  <p className="text-[9px] text-charcoal-800/40 dark:text-cream-100/40 font-bold">{article.author.role}</p>
                </div>
              </div>
              <div className="sm:text-right text-[11px] font-sans">
                <p>Published: {article.date}</p>
                <p className="text-[10px] text-charcoal-800/40 dark:text-cream-100/40 font-bold">{article.readTime}</p>
              </div>
            </div>
          </div>

          {/* Section 2: Large Graphic Engraving SVG */}
          <div className="overflow-hidden border border-black/10 dark:border-white/10 rounded aspect-video w-full relative shadow-sm">
            <EditorialIllustration
              categorySlug={article.categorySlug}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Section 3: High-End Editorial Prose */}
          <div
            className="prose prose-serif max-w-none text-charcoal-900 dark:text-cream-50 font-serif leading-relaxed text-base sm:text-lg space-y-6 pt-6
              prose-headings:font-serif prose-headings:font-extrabold prose-headings:text-charcoal-900 dark:prose-headings:text-cream-50 prose-headings:leading-tight prose-headings:border-b prose-headings:border-black/5 dark:prose-headings:border-white/5 prose-headings:pb-1 prose-headings:mt-10
              prose-blockquote:border-l-4 prose-blockquote:border-accent-red dark:prose-blockquote:border-red-500 prose-blockquote:pl-5 prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-charcoal-800/80 dark:prose-blockquote:text-cream-100/80 prose-blockquote:bg-black/[0.02] dark:prose-blockquote:bg-white/[0.01] prose-blockquote:p-4 prose-blockquote:rounded
              prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
              prose-strong:font-black prose-strong:text-charcoal-900 dark:prose-strong:text-cream-50"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Section 4: Article Tag Index list */}
          <div className="flex flex-wrap items-center gap-2 pt-10 pb-4">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="px-2.5 py-1 rounded bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5 text-xs font-sans font-bold text-charcoal-800/80 dark:text-cream-100/80 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>

        </article>

        {/* SECTION 5: RECOMMENDED READINGS (3 cards) */}
        <section className="max-w-5xl mx-auto pt-20 border-t border-black/10 dark:border-white/10 mt-20">
          <div className="border-b border-black/10 dark:border-white/10 pb-4 mb-8">
            <h3 className="font-serif text-2xl font-extrabold text-charcoal-900 dark:text-cream-50">
              Recommended Reading
            </h3>
            <p className="text-xs font-sans font-bold uppercase tracking-wider text-charcoal-800/50 dark:text-cream-100/50 mt-1">
              Further dispatches from our investigative journalists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
