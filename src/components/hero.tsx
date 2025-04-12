"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-background to-background -z-10"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      {/* Orbs for decoration */}
      <motion.div 
        className="absolute top-[15%] right-[10%] h-[300px] w-[300px] rounded-full bg-brand/5 blur-[100px] -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      
      <motion.div 
        className="absolute bottom-[15%] left-[10%] h-[250px] w-[250px] rounded-full bg-brand/10 blur-[120px] -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      <div className="container flex flex-col items-center justify-center px-4 pt-24 pb-16 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-brand bg-brand/10 rounded-full"
        >
          Crafting Digital Excellence
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We Build <span className="relative">
            <span className="relative z-10">Exceptional</span>
            <span className="absolute bottom-2 md:bottom-3 left-0 h-3 w-full bg-brand/20 -z-10"></span>
          </span> Software Solutions
        </motion.h1>
        
        <motion.p 
          className="max-w-2xl text-lg md:text-xl text-foreground/70 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Lumiso transforms your ideas into powerful, intuitive software solutions. 
          Our expert team designs and develops custom applications that drive your 
          business forward.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" variant="glow">Get Started</Button>
          <Button size="lg" variant="outline">Our Work</Button>
        </motion.div>
        
        {/* Trusted by section */}
        <motion.div 
          className="mt-20 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-sm text-foreground/50 mb-6">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {["Company 1", "Company 2", "Company 3", "Company 4", "Company 5"].map((company, i) => (
              <motion.div 
                key={company}
                className="text-foreground/40 font-semibold tracking-wider text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-5 h-9 border-2 border-foreground/20 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-foreground/40 rounded-full mt-1.5"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          />
        </div>
        <span className="text-xs text-foreground/40">Scroll Down</span>
      </motion.div>
    </div>
  );
} 