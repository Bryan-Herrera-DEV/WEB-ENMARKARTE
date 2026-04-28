import { ContactDetailsSection } from "@/components/sections/contacto/contact-details-section";
import { VisitWorkshopSection } from "@/components/sections/home/visit-workshop-section";
import { PageHeroSection } from "@/components/sections/shared/page-hero-section";
import { images } from "@/lib/assets";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contacto",
  description:
    "Agende una cita con Enmarkarte para recibir asesoría personalizada en enmarcado y conservación de arte.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <main className="pt-20">
      <PageHeroSection
        label="Contacto"
        title="Hablemos de su obra y su contexto."
        description="Le atendemos de forma personal para definir materiales, escalas y acabados según la pieza y el espacio final."
        imageSrc={images.workshop}
        imageAlt="Zona de trabajo de enmarcado y conservación"
      />
      <ContactDetailsSection />
      <VisitWorkshopSection />
    </main>
  );
}
