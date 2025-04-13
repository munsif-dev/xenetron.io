// components/sections/FaqSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiChevronDown, FiChevronUp, FiSearch } from "react-icons/fi";

export default function FaqSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqItems = [
    {
      question: "What is AI-powered digital transformation?",
      answer:
        "AI-powered digital transformation is the process of integrating artificial intelligence technologies into business operations to enhance efficiency, decision-making, and customer experiences. It involves leveraging AI to automate processes, analyze data, and generate insights that drive innovation and competitive advantage.",
      category: "general",
    },
    {
      question: "How can Xenetron's services benefit my business?",
      answer:
        "Xenetron's services can help your business streamline operations, reduce costs, improve decision-making, and create new growth opportunities. Our AI-powered solutions automate repetitive tasks, uncover valuable insights from your data, and enable you to deliver better customer experiences. We tailor our approach to your specific industry and challenges.",
      category: "services",
    },
    {
      question: "Do I need technical expertise to implement your solutions?",
      answer:
        "No, you don't need technical expertise. Our team handles the technical implementation while working closely with your business stakeholders. We also provide comprehensive training and ongoing support to ensure your team can effectively use and maintain the solutions we develop.",
      category: "implementation",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "Implementation timelines vary based on the complexity of the solution and your specific requirements. Simple SaaS implementations can take 4-8 weeks, while comprehensive digital transformation initiatives may span 3-6 months. We work with you to establish clear milestones and ensure transparent communication throughout the process.",
      category: "implementation",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer:
        "We implement enterprise-grade security measures including encryption, secure access controls, regular security audits, and compliance with industry standards and regulations. Our solutions are designed with privacy-by-design principles, and we maintain transparent data processing practices to ensure your information remains protected.",
      category: "security",
    },
    {
      question: "Can your solutions integrate with our existing systems?",
      answer:
        "Yes, our solutions are designed to integrate seamlessly with your existing systems and workflows. We offer robust API capabilities and support for standard integration protocols. Our team will assess your current technology stack and develop an integration strategy that minimizes disruption while maximizing value.",
      category: "implementation",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We work with clients across various industries including healthcare, finance, retail, manufacturing, and technology. Our solutions are adaptable to different sectors, and we have specialized expertise in addressing industry-specific challenges and compliance requirements.",
      category: "general",
    },
    {
      question: "Do you offer ongoing support after implementation?",
      answer:
        "Yes, we provide comprehensive post-implementation support and maintenance services. Our support packages include technical assistance, system updates, performance optimization, and user training. We're committed to ensuring the long-term success of our solutions and your continued satisfaction.",
      category: "services",
    },
  ];

  const filteredFaqs = searchTerm
    ? faqItems.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqItems;

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked
            <span className="gradient-text block mt-1">Questions</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Find answers to common questions about our services, implementation
            process, and technology.
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-secondary text-foreground border border-accent/20 rounded-lg px-4 py-3 pl-12 focus:outline-none focus:border-accent"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/50" />
          </div>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-secondary rounded-lg overflow-hidden border ${
                    activeIndex === index
                      ? "border-accent/20"
                      : "border-transparent"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-medium text-foreground">
                      {faq.question}
                    </span>
                    {activeIndex === index ? (
                      <FiChevronUp className="text-accent flex-shrink-0" />
                    ) : (
                      <FiChevronDown className="text-accent flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === index ? "pb-6 max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="text-foreground/70">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-foreground/70">
                No results found for "{searchTerm}". Please try a different search
                term.
              </p>
            </div>
          )}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
            Our team is here to help. Contact us for personalized assistance with
            your specific needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background rounded-md font-medium hover:bg-accent-light transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
