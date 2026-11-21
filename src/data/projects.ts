export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  stack: string[];
  headline: string;
  description: string;
  features: string[];
  metrics?: { label: string; value: string };
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  accentColor?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "aayojan",
    number: "01",
    title: "Aayojan",
    category: "Event Platform & RSVP Orchestration",
    year: "2026",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
    headline: "Intelligent guest directory management, dynamic passcodes, and RSVP coordination.",
    description:
      "A production-grade event platform engineered during internship at Vkaaps Technology. Empowers organizers to manage large guest lists with bulk CSV upload, automated invitation links, unique passcodes, and multi-host permissions.",
    features: [
      "Reusable guest directory module with bulk CSV ingestion",
      "Cryptographic Event IDs and dynamic passcodes for entrance",
      "Multi-tenant Co-Host delegation with role privileges and live RSVP tracking",
    ],
    metrics: { label: "CSV Ingestion", value: "10k+ rows" },
    image: "/images/projects/aayojan-dashboard.png",
    githubUrl: "https://github.com/priyanshu0093",
    accentColor: "#e97f61",
  },
  {
    id: "kiaan-saas",
    number: "02",
    title: "Resource Booking SaaS",
    category: "Multi-Tenant Enterprise SaaS",
    year: "2026",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Render"],
    headline: "Multi-tenant resource scheduling, real-time socket conflict prevention, and RBAC.",
    description:
      "An enterprise multi-tenant resource and desk scheduling platform built for Kiaan Technology. Integrates real-time availability synchronization, automated slot-conflict prevention engines via Socket.IO, stateless JWT security, and granular RBAC.",
    features: [
      "Multi-tenant organizational resource and desk scheduling",
      "Real-time availability synchronization and conflict-free slot reservation via Socket.IO",
      "Stateless JWT auth with granular role-based access control (RBAC)",
    ],
    metrics: { label: "Live System", value: "Render Production" },
    image: "/images/projects/deskdrop-hero.png",
    githubUrl: "https://github.com/priyanshu0093",
    liveUrl: "https://boiler-plate-4cc3.onrender.com",
    accentColor: "#e97f61",
  },
  {
    id: "a-una-milla",
    number: "03",
    title: "A Una Milla de Tu Destino",
    category: "Travel Savings & Flight Discovery",
    year: "2026",
    stack: ["React.js", "Node.js", "PostgreSQL", "Duffel API", "Amadeus API", "Zod", "Vitest"],
    headline: "Compare cash vs. points across flights with predictive rewards forecasting.",
    description:
      "A comprehensive travel intelligence platform connecting live airline inventories via Duffel and Amadeus APIs with an algorithmic cash-vs-points valuation savings calculator.",
    features: [
      "Real-time flight search aggregator via Duffel & Amadeus APIs",
      "Algorithmic cash-vs-points valuation savings calculator",
      "30 / 60 / 90-day rewards point forecast and alternate-airport route optimizer",
    ],
    metrics: { label: "Live Deployment", value: "Vercel Live" },
    image: "/images/projects/a-una-milla-live.png",
    githubUrl: "https://github.com/priyanshu0093/hackathon-1-Idea-2-Priyanshu-Kumawat",
    liveUrl: "https://hackathon-1-idea-2-priyanshu-kumawat-c01vsl9zn.vercel.app/",
    accentColor: "#e97f61",
  },
  {
    id: "playmate",
    number: "04",
    title: "PlayMate",
    category: "Sports Matchmaking & Turf Booking",
    year: "2026",
    stack: ["React.js", "Node.js", "PostgreSQL", "Socket.IO", "Tailwind CSS", "JWT"],
    headline: "Real-time sports matchmaking, turf reservations, and team chat.",
    description:
      "A full-stack sports matchmaking and turf booking ecosystem connecting athletes in real time with sport/skill filters, automated double-booking prevention, and live Socket.IO chat rooms.",
    features: [
      "Dynamic match discovery with sport, skill-tier, and location filters",
      "Turf reservation engine with automated double-booking conflict prevention",
      "Live player and squad chat rooms powered by Socket.IO WebSockets",
    ],
    metrics: { label: "Live Deployment", value: "Vercel Live" },
    image: "/images/projects/playmate-live.png",
    githubUrl: "https://github.com/priyanshu0093/hackathon-2-playMate-Priyanshu-Kumawat",
    liveUrl: "https://hackathon-2-play-mate-priyanshu-kumawat-qzw0mjj3u.vercel.app/",
    accentColor: "#d6c8b2",
  },
];
