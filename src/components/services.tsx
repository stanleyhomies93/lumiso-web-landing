"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Database, Lightbulb, Zap } from "lucide-react";

const services = [
  {
    icon: <Code2 className="h-10 w-10 text-brand" />,
    title: "Custom Software Development",
    description: "Tailored solutions designed to address your specific business needs and objectives."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-brand" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices."
  },
  {
    icon: <Globe className="h-10 w-10 text-brand" />,
    title: "Web Development",
    description: "Responsive websites and progressive web apps with modern user experiences."
  },
  {
    icon: <Database className="h-10 w-10 text-brand" />,
    title: "Data Engineering",
    description: "Build scalable data pipelines, warehouses and analytics solutions."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-brand" />,
    title: "Digital Transformation",
    description: "Strategic initiatives to modernize your technology infrastructure."
  },
  {
    icon: <Zap className="h-10 w-10 text-brand" />,
    title: "DevOps & Cloud Solutions",
    description: "Streamline development processes and deploy applications in the cloud."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-accent/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            className="inline-block px-3 py-1 mb-4 text-sm font-medium text-brand bg-brand/10 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Services that Drive Innovation
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We provide comprehensive software development services to help businesses 
            transform their digital presence and operations.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              className="bg-background p-8 rounded-lg border border-black/10 dark:border-white/10 hover:border-brand/50 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 relative">
                {service.icon}
                <div className="absolute -inset-1 bg-brand/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-brand transition-colors">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 