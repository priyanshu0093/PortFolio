import { Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  },
});

export const staggerContainer = (staggerChildren: number = 0.15, delayChildren: number = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const wordMaskReveal: Variants = {
  hidden: {
    y: "110%",
    opacity: 0,
  },
  show: (delay: number = 0) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

