"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, FileText, Stethoscope, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/3" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <Globe className="w-4 h-4" />
              Track 2 – Health Systems Professional
            </motion.div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="text-primary">Penandjo Lemoupa</span>
              <br />
              <span className="text-foreground">Rodgerson</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground font-serif italic mb-4">
              EV4GH 2026 Applicant
            </p>

            {/* Subtitle */}
            <p className="text-lg text-foreground font-medium mb-2 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-primary" />
              Physician & Health Systems Leader
            </p>
            <p className="text-base text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Reimagining Health Services in Cameroon through{" "}
              <span className="text-primary font-semibold">Plurality</span> and{" "}
              <span className="text-primary font-semibold">Partnerships</span> — 
              bridging the gap between health facilities and communities through 
              community-oriented primary care and public-private collaboration.
            </p>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">5+ Years</p>
                  <p className="text-xs text-muted-foreground">Clinical Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">2 Countries</p>
                  <p className="text-xs text-muted-foreground">Operations Managed</p>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg"
                asChild
              >
                <a href="#motivation">
                  <FileText className="w-5 h-5" />
                  View My Full Portfolio
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="#cv">
                  <Download className="w-5 h-5" />
                  Download Submission PDFs
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div 
                className="absolute -inset-4 rounded-full border-2 border-primary/20"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -inset-8 rounded-full border border-primary/10"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Main Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Penan%20Picture-egF2ugvOpl0VFXdQEmAu7Wl88NnFGN.jpg"
                  alt="Dr. Penandjo Lemoupa Rodgerson - EV4GH 2026 Applicant"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
                className="absolute -bottom-2 -right-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                MD, Cameroon
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
                className="absolute top-4 -left-4 bg-foreground text-background px-3 py-1 rounded-full text-xs font-medium shadow-lg"
              >
                UW Global Health
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
