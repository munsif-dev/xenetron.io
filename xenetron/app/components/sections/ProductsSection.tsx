"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiCheckCircle,
  FiArrowRight,
  
  FiCode,
  FiFileText,
  FiTool,
  FiMonitor,
  FiFeather, 
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import autogradepro from "@/public/autogradepro.png";

export default function ProductsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      id: "autogradepro",
      name: "AutoGradePro",
      tagline: "AI-Powered Grading Made Simple",
      description:
        "The intelligent grading platform that helps educators automate assessment, provide detailed feedback, and save hours of grading time.",
      icon: <Image src={autogradepro} alt="Company Logo" width={30} height={30} />,
      color: "from-purple-50 to-purple-200",
      coreFeatures: [
        "Automated grading for essays, code, and quizzes",
        "Intelligent plagiarism detection",
        "Real-time analytics and progress tracking",
        "Custom rubric creation and management",
      ],
      benefits: [
        {
          title: "Save Valuable Time",
          description: "Reduce grading time by up to 70% with intelligent automation.",
          icon: <FiFeather />,
        },
        {
          title: "Improve Feedback Quality",
          description: "Provide consistent, detailed feedback to every student.",
          icon: <FiFileText />,
        },
        {
          title: "Enhanced Analytics",
          description: "Gain insights into student performance with comprehensive reports.",
          icon: <FiMonitor />,
        },
      ],
      demoUrl: "https://autogradepro.vercel.app/",
      docsUrl: "https://autogradepro.vercel.app/",
      ctaText: "Try Free Demo",
      techStack: ["AI/ML", "NLP", "Cloud", "React", "Python"],
      userTypes: ["Educators", "Schools", "EdTech Companies"],
    },
    {
      id: "devcv",
      name: "DevCV",
      tagline: "ATS-Optimized Resumes for Developers",
      description:
        "The intelligent resume builder that helps developers create tailored, ATS-friendly resumes that match job requirements and highlight relevant skills.",
      icon: <FiCode />,
      color: "from-cyan-500 to-accent",
      coreFeatures: [
        "Job description analyzer for keyword matching",
        "Developer-specific resume templates",
        "GitHub project integration and showcase",
        "ATS optimization and score analysis",
      ],
      benefits: [
        {
          title: "Stand Out to Recruiters",
          description: "Ensure your resume passes ATS filters and matches job requirements.",
          icon: <FiCheckCircle />,
        },
        {
          title: "Showcase Your Work",
          description: "Automatically import and feature your best GitHub projects.",
          icon: <FiCode />,
        },
        {
          title: "Tailored Applications",
          description: "Customize your resume for each job with one-click optimization.",
          icon: <FiTool />,
        },
      ],
      demoUrl: "#products",
      docsUrl: "#products",
      ctaText: "Build Your Resume",
      techStack: ["AI/ML", "NLP", "React", "Node.js", "GitHub API"],
      userTypes: ["Developers", "Tech Job Seekers", "Bootcamp Graduates"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="products" className="py-20 bg-tertiary relative z-10">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background/50 to-transparent pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Our Products
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Innovative Solutions for
            <span className="gradient-text block mt-1">Modern Challenges</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Explore our suite of cutting-edge products designed to streamline workflows, 
            enhance productivity, and solve real-world problems through AI-powered technology.
          </p>
        </motion.div>

        {/* Product tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className={`px-5 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                activeProduct === index
                  ? "bg-accent text-background shadow-lg shadow-accent/20"
                  : "bg-secondary text-foreground hover:bg-secondary/70"
              }`}
            >
              <span className="text-xl">{product.icon}</span>
              <span className="font-medium">{product.name}</span>
            </button>
          ))}
        </div>

        {/* Product details */}
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Product visual/demo */}
            <motion.div
              className="lg:col-span-6 order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative bg-secondary p-6 rounded-xl border border-accent/10 shadow-xl">
                {/* Product visual representation */}
                <div className="aspect-[16/9] relative rounded-lg overflow-hidden bg-background/50">
                  <div className={`absolute inset-0 bg-gradient-to-br ${products[activeProduct].color} opacity-10`}></div>
                  
                  {/* Mock UI for product */}
                  <div className="absolute top-0 w-full h-8 bg-background/80 flex items-center px-3 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    <div className="flex-1 text-center">
                      <p className="text-xs text-foreground/60">{products[activeProduct].name}</p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    {activeProduct === 0 ? (
                      // AutoGradePro UI mockup
                      <div className="w-3/4 mx-auto mt-6">
                        <div className="bg-background/30 backdrop-blur-sm p-4 rounded-lg mb-3">
                          <div className="h-4 w-1/2 bg-accent/30 rounded-full mb-2"></div>
                          <div className="h-3 w-full bg-foreground/10 rounded-full mb-2"></div>
                          <div className="h-3 w-5/6 bg-foreground/10 rounded-full mb-2"></div>
                          <div className="h-3 w-4/6 bg-foreground/10 rounded-full"></div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-16 bg-background/30 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <div className="h-6 w-6 rounded-full bg-green-400/30"></div>
                          </div>
                          <div className="h-16 bg-background/30 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <div className="h-6 w-6 rounded-full bg-blue-400/30"></div>
                          </div>
                          <div className="h-16 bg-background/30 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <div className="h-6 w-6 rounded-full bg-purple-400/30"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // DevCV UI mockup
                      <div className="w-3/4 mx-auto mt-6">
                        <div className="flex gap-3 mb-3">
                          <div className="w-1/3 bg-background/30 backdrop-blur-sm p-3 rounded-lg">
                            <div className="h-8 w-8 mx-auto bg-accent/30 rounded-full mb-2"></div>
                            <div className="h-2 w-full bg-foreground/10 rounded-full mb-1"></div>
                            <div className="h-2 w-2/3 mx-auto bg-foreground/10 rounded-full"></div>
                          </div>
                          <div className="w-2/3">
                            <div className="bg-background/30 backdrop-blur-sm p-3 rounded-lg mb-2">
                              <div className="h-3 w-1/3 bg-accent/30 rounded-full mb-2"></div>
                              <div className="h-2 w-full bg-foreground/10 rounded-full mb-1"></div>
                              <div className="h-2 w-full bg-foreground/10 rounded-full"></div>
                            </div>
                            <div className="bg-background/30 backdrop-blur-sm p-3 rounded-lg">
                              <div className="h-3 w-1/3 bg-cyan-400/30 rounded-full mb-2"></div>
                              <div className="h-2 w-full bg-foreground/10 rounded-full mb-1"></div>
                              <div className="h-2 w-4/5 bg-foreground/10 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-background/30 backdrop-blur-sm p-3 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <div className="h-3 w-1/4 bg-accent/30 rounded-full"></div>
                            <div className="h-5 w-20 bg-accent/80 rounded-full"></div>
                          </div>
                          <div className="h-2 w-full bg-foreground/10 rounded-full mb-1"></div>
                          <div className="h-2 w-full bg-foreground/10 rounded-full mb-1"></div>
                          <div className="h-2 w-3/4 bg-foreground/10 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs font-medium px-2 py-1 bg-accent/10 rounded text-accent">
                    {products[activeProduct].name}
                  </span>
                  {products[activeProduct].techStack.map((tech, index) => (
                    <span key={index} className="text-xs font-medium px-2 py-1 bg-background/50 rounded text-foreground/70">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-foreground/60">
                    For: {products[activeProduct].userTypes.join(", ")}
                  </div>
                  <div className="flex gap-2">
                    <Link href={products[activeProduct].docsUrl} className="text-sm text-accent hover:underline">
                      Documentation
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Product info */}
            <motion.div
              className="lg:col-span-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-secondary p-8 rounded-xl border border-accent/10">
                <div>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${products[activeProduct].color} text-white text-xl mb-4`}>
                    {products[activeProduct].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{products[activeProduct].name}</h3>
                  <p className="text-xl text-accent mb-4">{products[activeProduct].tagline}</p>
                  <p className="text-foreground/80 mb-6">{products[activeProduct].description}</p>
                </div>
                
                {/* Core features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Core Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {products[activeProduct].coreFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FiCheckCircle className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Benefits</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products[activeProduct].benefits.map((benefit, index) => (
                      <div key={index} className="bg-background/30 p-4 rounded-lg">
                        <div className="text-accent mb-2">{benefit.icon}</div>
                        <h5 className="font-medium mb-1">{benefit.title}</h5>
                        <p className="text-foreground/70 text-sm">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <Link
                  href={products[activeProduct].demoUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-md font-medium hover:bg-accent-light transition-colors shadow-md"
                >
                  {products[activeProduct].ctaText} <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Integration section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center bg-background/30 backdrop-blur-sm p-8 rounded-xl border border-accent/10"
        >
          <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
            Our products are designed to work together and integrate with your existing tools and workflows,
            providing a cohesive experience that enhances productivity across your organization.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 opacity-60">
            {/* Integration logos - placeholder blocks */}
            {["GitHub", "VS Code", "Slack", "G Suite", "MS Teams", "Notion"].map((integration) => (
              <div key={integration} className="flex items-center gap-2 px-3 py-2 bg-background/50 rounded">
                <div className="w-4 h-4 bg-accent/30 rounded-full"></div>
                <span className="text-sm">{integration}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
    </section>
  );
}