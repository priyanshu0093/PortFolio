"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { fadeIn } from "@/lib/animations";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentProject = PROJECTS[currentIndex];

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        let next = prev + newDirection;
        if (next < 0) next = PROJECTS.length - 1;
        if (next >= PROJECTS.length) next = 0;
        return next;
      });
    },
    []
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section
      id="work"
      className="relative min-h-screen py-16 sm:py-24 lg:py-32 bg-[#08090A] text-mutedBeige overflow-hidden border-t border-[#2f2c29]/30 flex flex-col justify-center"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-14 gap-4">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-coralRed font-mono block mb-2 sm:mb-3">
              Selected Works
            </span>
            <h2 className="font-accent text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-sand font-normal leading-none tracking-tight">
              Featured{" "}
              <span className="font-accent text-coralRed italic inline-block">
                projects
              </span>
            </h2>
          </motion.div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-auto">
            <span className="font-mono text-xs sm:text-base text-sand/90 tracking-widest">
              0{currentIndex + 1} <span className="text-mutedBeige/40">/</span> 0{PROJECTS.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous project"
                className="size-10 sm:size-12 rounded-full border border-[#2f2c29] bg-[#142337]/30 hover:border-sand hover:text-sand text-mutedBeige flex items-center justify-center transition-all active:scale-95"
              >
                <ArrowLeft className="size-4 sm:size-5" />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next project"
                className="size-10 sm:size-12 rounded-full border border-[#2f2c29] bg-[#142337]/30 hover:border-sand hover:text-sand text-mutedBeige flex items-center justify-center transition-all active:scale-95"
              >
                <ArrowRight className="size-4 sm:size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Slide Container with swipe / drag support on mobile */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000 || offset.x < -60) {
                  paginate(1);
                } else if (swipe > 10000 || offset.x > 60) {
                  paginate(-1);
                }
              }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center p-5 sm:p-8 md:p-12 rounded-3xl bg-[#142337]/15 border border-[#2f2c29]/60 shadow-2xl cursor-grab active:cursor-grabbing"
            >
              {/* Left Column: Project Details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6">
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-coralRed">
                      Project {currentProject.number}
                    </span>
                    <span className="text-mutedBeige/30">•</span>
                    <span className="font-mono text-xs text-mutedBeige/80 uppercase tracking-wider">
                      {currentProject.category}
                    </span>
                  </div>

                  <h3 className="font-accent text-2xl sm:text-4xl md:text-5xl text-sand font-normal leading-tight">
                    {currentProject.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base md:text-lg text-sand/90 font-light leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>

                {/* Architecture Highlights */}
                <div>
                  <span className="text-xs uppercase tracking-widest text-mutedBeige/70 font-mono block mb-2 sm:mb-3">
                    Architecture Highlights
                  </span>
                  <ul className="space-y-2">
                    {currentProject.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-sand/85 font-light leading-snug"
                      >
                        <span className="inline-block size-1.5 rounded-full bg-coralRed mt-1.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack Pills & CTA Links */}
                <div className="pt-4 border-t border-[#2f2c29]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {currentProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono text-sand/80 bg-[#08090A]/70 border border-[#2f2c29]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 shrink-0 pt-2 sm:pt-0">
                    {currentProject.liveUrl && (
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-coralRed text-[#08090A] text-xs uppercase tracking-wider font-medium hover:bg-white transition-all shadow-sm active:scale-95"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    )}
                    {currentProject.githubUrl && (
                      <a
                        href={currentProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#08090A] border border-[#2f2c29] text-xs uppercase tracking-wider text-sand hover:text-coralRed font-medium transition-colors"
                      >
                        <Github className="size-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="lg:col-span-5 flex flex-col justify-center order-first lg:order-last">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-[#2f2c29] bg-[#0c1726] shadow-xl group">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090A]/80 via-transparent to-transparent pointer-events-none" />

                  {currentProject.metrics && (
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 rounded-xl bg-[#08090A]/90 backdrop-blur-md border border-[#2f2c29] flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs uppercase tracking-wider font-mono text-mutedBeige">
                        {currentProject.metrics.label}
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-coralRed">
                        {currentProject.metrics.value}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {PROJECTS.map((proj, pIdx) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => {
                setDirection(pIdx > currentIndex ? 1 : -1);
                setCurrentIndex(pIdx);
              }}
              aria-label={`Go to project ${pIdx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === pIdx ? "w-8 sm:w-10 bg-coralRed" : "w-2.5 sm:w-3 bg-mutedBeige/30 hover:bg-mutedBeige/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
