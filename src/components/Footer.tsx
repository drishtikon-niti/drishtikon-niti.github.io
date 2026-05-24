"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CATEGORIES } from "@/data/articles";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-cream-100 dark:bg-charcoal-900 border-t-4 border-charcoal-900 dark:border-cream-100 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-black/10 dark:border-white/10">
          {/* Column 1: Editorial Profile */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="group flex flex-col items-start leading-none">
              <span className="font-serif text-3xl font-black tracking-widest text-charcoal-900 dark:text-cream-50">
                DRISHTIKON
              </span>
              <span className="text-[10px] tracking-[0.25em] font-sans font-bold text-charcoal-800/60 dark:text-cream-100/60 mt-1">
                PERSPECTIVE & SATIRE
              </span>
            </Link>
            <p className="text-sm font-serif leading-relaxed text-charcoal-800/80 dark:text-cream-100/80 max-w-md">
              A premium, independent digital journal of satirical commentary, societal analysis, and intellectual skepticism. Drishtikon interrogates the absurdities of the contemporary era with a level of seriousness it does not deserve.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {["twitter", "instagram", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-charcoal-800/70 hover:text-accent-red dark:text-cream-100/70 dark:hover:text-red-500 hover:border-accent-red dark:hover:border-red-500 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <span className="text-xs font-sans font-bold uppercase tracking-wider">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Categories Directory */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans font-black uppercase tracking-wider text-charcoal-900 dark:text-cream-50">
              Categories
            </h4>
            <ul className="space-y-2.5">
              {CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/${category.slug}`}
                    className="text-sm font-sans text-charcoal-800/70 hover:text-accent-red dark:text-cream-100/70 dark:hover:text-red-500 transition-colors font-medium"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter Sign-up */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans font-black uppercase tracking-wider text-charcoal-900 dark:text-cream-50">
              The Daily Dispatch
            </h4>
            <p className="text-xs font-serif leading-relaxed text-charcoal-800/70 dark:text-cream-100/70">
              Subscribe to receive the most intelligent satire in your inbox. No spam. Only existential reflections.
            </p>
            {submitted ? (
              <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded text-xs font-sans font-bold text-center">
                Welcome to the skepticism club.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="name@agency.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-cream-50 dark:bg-charcoal-800 border border-black/10 dark:border-white/10 px-3.5 py-2.5 text-xs rounded font-sans focus:outline-none focus:border-accent-red dark:focus:border-red-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-charcoal-900 hover:bg-accent-red text-cream-50 dark:bg-cream-100 dark:text-charcoal-900 dark:hover:bg-red-500 dark:hover:text-cream-50 transition-all font-sans font-bold text-xs uppercase tracking-wider py-2.5 rounded shadow-sm cursor-pointer"
                >
                  Join Reader Registry
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Panel with Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs font-sans text-charcoal-800/60 dark:text-cream-100/60 font-semibold">
          <div className="max-w-2xl leading-relaxed">
            <span className="font-black text-accent-red dark:text-red-500 uppercase mr-1.5">Editorial Note:</span>
            Drishtikon publishes satirical and fictional commentary intended for humor, criticism, and public discourse. All content, names, characters, and incidents portrayed on this platform are completely fictional.
          </div>
          <div className="shrink-0 text-[10px] tracking-wider uppercase font-bold text-charcoal-800/40 dark:text-cream-100/40 mt-1 md:mt-0">
            © {new Date().getFullYear()} Drishtikon. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
