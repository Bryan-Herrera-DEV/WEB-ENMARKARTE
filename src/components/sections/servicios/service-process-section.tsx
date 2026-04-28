const steps = [
  {
    number: "01",
    title: "Diagnóstico de la Obra",
    description:
      "Evaluamos soporte, estado de conservación, técnica y necesidades de protección de cada pieza.",
  },
  {
    number: "02",
    title: "Selección de Materiales",
    description:
      "Proponemos molduras, cartones, cristales y acabados de grado museográfico para máxima durabilidad.",
  },
  {
    number: "03",
    title: "Montaje y Entrega",
    description:
      "Realizamos un ensamble preciso, con control de estabilidad, limpieza y revisión final antes de la entrega.",
  },
];

export function ServiceProcessSection() {
  return (
    <section className="py-32 px-8 md:px-16 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="font-label text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            Proceso de Trabajo
          </span>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">Precisión técnica en cada etapa.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step) => (
            <article key={step.number} className="frame-stroke p-10 flex flex-col gap-6 hover:bg-surface transition-colors">
              <span className="font-headline text-6xl text-primary/30 leading-none">{step.number}</span>
              <h3 className="font-headline text-2xl">{step.title}</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
