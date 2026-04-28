import { MaterialIcon } from "@/components/ui/material-icon";

const services = [
  {
    icon: "frame_person",
    title: "Enmarcación Profesional",
    description:
      "Diseños personalizados con materiales de conservación para grabados, óleos y fotografías.",
  },
  {
    icon: "brush",
    title: "Restauración de Obras",
    description: "Procesos técnicos para devolver la vitalidad original a piezas dañadas por el tiempo.",
  },
  {
    icon: "layers",
    title: "Tensado de Lienzos",
    description: "Montaje experto de telas sobre bastidores para evitar deformaciones y grietas.",
  },
  {
    icon: "architecture",
    title: "Elaboración de Bastidores",
    description: "Estructuras de madera sólida y dimensiones precisas para el soporte del arte.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 px-8 md:px-16 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
              Nuestras Especialidades
            </span>
            <h2 className="font-headline text-5xl md:text-6xl">Servicios de Conservación</h2>
          </div>

          <p className="font-body text-on-surface-variant max-w-xs text-right italic">
            Contamos con una gran variedad de molduras y modelos adaptados a cada estilo arquitectónico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-collapse">
          {services.map((service) => (
            <article key={service.title} className="frame-stroke p-10 flex flex-col gap-8 hover:bg-surface transition-colors">
              <MaterialIcon name={service.icon} className="text-4xl text-primary" />
              <h3 className="font-headline text-2xl">{service.title}</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
