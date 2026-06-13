export type GalleryArtwork = {
  id: string;
  nombre: string;
  imageName: string;
  imageSrc: string;
  descripcion: string;
  autor: string;
  dimensiones: string;
  tecnicas: string[];
  marco: string;
  precio?: number;
  seoTitle: string;
  seoDescription: string;
  alt: string;
};

export const galleryProductOffer = {
  priceCurrency: "USD",
  fallbackPriceLabel: "Precio a consultar",
} as const;

export const galleryConfig = {
  tecnicas: [
    "oleo",
    "acrilico",
    "pintura en diamante",
    "papiro",
    "litografia",
    "tridimensional",
    "luminiscente",
    "espejo",
  ],
  marcos: [
    "madera",
    "acrilico",
    "dorado",
  ],
} as const;

export const galleryArtworks: GalleryArtwork[] = [
  {
    id: "obra-001",
    nombre: "Arbol de la vida",
    imageName: "arbol.jpg",
    imageSrc: "/galeria/arbol.jpg",
    descripcion: "Obra Arbol de la vida de Luis Ayo, tecnica oleo.",
    autor: "Luis Ayo",
    dimensiones: "36x45",
    tecnicas: [
      "oleo",
    ],
    marco: "acrilico",
    seoTitle: "Arbol de la vida | Oleo en galeria Enmarkarte",
    seoDescription: "Obra Arbol de la vida disponible en la galeria de Enmarkarte. Tecnica: oleo.",
    alt: "Arbol de la vida. Obra de oleo.",
  },
  {
    id: "obra-002",
    nombre: "Arboles de la vida",
    imageName: "arboles.jpg",
    imageSrc: "/galeria/arboles.jpg",
    descripcion:
      "Arboles estilizado en oleo con follaje lleno de flores, mariposas y frutos en tonos vibrantes, creando una escena alegre, colorida y decorativa.",
    autor: "Luis Ayo",
    dimensiones: "38x43",
    tecnicas: [
      "oleo",
    ],
    marco: "acrilico",
    seoTitle: "Arboles de la vida | Oleo en galeria Enmarkarte",
    seoDescription:
      "Arboles estilizado en oleo con follaje lleno de flores, mariposas y frutos en tonos vibrantes, creando una escena alegre, colorida y decorativa.",
    alt: "Arboles de la vida. Arboles estilizado en oleo con follaje lleno de flores, mariposas y frutos en tonos vibrantes, creando una escena alegre, colorida y decorativa.",
  },
  {
    id: "obra-003",
    nombre: "Barcos",
    imageName: "barcos.jpg",
    imageSrc: "/galeria/barcos.jpg",
    descripcion:
      "Barcos sobre el mar al atardecer con colores vibrantes reflejados en el agua, creando una escena tranquila, luminosa y armoniosa.",
    autor: "Gregorio Camacho",
    dimensiones: "50x40",
    tecnicas: [
      "acrilico",
    ],
    marco: "acrilico",
    seoTitle: "Barcos | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Barcos sobre el mar al atardecer con colores vibrantes reflejados en el agua, creando una escena tranquila, luminosa y armoniosa.",
    alt: "Barcos. Barcos sobre el mar al atardecer con colores vibrantes reflejados en el agua, creando una escena tranquila, luminosa y armoniosa.",
  },
  {
    id: "obra-004",
    nombre: "Calabaza",
    imageName: "Calabaza.jpg",
    imageSrc: "/galeria/Calabaza.jpg",
    descripcion:
      "Calabaza en pintura diamante con tonos calidos y brillantes; los cristales reflejan la luz creando una imagen decorativa, llamativa y texturizada.",
    autor: "EnmarKarte",
    dimensiones: "56x46",
    tecnicas: [
      "pintura en diamante",
    ],
    marco: "acrilico",
    seoTitle: "Calabaza | Pintura en diamante en galeria Enmarkarte",
    seoDescription:
      "Calabaza en pintura diamante con tonos calidos y brillantes; los cristales reflejan la luz creando una imagen decorativa, llamativa y texturizada.",
    alt: "Calabaza. Calabaza en pintura diamante con tonos calidos y brillantes; los cristales reflejan la luz creando una imagen decorativa, llamativa y texturizada.",
  },
  {
    id: "obra-005",
    nombre: "Santo Domingo",
    imageName: "calles_quito.jpg",
    imageSrc: "/galeria/calles_quito.jpg",
    descripcion:
      "Calle colonial con fachadas coloridas y balcones floridos que conduce a la iglesia de Santo Domingo, creando una escena calida y tradicional.",
    autor: "Unaquisa",
    dimensiones: "70.5x55.5",
    tecnicas: [
      "acrilico",
    ],
    marco: "acrilico",
    seoTitle: "Santo Domingo | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Calle colonial con fachadas coloridas y balcones floridos que conduce a la iglesia de Santo Domingo, creando una escena calida y tradicional.",
    alt: "Santo Domingo. Calle colonial con fachadas coloridas y balcones floridos que conduce a la iglesia de Santo Domingo, creando una escena calida y tradicional.",
  },
  {
    id: "obra-006",
    nombre: "Pareja de Cisnes",
    imageName: "cisnes_pareja.jpg",
    imageSrc: "/galeria/cisnes_pareja.jpg",
    descripcion:
      "Pareja de cisnes en lago con tonos suaves rosados y azules, rodeados de flores, creando una escena romantica y luminosa con efecto brillante.",
    autor: "EnmarKarte",
    dimensiones: "57x48",
    tecnicas: [
      "pintura en diamante",
    ],
    marco: "acrilico",
    seoTitle: "Pareja de Cisnes | Pintura en diamante en galeria Enmarkarte",
    seoDescription:
      "Pareja de cisnes en lago con tonos suaves rosados y azules, rodeados de flores, creando una escena romantica y luminosa con efecto brillante.",
    alt: "Pareja de Cisnes. Pareja de cisnes en lago con tonos suaves rosados y azules, rodeados de flores, creando una escena romantica y luminosa con efecto brillante.",
  },
  {
    id: "obra-007",
    nombre: "Pareja de Cisnes verde",
    imageName: "ci.jpg",
    imageSrc: "/galeria/cisnes_pareja002.jpg",
    descripcion:
      "Pareja de cisnes rodeados de nenufares sobre aguas tranquilas, en tonos suaves y brillantes que crean una escena romantica y armoniosa.",
    autor: "EnmarKarte",
    dimensiones: "57x48",
    tecnicas: [
      "pintura en diamante",
    ],
    marco: "acrilico",
    seoTitle: "Pareja de Cisnes verde | Pintura en diamante en galeria Enmarkarte",
    seoDescription:
      "Pareja de cisnes rodeados de nenufares sobre aguas tranquilas, en tonos suaves y brillantes que crean una escena romantica y armoniosa.",
    alt: "Pareja de Cisnes verde. Pareja de cisnes rodeados de nenufares sobre aguas tranquilas, en tonos suaves y brillantes que crean una escena romantica y armoniosa.",
  },
  {
    id: "obra-008",
    nombre: "Colibri Susurro Esmeralda",
    imageName: "colibri001.jpg",
    imageSrc: "/galeria/colibri001.jpg",
    descripcion:
      "Colibri de tonos verdes y pecho rojizo posado en una rama sobre fondo rosado suave, con brillo delicado que resalta su figura elegante.",
    autor: "Umaquisa",
    dimensiones: "20.5x30",
    tecnicas: [
      "acrilico",
    ],
    marco: "",
    seoTitle: "Colibri Susurro Esmeralda | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Colibri de tonos verdes y pecho rojizo posado en una rama sobre fondo rosado suave, con brillo delicado que resalta su figura elegante.",
    alt: "Colibri Susurro Esmeralda. Colibri de tonos verdes y pecho rojizo posado en una rama sobre fondo rosado suave, con brillo delicado que resalta su figura elegante.",
  },
  {
    id: "obra-009",
    nombre: "Colibri Danza del Viento",
    imageName: "colibri002.jpg",
    imageSrc: "/galeria/colibri002.jpg",
    descripcion:
      "Colibri de cola larga en tonos verdes y azules suspendido en el aire junto a hojas, sobre fondo degradado que transmite movimiento y ligereza.",
    autor: "Umaquisa",
    dimensiones: "20.5x30",
    tecnicas: [
      "acrilico",
    ],
    marco: "",
    seoTitle: "Colibri Danza del Viento | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Colibri de cola larga en tonos verdes y azules suspendido en el aire junto a hojas, sobre fondo degradado que transmite movimiento y ligereza.",
    alt: "Colibri Danza del Viento. Colibri de cola larga en tonos verdes y azules suspendido en el aire junto a hojas, sobre fondo degradado que transmite movimiento y ligereza.",
  },
  {
    id: "obra-010",
    nombre: "Colibri Quietud del Alba",
    imageName: "colibri003.jpg",
    imageSrc: "/galeria/colibri003.jpg",
    descripcion:
      "Pequeno colibri en tonos naturales posado en una rama, con fondo claro y suave que aporta calma y destaca los detalles sutiles del plumaje.",
    autor: "Umaquisa",
    dimensiones: "20.5x30",
    tecnicas: [
      "acrilico",
    ],
    marco: "",
    seoTitle: "Colibri Quietud del Alba | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Pequeno colibri en tonos naturales posado en una rama, con fondo claro y suave que aporta calma y destaca los detalles sutiles del plumaje.",
    alt: "Colibri Quietud del Alba. Pequeno colibri en tonos naturales posado en una rama, con fondo claro y suave que aporta calma y destaca los detalles sutiles del plumaje.",
  },
  {
    id: "obra-011",
    nombre: "Colibri Ecos de la Niebla",
    imageName: "colibri004.jpg",
    imageSrc: "/galeria/colibri004.jpg",
    descripcion:
      "Colibri de colores suaves rodeado de hojas verdes sobre fondo gris texturizado, creando un ambiente sereno con contraste delicado.",
    autor: "Umaquisa",
    dimensiones: "20.5x30",
    tecnicas: [
      "acrilico",
    ],
    marco: "",
    seoTitle: "Colibri Ecos de la Niebla | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Colibri de colores suaves rodeado de hojas verdes sobre fondo gris texturizado, creando un ambiente sereno con contraste delicado.",
    alt: "Colibri Ecos de la Niebla. Colibri de colores suaves rodeado de hojas verdes sobre fondo gris texturizado, creando un ambiente sereno con contraste delicado.",
  },
  {
    id: "obra-012",
    nombre: "Colibri Alma Tropical",
    imageName: "colibri005.jpg",
    imageSrc: "/galeria/colibri005.jpg",
    descripcion:
      "Colibri de colores intensos con pinceladas visibles posado en una rama, sobre fondo abstracto que resalta su energia y caracter exotico.",
    autor: "Umaquisa",
    dimensiones: "20.5x30",
    tecnicas: [
      "acrilico",
    ],
    marco: "",
    seoTitle: "Colibri Alma Tropical | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Colibri de colores intensos con pinceladas visibles posado en una rama, sobre fondo abstracto que resalta su energia y caracter exotico.",
    alt: "Colibri Alma Tropical. Colibri de colores intensos con pinceladas visibles posado en una rama, sobre fondo abstracto que resalta su energia y caracter exotico.",
  },
  {
    id: "obra-013",
    nombre: "Espejo grande",
    imageName: "espejo_grande.jpg",
    imageSrc: "/galeria/espejo_grande.jpg",
    descripcion:
      "Espejo de gran formato con marco ancho en tonos madera y dorado, con detalles tallados y patron decorativo que aporta elegancia clasica.",
    autor: "",
    dimensiones: "110x81.5",
    tecnicas: [
      "espejo",
    ],
    marco: "acrilico",
    seoTitle: "Espejo grande | Espejo en galeria Enmarkarte",
    seoDescription:
      "Espejo de gran formato con marco ancho en tonos madera y dorado, con detalles tallados y patron decorativo que aporta elegancia clasica.",
    alt: "Espejo grande. Espejo de gran formato con marco ancho en tonos madera y dorado, con detalles tallados y patron decorativo que aporta elegancia clasica.",
  },
  {
    id: "obra-014",
    nombre: "Torre Eiffel",
    imageName: "francia.jpg",
    imageSrc: "/galeria/francia.jpg",
    descripcion:
      "Escena urbana con la Torre Eiffel al fondo, puente curvo sobre un canal y arboles otonales en tonos calidos reflejados en el agua.",
    autor: "Gregorio Camacho",
    dimensiones: "34x60",
    tecnicas: [
      "acrilico",
    ],
    marco: "",
    seoTitle: "Torre Eiffel | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Escena urbana con la Torre Eiffel al fondo, puente curvo sobre un canal y arboles otonales en tonos calidos reflejados en el agua.",
    alt: "Torre Eiffel. Escena urbana con la Torre Eiffel al fondo, puente curvo sobre un canal y arboles otonales en tonos calidos reflejados en el agua.",
  },
  {
    id: "obra-015",
    nombre: "Bodegon Geometrico Dorado",
    imageName: "frutas_horizontal.jpg",
    imageSrc: "/galeria/frutas_horizontal.jpg",
    descripcion:
      "Bodegon con sandia, pera y una vasija metalica, en colores intensos y texturas marcadas que crean una composicion moderna y vibrante horizontal.",
    autor: "Luis Ayo",
    dimensiones: "60x80",
    tecnicas: [
      "oleo",
    ],
    marco: "",
    seoTitle: "Bodegon Geometrico Dorado | Oleo en galeria Enmarkarte",
    seoDescription:
      "Bodegon con sandia, pera y una vasija metalica, en colores intensos y texturas marcadas que crean una composicion moderna y vibrante horizontal.",
    alt: "Bodegon Geometrico Dorado. Bodegon con sandia, pera y una vasija metalica, en colores intensos y texturas marcadas que crean una composicion moderna y vibrante horizontal.",
  },
  {
    id: "obra-016",
    nombre: "Bodegon Geometrico Luminico",
    imageName: "frutas_vertical.jpg",
    imageSrc: "/galeria/frutas_vertical.jpg",
    descripcion:
      "Bodegon con sandia, pera y una vasija metalica, en colores intensos y texturas marcadas que crean una composicion moderna y vibrante vertical.",
    autor: "Luis Ayo",
    dimensiones: "80x60",
    tecnicas: [
      "oleo",
    ],
    marco: "",
    seoTitle: "Bodegon Geometrico Luminico | Oleo en galeria Enmarkarte",
    seoDescription:
      "Bodegon con sandia, pera y una vasija metalica, en colores intensos y texturas marcadas que crean una composicion moderna y vibrante vertical.",
    alt: "Bodegon Geometrico Luminico. Bodegon con sandia, pera y una vasija metalica, en colores intensos y texturas marcadas que crean una composicion moderna y vibrante vertical.",
  },
  {
    id: "obra-017",
    nombre: "Lirios",
    imageName: "lirios.jpg",
    imageSrc: "/galeria/lirios.jpg",
    descripcion:
      "Dos composiciones de flores tipo lirio en tonos calidos y violetas, acompanadas de libelulas, con efecto brillante y textura marcada en fondo oscuro.",
    autor: "",
    dimensiones: "72.5x52",
    tecnicas: [
      "pintura en diamante",
    ],
    marco: "acrilico",
    seoTitle: "Lirios | Pintura en diamante en galeria Enmarkarte",
    seoDescription:
      "Dos composiciones de flores tipo lirio en tonos calidos y violetas, acompanadas de libelulas, con efecto brillante y textura marcada en fondo oscuro.",
    alt: "Lirios. Dos composiciones de flores tipo lirio en tonos calidos y violetas, acompanadas de libelulas, con efecto brillante y textura marcada en fondo oscuro.",
  },
  {
    id: "obra-018",
    nombre: "Balcon al Panecillo",
    imageName: "maqueta_balcon.jpg",
    imageSrc: "/galeria/maqueta_balcon.jpg",
    descripcion:
      "Fachada amarilla con balcon y macetas, puertas abiertas revelan una calle pintoresca en perspectiva, combinando relieve y pintura en una escena calida.",
    autor: "Mesias",
    dimensiones: "55x25.5",
    tecnicas: [
      "tridimensional",
    ],
    marco: "",
    seoTitle: "Balcon al Panecillo | Tridimensional en galeria Enmarkarte",
    seoDescription:
      "Fachada amarilla con balcon y macetas, puertas abiertas revelan una calle pintoresca en perspectiva, combinando relieve y pintura en una escena calida.",
    alt: "Balcon al Panecillo. Fachada amarilla con balcon y macetas, puertas abiertas revelan una calle pintoresca en perspectiva, combinando relieve y pintura en una escena calida.",
  },
  {
    id: "obra-019",
    nombre: "Vida Andina en Miniatura",
    imageName: "mini_arte.jpg",
    imageSrc: "/galeria/mini_arte.jpg",
    descripcion:
      "Cuatro escenas andinas con montanas, personajes y animales, colores vivos y formas simples que muestran vida rural en composiciones pequenas y alegres.",
    autor: "",
    dimensiones: "27x30",
    tecnicas: [
      "acrilico",
    ],
    marco: "acrilico",
    seoTitle: "Vida Andina en Miniatura | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Cuatro escenas andinas con montanas, personajes y animales, colores vivos y formas simples que muestran vida rural en composiciones pequenas y alegres.",
    alt: "Vida Andina en Miniatura. Cuatro escenas andinas con montanas, personajes y animales, colores vivos y formas simples que muestran vida rural en composiciones pequenas y alegres.",
  },
  {
    id: "obra-020",
    nombre: "Indigena con bebe",
    imageName: "mujer_indigena01.jpg",
    imageSrc: "/galeria/mujer_indigena01.jpg",
    descripcion:
      "Mujer andina de espaldas con nino, envueltos en manta roja y colores vivos, resaltan sobre un fondo calido que ilumina la escena con sensacion de calma.",
    autor: "Mesias",
    dimensiones: "75x48",
    tecnicas: [
      "oleo",
    ],
    marco: "acrilico",
    seoTitle: "Indigena con bebe | Oleo en galeria Enmarkarte",
    seoDescription:
      "Mujer andina de espaldas con nino, envueltos en manta roja y colores vivos, resaltan sobre un fondo calido que ilumina la escena con sensacion de calma.",
    alt: "Indigena con bebe. Mujer andina de espaldas con nino, envueltos en manta roja y colores vivos, resaltan sobre un fondo calido que ilumina la escena con sensacion de calma.",
  },
  {
    id: "obra-021",
    nombre: "Indigena con flores",
    imageName: "mujer_indigena002.jpg",
    imageSrc: "/galeria/mujer_indigena002.jpg",
    descripcion:
      "Mujer andina de espaldas con flores envueltas en manta roja, colores vivos destacan sobre fondo calido que ilumina la escena con serenidad.",
    autor: "Mesias",
    dimensiones: "80x50.5",
    tecnicas: [
      "oleo",
    ],
    marco: "acrilico",
    seoTitle: "Indigena con flores | Oleo en galeria Enmarkarte",
    seoDescription:
      "Mujer andina de espaldas con flores envueltas en manta roja, colores vivos destacan sobre fondo calido que ilumina la escena con serenidad.",
    alt: "Indigena con flores. Mujer andina de espaldas con flores envueltas en manta roja, colores vivos destacan sobre fondo calido que ilumina la escena con serenidad.",
  },
  {
    id: "obra-022",
    nombre: "Paisaje volcan",
    imageName: "paisaje_bolcan.jpg",
    imageSrc: "/galeria/paisaje_bolcan.jpg",
    descripcion:
      "Paisaje andino con volcan al fondo, lago sereno y figuras rurales en primer plano, pinceladas suaves y colores claros transmiten calma natural.",
    autor: "",
    dimensiones: "19.4x24.5",
    tecnicas: [
      "acrilico",
    ],
    marco: "acrilico",
    seoTitle: "Paisaje volcan | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Paisaje andino con volcan al fondo, lago sereno y figuras rurales en primer plano, pinceladas suaves y colores claros transmiten calma natural.",
    alt: "Paisaje volcan. Paisaje andino con volcan al fondo, lago sereno y figuras rurales en primer plano, pinceladas suaves y colores claros transmiten calma natural.",
  },
  {
    id: "obra-023",
    nombre: "Panecillo con volcan",
    imageName: "paisaje_quito.jpg",
    imageSrc: "/galeria/paisaje_quito.jpg",
    descripcion:
      "Paisaje con el Panecillo en primer plano y un volcan al fondo, rodeado de cielo claro y vegetacion, con figuras pequenas que aportan vida a la escena.",
    autor: "",
    dimensiones: "26x21",
    tecnicas: [
      "acrilico",
    ],
    marco: "acrilico",
    seoTitle: "Panecillo con volcan | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Paisaje con el Panecillo en primer plano y un volcan al fondo, rodeado de cielo claro y vegetacion, con figuras pequenas que aportan vida a la escena.",
    alt: "Panecillo con volcan. Paisaje con el Panecillo en primer plano y un volcan al fondo, rodeado de cielo claro y vegetacion, con figuras pequenas que aportan vida a la escena.",
  },
  {
    id: "obra-024",
    nombre: "Papiro Reina del Nilo entre Jeroglificos",
    imageName: "papiro_01.jpg",
    imageSrc: "/galeria/papiro_01.jpg",
    descripcion:
      "Escena egipcia con figuras estilizadas y jeroglificos en tonos dorados y negros, rodeada por un marco grueso dorado con relieves decorativos clasicos.",
    autor: "Adel Ghabour",
    dimensiones: "53.5x44",
    tecnicas: [
      "papiro",
      "luminiscente",
    ],
    marco: "acrilico",
    seoTitle: "Papiro Reina del Nilo entre Jeroglificos | Papiro en galeria Enmarkarte",
    seoDescription:
      "Escena egipcia con figuras estilizadas y jeroglificos en tonos dorados y negros, rodeada por un marco grueso dorado con relieves decorativos clasicos.",
    alt: "Papiro Reina del Nilo entre Jeroglificos. Escena egipcia con figuras estilizadas y jeroglificos en tonos dorados y negros, rodeada por un marco grueso dorado con relieves decorativos clasicos.",
  },
  {
    id: "obra-025",
    nombre: "Papiro Triada Sagrada bajo Alas de Luz",
    imageName: "papiro_02.jpg",
    imageSrc: "/galeria/papiro_02.jpg",
    descripcion:
      "Figuras egipcias de perfil junto a jeroglificos y simbolos sagrados, con detalles luminiscentes, bajo un ave alada, en marco dorado envejecido.",
    autor: "Adel Ghabour",
    dimensiones: "56x66",
    tecnicas: [
      "papiro",
      "luminiscente",
    ],
    marco: "acrilico",
    seoTitle: "Papiro Triada Sagrada bajo Alas de Luz | Papiro en galeria Enmarkarte",
    seoDescription:
      "Figuras egipcias de perfil junto a jeroglificos y simbolos sagrados, con detalles luminiscentes, bajo un ave alada, en marco dorado envejecido.",
    alt: "Papiro Triada Sagrada bajo Alas de Luz. Figuras egipcias de perfil junto a jeroglificos y simbolos sagrados, con detalles luminiscentes, bajo un ave alada, en marco dorado envejecido.",
  },
  {
    id: "obra-026",
    nombre: "Papiro Encuentro Sagrado en Luz Eterna",
    imageName: "papiro_03.jpg",
    imageSrc: "/galeria/papiro_03.jpg",
    descripcion:
      "Escena egipcia con dos figuras en gesto intimo rodeadas de jeroglificos, con detalles luminiscentes y marco dorado ancho de acabado envejecido.",
    autor: "Adel Ghabour",
    dimensiones: "56x66",
    tecnicas: [
      "papiro",
      "luminiscente",
    ],
    marco: "acrilico",
    seoTitle: "Papiro Encuentro Sagrado en Luz Eterna | Papiro en galeria Enmarkarte",
    seoDescription:
      "Escena egipcia con dos figuras en gesto intimo rodeadas de jeroglificos, con detalles luminiscentes y marco dorado ancho de acabado envejecido.",
    alt: "Papiro Encuentro Sagrado en Luz Eterna. Escena egipcia con dos figuras en gesto intimo rodeadas de jeroglificos, con detalles luminiscentes y marco dorado ancho de acabado envejecido.",
  },
  {
    id: "obra-027",
    nombre: "Papiro Ofrenda al Disco Solar",
    imageName: "papiro_04.jpg",
    imageSrc: "/galeria/papiro_04.jpg",
    descripcion:
      "Figura egipcia ofrece simbolos bajo rayos solares y jeroglificos, acompanada por asistentes, en tonos calidos sobre papiro con marco dorado sencillo.",
    autor: "Amoun",
    dimensiones: "40.5x61",
    tecnicas: [
      "papiro",
    ],
    marco: "dorado",
    seoTitle: "Papiro Ofrenda al Disco Solar | Papiro en galeria Enmarkarte",
    seoDescription:
      "Figura egipcia ofrece simbolos bajo rayos solares y jeroglificos, acompanada por asistentes, en tonos calidos sobre papiro con marco dorado sencillo.",
    alt: "Papiro Ofrenda al Disco Solar. Figura egipcia ofrece simbolos bajo rayos solares y jeroglificos, acompanada por asistentes, en tonos calidos sobre papiro con marco dorado sencillo.",
  },
  {
    id: "obra-028",
    nombre: "Pareja caminando",
    imageName: "pareja.jpg",
    imageSrc: "/galeria/pareja.jpg",
    descripcion:
      "Pareja camina bajo arboles de colores vibrantes en un parque lluvioso, reflejos en el suelo y faroles encendidos, enmarcado con marco plateado elegante.",
    autor: "Gregorio Camacho",
    dimensiones: "45.5x66",
    tecnicas: [
      "acrilico",
    ],
    marco: "acrilico",
    seoTitle: "Pareja caminando | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Pareja camina bajo arboles de colores vibrantes en un parque lluvioso, reflejos en el suelo y faroles encendidos, enmarcado con marco plateado elegante.",
    alt: "Pareja caminando. Pareja camina bajo arboles de colores vibrantes en un parque lluvioso, reflejos en el suelo y faroles encendidos, enmarcado con marco plateado elegante.",
  },
  {
    id: "obra-029",
    nombre: "Pareja colibri",
    imageName: "pareja_colibri.jpg",
    imageSrc: "/galeria/pareja_colibri.jpg",
    descripcion:
      "Dos colibries de vivos colores flotan entre flores rosadas y blancas, sobre un fondo verde luminoso con pinceladas suaves y atmosfera alegre.",
    autor: "Gregorio Camacho",
    dimensiones: "34x60",
    tecnicas: [
      "acrilico",
    ],
    marco: "",
    seoTitle: "Pareja colibri | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Dos colibries de vivos colores flotan entre flores rosadas y blancas, sobre un fondo verde luminoso con pinceladas suaves y atmosfera alegre.",
    alt: "Pareja colibri. Dos colibries de vivos colores flotan entre flores rosadas y blancas, sobre un fondo verde luminoso con pinceladas suaves y atmosfera alegre.",
  },
  {
    id: "obra-030",
    nombre: "Bajo la lluvia encendida",
    imageName: "pareja_lluvia.jpg",
    imageSrc: "/galeria/pareja_lluvia.jpg",
    descripcion:
      "Pareja camina bajo la lluvia con paraguas por un sendero iluminado, rodeado de arboles de colores intensos y faroles reflejados en el suelo mojado.",
    autor: "Gregorio Camacho",
    dimensiones: "45.5x66",
    tecnicas: [
      "acrilico",
    ],
    marco: "acrilico",
    seoTitle: "Bajo la lluvia encendida | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Pareja camina bajo la lluvia con paraguas por un sendero iluminado, rodeado de arboles de colores intensos y faroles reflejados en el suelo mojado.",
    alt: "Bajo la lluvia encendida. Pareja camina bajo la lluvia con paraguas por un sendero iluminado, rodeado de arboles de colores intensos y faroles reflejados en el suelo mojado.",
  },
  {
    id: "obra-031",
    nombre: "Umbral de luz y flores",
    imageName: "pasillo.jpg",
    imageSrc: "/galeria/pasillo.jpg",
    descripcion:
      "Fachada calida con puerta arqueada y ventanas con flores, rodeada de vegetacion; el marco dorado resalta la obra con un acabado elegante y clasico.",
    autor: "D'Franco",
    dimensiones: "62x82",
    tecnicas: [
      "oleo",
    ],
    marco: "acrilico",
    seoTitle: "Umbral de luz y flores | Oleo en galeria Enmarkarte",
    seoDescription:
      "Fachada calida con puerta arqueada y ventanas con flores, rodeada de vegetacion; el marco dorado resalta la obra con un acabado elegante y clasico.",
    alt: "Umbral de luz y flores. Fachada calida con puerta arqueada y ventanas con flores, rodeada de vegetacion; el marco dorado resalta la obra con un acabado elegante y clasico.",
  },
  {
    id: "obra-032",
    nombre: "Pavo real",
    imageName: "pavo_real.jpg",
    imageSrc: "/galeria/pavo_real.jpg",
    descripcion:
      "Pavo real de tonos purpura y rosados formado por pequenas piezas brillantes, centrado sobre fondo suave; marco blanco ancho con borde interno rojizo elegante.",
    autor: "EnmarKarte",
    dimensiones: "59x50",
    tecnicas: [
      "pintura en diamante",
    ],
    marco: "acrilico",
    seoTitle: "Pavo real | Pintura en diamante en galeria Enmarkarte",
    seoDescription:
      "Pavo real de tonos purpura y rosados formado por pequenas piezas brillantes, centrado sobre fondo suave; marco blanco ancho con borde interno rojizo elegante.",
    alt: "Pavo real. Pavo real de tonos purpura y rosados formado por pequenas piezas brillantes, centrado sobre fondo suave; marco blanco ancho con borde interno rojizo elegante.",
  },
  {
    id: "obra-033",
    nombre: "Puerto de barcos",
    imageName: "puerto_barcos.jpg",
    imageSrc: "/galeria/puerto_barcos.jpg",
    descripcion:
      "Barcos amarrados junto a una casa de madera en un muelle tranquilo, con reflejos suaves en el agua y cielo claro; marco de madera calido y sobrio.",
    autor: "L.Corsari",
    dimensiones: "20.5x30",
    tecnicas: [
      "litografia",
    ],
    marco: "madera",
    seoTitle: "Puerto de barcos | Litografia en galeria Enmarkarte",
    seoDescription:
      "Barcos amarrados junto a una casa de madera en un muelle tranquilo, con reflejos suaves en el agua y cielo claro; marco de madera calido y sobrio.",
    alt: "Puerto de barcos. Barcos amarrados junto a una casa de madera en un muelle tranquilo, con reflejos suaves en el agua y cielo claro; marco de madera calido y sobrio.",
  },
  {
    id: "obra-034",
    nombre: "Tigre blanco",
    imageName: "tigra_blanco.jpg",
    imageSrc: "/galeria/tigra_blanco.jpg",
    descripcion:
      "Retrato frontal de tigre blanco con ojos azules y nariz rosada, formado por pequenos puntos brillantes; marco claro ancho con acabado suave.",
    autor: "EnmarKarte",
    dimensiones: "35x35",
    tecnicas: [
      "pintura en diamante",
    ],
    marco: "acrilico",
    seoTitle: "Tigre blanco | Pintura en diamante en galeria Enmarkarte",
    seoDescription:
      "Retrato frontal de tigre blanco con ojos azules y nariz rosada, formado por pequenos puntos brillantes; marco claro ancho con acabado suave.",
    alt: "Tigre blanco. Retrato frontal de tigre blanco con ojos azules y nariz rosada, formado por pequenos puntos brillantes; marco claro ancho con acabado suave.",
  },
  {
    id: "obra-035",
    nombre: "Rincon florido al atardecer",
    imageName: "vecindario.jpg",
    imageSrc: "/galeria/vecindario.jpg",
    descripcion:
      "Fachadas coloridas de casas con balcones, flores rosadas y luz calida; puertas de madera y cielo azul, lienzo sin marco con bordes pintados.",
    autor: "Gregorio Camacho",
    dimensiones: "20.5x30",
    tecnicas: [
      "acrilico",
    ],
    marco: "",
    seoTitle: "Rincon florido al atardecer | Acrilico en galeria Enmarkarte",
    seoDescription:
      "Fachadas coloridas de casas con balcones, flores rosadas y luz calida; puertas de madera y cielo azul, lienzo sin marco con bordes pintados.",
    alt: "Rincon florido al atardecer. Fachadas coloridas de casas con balcones, flores rosadas y luz calida; puertas de madera y cielo azul, lienzo sin marco con bordes pintados.",
  },
];

export function getArtworkByImageName(imageName?: string | null) {
  if (!imageName) return undefined;
  return galleryArtworks.find((artwork) => artwork.imageName.toLowerCase() === imageName.toLowerCase());
}

export function getArtworkProductName(artwork: Pick<GalleryArtwork, "nombre">) {
  return artwork.nombre.toLowerCase().startsWith("cuadro ") ? artwork.nombre : `Cuadro ${artwork.nombre}`;
}

export function getArtworkPriceLabel(artwork: Pick<GalleryArtwork, "precio">) {
  if (typeof artwork.precio === "number") {
    return new Intl.NumberFormat("es-EC", {
      style: "currency",
      currency: galleryProductOffer.priceCurrency,
      maximumFractionDigits: 0,
    }).format(artwork.precio);
  }

  return galleryProductOffer.fallbackPriceLabel;
}

export function getArtworkCanonicalPath(artwork: Pick<GalleryArtwork, "imageName">) {
  return `/galeria?img=${encodeURIComponent(artwork.imageName)}`;
}

export function getCategoryFromSearchParam(category?: string | null) {
  if (!category) return "todas";
  const decoded = decodeURIComponent(category).trim().toLowerCase();
  if (decoded === "todas") return "todas";
  return galleryConfig.tecnicas.find((item) => item.toLowerCase() === decoded) ?? "todas";
}
