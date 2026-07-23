/**
 * ==============================================================================
 * DESIGN TOKEN PLAN — SALONZ: EDITORIAL POLISH PACKAGE
 * ==============================================================================
 * 
 * 1. COLOR SYSTEM:
 *    - Ivory (`#F8F5F1`): Warm off-white/ivory cream base background
 *    - Ivory Card (`#F3EEE7`): Layered warm surface tone for cards & quote blocks
 *    - Charcoal (`#111111`): Deep charcoal primary headlines & text
 *    - Muted Text (`#555555`): Neutral body paragraphs & supporting copy
 *    - Terracotta Accent (`#9C4A3F`): Signature deep warm terracotta/burgundy accent
 *      for CTAs, active links, hover states, and key highlights
 *    - Supporting Accents:
 *      - Warm Taupe (`#B8A88E`): Borders, subtle badges, metadata details
 *      - Soft Sage (`#8A8F7E`): Botanical tags and soft natural accents
 * ==============================================================================
 */

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F8F5F1',
          surface: '#EFEAE3',
          card: '#F3EEE7',
          border: '#E2D9CD',
        },
        charcoal: {
          DEFAULT: '#111111',
          light: '#222222',
          dark: '#050505',
        },
        'muted-text': '#555555',
        terracotta: {
          DEFAULT: '#9C4A3F',
          hover: '#833B31',
          light: '#B55B4F',
          soft: 'rgba(156, 74, 63, 0.12)',
        },
        taupe: {
          DEFAULT: '#B8A88E',
          light: '#D8CDBA',
          border: '#D4C7B4',
        },
        sage: {
          DEFAULT: '#8A8F7E',
          light: '#A4A998',
          soft: 'rgba(138, 143, 126, 0.15)',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      borderRadius: {
        'none': '0px',
        'sm': '2px',
        'md': '6px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'warm': '0 20px 40px -15px rgba(17, 17, 17, 0.05)',
        'terracotta-glow': '0 0 25px -5px rgba(156, 74, 63, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
