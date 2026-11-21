"use client";

import { motion } from "framer-motion";
import { EDUCATION, CERTIFICATIONS } from "@/data/portfolio";
import { fadeIn } from "@/lib/animations";
import { GraduationCap, Award, Code2, ArrowUpRight } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-16 sm:py-24 lg:py-32 bg-[#08090A] text-mutedBeige overflow-hidden border-t border-[#2f2c29]/30"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-coralRed font-mono block mb-2 sm:mb-3">
              Academics & Credentials
            </span>
            <h2 className="font-accent text-4xl sm:text-6xl md:text-8xl text-sand font-normal leading-none tracking-tight">
              Education &{" "}
              <span className="font-accent text-coralRed italic inline-block">
                accolades
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left: Formal Education */}
          <motion.div
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 p-5 sm:p-8 md:p-10 rounded-3xl bg-[#142337]/15 border border-[#2f2c29]/60 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <GraduationCap className="size-5 text-coralRed" />
                <span className="text-xs font-mono tracking-widest text-coralRed uppercase">
                  Degree
                </span>
              </div>

              <h3 className="font-accent text-xl sm:text-2xl lg:text-3xl text-sand font-normal mb-2">
                {EDUCATION.degree}
              </h3>
              <div className="text-sm sm:text-base text-mutedBeige font-normal mb-4">
                {EDUCATION.institution}
              </div>

              <div className="space-y-2 py-4 border-t border-[#2f2c29]/50 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-mutedBeige/70">Duration</span>
                  <span className="font-mono text-sand">{EDUCATION.period}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mutedBeige/70">Performance</span>
                  <span className="font-mono text-coralRed font-medium">{EDUCATION.grade}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mutedBeige/70">Location</span>
                  <span className="text-sand">{EDUCATION.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Certifications & Accolades */}
          <motion.div
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 space-y-3 sm:space-y-4"
          >
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={cert.title}
                className="p-5 sm:p-6 lg:p-8 rounded-2xl bg-[#142337]/10 border border-[#2f2c29]/50 hover:border-coralRed/40 transition-colors flex items-start gap-4 sm:gap-5"
              >
                <div className="size-9 sm:size-10 rounded-xl bg-coralRed/10 border border-coralRed/20 flex items-center justify-center text-coralRed shrink-0 mt-0.5">
                  {idx === 0 ? (
                    <Code2 className="size-4 sm:size-5" />
                  ) : (
                    <Award className="size-4 sm:size-5" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-sans text-sm sm:text-base lg:text-lg font-medium text-sand truncate">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-mono text-mutedBeige/60 shrink-0">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="text-[11px] sm:text-xs font-mono text-coralRed uppercase tracking-wider mb-2">
                    {cert.issuer}
                  </div>

                  {cert.detail && (
                    <p className="text-xs sm:text-sm text-sand/80 font-light leading-relaxed">
                      {cert.detail}
                    </p>
                  )}

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-sand/70 hover:text-coralRed mt-2 transition-colors"
                    >
                      <span>View LeetCode Profile</span>
                      <ArrowUpRight className="size-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
