"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiArrowRight, FiServer, FiTrendingUp, FiBook } from "react-icons/fi";
import Link from "next/link";

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Changed to true so animations only happen once
    threshold: 0.1,
  });

  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <FiServer className="w-6 h-6" />,
      title: "AI-Powered SaaS Application Development",
      description:
        "We design and build custom SaaS platforms that leverage AI to automate workflows, optimize resource allocation, and drive operational efficiency. Our cloud-based applications scale with your business while ensuring data security and system reliability.",
      features: [
        "Custom Solutions tailored to your unique needs",
        "Smart Automation using cutting-edge AI",
        "Scalable & Secure cloud infrastructure",
        "Continuous updates and improvements",
      ],
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Digital Transformation Consulting",
      description:
        "Our experts work with you to craft comprehensive digital strategies aligned with your business goals. We identify processes that can be automated using AI insights, reducing manual tasks and improving overall efficiency.",
      features: [
        "Strategic Roadmaps for digital success",
        "Process Optimization with AI insights",
        "Change Management support",
        "Continuous Innovation frameworks",
      ],
    },
    {
      icon: <FiBook className="w-6 h-6" />,
      title: "AI Education & Training Programs",
      description:
        "Empower your team with our comprehensive AI education programs. We offer courses that demystify Artificial Intelligence, hands-on labs for practical implementation, and thought leadership seminars featuring industry experts.",
      features: [
        "Foundations of AI for beginners",
        "Hands-On Labs with real-world projects",
        "Industry Expert webinars and seminars",
        "Custom training for your team's needs",
      ],
    },
  ];

  // Simplified animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced stagger timing
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
    <section id="services" className="py-20 bg-tertiary relative z-fix">
      {/* Background gradient for smoother transition */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background/50 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Solutions for
            <span className="gradient-text block mt-1">Digital Transformation</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            We offer end-to-end services designed to transform your business
            operations through the power of artificial intelligence and
            cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Service tabs */}
          <motion.div
            className="lg:col-span-4 flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                  activeService === index
                    ? "bg-accent text-background"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
                onClick={() => setActiveService(index)}
              >
                <div
                  className={`p-3 rounded-md ${
                    activeService === index
                      ? "bg-background text-accent"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      activeService === index
                        ? "text-background/90"
                        : "text-foreground/70"
                    }`}
                  >
                    {service.description.substring(0, 60)}...
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Service details - improved animations and transitions */}
          <motion.div
            className="lg:col-span-8 bg-secondary rounded-lg p-8 shadow-md border border-accent/10"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 text-accent rounded-md">
                {services[activeService].icon}
              </div>
              <h3 className="text-2xl font-bold">
                {services[activeService].title}
              </h3>
            </div>

            <motion.div
              key={`desc-${activeService}`} // Key for animation on service change
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="scroll-fix"
            >
              <p className="text-foreground/80 mb-8">
                {services[activeService].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <motion.div
                    key={`${activeService}-feature-${index}`}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-foreground/90">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="flex justify-between items-center pt-4 border-t border-accent/10">
              <p className="text-sm text-foreground/60">
                Perfect for businesses looking to innovate and grow
              </p>
              <Link
                href="#contact"
                className="flex items-center gap-2 text-accent hover:underline"
              >
                Learn more <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
    </section>
  );
}