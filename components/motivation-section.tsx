"use client";

import { motion } from "framer-motion";
import { Quote, Heart, Lightbulb, Target, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function MotivationSection() {
  const isInView = true;

  return (
    <section
      id="motivation"
      className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            EV4GH Requirement
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Motivation Statement
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Why I am passionate about Global Health and the Emerging Voices training program
          </p>
          <a href="/documents/motivation-statement.pdf" download="Penandjo-Motivation-Statement.pdf">
            <Button variant="outline" size="sm" className="gap-2 border-primary text-primary">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </a>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.01, y: -4 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="relative overflow-hidden border-0 shadow-xl bg-card cursor-default">
            {/* Accent border */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundSize: "200% 100%" }}
            />
            
            <CardContent className="p-8 lg:p-12">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-accent/20 mb-6" />
              
              {/* Statement Content */}
              <div className="space-y-6 text-foreground leading-relaxed">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-lg lg:text-xl font-serif italic"
                >
                  I wasn&apos;t trained in Global Health; I was trained in Health. Most simply, a 
                  medical doctor&apos;s role is to make people feel better. As simple as it may sound, 
                  making people feel better involves a very large number of variables that are 
                  not necessarily contained in your traditional clinical medicine.{" "}
                                        <span className="text-primary font-semibold not-italic">
                    I believe that&apos;s where Global Health steps in.
                  </span>{" "}
                  Analysing what is not only good for the health of a person alone, but also 
                  what is good for a population.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border-l-4 border-primary"
                >
                  <Heart className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <p className="text-base">
                    I am most passionate about <strong>health service re-organisation</strong>. 
                    I believe the models of care presently being implemented in my country, 
                    Cameroon, aren&apos;t well adapted to the people. Entry points into the health 
                    system are not properly coordinated, and a lot of Cameroonians have lost 
                    trust in conventional medicine.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border-l-4 border-primary"
                >
                  <Target className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <p className="text-base">
                    As the SDG era comes to an end my country Cameroon is not at the level it could be 
                    in terms of the quality and efficiency of health service delivery.My experience in 
                    clinical medcine, health management, and community health are the basis of my passion  
                    to make a change.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.65 }}
                  className="grid sm:grid-cols-3 gap-4"
                >
                  <motion.div 
                    className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p 
                      className="text-3xl font-bold text-primary"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      27%
                    </motion.p>
                    <p className="text-sm text-muted-foreground">
                      of household health expenditures go to roadside vendors
                    </p>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p 
                      className="text-3xl font-bold text-primary"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.75, duration: 0.6 }}
                    >
                      40%
                    </motion.p>
                    <p className="text-sm text-muted-foreground">
                      of Cameroonians depend on traditional medications & herbalists
                    </p>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p 
                      className="text-3xl font-bold text-primary"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      25%
                    </motion.p>
                    <p className="text-sm text-muted-foreground">
                      of available public health services are utilised effectively
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border-l-4 border-primary"
                >
                  <Target className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <p className="text-base">
                    An opportunity to be part of Emerging Voices for Global Health 2026 will 
                    be one to meet people of a similar mind. From isolated endeavours to a 
                    systemic viewpoint, cross-cultural communication, exposure to policy-making 
                    environments, and improving skills in negotiation and consensus-building 
                    are some of the benefits I hope to achieve.
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9 }}
                  className="text-lg font-serif text-center italic text-muted-foreground pt-4 border-t border-border"
                >
                  <Lightbulb className="w-5 h-5 inline-block mr-2 text-primary" />
                  Ultimately, this will be a path towards sharing ideas and gaining premium knowledge.
                </motion.p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
