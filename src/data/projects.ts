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
    id: "a-una-milla",
    number: "01",
    title: "A Una Milla de Tu Destino",
    category: "Travel Savings & Flight Discovery",
    year: "2026",
    stack: ["React.js", "Node.js", "PostgreSQL", "Duffel API", "Amadeus API", "Zod", "Vitest"],
    headline: "Compare cash vs. points across flights with predictive rewards forecasting.",
    description:
      "A comprehensive travel intelligence platform connecting live airline inventories via Duffel and Amadeus APIs. Features an algorithmic cash-versus-points savings calculator, alternative-airport routing tips, a 30/60/90-day rewards point forecast, and an encrypted card wallet.",
    features: [
      "Real-time flight discovery with multi-airline aggregation",
      "Algorithmic cash-vs-points valuation savings calculator",
      "Flexible-date and alternate-airport route optimization advisor",
      "30 / 60 / 90-day points accumulation forecast engine",
      "Stateless JWT auth, saved trip collections, and card wallet",
      "Production test coverage with Vitest and strict schema validation with Zod",
    ],
    metrics: { label: "Booking Efficiency", value: "3.4x" },
    image: "/images/projects/playmate-stadium.jpg",
    githubUrl: "https://github.com/priyanshu0093/hackathon-1-Idea-2-Priyanshu-Kumawat",
    liveUrl: "https://hackathon-1-idea-2-priyanshu-kumawat-c01vsl9zn.vercel.app/",
    accentColor: "#e97f61",
  },
  {
    id: "playmate",
    number: "02",
    title: "PlayMate",
    category: "Sports Matchmaking & Turf Booking",
    year: "2026",
    stack: ["React.js", "Node.js", "PostgreSQL", "Socket.IO", "Tailwind CSS", "JWT"],
    headline: "Real-time sports matchmaking, turf reservations, and team chat.",
    description:
      "A full-stack sports matchmaking and turf booking ecosystem connecting athletes in real time. Enables players to discover local games filtered by sport, skill level, and city, reserve slots with automated double-booking prevention, and coordinate via live Socket.IO chat rooms.",
    features: [
      "Dynamic match creation with sport, skill-tier, and location filters",
      "Real-time turf slot booking with automated concurrency conflict checks",
      "Instant player-to-player and squad chat powered by Socket.IO",
      "Dual authentication with stateless JWT and Google OAuth",
      "Turf-owner control portal with venue metrics and manual slot locks",
      "Player rating algorithm and post-match verification system",
    ],
    metrics: { label: "Conflict Rate", value: "0.0%" },
    image: "/images/projects/playmate-poster.jpg",
    githubUrl: "https://github.com/priyanshu0093/hackathon-2-playMate-Priyanshu-Kumawat",
    liveUrl: "https://hackathon-2-play-mate-priyanshu-kumawat-qzw0mjj3u.vercel.app/",
    accentColor: "#d6c8b2",
  },
  {
    id: "aayojan",
    number: "03",
    title: "Aayojan",
    category: "Event Management & RSVP Platform",
    year: "2026",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
    headline: "Intelligent guest directory management, dynamic passcodes, and RSVP coordination.",
    description:
      "A production-grade event orchestration platform engineered during internship at Vkaaps Technology. Empowers event organizers to handle large guest lists with bulk CSV upload, automated invitation links, unique passcodes, and multi-host permissions.",
    features: [
      "Reusable guest directory module with bulk CSV ingestion",
      "Cryptographic Event IDs and passcodes for secured entrance",
      "Automated invitation distribution and live RSVP tracking dashboard",
      "Multi-tenant Co-Host delegation with granular role privileges",
      "Mobile-optimized guest check-in portal with real-time attendee sync",
    ],
    metrics: { label: "CSV Ingestion", value: "10k+ rows" },
    image: "/images/projects/playmate-login.jpg",
    githubUrl: "https://github.com/priyanshu0093",
    accentColor: "#e97f61",
  },
  {
    id: "kiaan-saas",
    number: "04",
    title: "Kiaan Multi-Tenant SaaS",
    category: "Enterprise Resource Booking SaaS",
    year: "2026",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Render"],
    headline: "Multi-tenant resource scheduling, real-time socket conflict prevention, and RBAC.",
    description:
      "An enterprise multi-tenant resource and desk scheduling platform built for Kiaan Technology. Integrates real-time availability synchronization, automated slot-conflict prevention engines via Socket.IO, stateless JWT security, and granular permission-based role control.",
    features: [
      "Enterprise multi-tenant organizational resource and desk scheduling",
      "Real-time availability synchronization and conflict-free slot reservation via Socket.IO",
      "Stateless JWT authentication with granular role-based access control (RBAC)",
      "Production-grade RESTful API architecture deployed live on Render",
      "Dynamic organization onboarding with department and user permission tiers",
    ],
    metrics: { label: "Deployment", value: "Render Live" },
    image: "/images/projects/playmate-stadium.jpg",
    githubUrl: "https://github.com/priyanshu0093",
    liveUrl: "https://boiler-plate-4cc3.onrender.com",
    accentColor: "#e97f61",
  },
];

