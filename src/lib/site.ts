export const siteConfig = {
  name: "Enmarkarte – De Chávez Santamaría",
  shortName: "Enmarkarte",
  description:
    "Enmarcado profesional, restauración y conservación de arte desde 1973 en Quito, Ecuador.",
  url: "https://enmarkatesk.com",
  locale: "es_EC",
  phone: "+593 999905422",
  phoneHref: "tel:+593999905422",
  whatsappUrl: "https://wa.me/593999905422",
  email: "enmarkarte1973@gmail.com",
  emailHref: "mailto:enmarkarte1973@gmail.com",
  address: "Venezuela 13-70, 170130 Quito, Ecuador",
  latitude: -0.2169329,
  longitude: -78.5087332,
  mapUrl:
    "https://maps.app.goo.gl/C2c15g7i7syt3Snm7",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d249.36185702132204!2d-78.5090248!3d-0.2169727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59ba3f0939633%3A0x6a72533df02f3fd8!2sEnmarKarte!5e0!3m2!1ses!2sec!4v1777497963706!5m2!1ses!2sec",
  socialLinks: [
    { label: "Facebook", href: "https://www.facebook.com/enmarcartedechavezsantamaria" },
    { label: "TikTok", href: "https://www.tiktok.com/@enmarkarte" },
    { label: "Instagram", href: "https://www.instagram.com/creationskathe/" },
    { label: "Pinterest", href: "https://pin.it/5jA8IEN2K" },
  ],
};

export const navItems = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const footerContactLinks = [
  { href: siteConfig.mapUrl, label: "Ubicación" },
  { href: siteConfig.phoneHref, label: "Teléfono" },
  { href: siteConfig.whatsappUrl, label: "WhatsApp" },
  { href: siteConfig.emailHref, label: "Email" },
] as const;
