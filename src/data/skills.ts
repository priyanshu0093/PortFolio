export interface SkillGroup {
  category: string;
  subtitle: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    subtitle: "Core syntax & type systems",
    skills: ["JavaScript (ES6+)", "TypeScript", "C++", "C", "SQL"],
  },
  {
    category: "Frontend",
    subtitle: "Modern client-side engineering",
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "shadcn/ui",
      "Bootstrap",
      "Framer Motion",
    ],
  },
  {
    category: "Backend & Realtime",
    subtitle: "Server architecture & stateful protocols",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Socket.IO",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
    ],
  },
  {
    category: "Databases & ORM",
    subtitle: "Persistent storage & schema design",
    skills: [
      "MongoDB",
      "Mongoose ODM",
      "PostgreSQL",
      "MySQL",
      "Prisma ORM",
      "Supabase",
    ],
  },
  {
    category: "Tools & Cloud",
    subtitle: "DevOps, deployment & productivity",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Render",
      "Antigravity",
      "Cursor",
      "Claude",
      "Lovable",
    ],
  },
  {
    category: "Computer Science",
    subtitle: "Foundations & engineering rigor",
    skills: [
      "Data Structures & Algorithms",
      "System Design",
      "OOP (Object-Oriented Programming)",
      "DBMS Principles",
      "API Security & Rate Limiting",
      "Responsive Web Design",
    ],
  },
];

