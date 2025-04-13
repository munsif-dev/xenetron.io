// components/sections/TechnologiesSection.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TechnologiesSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const technologies = [
    {
      category: "AI Frameworks",
      items: ["TensorFlow", "PyTorch", "sci-kit learn", "Keras", "OpenAI API"],
    },
    {
      category: "Cloud",
      items: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"],
    },
    {
      category: "Development",
      items: ["React", "Node.js", "Python", "Django", "FastAPI"],
    },
    {
      category: "Data",
      items: ["Postgres", "MongoDB", "Redis", "Elasticsearch", "Apache Kafka"],
    },
  ];

  return (
    <section className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Our Tech Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cutting-Edge Technologies
            <span className="gradient-text block mt-1">Powering Our Solutions</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            We leverage the latest technologies to deliver scalable, secure, and
            intelligent solutions for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, categoryIndex) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-secondary rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                {tech.category}
              </h3>
              <ul className="space-y-3">
                {tech.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + itemIndex * 0.1,
                    }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Technology visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 relative h-64 bg-tertiary rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central hub */}
              <motion.div
                className="w-20 h-20 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center z-10 border border-accent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <span className="text-accent font-bold">Xenetron</span>
              </motion.div>

              {/* Connecting nodes */}
              {[0, 1, 2, 3, 4, 5].map((index) => {
                const angle = (index * Math.PI * 2) / 6;
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={index}
                    className="absolute w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-xs text-foreground/80 shadow-lg"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.1,
                    }}
                  >
                    {["AI", "Cloud", "DevOps", "ML", "Data", "API"][index]}
                  </motion.div>
                );
              })}

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full">
                {[0, 1, 2, 3, 4, 5].map((index) => {
                  const angle = (index * Math.PI * 2) / 6;
                  const radius = 120;
                  const x = Math.cos(angle) * radius + 400;
                  const y = Math.sin(angle) * radius + 160;

                  return (
                    <motion.line
                      key={index}
                      x1="400"
                      y1="160"
                      x2={x}
                      y2={y}
                      stroke="#ff3366"
                      strokeWidth="1.5"
                      strokeOpacity="0.3"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{
                        duration: 1.5,
                        delay: 1 + index * 0.1,
                      }}
                    />
                  );
                })}
              </svg>

              {/* Background nodes */}
              <div className="absolute inset-0">
                {Array.from({ length: 50 }).map((_, i) => {
                  const size = Math.random() * 3 + 1;
                  const x = Math.random() * 100;
                  const y = Math.random() * 100;
                  const opacity = Math.random() * 0.3 + 0.1;
                  const animationDuration = Math.random() * 20 + 10;

                  return (
                    <motion.div
                      key={i}
                      className="absolute bg-accent rounded-full"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${x}%`,
                        top: `${y}%`,
                        opacity,
                      }}
                      animate={{
                        x: [0, Math.random() * 30 - 15, 0],
                        y: [0, Math.random() * 30 - 15, 0],
                      }}
                      transition={{
                        duration: animationDuration,
                        repeat: Infinity,
                        repeatType: "mirror",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}