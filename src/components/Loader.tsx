"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if loader has already run in this session
    if (typeof window !== "undefined" && sessionStorage.getItem("portfolio_loaded")) {
      setIsFinished(true);
      onComplete?.();
      return;
    }

    const duration = 1200; // Snappy, elegant 1.2s loading
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const ratio = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - ratio, 2.5);
      const current = Math.floor(ease * 100);

      setProgress(current);

      if (ratio < 1) {
        requestAnimationFrame(update);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsFinished(true);
          sessionStorage.setItem("portfolio_loaded", "true");
          onComplete?.();
        }, 150);
      }
    };

    const animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          id="loading"
          role="status"
          aria-label="Loading"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 overflow-hidden bg-[#08090A] pointer-events-none"
        >
          <div className="absolute inset-0 flex h-full w-full items-start justify-start px-6 pt-24 sm:px-10 sm:pt-32 lg:px-16 lg:pt-36">
            <div className="flex flex-col w-full max-w-xl">
              <p className="w-fit max-w-full text-left font-accent text-2xl md:text-3xl text-sand font-normal leading-tight">
                <span className="invisible">Hello, I&apos;m</span>
                <span className="mt-2 block text-7xl font-normal leading-none tracking-normal md:text-8xl lg:text-9xl text-sand">
                  Priyanshu
                </span>
              </p>

              <div className="mt-6 flex items-center gap-4 w-64 sm:w-80">
                <div className="relative h-[2px] flex-1 bg-mutedBeige/20 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-sand origin-left transition-transform duration-75 ease-out"
                    style={{
                      transform: `scaleX(${progress / 100})`,
                    }}
                  />
                </div>
                <span className="font-mono text-xs font-light tracking-widest text-mutedBeige/70 tabular-nums">
                  {progress}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
