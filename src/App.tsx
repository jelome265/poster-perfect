import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ValueSection } from "./sections/ValueSection";
import { ServicesSection } from "./sections/ServicesSection";
import { StatisticsSection } from "./sections/StatisticsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ContactSection } from "./sections/ContactSection";

// Seven sections in the approved source order (DEC-019, PP-IA-002 to PP-IA-008).
export function App() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ValueSection />
      <ServicesSection />
      <StatisticsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
