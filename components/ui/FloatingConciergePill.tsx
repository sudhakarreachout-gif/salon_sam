'use client';

import React, { useState, useEffect } from 'react';
import { ATELIER_INFO } from '@/lib/data';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingConciergePill() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible || closed) return null;

  const whatsappUrl = `https://wa.me/${ATELIER_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Salonz Concierge, I would like to inquire about session availability in Bengaluru.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-2">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2.5 bg-terracotta hover:bg-terracotta-hover text-ivory text-xs font-sans font-medium px-4 py-3 rounded-full shadow-terracotta-glow border border-ivory/20 transition-all hover:scale-105"
      >
        <MessageSquare className="w-4 h-4 text-ivory" />
        <span className="hidden sm:inline">WhatsApp Concierge</span>
        <span className="sm:hidden">Concierge</span>
      </a>

      <button
        onClick={() => setClosed(true)}
        className="bg-ivory border border-ivory-border text-charcoal p-2 rounded-full hover:bg-ivory-surface shadow-md transition-colors"
        aria-label="Close Concierge Widget"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
