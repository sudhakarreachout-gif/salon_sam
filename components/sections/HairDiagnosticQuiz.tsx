'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '@/lib/data';
import { Sparkles, ArrowRight, RotateCcw, Clock, ArrowUpRight } from 'lucide-react';

const STEP_1_OPTIONS = [
  { id: 'fine', label: 'Fine & Flat', desc: 'Needs weight redistribution & volume' },
  { id: 'wavy', label: 'Wavy & Natural Frizz', desc: 'Needs curl definition & smoothing' },
  { id: 'thick', label: 'Thick & Coarse', desc: 'Needs bulk removal & dry sculpt' },
  { id: 'chemically-treated', label: 'Colored / Bleached', desc: 'Needs bond repair & pigment refresh' },
];

const STEP_2_OPTIONS = [
  { id: 'color', label: 'Low-Maintenance Color', desc: 'Seamless 6-month grow-out balayage' },
  { id: 'cut', label: 'Precision Hand-Cut Shape', desc: 'Dry sculpt tailored to face geometry' },
  { id: 'scalp', label: 'Scalp & Follicle Detox', desc: 'Kyoto head spa & hard water reset' },
  { id: 'repair', label: 'Damage & Tone Correction', desc: 'Rebuilding broken bonds & brassiness' },
];

const STEP_3_OPTIONS = [
  { id: 'quick', label: '75 – 90 Minutes', desc: 'Express ritual or architectural cut' },
  { id: 'half-day', label: '2.5 – 3.5 Hours', desc: 'Full dimensional balayage session' },
  { id: 'full-day', label: 'Full Day Atelier', desc: 'Exclusive bridal atelier' },
];

export default function HairDiagnosticQuiz() {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState({
    texture: '',
    goal: '',
    time: '',
  });

  const handleSelectOption = (key: 'texture' | 'goal' | 'time', value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((prev) => prev + 1);
  };

  const getRecommendedService = () => {
    if (answers.goal === 'color') return SERVICES.find((s) => s.id === 'dimensional-balayage') || SERVICES[1];
    if (answers.goal === 'scalp') return SERVICES.find((s) => s.id === 'japanese-silk-head-spa') || SERVICES[2];
    if (answers.goal === 'repair') return SERVICES.find((s) => s.id === 'custom-color-correction') || SERVICES[3];
    return SERVICES.find((s) => s.id === 'precision-hair-sculpt') || SERVICES[0];
  };

  const recommended = getRecommendedService();

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ texture: '', goal: '', time: '' });
  };

  return (
    <section className="py-20 sm:py-24 bg-ivory-surface/40 border-y border-ivory-border relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        
        {/* Badge & Title */}
        <div className="space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-sans font-medium tracking-widest text-terracotta uppercase bg-terracotta/10 px-4 py-1.5 rounded-full border border-terracotta/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Find Your Atelier Match.
          </h2>
          <p className="text-xs sm:text-sm text-muted-text max-w-md mx-auto font-sans">
            Answer 3 quick questions about your hair type and goals to receive a tailored service recommendation.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-ivory border border-ivory-border rounded-2xl p-6 sm:p-10 shadow-warm relative text-left">
          
          {step <= 3 && (
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-ivory-border font-sans text-xs">
              <span className="text-terracotta font-medium uppercase tracking-wider">
                Step {step} of 3
              </span>
              <span className="text-muted-text">
                {step === 1 && 'Select Hair Texture'}
                {step === 2 && 'Select Primary Goal'}
                {step === 3 && 'Select Time Budget'}
              </span>
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div
                key="quiz-step-1"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-4"
              >
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
                  What best describes your current hair texture?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {STEP_1_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption('texture', opt.id)}
                      className="p-5 rounded-xl border border-ivory-border bg-ivory-surface/40 hover:bg-ivory hover:border-terracotta/60 text-left transition-all group shadow-warm"
                    >
                      <div className="font-serif font-bold text-base text-charcoal group-hover:text-terracotta transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-xs text-muted-text font-sans mt-1">
                        {opt.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div
                key="quiz-step-2"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-4"
              >
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
                  What is your primary hair objective?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {STEP_2_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption('goal', opt.id)}
                      className="p-5 rounded-xl border border-ivory-border bg-ivory-surface/40 hover:bg-ivory hover:border-terracotta/60 text-left transition-all group shadow-warm"
                    >
                      <div className="font-serif font-bold text-base text-charcoal group-hover:text-terracotta transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-xs text-muted-text font-sans mt-1">
                        {opt.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div
                key="quiz-step-3"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-4"
              >
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
                  How much time do you want to dedicate to your session?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {STEP_3_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption('time', opt.id)}
                      className="p-5 rounded-xl border border-ivory-border bg-ivory-surface/40 hover:bg-ivory hover:border-terracotta/60 text-left transition-all group shadow-warm"
                    >
                      <div className="font-serif font-bold text-base text-charcoal group-hover:text-terracotta transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-xs text-muted-text font-sans mt-1">
                        {opt.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* RESULT */}
            {step > 3 && (
              <motion.div
                key="quiz-result"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-left"
              >
                <div className="flex items-center justify-between border-b border-ivory-border pb-4 font-sans text-xs">
                  <span className="text-terracotta font-medium uppercase tracking-wider">
                    Recommended Atelier Session
                  </span>
                  <button
                    onClick={resetQuiz}
                    className="text-muted-text hover:text-charcoal flex items-center space-x-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Quiz</span>
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-sans text-muted-text uppercase tracking-widest">
                    {recommended.subtitle}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-charcoal">
                    {recommended.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-sans">
                    {recommended.description}
                  </p>
                </div>

                <div className="p-5 bg-ivory-surface/60 border border-ivory-border rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans text-xs">
                  <div className="space-y-1">
                    <div className="text-charcoal font-bold font-serif text-xl">{recommended.price}</div>
                    <div className="text-muted-text flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-terracotta" />
                      <span>{recommended.duration}</span>
                    </div>
                  </div>

                  <Link
                    href={`/booking?service=${encodeURIComponent(recommended.id)}`}
                    className="inline-flex items-center space-x-2 bg-terracotta hover:bg-terracotta-hover text-ivory font-medium px-6 py-3 rounded-full transition-all shadow-terracotta-glow group"
                  >
                    <span>Reserve Recommended Session</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
