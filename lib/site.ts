export const nav = [
  { label: "HOME", href: "/" },
  { label: "ABOUT PROJECT", href: "/pages/about" },
  { label: "PARTNERS", href: "/pages/partners" },
];

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/events/1328492025483554/1328492035483553/" },
  { name: "Instagram", href: "https://www.instagram.com/quemmekh" },
  { name: "Youtube", href: "https://www.youtube.com/channel/UCPyXplGQYjs5kbXK80YGrHA" },
] as const;

export const aboutSlides = Array.from({ length: 8 }, (_, i) => `/images/about/slide-${i + 1}.jpg`);

const p = (file: string) => `/images/partners/${file}`;

export const partners = [
  { name: "Fabrika Tbilisi", href: "https://www.instagram.com/fabrika_tbilisi/", src: p("FABRIKA_LOGO-01-2-768x255.jpg-2.webp") },
  { name: "UNFPA", href: "https://www.unfpa.org/", src: p("unfpa.png") },
  { name: "3D Lab", href: "https://3d-lab.ge/", src: p("Light_Color_5_png.webp") },
  { name: "Danish Cultural Institute", href: "https://www.danishculture.com/our-projects/", src: p("Dansk-Kulturinstitut-logo_ENG_CMYK-jpg-1_jpg.webp") },
  { name: "Factory Culture Hub", href: "https://factorytbilisi.com/", src: p("images-4.png") },
  { name: "Khazaradze Family Foundation", href: "https://www.facebook.com/profile.php?id=61554787958029", src: p("468701867_122188680038085805_8243275279026791668_n.jpg") },
  { name: "AT", href: "https://at.ge/", src: p("AT_transparent-1.png") },
  { name: "JPG Printshop", href: "https://www.instagram.com/printshop_jpg/", src: p("images-5.png") },
  { name: "Whyte Magazine", href: "https://www.instagram.com/whytemagazine/", src: p("669436221_18043849733769746_4171520632275439390_n.jpg") },
  { name: "Billboard Georgia", href: "https://billboard.com.ge/", src: p("309409699_108244558717792_8574760268249157713_n.jpg") },
  { name: "Tape Magazine", href: "https://www.instagram.com/tape_magazine/", src: p("hghgh.png") },
  { name: "Grillz Culture", href: "https://www.instagram.com/grillz_culture/", src: p("481131452_639063472155004_7638820033626191880_n.jpg") },
];
