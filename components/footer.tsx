"use client";

import { motion } from "framer-motion";
import { Award, Heart, Globe, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Award className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="text-left">
                <p className="font-serif text-xl font-bold">EV4GH 2026</p>
                <p className="text-sm opacity-80">Penandjo Lemoupa Rodgerson</p>
              </div>
            </div>

            {/* Official Statement */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
              <Globe className="w-8 h-8 mx-auto mb-3 text-accent" />
              <p className="text-lg font-medium mb-2">
                Innovative Portfolio Submission
              </p>
              <p className="text-sm opacity-90 leading-relaxed">
                This website is my official innovative short portfolio submission for{" "}
                <span className="font-semibold text-accent">
                  Emerging Voices for Global Health 2026
                </span>{" "}
                — Track 2: Health Systems Professional
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
              <a 
                href="mailto:penandjorodgerson@gmail.com"
                className="hover:text-accent transition-colors"
              >
                penandjorodgerson@gmail.com
              </a>
              <span className="opacity-50 hidden sm:inline">|</span>
              <a 
                href="tel:+237670363716"
                className="hover:text-accent transition-colors"
              >
                +237 670 363 716
              </a>
              <span className="opacity-50 hidden sm:inline">|</span>
              <span className="opacity-80">Douala, Cameroon</span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <a href="#hero" className="hover:text-accent transition-colors">Home</a>
              <a href="#motivation" className="hover:text-accent transition-colors">Motivation</a>
              <a href="#concept-note" className="hover:text-accent transition-colors">Concept Note</a>
              <a href="#cv" className="hover:text-accent transition-colors">CV</a>
              <a href="#impact" className="hover:text-accent transition-colors">Impact</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-white/20 mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-70 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400" /> for Global Health
            </p>
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} Dr. Penandjo L. Rodgerson
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-primary-foreground hover:text-accent hover:bg-white/10"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
