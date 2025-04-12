import { motion } from "framer-motion";
import { Lightbulb, Code, CheckCircle, BarChart2 } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="h-6 w-6 text-brand" />,
    number: "01",
    title: "Discovery & Strategy",
    description: "We begin by understanding your business goals, target audience, and project requirements through in-depth consultations."
  },
  {
    icon: <Code className="h-6 w-6 text-brand" />,
    number: "02",
    title: "Design & Development",
    description: "Our team crafts elegant designs and builds robust, scalable solutions using modern technologies and best practices."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-brand" />,
    number: "03",
    title: "Testing & Deployment",
    description: "We rigorously test all aspects of your application to ensure quality, performance, and security before launch."
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-brand" />,
    number: "04",
    title: "Support & Growth",
    description: "Our relationship continues with ongoing support, maintenance, and strategic guidance to help your solution evolve."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-accent/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 md:max-w-3xl mx-auto">
          <motion.p 
            className="inline-block px-3 py-1 mb-4 text-sm font-medium text-brand bg-brand/10 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Approach
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            How We Work
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our structured development process ensures transparent communication, 
            timely delivery, and exceptional results for every project.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, i) => (
              <motion.div 
                key={step.number}
                className={`md:flex gap-10 items-center relative ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Circle connector for desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-border items-center justify-center">
                  {step.icon}
                </div>
                
                {/* Left/Right content block */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <div className="flex items-center mb-4 md:hidden">
                    <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center mr-3">
                      {step.icon}
                    </div>
                    <span className="text-xl font-bold text-brand">{step.number}</span>
                  </div>
                  
                  <div className={`md:flex items-center mb-4 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="hidden md:block text-2xl font-bold text-brand mr-2">{step.number}</span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  
                  <p className="text-foreground/70">{step.description}</p>
                </div>
                
                {/* Empty div for layout */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 