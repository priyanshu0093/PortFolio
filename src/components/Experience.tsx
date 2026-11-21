"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/portfolio";
import { fadeIn } from "@/lib/animations";
import { Briefcase, ArrowUpRight, ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-16 sm:py-24 lg:py-32 bg-[#08090A] text-mutedBeige overflow-hidden border-t border-[#2f2c29]/30 flex flex-col justify-center"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 lg:mb-20">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-coralRed font-mono block mb-2 sm:mb-3">
              Professional Journey
            </span>
            <h2 className="font-accent text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-sand font-normal leading-none tracking-tight">
              Work{" "}
              <span className="font-accent text-coralRed italic inline-block">
                experience
              </span>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-sand/80 max-w-xl font-light leading-relaxed"
          >
            Real-world internship experience delivering production software architectures, multi-tenant scheduling, and real-time state synchronization.
          </motion.p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={fadeIn("up", idx * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="p-5 sm:p-8 md:p-12 rounded-3xl bg-[#142337]/15 border border-[#2f2c29]/60 hover:border-coralRed/40 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 sm:pb-6 border-b border-[#2f2c29]/50 gap-4">
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <Briefcase className="size-4 text-coralRed" />
                    <span className="text-xs font-mono tracking-widest text-coralRed uppercase">
                      Experience 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-accent text-2xl sm:text-3xl lg:text-4xl text-sand font-normal">
                    {exp.role}
                  </h3>
                  <div className="mt-1 text-sm sm:text-base lg:text-lg text-mutedBeige font-normal">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col lg:items-end gap-2">
                  <span className="font-mono text-xs sm:text-sm text-sand/90 tracking-wider">
                    {exp.period}
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-coralRed bg-coralRed/10 border border-coralRed/20">
                      {exp.stack}
                    </span>
                    {exp.liveUrl && (
                      <a
                        href={exp.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-coralRed text-[#08090A] hover:bg-white transition-all font-medium shadow-sm active:scale-95"
                      >
                        <ExternalLink className="size-3" />
                        <span>Live SaaS</span>
                        <ArrowUpRight className="size-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 sm:gap-4 text-xs sm:text-sm md:text-base text-sand/85 font-light leading-relaxed"
                  >
                    <span className="inline-block size-1.5 rounded-full bg-coralRed mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
