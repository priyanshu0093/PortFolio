"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#08090A]"
    >
      {/* Background Image Container with Cinematic Parallax */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Priyanshu Kumawat — Sunset silhouette on hilltop with motorcycle"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[65%_center] md:object-center select-none pointer-events-none"
        />

        {/* Soft top gradient for navbar legibility */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#08090A]/70 via-[#08090A]/20 to-transparent pointer-events-none" />

        {/* Soft bottom gradient to seamlessly blend into the dark foreground and About section */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#08090A] via-[#08090A]/50 to-transparent pointer-events-none" />
      </motion.div>

      {/* Hero Content Overlay */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="site-container relative z-10 flex flex-col justify-start pt-28 sm:pt-36 lg:pt-40 2xl:pt-48 pb-16 pointer-events-none"
      >
        <div className="flex flex-col max-w-2xl text-left pointer-events-auto">
          {/* Greeting: "Hello, I'm" */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-accent text-2xl sm:text-3xl md:text-4xl text-sand font-normal leading-tight tracking-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Main Name Heading: "Priyanshu" */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-accent text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-sand font-normal leading-[0.88] tracking-normal my-1 sm:my-2 select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Description lines */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 sm:mt-5 space-y-1.5"
          >
            <p className="font-accent text-xl sm:text-2xl md:text-3xl text-sand font-normal leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {PERSONAL_INFO.tagline}
            </p>
            <p className="font-accent text-lg sm:text-xl md:text-2xl text-sand/90 font-normal leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {PERSONAL_INFO.secondaryTagline}
            </p>
          </motion.div>

          {/* Professional Subtitle Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex items-center gap-3 drop-shadow-md"
          >
            <span className="inline-block size-2 rounded-full bg-coralRed animate-pulse shadow-[0_0_8px_#e97f61]" />
            <span className="font-sans text-xs sm:text-sm uppercase tracking-widest text-coralRed font-semibold">
              {PERSONAL_INFO.role} — {PERSONAL_INFO.subRole}
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle bottom scroll prompt */}
      <div className="site-container relative z-10 pb-8 flex items-center justify-between text-mutedBeige/70 text-xs tracking-widest uppercase font-mono">
        <span className="hidden sm:inline">Indore, India</span>
        <a
          href="#about"
          className="flex items-center gap-2 hover:text-sand transition-colors cursor-pointer"
        >
          <span>Scroll down</span>
          <span className="inline-block animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
}
