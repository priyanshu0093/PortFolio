import { PERSONAL_INFO } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#08090A] border-t border-[#2f2c29]/50 py-12 text-mutedBeige">
      <div className="site-container flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="font-accent text-2xl text-sand block">
            {PERSONAL_INFO.fullName}
          </span>
          <p className="text-xs uppercase tracking-widest text-mutedBeige/70 font-mono mt-1">
            {PERSONAL_INFO.role} · {PERSONAL_INFO.location.split(",")[0]}, India
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-mono text-sand/80">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-coralRed transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-coralRed transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-coralRed transition-colors"
          >
            Email
          </a>
        </div>

        <div className="text-xs font-mono text-mutedBeige/60">
          © {currentYear} Priyanshu Kumawat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

