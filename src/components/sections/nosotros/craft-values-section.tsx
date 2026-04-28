import { MaterialIcon } from "@/components/ui/material-icon";

const values = [
  {
    icon: "handyman",
    title: "Maestría Artesanal",
    description:
      "Cada obra se trabaja a mano con estándares de conservación y una selección rigurosa de materiales.",
  },
  {
    icon: "history",
    title: "Continuidad Histórica",
    description:
      "Mantenemos procesos refinados durante más de cinco décadas para preservar autenticidad y valor.",
  },
  {
    icon: "balance",
    title: "Criterio Estético",
    description:
      "Integramos proporción, luz y contexto para que marco y obra dialoguen con el espacio arquitectónico.",
  },
];

export function CraftValuesSection() {
  return (
    <section className="py-32 px-8 md:px-16 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="font-label text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            Nuestra Filosofía
          </span>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">Tradición, técnica y criterio curatorial.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {values.map((value) => (
            <article key={value.title} className="frame-stroke p-10 flex flex-col gap-6 hover:bg-surface transition-colors">
              <MaterialIcon name={value.icon} className="text-4xl text-primary" />
              <h3 className="font-headline text-2xl">{value.title}</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
