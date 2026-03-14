"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "Kavya Madani";

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none -z-10 animate-pulse" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur-sm px-3 py-1 text-sm font-medium mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
          Available for Opportunities
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {text}
          </span>
          <span className="animate-pulse">|</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 font-medium"
        >
          AI & Machine Learning Developer <br className="hidden md:block" />
          Building intelligent products and solving real-world problems with technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="#projects" className={cn(buttonVariants({ size: "lg" }), "rounded-full shadow-lg shadow-primary/25")}>
              View Projects <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="https://github.com/KavyaMadani" target="_blank" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full bg-background/50 backdrop-blur-sm")}>
              <Github className="mr-2 h-4 w-4" /> GitHub
          </Link>
          <Link href="#" className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "rounded-full")}>
              <FileText className="mr-2 h-4 w-4" /> Resume
          </Link>
          <Link href="#contact" className={cn(buttonVariants({ size: "lg", variant: "ghost" }), "rounded-full")}>
              <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-muted-foreground mb-2 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="text-muted-foreground h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
