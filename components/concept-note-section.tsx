"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Users, 
  Building2, 
  Handshake,
  ChevronRight,
  BookOpen
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function ConceptNoteSection() {
  const isInView = true;

  return (
    <section
      id="concept-note"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            HSR 2026 Sub-Theme
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Concept Note
          </h2>
          <p className="text-xl text-accent font-semibold mb-2">
            Plurality and Partnerships
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            A framework for strengthening the link between health facilities and communities 
            through community-oriented primary care and public-private collaboration
          </p>
          <a href="/documents/concept-note.pdf" download="Penandjo-Concept-Note.pdf">
            <Button variant="outline" size="sm" className="gap-2 border-primary text-primary">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </a>
        </motion.div>

        {/* Concept Note Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{ translateY: -4 }}
          >
            <Card className="border-0 shadow-lg overflow-hidden cursor-default">
              <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Introduction & Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <p className="text-foreground leading-relaxed text-lg">
                  I believe people will gravitate towards a better health status if they are 
                  actively involved in health decision-making. The way forward is{" "}
                  <span className="text-accent font-semibold">health service re-organisation</span>{" "}
                  as a path towards improving the link between health facilities and their 
                  communities. This pathway closely matches the components of this year&apos;s 
                  sub-theme, <strong>Plurality and Partnerships</strong>.
                </p>
                <p className="text-foreground leading-relaxed mt-4">
                  I envision a combination of strategies that can be steps towards attaining 
                  this goal. The core framework will be a{" "}
                  <span className="text-primary font-semibold">community-oriented primary care system</span>, 
                  in association with a detailed patient follow-up model and private-public collaboration.
                </p>
              </CardContent>
            </Card>


          </motion.div>

          {/* Community Health Workers Section */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            whileHover={{ translateY: -4 }}
          >
            <Card className="border-0 shadow-lg overflow-hidden cursor-default">
              <CardHeader className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Community Health Workers & Data Collection
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <p className="text-foreground leading-relaxed">
                  The <strong>Community-Oriented Primary Care</strong> framework was initially imagined 
                  as the perfect junction between traditional clinical care and public health. It 
                  happens to be a key component in repairing the gap that has been created between 
                  health facilities and their communities.
                </p>
                
                <div className="mt-6 p-4 bg-muted rounded-lg border-l-4 border-accent">
                  <p className="font-semibold text-foreground mb-2">Implementation Approach:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>Defining and characterising the main community linked to each health facility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>Accomplished by a network of Community Health Workers (CHWs), presently sponsored by the WHO in Cameroon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>In-depth data collection: demographics, epidemiologic data, and qualitative data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>Methods: surveys, focused group discussions, informant interviews, and analysis of vital statistics</span>
                    </li>
                  </ul>
                </div>

                <p className="text-foreground leading-relaxed mt-4">
                  The next step will involve prioritising health problems in the community and 
                  developing <span className="text-accent font-semibold">targeted interventions</span> (direct-clinical 
                  care, enabling services and community-level interventions). This will be the 
                  basis of actions carried out in every department of a health facility.
                </p>
              </CardContent>
            </Card>


          </motion.div>

          {/* Patient Follow-up Section */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ translateY: -4 }}
          >
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/80 to-accent/80 text-primary-foreground">
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Dedicated Patient Follow-up Department
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <p className="text-foreground leading-relaxed">
                  The next component of this concept framework will be advocating for a{" "}
                  <span className="text-primary font-semibold">dedicated patient follow-up department</span>{" "}
                  as a priority in the establishment of facilities. Presently, the Ministry of 
                  Public Health acknowledges that the two main departments necessary in every 
                  health facility are a medical department and a nursing department.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <p className="font-semibold text-foreground mb-2">Evidence from Uganda</p>
                    <p className="text-sm text-muted-foreground">
                      Nawaggi et al., 2018: Improved patient linkage and retention
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <p className="font-semibold text-foreground mb-2">WHO Initiatives, Cameroon</p>
                    <p className="text-sm text-muted-foreground">
                      Community health worker follow-up programs improving patient retention
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <p className="font-semibold text-foreground mb-2">Zambia Results</p>
                    <p className="text-sm text-muted-foreground">
                      Foloko M et al., 2024: Effective retention of HIV patients
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="font-semibold text-foreground mb-2">My Experience</p>
                    <p className="text-sm text-muted-foreground">
                      Currently working in a private medical cabinet with a dedicated follow-up unit
                    </p>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed mt-6">
                  With efficacy so evident, I would advocate for the vulgarization of such 
                  endeavours in Cameroon. I have seen first-hand what is necessary for the 
                  establishment of such a department in terms of human resources, logistics 
                  and finances.
                </p>
              </CardContent>
            </Card>


          </motion.div>

          {/* Public-Private Cooperation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-accent/80 to-primary/80 text-accent-foreground">
                <CardTitle className="flex items-center gap-2">
                  <Handshake className="w-5 h-5" />
                  Public-Private Cooperation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <p className="text-foreground leading-relaxed">
                  My professional experience so far has been both in a public health center and 
                  a private medical cabinet. This gave me an opportunity to duly appreciate the 
                  main differences and areas in which communion between the public and the private 
                  sector will help strengthen the relationship between health facilities and their 
                  communities.
                </p>

                <div className="mt-6 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-border">
                  <p className="font-semibold text-foreground mb-4">Key Areas for Public-Private Partnership:</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Immunization Programs</p>
                        <p className="text-xs text-muted-foreground">Currently held by public sector</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="text-accent font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">CHW Integration</p>
                        <p className="text-xs text-muted-foreground">Underutilized by private sector</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed mt-6 font-medium">
                  I will advocate for the adaptation of models of care with entry points being 
                  private clinics in these two categories, creating a more integrated and 
                  accessible health system for all Cameroonians.
                </p>
              </CardContent>
            </Card>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
