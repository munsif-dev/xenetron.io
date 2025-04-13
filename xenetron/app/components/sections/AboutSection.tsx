// components/sections/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const stats = [
    { number: "5+", label: "Years of Innovation" },
    { number: "500+", label: "Satisfied Clients" },
    { number: "35+", label: "AI Experts" },
    { number: "99.9%", label: "Uptime Guaranteed" },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Left column - Image */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-lg overflow-hidden border border-accent/10">
              <div className="aspect-[4/3] bg-tertiary relative">
                {/* Abstract representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary via-secondary to-accent/20"></div>
                    
                    {/* Animated dots grid */}
                    <div className="absolute inset-0 grid grid-cols-10 grid-rows-8">
                      {Array.from({ length: 80 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center justify-center"
                          initial={{ opacity: 0.1 }}
                          animate={{ opacity: [0.1, 0.5, 0.1] }}
                          transition={{
                            duration: 3,
                            delay: i % 7 * 0.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          <div className="w-1 h-1 rounded-full bg-accent/60"></div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Central logo element */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-32 h-32 bg-tertiary rounded-full flex items-center justify-center shadow-lg border border-accent/30"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <span className="text-5xl font-bold text-accent">X</span>
                      </motion.div>
                    </div>
                    
                    {/* Connected nodes */}
                    {[45, 135, 225, 315].map((angle, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-16 h-16 -mt-8 -ml-8 bg-secondary/80 rounded-full flex items-center justify-center shadow-lg border border-accent/20"
                        style={{
                          transform: `rotate(${angle}deg) translate(140px) rotate(-${angle}deg)`,
                        }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 3,
                          delay: i * 0.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <div className="text-accent text-xl">
                          {["AI", "SaaS", "Cloud", "Data"][i]}
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      {[45, 135, 225, 315].map((angle, i) => {
                        const radians = (angle * Math.PI) / 180;
                        const x2 = Math.cos(radians) * 140 + 200;
                        const y2 = Math.sin(radians) * 140 + 150;
                        
                        return (
                          <motion.line
                            key={i}
                            x1="200"
                            y1="150"
                            x2={x2}
                            y2={y2}
                            stroke="#ff3366"
                            strokeWidth="1.5"
                            strokeOpacity="0.3"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 2,
                              delay: i * 0.3,
                              ease: "easeInOut",
                            }}
                          />
                        );
                      })}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-tertiary p-4 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                >
                  <motion.p
                    className="text-xl md:text-2xl font-bold gradient-text"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 + 1 }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-xs text-foreground/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right column - Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
              About Xenetron
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pioneering the Future of 
              <span className="gradient-text block mt-1">Digital Transformation</span>
            </h2>
            
            <p className="text-foreground/80 mb-6">
              Xenetron is a forward-thinking software technology service provider 
              dedicated to revolutionizing the digital landscape. We specialize in 
              building and deploying cutting-edge SaaS applications that harness 
              the power of Artificial Intelligence to streamline business processes, 
              enhance decision-making, and drive innovation.
            </p>
            
            <div className="mb-8 border-l-2 border-accent/50 pl-4">
              <p className="text-lg italic text-foreground/90">
                "Our mission is to empower businesses by integrating AI-driven solutions 
                that simplify operations, unlock new growth opportunities, and catalyze 
                digital transformation."
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-foreground/80 mb-6">
              To be recognized as a global leader in innovative digital solutions—pioneering 
              the next generation of AI-powered applications that redefine how companies 
              operate and succeed in a rapidly evolving technological world.
            </p>
            
            <Link href="#services" className="btn btn-primary">
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}