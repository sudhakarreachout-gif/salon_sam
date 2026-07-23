'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'How does Salonz protect my hair against Bengaluru hard water mineral buildup?',
    answer: 'Bengaluru groundwater contains high levels of dissolved calcium, magnesium, and metallic minerals that cause color fading, dryness, and scalp irritation. Every service at Salonz begins with a chelating mineral-reset wash and utilizes multi-stage reverse osmosis (RO) purified water across all our shampoo bowls.',
  },
  {
    question: 'Why does Salonz perform haircuts dry rather than wet?',
    answer: 'Wet hair shrinks, stretches, and masks natural wave patterns, cowlicks, and density weight distribution. By cutting hair dry under natural light, we observe how your hair moves in real life, ensuring your shape falls effortlessly without needing 40 minutes of morning round-brushing.',
  },
  {
    question: 'How long does a Salonz freehand clay balayage last before needing touchups?',
    answer: 'Because we use low-ammonia clay lighteners with hand-painted root melting (rather than harsh foil demarcation lines), our balayages evolve naturally over 4 to 6 months. Most clients only visit us twice a year for full color, returning between sessions for a quick 30-minute tonal gloss refresh.',
  },
  {
    question: 'Is valet parking available at your Indiranagar studio?',
    answer: 'Yes. We offer complimentary private valet parking at Level 2, 100 Feet Road, Indiranagar. Simply pull up to our entrance and our attendant will take care of your vehicle.',
  },
  {
    question: 'Can I bring my laptop and work during my color session?',
    answer: 'Absolutely. All private suites are equipped with high-speed fiber Wi-Fi, silent charging ports, acoustic linen draping, and complimentary Kyoto matcha or artisanal pour-over coffee.',
  },
];

export default function StudioFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 relative bg-ivory">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-sans font-medium tracking-widest text-terracotta uppercase bg-terracotta/10 px-4 py-1.5 rounded-full border border-terracotta/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Studio FAQ &amp; Care Notes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Frequently Asked Questions.
          </h2>
          <p className="text-xs sm:text-sm text-muted-text max-w-md mx-auto font-sans">
            Everything you need to know about your visit to our Indiranagar studio.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-ivory-surface/50 border border-ivory-border rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-6 flex items-center justify-between space-x-4 text-left font-serif text-lg sm:text-xl font-bold text-charcoal hover:text-terracotta transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-terracotta shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-muted-text leading-relaxed font-sans border-t border-ivory-border/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
