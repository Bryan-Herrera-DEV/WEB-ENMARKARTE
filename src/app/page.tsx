import { AboutSection } from "@/components/sections/home/about-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { LegacySection } from "@/components/sections/home/legacy-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { VisitWorkshopSection } from "@/components/sections/home/visit-workshop-section";
import { WorksMarqueeSection } from "@/components/sections/home/works-marquee-section";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Enmarcado profesional y restauración",
  description:
    "Enmarkarte ofrece enmarcado profesional, restauración y soluciones de conservación para obras de arte desde 1973.",
  path: "/",
});

export default function HomePage() {
  return (
    <main className="pt-20">
      <HeroSection />
      <AboutSection />
      <WorksMarqueeSection />
      <ServicesSection />
      <LegacySection />
      <VisitWorkshopSection />
    </main>
  );
}
