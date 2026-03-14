import Link from "next/link";
import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href="#home" className="text-2xl font-bold tracking-tighter mb-2 hover:text-primary transition-colors">
            K.M.
          </Link>
          <p className="text-muted-foreground text-sm font-medium">
            © 2026 Kavya Madani. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <Link
              href="mailto:kavyamadani10@gmail.com"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all text-muted-foreground"
              aria-label="Email Kavya Madani"
            >
              <Mail className="w-4 h-4" />
            </Link>
            <Link
              href="https://github.com/KavyaMadani"
              target="_blank"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all text-muted-foreground"
              aria-label="GitHub @KavyaMadani"
            >
              <Github className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-muted-foreground text-opacity-70 flex items-center gap-1">
            Built with <span className="text-foreground font-semibold">Next.js</span> and deployed on <span className="text-foreground font-semibold">Vercel</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
