// components/sections/TestimonialsSection.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, TechInnovate",
      content:
        "Xenetron's AI-powered SaaS solution revolutionized our data processing workflow. We've seen a 40% increase in efficiency and significant cost savings. Their team's expertise and support throughout the implementation process was exceptional.",
      rating: 5,
      imageUrl: "https://via.placeholder.com/150", // Placeholder for demo
      industry: "Technology",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "Operations Director, HealthPlus",
      content:
        "The digital transformation consulting provided by Xenetron helped us identify key areas for improvement in our patient management system. Their AI education program also empowered our team to maintain and enhance the solutions independently.",
      rating: 5,
      imageUrl: "https://via.placeholder.com/150",
      industry: "Healthcare",
    },
    {
      id: 3,
      name: "Emily Chen",
      position: "VP of Innovation, FinanceGrowth",
      content:
        "Working with Xenetron was a game-changer for our financial analysis capabilities. The custom AI solution they developed allows us to process complex data sets in minutes rather than days, giving us a significant competitive edge.",
      rating: 4,
      imageUrl: "https://via.placeholder.com/150",
      industry: "Finance",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 6000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, activeIndex]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients
            <span className="gradient-text block mt-1">Say About Us</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Discover how Xenetron has helped businesses across various industries
            achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonials slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-secondary rounded-xl p-8 shadow-lg border border-accent/10 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-tertiary overflow-hidden mr-4">
                        {/* Placeholder for profile image */}
                        <div className="w-full h-full flex items-center justify-center text-accent">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-foreground/70">
                          {testimonial.position}
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating
                                  ? "text-accent fill-accent"
                                  : "text-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="ml-auto">
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">
                          {testimonial.industry}
                        </span>
                      </div>
                    </div>
                    <blockquote className="text-foreground/90 italic">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-secondary hover:bg-accent/10 text-accent transition-colors"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index
                      ? "bg-accent"
                      : "bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-secondary hover:bg-accent/10 text-accent transition-colors"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Client logos */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-center text-foreground/60 mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-50">
            {/* Placeholder logos - in a real implementation, use actual client logos */}
            {[1, 2, 3, 4, 5, 6].map((logo) => (
              <div
                key={logo}
                className="w-32 h-12 bg-foreground/10 rounded-md flex items-center justify-center"
              >
                <div className="text-foreground/40 font-medium">Client {logo}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}