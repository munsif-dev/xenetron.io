"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    // Create particles
    const numberOfParticles = 50;
    const container = particlesRef.current;
    
    // Clear existing particles
    container.innerHTML = '';

    for (let i = 0; i < numberOfParticles; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full opacity-0";
      
      // Random properties
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;
      const color = Math.random() > 0.7 ? "bg-accent" : "bg-foreground";
      
      // Set styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate, fadeIn 2s ease-in-out ${delay}s forwards`;
      
      particle.classList.add(color);
      container.appendChild(particle);
    }
  }, []);

  const titleWords = "Empowering Digital Transformation Through AI".split(" ");

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-background">
      {/* Particles background */}
      <div
        ref={particlesRef}
        className="absolute inset-0 z-0 opacity-40"
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-accent font-medium mb-4">XENETRON</p>
          </motion.div>
          
          <h1 className="mb-6">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2 sm:mr-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + index * 0.1,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                {index === 3 || index === 4 ? (
                  <span className="gradient-text font-bold">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>
          
          <motion.p
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            We build intelligent SaaS applications that revolutionize business operations, 
            streamline processes, and drive innovation through cutting-edge AI technology.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link href="#services" className="btn btn-primary">
              Explore Our Services
            </Link>
            <Link href="#contact" className="btn btn-secondary">
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
        
        {/* Hero graphics */}
        <motion.div
          className="mt-12 relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-tertiary rounded-xl">
              <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
            </div>
            
            {/* Floating abstract elements */}
            <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-accent/20 rounded-full filter blur-xl animate-float"></div>
            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-accent/10 rounded-full filter blur-xl animate-float" style={{animationDelay: "2s"}}></div>
            
            {/* Code block */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:w-96 h-48 bg-tertiary/90 backdrop-blur-sm rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-foreground/70 text-xs">ai_transformation.py</span>
              </div>
              <pre className="text-xs">
                <code className="text-foreground/80">
                  <span className="text-blue-400">import</span> xenetron.ai <span className="text-blue-400">as</span> xai<br />
                  <br />
                  <span className="text-green-400">Initialize AI transformation</span><br />
                  model = xai.Model(<span className="text-accent">{"'business_intelligence'"}</span>)<br />
                  result = model.transform(data)<br />
                  <br />
                  <span className="text-accent">→ Transformation complete: 98.5% efficiency</span>
                </code>
              </pre>
            </div>
          </div>
          
          {/* Stats indicators */}
          <div className="absolute -bottom-5 left-10 bg-background border border-accent/20 rounded-lg p-3 shadow-lg">
            <p className="text-xs text-foreground/70">Processing Speed</p>
            <p className="text-lg font-bold gradient-text">2.7x Faster</p>
          </div>
          
          <div className="absolute -bottom-5 right-10 bg-background border border-accent/20 rounded-lg p-3 shadow-lg">
            <p className="text-xs text-foreground/70">Cost Reduction</p>
            <p className="text-lg font-bold gradient-text">32% Lower</p>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-foreground/50">Scroll to explore</span>
            <div className="w-5 h-9 rounded-full border border-foreground/20 flex items-start justify-center p-1">
              <motion.div
                className="w-1 h-1.5 bg-accent rounded-full"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}