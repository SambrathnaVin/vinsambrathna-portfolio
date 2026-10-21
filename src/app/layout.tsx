import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#F7F7F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Vin Sambrathna — Software Engineer Portfolio",
  description:
    "Production-grade personal portfolio of Vin Sambrathna, software engineering student at CamTech University and developer specializing in frontend engineering, real-time forensic tools, and mobile architectures.",
  authors: [{ name: "Vin Sambrathna", url: "https://github.com/VinSambrathna" }],
  keywords: [
    "Vin Sambrathna",
    "Software Engineer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "FastAPI",
    "Machine Learning",
    "CamTech University",
    "Phnom Penh Cambodia",
  ],
  metadataBase: new URL("https://vinsambrathna.vercel.app"),
  openGraph: {
    title: "Vin Sambrathna — Software Engineer Portfolio",
    description:
      "Crafted with architectural clarity, verified project facts, and production-grade engineering standards.",
    url: "https://vinsambrathna.vercel.app",
    siteName: "Vin Sambrathna Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vin Sambrathna — Software Engineer",
    description:
      "Building thoughtful software for real-world problems. Frontend, AI fraud forensics, and mobile systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#F7F7F5] text-[#171717] antialiased">
        {/* Skip to Main Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#171717] focus:text-white focus:rounded-full focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0071E3] text-xs font-medium"
        >
          Skip to main content
        </a>

        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
