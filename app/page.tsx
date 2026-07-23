import HeroSection from '@/components/sections/HeroSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import ServicesPreviewSection from '@/components/sections/ServicesPreviewSection';
import AtelierExperienceSection from '@/components/sections/AtelierExperienceSection';
import PortfolioTeaserSection from '@/components/sections/PortfolioTeaserSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import StudioFAQSection from '@/components/sections/StudioFAQSection';
import BookingCTASection from '@/components/sections/BookingCTASection';
import FloatingConciergePill from '@/components/ui/FloatingConciergePill';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <PhilosophySection />
      <ServicesPreviewSection />
      <AtelierExperienceSection />
      <PortfolioTeaserSection />
      <TestimonialsSection />
      <StudioFAQSection />
      <BookingCTASection />
      <FloatingConciergePill />
    </div>
  );
}
