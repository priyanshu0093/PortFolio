"use client";

import { motion } from "framer-motion";
import { ABOUT_CONTENT, PERSONAL_INFO } from "@/data/portfolio";
import { fadeIn } from "@/lib/animations";

export default function About() {
  return (
    <section
      id="about"
      className="relative pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 bg-[#08090A] text-mutedBeige overflow-hidden border-t border-[#2f2c29]/30"
    >
      <div className="site-container">
        {/* Section 01: Developer by profession */}
        <div className="mb-16 sm:mb-24 lg:mb-28">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-accent text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-sand font-normal leading-[1] tracking-tight">
              {ABOUT_CONTENT.headlinePart1} <br />
              <span className="font-accent text-coralRed italic inline-block mt-1 sm:mt-3 sm:ml-8 md:ml-12">
                {ABOUT_CONTENT.headlinePart2}
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-auto mt-6 sm:mt-10 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-prose text-sand/90 md:ml-24 lg:ml-48"
          >
            <p>{ABOUT_CONTENT.introParagraph}</p>
          </motion.div>
        </div>

        {/* Section 02: Problem solver by ambition */}
        <div className="mb-12 sm:mb-20">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-accent text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-sand font-normal leading-[1] tracking-tight">
              {ABOUT_CONTENT.subHeadlinePart1} <br />
              <span className="font-accent text-coralRed italic inline-block mt-1 sm:mt-3 sm:ml-8 md:ml-12">
                {ABOUT_CONTENT.subHeadlinePart2}
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-auto mt-6 sm:mt-10 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-prose text-sand/90 md:ml-24 lg:ml-48 space-y-4 sm:space-y-6"
          >
            <p>{ABOUT_CONTENT.philosophyParagraph1}</p>
            <p>{ABOUT_CONTENT.philosophyParagraph2}</p>
          </motion.div>
        </div>

        {/* Minimal clean status bar */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="pt-8 sm:pt-10 border-t border-[#2f2c29]/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-mutedBeige/70"
        >
          <span>{PERSONAL_INFO.fullName} · {PERSONAL_INFO.role}</span>
          <span>{PERSONAL_INFO.location}</span>
        </motion.div>
      </div>
    </section>
  );
}
