import { CraftValuesSection } from "@/components/sections/nosotros/craft-values-section";
import { AboutSection } from "@/components/sections/home/about-section";
import { LegacySection } from "@/components/sections/home/legacy-section";
import { PageHeroSection } from "@/components/sections/shared/page-hero-section";
import { images } from "@/lib/assets";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Nosotros",
  description:
    "Conozca la historia de Enmarkarte, nuestra filosofía artesanal y el legado de conservación construido desde 1973.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <main className="pt-20">
      <PageHeroSection
        label="Nosotros"
        title="Más de cinco décadas en diálogo con el arte."
        description="Somos un taller especializado en enmarcado y conservación, guiado por oficio, precisión y respeto absoluto por cada pieza."
        imageSrc={images.workshop}
        imageAlt="Interior de taller con molduras y herramientas de enmarcado"
      />
      <AboutSection />
      <CraftValuesSection />
      <LegacySection />
    </main>
  );
}
