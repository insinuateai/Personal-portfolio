export interface Product {
  name: string;
  description: string;
  url: string;
  status: "live" | "coming-soon";
}

export const products: Product[] = [
  {
    name: "Cobound",
    description: "Formally verified multi-agent coordination",
    url: "https://cobound.dev",
    status: "live",
  },
  {
    name: "Prova",
    description: "AI reasoning certificates with mathematical proof",
    url: "https://prova.cobound.dev",
    status: "live",
  },
  {
    name: "Mirror",
    description: "Proactive self-reflection AI",
    url: "https://mirror.cobound.dev",
    status: "live",
  },
  {
    name: "Insinuate.ai",
    description: "AI consultancy and research",
    url: "https://insinuate.ai",
    status: "live",
  },
  {
    name: "amorpm",
    description: "amorpm.com",
    url: "https://amorpm.com",
    status: "live",
  },
  {
    name: "Genuine",
    description: "Provably authentic content",
    url: "#",
    status: "coming-soon",
  },
  {
    name: "Auditchain",
    description: "Continuous compliance verification",
    url: "#",
    status: "coming-soon",
  },
];

export const socialLinks = {
  email: "kian@cobound.dev",
  github: "https://github.com/insinuateai",
};

export const siteConfig = {
  name: "Kian",
  title: "Kian — Founder. Mathematician. Builder.",
  description:
    "Solo founder building at the intersection of formal mathematics and AI infrastructure. Creator of Cobound, Prova, Mirror, and more.",
  url: "https://kiandevelops.com",
};

export const navSections = [
  { id: "hero", label: "Top" },
  { id: "thesis", label: "Thesis" },
  { id: "products", label: "Products" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
] as const;
