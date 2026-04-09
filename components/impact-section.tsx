"use client";

import { motion } from "framer-motion";
import { Heart, Users, Stethoscope, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const impactProjects = [
  {
    icon: Heart,
    title: "Community Health Initiative",
    description: "Conducted free consultations, medication distribution, and health education talks in low-resource settings, notably Bansoa(West Region) and Buea (South West Region).",
    color: "from-primary to-primary/70",
  },
  {
    icon: Users,
    title: "Healthcare Leadership Training",
    description: "Developed and implemented training programs for healthcare professionals focusing on community-oriented care and management skills.",
    color: "from-primary to-primary/70",
  },
  {
    icon: Stethoscope,
    title: "Patient Follow-up Systems",
    description: "Designed innovative patient follow-up mechanisms to improve treatment adherence and reduce mortality rates.",
    color: "from-primary to-primary/70",
  },
];

export function ImpactSection() {
  const inView = true;

  return (
    <section id="impact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Impact & Initiatives
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key projects and contributions to health systems strengthening
          </p>
        </motion.div>

        {/* Impact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {impactProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <Card className="group h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Networks & Memberships */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/3">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                Networks & Professional Memberships
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  Cameroon Medical Council
                </span>
                <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/20">
                  Association for Sustainable Women Empowerment (ASWE)
                </span>
                <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/20">
                  EV4GH 2026 Track 2
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
