"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  const isInView = true;

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "penandjorodgerson@gmail.com",
      href: "mailto:penandjorodgerson@gmail.com"
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+237 670 363 716",
      href: "tel:+237670363716"
    },
    {
      icon: Phone,
      label: "Work",
      value: "+237 688 292 677",
      href: "tel:+237688292677"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bonaberi, Bojongo, Douala, Cameroon",
      href: null
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-3xl" />
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
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss my EV4GH 2026 application — feel free to reach out directly
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-0 shadow-xl overflow-hidden cursor-default">
            {/* Top accent */}
            <motion.div 
              className="h-1 bg-gradient-to-r from-primary via-accent to-primary"
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 100%" }}
            />
            
            <CardContent className="p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                    Contact Information
                  </h3>
                  
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.35 + index * 0.12, ease: "easeOut" }}
                      whileHover={{ translateX: 5 }}
                      className="flex items-start gap-4"
                    >
                      <motion.div 
                        className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0"
                        whileHover={{ scale: 1.2, backgroundColor: "rgba(var(--accent), 0.2)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <item.icon className="w-5 h-5 text-accent" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground font-medium hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center cursor-default"
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4"
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      whileHover={{ scale: 1.3, rotate: 10 }}
                    >
                      <Send className="w-8 h-8 text-accent" />
                    </motion.div>
                    <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                      Ready to Connect?
                    </h4>
                    <p className="text-sm text-muted-foreground mb-6">
                      I&apos;m excited about the opportunity to join EV4GH 2026 and contribute 
                      to global health discussions.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                        asChild
                      >
                        <a href="mailto:penandjorodgerson@gmail.com">
                          <motion.div
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Mail className="w-5 h-5 mr-2" />
                          </motion.div>
                          Send Email
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
