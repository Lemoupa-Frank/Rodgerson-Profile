"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Download, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const workExperience = [
  {
    title: "Director in Charge of Human Resources",
    company: "Cabinet Medical Allo Docteur",
    location: "Douala, Cameroon",
    period: "Sep 2025 – Present",
    description: "Lead recruitment, staffing, and workforce distribution across centers in Douala and Yaoundé. Develop HR policies, ensure labor compliance, and organize training programs for medical and non-medical staff.",
    current: true
  },
  {
    title: "Medical Doctor & Clinical Coordinator",
    company: "Various Healthcare Facilities",
    location: "Cameroon",
    period: "2019 – 2025",
    description: "Provided direct patient care, coordinated clinical operations, and supervised healthcare teams across multiple facilities.",
    current: false
  },
];

const skills = [
  "Healthcare Management",
  "Clinical Leadership",
  "Health Policy",
  "Community Health",
  "Human Resources",
  "Team Leadership",
  "Strategic Planning",
  "Public Health",
];

const certifications = [
  {
    title: "Professional Medical Council Registration - Cameroon",
    fileName: "medical-council-registration.pdf"
  },
  {
    title: "Continuous Professional Development in Health Systems Management",
    fileName: "health-systems-management.pdf"
  },
  {
    title: "Training in Community Health and Public Health Initiatives",
    fileName: "community-health-training.pdf"
  },
];

export function CVSection() {
  const inView = true;

  return (
    <section id="cv" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Curriculum Vitae
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional Experience, Education & Skills
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-12"
        >
          <a href="/documents/cv.pdf" download="Penandjo-Lemoupa-Rodgerson-CV.pdf">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Full CV PDF
            </Button>
          </a>
        </motion.div>

        {/* About Me Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            <CardContent className="p-6 lg:p-8">
              <h3 className="font-serif text-xl font-bold mb-3">About Me</h3>
              <p className="leading-relaxed opacity-95">
                Physician and healthcare executive with experience in clinical leadership, health 
                service management, human resources oversight, and coordination of multi-site medical 
                operations across West and Central Africa. Passionate about health service re-organisation 
                and bridging the gap between health facilities and communities.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="text-primary">Work Experience</CardTitle>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <div className="space-y-8">
                  {workExperience.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.25 + index * 0.1 }}
                      className="relative pl-10"
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ${
                        job.current ? "bg-primary" : "bg-primary/20"
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          job.current ? "bg-primary-foreground" : "bg-primary"
                        }`} />
                      </div>

                      <div className={`p-4 rounded-lg ${job.current ? "bg-primary/5 border border-primary/20" : "bg-muted/50"}`}>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                          <div>
                            <h4 className="font-bold text-foreground">{job.title}</h4>
                            <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
                          </div>
                          {job.current && (
                            <span className="inline-block px-2 py-1 bg-primary text-primary-foreground text-xs rounded font-semibold">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="space-y-1 mb-3">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {job.period}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{job.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education & Skills */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <Card className="border-0 shadow-lg h-full">
                <CardHeader className="bg-primary/5 border-b border-primary/10">
                  <CardTitle className="text-primary">Key Skills</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.04 }}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="border-0 shadow-lg h-full">
                <CardHeader className="bg-primary/5 border-b border-primary/10">
                  <CardTitle className="text-primary">Education</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground">Doctor of Medicine (MD)</h4>
                    <p className="text-sm text-muted-foreground">University of Buea, Cameroon</p>
                    <p className="text-xs text-muted-foreground">2019</p>
                  </div>
                  <div className="border-t border-muted pt-4">
                    <h4 className="font-bold text-foreground">General Education Certificate (GCE)</h4>
                    <p className="text-sm text-muted-foreground">Advanced Level & Ordinary Level</p>
                    <p className="text-xs text-muted-foreground">Cameroon</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Publications/Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="text-primary">Certifications & Training</CardTitle>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="text-primary font-bold">•</span>
                      <a 
                        href={`/documents/certifications/${cert.fileName}`}
                        download={cert.fileName}
                        className="text-primary hover:text-primary/80 underline cursor-pointer transition-colors flex items-center gap-2 group"
                      >
                        <span>{cert.title}</span>
                        <FileText className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
