"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Flame, Trophy, Clock } from "lucide-react";
import { fadeIn } from "@/lib/animations";

interface HackathonProject {
  id: string;
  tag: string;
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  features: string[];
  metrics: { label: string; value: string };
  image: string;
  liveUrl: string;
  githubUrl: string;
  accent: string;
}

const HACKATHON_PROJECTS: HackathonProject[] = [
  {
    id: "hackathon-a-una-milla",
    tag: "Vkaaps Hackathon 2026",
    number: "HACK 01",
    title: "A Una Milla de Tu Destino",
    category: "Travel Savings & Flight Discovery",
    description:
      "Engineered during the 48-hour Vkaaps Hackathon, connecting live airline inventories via Duffel and Amadeus APIs. Features an algorithmic cash-versus-points valuation calculator, alternate-airport route optimization, 30/60/90-day reward point forecasts, and an encrypted card wallet.",
    stack: ["React.js", "Node.js", "PostgreSQL", "Duffel API", "Amadeus API", "Zod", "Vitest"],
    features: [
      "Real-time flight search aggregator via Duffel & Amadeus APIs",
      "Cash vs. reward points valuation savings engine",
      "Smart alternate-airport & flexible-dates recommendation advisor",
      "30 / 60 / 90-day points accumulation forecast",
      "Zod schema validation with comprehensive Vitest test coverage",
    ],
    metrics: { label: "Sprint Duration", value: "48 Hours" },
    image: "/images/projects/playmate-stadium.jpg",
    liveUrl: "https://hackathon-1-idea-2-priyanshu-kumawat-c01vsl9zn.vercel.app/",
    githubUrl: "https://github.com/priyanshu0093/hackathon-1-Idea-2-Priyanshu-Kumawat",
    accent: "#e97f61",
  },
  {
    id: "hackathon-playmate",
    tag: "Vkaaps Hackathon 2026",
    number: "HACK 02",
    title: "PlayMate",
    category: "Sports Matchmaking & Turf Booking",
    description:
      "A real-time sports matchmaking and turf reservation platform built from scratch in 48 hours. Connects players based on sport, skill tier, and geographic location, enables conflict-free slot booking, and features live WebSocket chat rooms.",
    stack: ["React.js", "Node.js", "PostgreSQL", "Socket.IO", "Tailwind CSS", "JWT Auth"],
    features: [
      "Instant match creation with sport, skill-tier, and city filters",
      "Automated turf booking engine with slot-conflict locks",
      "Real-time bidirectional chat rooms powered by Socket.IO",
      "Dual authentication with stateless JWT & Google OAuth",
      "Turf-owner management portal with venue stats and slot blocking",
    ],
    metrics: { label: "Live Sockets", value: "Realtime" },
    image: "/images/projects/playmate-poster.jpg",
    liveUrl: "https://hackathon-2-play-mate-priyanshu-kumawat-qzw0mjj3u.vercel.app/",
    githubUrl: "https://github.com/priyanshu0093/hackathon-2-playMate-Priyanshu-Kumawat",
    accent: "#d6c8b2",
  },
];

export default function Hackathon() {
  return (
    <section
      id="hackathons"
      className="relative py-24 sm:py-32 bg-[#08090A] text-mutedBeige overflow-hidden border-t border-[#2f2c29]/30"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Flame className="size-4 text-coralRed" />
              <span className="text-xs uppercase tracking-[0.25em] text-coralRed font-mono block">
                Vkaaps Hackathon · October 2026
              </span>
            </div>
            <h2 className="font-accent text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-sand font-normal leading-none tracking-tight">
              Hackathon{" "}
              <span className="font-accent text-coralRed italic inline-block">
                innovations
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 text-base sm:text-lg text-sand/80 max-w-2xl font-light leading-relaxed"
          >
            High-velocity full-stack platforms engineered under 48-hour sprint constraints during the Vkaaps Hackathon. Designed, architected, and deployed with live production links.
          </motion.p>
        </div>

        {/* Hackathon Projects Grid */}
        <div className="space-y-16 lg:space-y-24">
          {HACKATHON_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={fadeIn("up", idx * 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#142337]/15 border border-[#2f2c29]/70 hover:border-coralRed/50 transition-all duration-300 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Content Side */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-coralRed/15 text-coralRed border border-coralRed/30">
                        <Trophy className="size-3" />
                        <span>Finalist Project</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#08090A] text-sand/80 border border-[#2f2c29]">
                        <Clock className="size-3 text-sand/60" />
                        <span>48-Hour Sprint</span>
                      </span>
                      <span className="font-mono text-xs text-mutedBeige/60 tracking-wider">
                        {project.number}
                      </span>
                    </div>

                    <h3 className="font-accent text-3xl sm:text-4xl md:text-5xl text-sand font-normal leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-widest text-coralRed mt-1">
                      {project.category}
                    </p>

                    <p className="mt-4 text-base sm:text-lg text-sand/90 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <span className="text-xs uppercase tracking-widest text-mutedBeige/70 font-mono block mb-3">
                      Sprint Architecture Highlights
                    </span>
                    <ul className="space-y-2">
                      {project.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-sand/85 font-light leading-snug"
                        >
                          <span className="inline-block size-1.5 rounded-full bg-coralRed mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges & CTA Action Links */}
                  <div className="pt-6 border-t border-[#2f2c29]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded text-xs font-mono text-sand/80 bg-[#08090A]/70 border border-[#2f2c29]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {/* Direct Live Vercel Link */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-coralRed text-[#08090A] hover:bg-white transition-all font-medium text-xs tracking-wider uppercase shadow-lg shadow-coralRed/20 active:scale-95"
                      >
                        <ExternalLink className="size-3.5" />
                        <span>Live Demo</span>
                        <ArrowUpRight className="size-3.5" />
                      </a>

                      {/* GitHub Source Link */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#08090A] border border-[#2f2c29] text-sand hover:text-coralRed hover:border-coralRed/40 transition-colors text-xs tracking-wider uppercase font-medium"
                      >
                        <Github className="size-3.5" />
                        <span>Repo</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Visual Media Showcase */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#2f2c29] bg-[#0c1726] shadow-2xl group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090A]/85 via-[#08090A]/20 to-transparent pointer-events-none" />

                    {/* Metric overlay badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#08090A]/90 backdrop-blur-md border border-[#2f2c29] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-coralRed animate-pulse" />
                        <span className="text-xs uppercase tracking-wider font-mono text-mutedBeige">
                          {project.metrics.label}
                        </span>
                      </div>
                      <span className="font-mono text-sm font-semibold text-coralRed">
                        {project.metrics.value}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

