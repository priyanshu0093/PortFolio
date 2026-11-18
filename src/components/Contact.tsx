"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolio";
import { fadeIn } from "@/lib/animations";
import { ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[90vh] py-24 sm:py-32 bg-[#08090A] text-mutedBeige overflow-hidden border-t border-[#2f2c29]/40 flex flex-col justify-between"
    >
      <div className="site-container">
        {/* Main Heading */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-coralRed font-mono block mb-3">
              Initiate Contact
            </span>
            <h2 className="font-accent text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] text-sand font-normal leading-[0.95] tracking-tight">
              Let&apos;s build{" "}
              <span className="font-accent text-coralRed italic block sm:inline">
                something meaningful.
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 text-base sm:text-lg md:text-xl text-sand/85 font-light leading-relaxed max-w-2xl"
          >
            Have an interesting idea, engineering opportunity, or ambitious project? I&apos;d love to connect.
          </motion.p>
        </div>

        {/* Contact Links & Action Cards */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {/* Email Card */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group p-8 rounded-3xl bg-[#142337]/15 border border-[#2f2c29]/60 hover:border-coralRed/50 hover:bg-[#142337]/30 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="size-11 rounded-2xl bg-coralRed/10 border border-coralRed/20 flex items-center justify-center text-coralRed">
                <Mail className="size-5" />
              </div>
              <ArrowUpRight className="size-5 text-mutedBeige group-hover:text-coralRed group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-mutedBeige/70 font-mono block mb-1">
                Email
              </span>
              <span className="text-base sm:text-lg font-light text-sand group-hover:text-coralRed transition-colors break-all">
                {PERSONAL_INFO.email}
              </span>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-3xl bg-[#142337]/15 border border-[#2f2c29]/60 hover:border-sand/60 hover:bg-[#142337]/30 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="size-11 rounded-2xl bg-sand/10 border border-sand/20 flex items-center justify-center text-sand">
                <Linkedin className="size-5" />
              </div>
              <ArrowUpRight className="size-5 text-mutedBeige group-hover:text-sand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-mutedBeige/70 font-mono block mb-1">
                Network
              </span>
              <span className="text-base sm:text-lg font-light text-sand group-hover:text-sand transition-colors">
                linkedin.com/in/priyanshu-kumawat
              </span>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-3xl bg-[#142337]/15 border border-[#2f2c29]/60 hover:border-sand/60 hover:bg-[#142337]/30 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="size-11 rounded-2xl bg-sand/10 border border-sand/20 flex items-center justify-center text-sand">
                <Github className="size-5" />
              </div>
              <ArrowUpRight className="size-5 text-mutedBeige group-hover:text-sand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-mutedBeige/70 font-mono block mb-1">
                Code & Repositories
              </span>
              <span className="text-base sm:text-lg font-light text-sand group-hover:text-sand transition-colors">
                github.com/priyanshu0093
              </span>
            </div>
          </a>
        </motion.div>

        {/* Quick Details Bar */}
        <div className="pt-8 border-t border-[#2f2c29]/50 flex flex-wrap items-center justify-between gap-6 text-sm text-sand/80 font-light">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-coralRed" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="size-4 text-coralRed" />
            <span>{PERSONAL_INFO.phone}</span>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sand text-[#08090A] font-medium text-xs tracking-wider uppercase hover:bg-white transition-colors"
          >
            <FileText className="size-3.5" />
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}

