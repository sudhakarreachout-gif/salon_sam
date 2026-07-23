import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SALONZ — High-End Hair & Colour Studio | Indiranagar, Bengaluru',
  description: 'A serene Indiranagar sanctuary dedicated to bespoke hair colour, hand-sculpted texture, and European quiet luxury care.',
  keywords: ['Luxury Hair Salon Bengaluru', 'Indiranagar Hair Salon', 'Terracotta Hair Studio Bengaluru', 'Bespoke Balayage Bengaluru', 'Quiet Luxury Salon'],
  openGraph: {
    title: 'SALONZ — High-End Hair & Colour Studio',
    description: 'A serene Indiranagar sanctuary for bespoke hair colour and hand-sculpted texture.',
    url: 'https://salonz-atelier.com',
    siteName: 'SALONZ Studio',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="bg-ivory-paper text-charcoal min-h-screen flex flex-col font-sans antialiased selection:bg-terracotta selection:text-ivory">
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
