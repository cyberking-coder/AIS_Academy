import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AiS Academy | Avabodham Institute of Science – Pune",
  description:
    "AiS Academy (Avabodham Institute of Science) – Premium coaching institute in Pune. Expert faculty, personalized guidance, and proven results. Rated 4.6★ by 53+ students.",
  keywords: ["AiS Academy", "coaching classes Pune", "science tuition Warje", "Avabodham Institute"],
  openGraph: {
    title: "AiS Academy | Premium Coaching Institute in Pune",
    description: "Expert coaching with Mahesh Sir & Sumit Sir. Small batches, big results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} noise antialiased`}>{children}</body>
    </html>
  );
}
