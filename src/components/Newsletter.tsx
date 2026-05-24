"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setName("");
    }
  };

  return (
    <section className="w-full py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-cream-100 dark:bg-charcoal-800/10 border-4 double border-charcoal-900 dark:border-cream-100 p-8 sm:p-12 text-center space-y-6 rounded relative overflow-hidden shadow-sm">
          {/* Subtle watermark or visual embellishment */}
          <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none select-none text-[120px] font-serif font-black font-italic">
            D
          </div>

          <div className="max-w-xl mx-auto space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal-900 dark:text-cream-50 leading-tight">
              Register For The Skeptic’s Ledger
            </h3>
            <p className="text-xs sm:text-sm font-serif leading-relaxed text-charcoal-800/80 dark:text-cream-100/80">
              Receive our high-end, weekly intelligence brief containing society’s absolute finest satirical reflections, uncompromised commentary, and structural critiques of modern life.
            </p>
          </div>

          {submitted ? (
            <div className="max-w-md mx-auto p-6 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-lg space-y-2 animate-fadeIn">
              <h4 className="font-sans text-sm font-black uppercase tracking-wider">Registration Completed</h4>
              <p className="text-xs font-serif leading-relaxed">
                You have been successfully added to the registry of critical observers. The first dispatch will trigger on the upcoming lunar cycle.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-cream-50 dark:bg-charcoal-850 border border-black/10 dark:border-white/10 px-4 py-3 text-xs sm:text-sm rounded font-sans focus:outline-none focus:border-accent-red dark:focus:border-red-500 transition-colors w-full"
                required
              />
              <input
                type="email"
                placeholder="email@address.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-cream-50 dark:bg-charcoal-850 border border-black/10 dark:border-white/10 px-4 py-3 text-xs sm:text-sm rounded font-sans focus:outline-none focus:border-accent-red dark:focus:border-red-500 transition-colors w-full"
                required
              />
              <button
                type="submit"
                className="bg-charcoal-900 hover:bg-accent-red text-cream-50 dark:bg-cream-100 dark:text-charcoal-900 dark:hover:bg-red-500 dark:hover:text-cream-50 transition-all font-sans font-black text-xs uppercase tracking-widest px-6 py-3 shrink-0 rounded shadow cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}

          <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-800/40 dark:text-cream-100/40 pt-4">
            Zero advertising • Unsubscribe instantly at any epoch • Pure Commentary
          </div>
        </div>
      </div>
    </section>
  );
}
