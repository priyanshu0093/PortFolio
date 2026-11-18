import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://priyanshu-portfolio.vercel.app"),
  title: "Priyanshu Kumawat — Full Stack Developer",
  description:
    "Priyanshu Kumawat designs and builds digital products, multi-tenant SaaS platforms, real-time systems, and high-performance web experiences.",
  keywords: [
    "Priyanshu Kumawat",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js",
    "Next.js Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Priyanshu Kumawat", url: "https://github.com/priyanshu0093" }],
  creator: "Priyanshu Kumawat",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Priyanshu Kumawat — Full Stack Developer",
    description:
      "Turning ideas into functional experiences. Full Stack Developer (MERN) specializing in multi-tenant SaaS architectures and real-time systems.",
    siteName: "Priyanshu Kumawat",
    images: [
      {
        url: "/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Priyanshu Kumawat Portfolio Hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Kumawat — Full Stack Developer",
    description:
      "Turning ideas into functional experiences. Full Stack Developer (MERN) specializing in multi-tenant SaaS architectures.",
    images: ["/images/hero/hero-bg.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="antialiased bg-[#08090a] text-[#d6c8b2] selection:bg-[#e97f61] selection:text-[#08090a]">
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
