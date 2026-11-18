"use client";

import { motion } from "framer-motion";
import { ABOUT_CONTENT, PERSONAL_INFO } from "@/data/portfolio";
import { fadeIn } from "@/lib/animations";

export default function About() {
  return (
    <section
      id="about"
      className="relative pt-24 sm:pt-32 pb-24 sm:pb-32 bg-[#08090A] text-mutedBeige overflow-hidden border-t border-[#2f2c29]/30"
    >
      <div className="site-container">
        {/* Section 01: Developer by profession */}
        <div className="mb-24 lg:mb-32">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-accent text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-sand font-normal leading-[0.95] tracking-tight">
              Developer <br />
              <span className="font-accent text-coralRed italic inline-block mt-2 sm:mt-4 sm:ml-12">
                by profession.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="w-auto mt-8 sm:mt-12 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-prose text-sand/90 md:ml-32 lg:ml-64 space-y-6"
          >
            <p>
              I am {PERSONAL_INFO.fullName}, a B.Tech Computer Science student and MERN Full Stack Developer based in {PERSONAL_INFO.location}.
            </p>
            <p>
              I enjoy building digital products, developing scalable web applications, and solving practical engineering problems through clean, robust software architectures.
            </p>
          </motion.div>
        </div>

        {/* Section 02: Problem solver by ambition */}
        <div className="mb-24 lg:mb-32">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-accent text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-sand font-normal leading-[0.95] tracking-tight">
              Problem solver <br />
              <span className="font-accent text-coralRed italic inline-block mt-2 sm:mt-4 sm:ml-12">
                by ambition.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="w-auto mt-8 sm:mt-12 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-prose text-sand/90 md:ml-32 lg:ml-64 space-y-6"
          >
            <p>
              I believe great software is built where thoughtful design meets solid engineering. My experience spans SaaS platforms, real-time applications, event management systems, and secure backend architectures.
            </p>
            <p>
              I enjoy going beyond writing code — understanding problems, designing solutions, and turning complex workflows into seamless digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Divider & Quote / Philosophy Element */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="pt-12 border-t border-[#2f2c29]/60 flex flex-col md:flex-row md:items-baseline justify-between gap-6"
        >
          <blockquote className="max-w-xl">
            <p className="font-sans text-lg sm:text-xl md:text-2xl font-light italic text-sand/90 leading-snug">
              &ldquo;{ABOUT_CONTENT.quote.text}&rdquo;
            </p>
            <footer className="mt-3 text-xs sm:text-sm text-coralRed tracking-widest uppercase font-medium">
              — {ABOUT_CONTENT.quote.author}
            </footer>
          </blockquote>

          <div className="text-xs uppercase tracking-widest text-mutedBeige/70 font-mono">
            {PERSONAL_INFO.location} · 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}

