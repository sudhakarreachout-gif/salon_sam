'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Studio' },
  { href: '/about', label: 'Story & Space' },
  { href: '/services', label: 'Services Menu' },
  { href: '/gallery', label: 'Portfolio' },
  { href: '/team', label: 'Specialists' },
  { href: '/testimonials', label: 'Client Reviews' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-ivory/90 backdrop-blur-xl border-b border-ivory-border py-3.5 sm:py-4 shadow-warm'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Brand Wordmark in Playfair Display */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-charcoal group-hover:text-terracotta transition-colors">
              Salonz
            </span>
            <span className="text-[10px] font-sans font-medium tracking-widest text-muted-text uppercase">
              Indiranagar · Bengaluru
            </span>
          </Link>

          {/* POSH Navigation Buttons with Frosted Glass Hover Pills */}
          <div className="hidden lg:flex items-center space-x-1.5 xl:space-x-2 text-[13px] font-sans font-medium text-charcoal/90">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'btn-liquid-glass-ivory text-terracotta font-semibold border-terracotta/40'
                      : 'border border-transparent hover:btn-liquid-glass-ivory hover:text-terracotta'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Toned-Down Modern Luxury Terracotta CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              href="/booking"
              className="btn-terracotta-luxury inline-flex items-center space-x-2 text-ivory text-xs font-sans font-medium px-6 py-3 rounded-full group"
            >
              <span>Reserve Session</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link
              href="/booking"
              className="btn-terracotta-luxury text-ivory text-xs font-medium px-4 py-2 rounded-full"
            >
              Reserve
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-charcoal hover:text-terracotta p-1"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-ivory/95 backdrop-blur-xl border-b border-ivory-border overflow-hidden px-6 py-6 shadow-2xl"
          >
            <div className="space-y-3 font-sans text-sm text-charcoal font-medium">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2.5 px-4 rounded-xl transition-all ${
                    pathname === link.href
                      ? 'btn-liquid-glass-ivory text-terracotta font-semibold'
                      : 'text-muted-text hover:text-charcoal'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4">
                <Link
                  href="/booking"
                  className="btn-terracotta-luxury w-full flex items-center justify-center space-x-2 text-ivory font-medium py-3.5 text-xs rounded-full"
                >
                  <span>Reserve Session</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
