"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-brand text-brand-foreground overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] -bottom-[400px] -left-[400px] rounded-full bg-white/10 mix-blend-overlay blur-3xl"></div>
        <div className="absolute w-[600px] h-[600px] -top-[300px] -right-[300px] rounded-full bg-white/10 mix-blend-overlay blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-brand-foreground/90 mb-10 max-w-2xl mx-auto">
              Let&apos;s collaborate to build innovative solutions that drive your business forward.
              Start your journey with Lumiso today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-brand hover:bg-white/90 group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 hover:bg-white/10 text-white"
              >
                Explore Our Services
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-y-8 pt-8 mt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-1">100+</h3>
              <p className="text-sm text-brand-foreground/80">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-1">50+</h3>
              <p className="text-sm text-brand-foreground/80">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-1">95%</h3>
              <p className="text-sm text-brand-foreground/80">Client Retention</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-1">24/7</h3>
              <p className="text-sm text-brand-foreground/80">Support Service</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 