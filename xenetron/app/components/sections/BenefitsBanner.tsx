"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiArrowUpRight, FiCpu, FiTrendingUp, FiShield, FiZap } from "react-icons/fi";

export default function BenefitsBanner() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Changed to true to ensure animations only happen once
    threshold: 0.1,
    rootMargin: "-50px 0px", // Added margin to trigger slightly before the element is in view
  });

  const benefits = [
    {
      icon: <FiCpu />,
      title: "AI-Powered",
      description: "Cutting-edge artificial intelligence algorithms",
    },
    {
      icon: <FiTrendingUp />,
      title: "Scalable",
      description: "Grows seamlessly with your business needs",
    },
    {
      icon: <FiShield />,
      title: "Secure",
      description: "Enterprise-grade security protocols",
    },
    {
      icon: <FiZap />,
      title: "Efficient",
      description: "Reduce operational costs by up to 35%",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 }, // Reduced y-offset for subtler animation
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12 bg-tertiary relative">
      {/* Add subtle gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background/80 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-secondary rounded-lg p-6 transition-transform duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-lg hover:shadow-accent/10 border border-transparent hover:border-accent/20"
            >
              <div className="flex justify-between items-start">
                <div className="text-accent text-2xl p-2 bg-accent/10 rounded-md">
                  {benefit.icon}
                </div>
                <FiArrowUpRight className="text-accent/40" />
              </div>
              <h3 className="text-lg font-semibold mt-4">{benefit.title}</h3>
              <p className="text-foreground/70 mt-2 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Join <span className="text-accent font-semibold">500+ businesses</span>{" "}
            that trust Xenetron for their digital transformation journey
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-8 opacity-60">
            {/* Placeholder logos - in a real implementation, use actual client logos */}
            {[1, 2, 3, 4, 5].map((logo) => (
              <div 
                key={logo} 
                className="h-8 w-24 bg-foreground/10 rounded-md"
                style={{
                  animation: `pulse 3s ease-in-out ${logo * 0.5}s infinite alternate`
                }}
              ></div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Add subtle gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
    </section>
  );
}