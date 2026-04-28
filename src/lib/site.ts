export const siteConfig = {
  name: "Enmarkarte – De Chávez Santamaría",
  shortName: "Enmarkarte",
  description:
    "Enmarcado profesional, restauración y conservación de arte desde 1973 en Ciudad de México.",
  url: "https://www.enmarkarte.com",
  locale: "es_MX",
  phone: "+52 (55) 1234 5678",
  email: "contacto@enmarkarte.com",
  address: "Calle de la Artesanía 45, Col. San Ángel, Ciudad de México",
};

export const navItems = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const footerContactLinks = [
  { href: "/contacto", label: "Ubicación" },
  { href: "/contacto", label: "Teléfono" },
  { href: "mailto:contacto@enmarkarte.com", label: "Email" },
] as const;
