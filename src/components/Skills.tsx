"use client";

import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/data/skills";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 sm:py-32 bg-[#08090A] text-mutedBeige overflow-hidden border-t border-[#2f2c29]/30 flex flex-col justify-center"
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
            <span className="text-xs uppercase tracking-[0.25em] text-coralRed font-mono block mb-3">
              Capabilities & Expertise
            </span>
            <h2 className="font-accent text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-sand font-normal leading-none tracking-tight">
              Technical{" "}
              <span className="font-accent text-coralRed italic inline-block">
                arsenal
              </span>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 text-base sm:text-lg text-sand/80 max-w-xl font-light leading-relaxed"
          >
            A curated stack honed across multi-tenant production systems, real-time architectures, and high-concurrency web applications.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.category}
              variants={fadeIn("up", idx * 0.08)}
              className="group p-6 sm:p-8 rounded-2xl bg-[#142337]/20 border border-[#2f2c29]/50 hover:border-coralRed/50 transition-all duration-300 hover:bg-[#142337]/35 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#2f2c29]/60 mb-6">
                  <h3 className="font-accent text-2xl sm:text-3xl text-sand font-normal">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono text-coralRed/80 tracking-widest">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs text-mutedBeige/70 uppercase tracking-wider font-light mb-6">
                  {group.subtitle}
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-light text-sand/90 bg-[#08090A]/60 border border-[#2f2c29] group-hover:border-mutedBeige/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

