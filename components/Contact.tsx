"use client";

import { motion } from "framer-motion";
import { Send, Github, Mail, User } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-muted/10">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let's Connect</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Open for opportunities, hackathon teaming, or just discussing cool AI ideas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 flex flex-col justify-center space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                  <a href="mailto:kavyamadani10@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">
                    kavyamadani10@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center text-foreground shrink-0 shadow-sm">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">GitHub</h4>
                  <a href="https://github.com/KavyaMadani" target="_blank" className="text-lg font-bold hover:text-primary transition-colors">
                    @KavyaMadani
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3 bg-card/60 backdrop-blur-xl border border-border p-8 rounded-3xl shadow-2xl relative"
            >
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input id="name" placeholder="John Doe" className="pl-10 bg-background/50 border-border/50 focus:border-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="john@example.com" className="pl-10 bg-background/50 border-border/50 focus:border-primary" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[120px] bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button type="submit" size="lg" className="flex-1 rounded-full shadow-lg shadow-primary/20">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                  <Link href="https://github.com/KavyaMadani" target="_blank" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "flex-1 rounded-full bg-transparent border-border/50")}>
                      <Github className="mr-2 h-4 w-4" /> Open GitHub
                  </Link>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
