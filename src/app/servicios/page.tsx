import { ServicesSection } from "@/components/sections/home/services-section";
import { VisitWorkshopSection } from "@/components/sections/home/visit-workshop-section";
import { ServiceProcessSection } from "@/components/sections/servicios/service-process-section";
import { PageHeroSection } from "@/components/sections/shared/page-hero-section";
import { images } from "@/lib/assets";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Servicios",
  description:
    "Descubra nuestros servicios de enmarcado profesional, restauración, tensado de lienzos y elaboración de bastidores.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <main className="pt-20">
      <PageHeroSection
        label="Servicios"
        title="Conservación especializada para cada obra."
        description="Integramos diagnóstico técnico, selección de materiales y montaje preciso para proteger y resaltar cada pieza."
        imageSrc={images.hero}
        imageAlt="Detalle artesanal de enmarcado profesional"
      />
      <ServicesSection />
      <ServiceProcessSection />
      <VisitWorkshopSection />
    </main>
  );
}
