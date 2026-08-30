import type { AxisSystem } from "./types";

/**
 * Portfólio de produtos da M.A. AXIS.
 *
 * Cada item é um SISTEMA, que pode ter várias INTERFACES (apps mobile, web,
 * API, WhatsApp, etc). O caso mais completo hoje é o Mostraai, com 3 apps
 * mobile + 1 web + backend.
 *
 * `featured: true` coloca o sistema no carrossel grande do topo do site —
 * use só para os produtos que merecem mais destaque agora (hoje: Mostraai e
 * Dita, como referência de preenchimento).
 *
 * `theme` é obrigatório e alimenta a rota dedicada `/<slug>`
 * (src/pages/product) e o acento do carrossel de destaque — são cores em hex
 * puro (não tokens do tema global), para cada produto poder ter uma
 * identidade visual própria. Ajuste para a paleta real de cada produto
 * quando ela existir.
 *
 * IMAGENS: coloque os arquivos em `public/products/<slug>/` e referencie só
 * o nome do arquivo em `media.icon` / `media.gallery[].file` (ver
 * `src/data/media.ts` e `src/data/types.ts`). Sem imagens, o carrossel e a
 * página do produto usam automaticamente um fallback com o ícone/inicial.
 *
 * TODO (preencher/ajustar):
 * - Nomes reais dos 3 apps mobile do Mostraai (estão como placeholder abaixo).
 * - Links de Play Store / App Store de cada app (estão como "#").
 * - Imagens reais em `public/products/mostraai/` e `public/products/dita/`
 *   (as galerias abaixo estão vazias de propósito — preencha `media.gallery`).
 * - Interfaces reais de Vox Obscura e Aptivon conforme forem definidas.
 */
export const axisSystems: AxisSystem[] = [
  {
    id: 1,
    slug: "mostraai",
    name: "Mostraai",
    category: "Marketplace de Criadores",
    tagline: "Sua vitrine digital, do jeito certo.",
    description:
      "Ecossistema onde criadores exibem e monetizam seus trabalhos com uma experiência mobile-first, hoje em fase beta com usuários reais.",
    longDescription:
      "O Mostraai é o produto mais maduro do nosso portfólio: um ecossistema completo, com apps próprios para criadores e público, plataforma web e backend dedicado, já validado com usuários reais em fase beta.",
    status: "BETA",
    featured: true,
    technologies: ["React Native", "NestJS", "ReactJs", "PostgreSQL"],
    highlights: [
      "Onboarding em menos de 60 segundos",
      "Ferramentas de monetização integradas",
      "Analytics em tempo real para o criador",
    ],
    primaryLink: "https://mostraai.app.br",
    theme: {
      primary: "#00D1FF",
      secondary: "#6E44FF",
      background: "#04141A",
      surface: "#0A1F26",
      text: "#FFFFFF",
    },
    media: {
      icon: undefined, // TODO: ex. "icon.png" dentro de public/products/mostraai/
      gallery: [
        // TODO: adicionar imagens reais, ex:
        // { file: "screenshot-1.png", alt: "Feed de descoberta do Mostraai" },
        // { file: "screenshot-2.png", alt: "Perfil de um criador no Mostraai" },
      ],
    },
    interfaces: [
      {
        id: "mostraai-app-1",
        label: "App Mobile 1 (nome pendente)",
        platform: "mobile",
        status: "BETA",
        links: { playStore: "#", appStore: "#" },
      },
      {
        id: "mostraai-app-2",
        label: "App Mobile 2 (nome pendente)",
        platform: "mobile",
        status: "BETA",
        links: { playStore: "#", appStore: "#" },
      },
      {
        id: "mostraai-app-3",
        label: "App Mobile 3 (nome pendente)",
        platform: "mobile",
        status: "BETA",
        links: { playStore: "#", appStore: "#" },
      },
      {
        id: "mostraai-web",
        label: "Plataforma Web",
        platform: "web",
        status: "BETA",
        links: { web: "https://mostraai.app.br" },
      },
      {
        id: "mostraai-api",
        label: "Backend / API",
        platform: "api",
        status: "BETA",
      },
    ],
  },
  {
    id: 2,
    slug: "vox-obscura",
    name: "Vox Obscura",
    category: "Entretenimento",
    tagline: "Em desenvolvimento — em breve.",
    description: "Entretenimento de uma forma jamais vista antes...",
    status: "IN_DEVELOPMENT",
    featured: false,
    technologies: ["React Native", "NestJS", "PostgreSQL"],
    highlights: ["Detalhes em breve"],
    theme: {
      primary: "#8B5CF6",
      secondary: "#FF3D81",
      background: "#120A1F",
      surface: "#1B1230",
      text: "#FFFFFF",
    },
    interfaces: [
      {
        id: "vox-obscura-app",
        label: "App Mobile",
        platform: "mobile",
        status: "IN_DEVELOPMENT",
        links: { playStore: "#", appStore: "#" },
      },
      {
        id: "vox-obscura-api",
        label: "Backend / API",
        platform: "api",
        status: "IN_DEVELOPMENT",
      },
    ],
  },
  {
    id: 3,
    slug: "aptivon",
    name: "Aptivon",
    category: "HR Tech",
    tagline: "Gestão de RH nunca foi tão fácil.",
    description:
      "Plataforma que simplifica a gestão de recursos humanos, desde recrutamento até avaliação de desempenho.",
    status: "IN_DEVELOPMENT",
    featured: false,
    technologies: ["Ruby on Rails", "ReactJs", "PostgreSQL"],
    highlights: [
      "Testes customizados",
      "Gestão de desempenho simplificada",
      "Relatórios detalhados para a equipe de RH",
    ],
    theme: {
      primary: "#D4AF37",
      secondary: "#00D1FF",
      background: "#1A1508",
      surface: "#241C0D",
      text: "#FFFFFF",
    },
    interfaces: [
      {
        id: "aptivon-web",
        label: "Painel Web",
        platform: "web",
        status: "IN_DEVELOPMENT",
        links: { url: "#" },
      },
      {
        id: "aptivon-api",
        label: "Backend / API",
        platform: "api",
        status: "IN_DEVELOPMENT",
      },
    ],
  },
  {
    id: 4,
    slug: "dita",
    name: "Dita",
    category: "ERP Conversacional",
    tagline: "Todo controle a partir do WhatsApp do seu negócio.",
    description:
      "ERP orientado a conversas no WhatsApp, onde é gerado todo o controle do seu negócio.",
    longDescription:
      "O Dita leva o controle do seu negócio para onde você já está: o WhatsApp. Financeiro, estoque e relatórios ficam acessíveis por conversa, com um painel web por trás para a visão completa da operação.",
    status: "IN_DEVELOPMENT",
    featured: true,
    technologies: ["Ruby on Rails", "NextJs", "PostgreSQL"],
    highlights: [
      "Controle financeiro integrado",
      "Gestão de estoque simplificada",
      "Relatórios detalhados para o gestor",
    ],
    theme: {
      primary: "#25D366",
      secondary: "#128C7E",
      background: "#081A12",
      surface: "#0F2A1D",
      text: "#FFFFFF",
    },
    media: {
      icon: undefined, // TODO: ex. "icon.png" dentro de public/products/dita/
      gallery: [
        // TODO: adicionar imagens reais, ex:
        // { file: "screenshot-1.png", alt: "Conversa de controle financeiro no Dita" },
      ],
    },
    interfaces: [
      {
        id: "dita-whatsapp",
        label: "Bot WhatsApp",
        platform: "whatsapp",
        status: "IN_DEVELOPMENT",
        links: { url: "#" },
      },
      {
        id: "dita-web",
        label: "Painel Web",
        platform: "web",
        status: "IN_DEVELOPMENT",
        links: { url: "#" },
      },
      {
        id: "dita-api",
        label: "Backend / API",
        platform: "api",
        status: "IN_DEVELOPMENT",
      },
    ],
  },
];
