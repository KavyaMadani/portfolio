import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavya Madani | AI & Machine Learning Developer",
  description: "Portfolio of Kavya Madani, a B.Tech student in Artificial Intelligence and Machine Learning, passionate about building AI-driven platforms.",
  keywords: ["AI Developer", "Machine Learning", "Portfolio", "Kavya Madani", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen selection:bg-primary selection:text-primary-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
