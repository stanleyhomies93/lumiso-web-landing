"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1020] via-[#0e1420] to-[#121a30] -z-10"></div>
      
      {/* Hero grid pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>
      
      {/* Animated orbs */}
      <motion.div 
        className="absolute top-[10%] right-[15%] h-[400px] w-[400px] rounded-full bg-[#5181ff]/10 blur-[120px] -z-10 animate-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      
      <motion.div 
        className="absolute bottom-[10%] left-[10%] h-[350px] w-[350px] rounded-full bg-[#5181ff]/15 blur-[100px] -z-10 animate-float animate-delay-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      {/* Hero content */}
      <div className="container flex flex-col items-center justify-center px-4 pt-24 pb-16 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-white bg-gradient-to-r from-[#5181ff]/20 to-[#7ba6ff]/20 rounded-full border border-[#5181ff]/20 backdrop-blur-sm"
        >
          Crafting Digital Excellence
        </motion.div>
        
        <motion.h1 
          className="mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We Build <span className="relative">
            <span className="relative z-10 gradient-text">Exceptional</span>
            <span className="absolute bottom-2 md:bottom-3 left-0 h-3 w-full bg-[#5181ff]/20 rounded-sm blur-[2px] -z-10"></span>
          </span> Software Solutions
        </motion.h1>
        
        <motion.p 
          className="max-w-2xl text-lg md:text-xl text-white/80 mb-10"
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
          <Button size="lg" variant="glow" className="font-medium">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="font-medium">
            Our Work
          </Button>
        </motion.div>
        
        {/* Trusted by section */}
        <motion.div 
          className="mt-24 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-sm font-medium tracking-wider text-white/50 mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {["Company 1", "Company 2", "Company 3", "Company 4", "Company 5"].map((company, i) => (
              <motion.div 
                key={company}
                className="text-white/60 font-semibold tracking-wider text-lg"
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
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="flex flex-col items-center gap-2 animate-float">
          <span className="text-xs font-medium text-white/60 tracking-wide">SCROLL DOWN</span>
          <div className="p-2 rounded-full border border-[#5181ff]/30 bg-[#131a2b]/40 backdrop-blur-sm animate-pulse-glow">
            <ArrowDown size={16} className="text-[#5181ff]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
} 