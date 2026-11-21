"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "ABOUT", href: "#about" },
  { name: "WORK", href: "#work" },
  { name: "HACKATHONS", href: "#hackathons" },
  { name: "SKILLS", href: "#skills" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scrolling when mobile navigation drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#08090A]/90 backdrop-blur-md py-3.5 sm:py-4 border-b border-[#2f2c29]/50 shadow-lg"
            : "bg-transparent py-5 sm:py-6 lg:py-8"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Desktop Left Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-11"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm tracking-widest uppercase font-light text-mutedBeige hover:text-sand transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Links */}
          <div className="hidden md:flex items-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs lg:text-sm tracking-widest uppercase font-light text-mutedBeige hover:text-sand transition-colors duration-200"
            >
              <span>RESUME</span>
              <ArrowUpRight className="size-4 text-mutedBeige hover:text-sand" />
            </a>

            <span className="hidden lg:inline-block pl-6 ml-6 border-l border-mutedBeige/30 text-xs tracking-widest uppercase font-light text-mutedBeige/70">
              Full Stack Developer
            </span>
          </div>

          {/* Mobile View: Minimal Name on Left, Hamburger Button on Right */}
          <div className="flex md:hidden w-full items-center justify-between">
            <a
              href="#hero"
              className="font-accent text-2xl text-sand tracking-normal"
            >
              Priyanshu
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="size-11 rounded-full bg-[#142337]/50 backdrop-blur-md border border-[#2f2c29] flex items-center justify-center text-sand active:scale-95 transition-transform"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#08090A]/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <span className="font-accent text-3xl text-sand">Priyanshu</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
                className="size-11 rounded-full bg-[#142337]/50 backdrop-blur-md border border-[#2f2c29] flex items-center justify-center text-sand active:scale-95 transition-transform"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex flex-col gap-5 my-auto py-8">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.04 }}
                  className="text-2xl sm:text-3xl font-light tracking-wide text-sand hover:text-coralRed transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 text-xl sm:text-2xl font-light text-coralRed pt-4 border-t border-mutedBeige/20"
              >
                <span>RESUME</span>
                <ArrowUpRight className="size-5" />
              </motion.a>
            </div>

            <div className="text-xs text-mutedBeige/60 tracking-wider uppercase font-mono">
              Priyanshu Kumawat · Full Stack Developer
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
