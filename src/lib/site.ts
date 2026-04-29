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
    "https://www.google.com/maps/place/Venezuela+13-70,+170130+Quito/@-0.21697,-78.510615,488m/data=!3m1!1e3!4m14!1m7!3m6!1s0x91d59ba3f0939633:0x6a72533df02f3fd8!2sEnmarKarte!8m2!3d-0.216966!4d-78.5089542!16s%2Fg%2F11rqy073m7!3m5!1s0x91d59a2624fbad8f:0xdbdf1798aab650f9!8m2!3d-0.2169329!4d-78.5087332!16s%2Fg%2F11hbnt71xp?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1183.1700793142186!2d-78.509348997411!3d-0.21674067276678743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a2624fbad8f%3A0xdbdf1798aab650f9!2sVenezuela%2013-70%2C%20170130%20Quito!5e1!3m2!1ses!2sec!4v1777483026036!5m2!1ses!2sec",
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
