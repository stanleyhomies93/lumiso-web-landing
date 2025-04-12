"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ProjectType = {
  title: string;
  description: string;
  category: string;
  image: keyof typeof gradients;
};

type GradientType = {
  "gradient-1": string;
  "gradient-2": string;
  "gradient-3": string;
  "gradient-4": string;
};

const gradients: GradientType = {
  "gradient-1": "bg-gradient-to-br from-blue-500 to-purple-600",
  "gradient-2": "bg-gradient-to-br from-emerald-500 to-cyan-600",
  "gradient-3": "bg-gradient-to-br from-orange-500 to-rose-600",
  "gradient-4": "bg-gradient-to-br from-indigo-500 to-fuchsia-600"
};

const projects: ProjectType[] = [
  {
    title: "Fintech Dashboard",
    description: "An intuitive financial analytics platform with real-time data visualization and reporting capabilities.",
    category: "Web Application",
    image: "gradient-1"
  },
  {
    title: "Healthcare Mobile App",
    description: "Patient management system that streamlines appointment scheduling and medical record access.",
    category: "Mobile App",
    image: "gradient-2"
  },
  {
    title: "E-commerce Platform",
    description: "Scalable online marketplace with integrated payment processing and inventory management.",
    category: "Full-stack Solution",
    image: "gradient-3"
  },
  {
    title: "IoT Control Center",
    description: "Centralized hub for monitoring and controlling smart devices across multiple locations.",
    category: "IoT Application",
    image: "gradient-4"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            className="inline-block px-3 py-1 mb-4 text-sm font-medium text-brand bg-brand/10 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Portfolio
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our successful projects that demonstrate our technical expertise
            and creative problem-solving approach.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 h-[300px] md:h-[400px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Project Background */}
              <div className={`absolute inset-0 ${gradients[project.image]} opacity-90`}></div>
              
              {/* Animated Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
              
              {/* Content Container */}
              <div className="relative z-10 h-full w-full p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:translate-y-[-20px]">
                  <span className="inline-block text-white/70 mb-2 text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-white/90 mb-6 max-w-md">{project.description}</p>
                  
                  <div className="inline-flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    View Project <ArrowUpRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#" 
            className="inline-flex items-center text-brand hover:text-brand/80 font-medium transition-colors"
          >
            View All Projects <ArrowUpRight className="h-4 w-4 ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 