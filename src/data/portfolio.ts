export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  stack: string;
  projectName?: string;
  liveUrl?: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  location: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  detail?: string;
  link?: string;
}

export const PERSONAL_INFO = {
  name: "Priyanshu",
  fullName: "Priyanshu Kumawat",
  role: "Full Stack Developer",
  subRole: "MERN Stack Specialist",
  tagline: "I design and build digital products for a living.",
  secondaryTagline: "Turning ideas into functional experiences.",
  email: "priyanshukumawat207@gmail.com",
  phone: "+91 7974778481",
  location: "Indore, Madhya Pradesh, India",
  github: "https://github.com/priyanshu0093",
  linkedin: "https://linkedin.com/in/priyanshu-kumawat-829501320",
  leetcode: "https://leetcode.com/u/ZwTq2z7rMh/",
  resumePath: "/resume.pdf",
};

export const ABOUT_CONTENT = {
  headlinePart1: "Developer",
  headlinePart2: "by profession.",
  subHeadlinePart1: "Problem solver",
  subHeadlinePart2: "by ambition.",
  introParagraph:
    "I am Priyanshu Kumawat, a B.Tech Computer Science student and MERN Full Stack Developer based in Indore, Madhya Pradesh.",
  philosophyParagraph1:
    "I believe great software is built where thoughtful design meets solid engineering. My experience spans SaaS platforms, real-time applications, event management systems, and secure backend architectures.",
  philosophyParagraph2:
    "I enjoy going beyond writing code — understanding problems, designing solutions, and turning complex workflows into seamless digital experiences.",
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "vkaps",
    role: "Full Stack Developer Intern",
    company: "Vkaps Technology",
    period: "September 2026 – Present",
    stack: "MERN Stack · Socket.IO · RESTful APIs",
    description: [
      "Architected core modules for Aayojan, a high-throughput event management platform for guest coordination, invitations, and live RSVP tracking.",
      "Engineered the Family & Guest Directory system supporting reusable contact lists, granular grouping, and bulk CSV ingestion.",
      "Implemented passwordless OTP authentication, cryptographic Event IDs, passcodes, and multi-tenant Co-Host privilege delegation.",
    ],
  },
  {
    id: "kiaan",
    role: "Full Stack Developer Intern",
    company: "Kiaan Technology",
    period: "July 2026",
    stack: "MERN Stack · JWT · Socket.IO · RBAC",
    projectName: "Multi-Tenant Resource Booking SaaS",
    liveUrl: "https://boiler-plate-4cc3.onrender.com",
    description: [
      "Engineered an enterprise multi-tenant SaaS application enabling secure, scalable organizational resource and desk scheduling.",
      "Architected real-time availability synchronization and automated slot-conflict prevention engines powered by Socket.IO.",
      "Hardened backend REST endpoints with stateless JWT authentication, secure session handling, and granular role-based access control (RBAC).",
    ],
  },
];

export const EDUCATION: EducationItem = {
  institution: "Institute of Engineering & Science, IPS Academy",
  degree: "B.Tech in Computer Science and Engineering",
  period: "2023 – 2027",
  grade: "CGPA: 7.6 / 10.0",
  location: "Indore, Madhya Pradesh",
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Full Stack Development (MERN Stack)",
    issuer: "Apna College",
    detail: "Comprehensive full stack specialization covering React, Node.js, Express, and MongoDB.",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Physics Wallah",
    detail: "Algorithmic problem solving and data structures; 100+ problems solved across LeetCode.",
    link: "https://leetcode.com/u/ZwTq2z7rMh/",
  },
  {
    title: "Vkaps Hackathon Finalist",
    issuer: "Vkaps Hackathon (October 2026)",
    detail: "Built and deployed A Una Milla and PlayMate under 48-hour sprint deadlines.",
  },
];

