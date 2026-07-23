import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-ivory min-h-[75vh] flex items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-[11px] font-sans font-medium tracking-widest text-terracotta uppercase">
          404 · Page Not Found
        </div>

        <h1 className="font-serif text-4xl font-bold text-charcoal">
          Page outside our studio index.
        </h1>

        <p className="text-sm text-muted-text font-sans leading-relaxed">
          The requested page route could not be found. Return to our homepage or explore our curated services menu.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 font-sans text-xs">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-terracotta text-ivory font-medium px-6 py-3 rounded-full shadow-terracotta-glow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-ivory-surface border border-ivory-border text-charcoal px-6 py-3 rounded-full hover:border-terracotta"
          >
            <span>Services Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
