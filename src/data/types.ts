export type SystemStatus = "LIVE" | "BETA" | "IN_DEVELOPMENT" | "COMING_SOON";

/**
 * "mobile" cobre um app que existe em Android e/ou iOS (ver `links`).
 * "whatsapp" é usado quando a interface principal do produto é um bot/fluxo via WhatsApp (ex: Dita).
 */
export type InterfacePlatform =
  | "mobile"
  | "web"
  | "api"
  | "whatsapp"
  | "desktop";

export interface InterfaceLinks {
  playStore?: string;
  appStore?: string;
  web?: string;
  url?: string;
}

export interface SystemInterface {
  id: string;
  label: string;
  platform: InterfacePlatform;
  status?: SystemStatus;
  links?: InterfaceLinks;
}

/**
 * Uma imagem dentro da galeria de um produto (usada no carrossel de destaque).
 * `file` é só o NOME do arquivo — ele é resolvido para `/products/<slug>/<file>`
 * (pasta `public/products/<slug>/`). Ver `src/data/media.ts`.
 */
export interface SystemImage {
  file: string;
  alt: string;
}

export interface SystemMedia {
  /** Ícone/logo quadrado do produto (ex: "icon.png"). Usado como selo e como fallback do carrossel. */
  icon?: string;
  /** Imagens do carrossel de destaque, em ordem de exibição. */
  gallery: SystemImage[];
}

export interface AxisSystem {
  id: number;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  /** Texto mais longo, usado só no card grande de destaque. Se ausente, cai para `description`. */
  longDescription?: string;
  status: SystemStatus;
  /** Marca o sistema como destaque: entra no carrossel grande no topo do site. */
  featured: boolean;
  technologies: string[];
  highlights: string[];
  interfaces: SystemInterface[];
  primaryLink?: string;
  accentColor?: string;
  media?: SystemMedia;
}
