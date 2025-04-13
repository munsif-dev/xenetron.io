"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiStar, 
  FiMessageSquare, 
  FiPlay,
  FiPause,
  FiArrowRight
} from "react-icons/fi";

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Changed to true to prevent disappearing on scroll
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, TechInnovate",
      content:
        "Xenetron's AI-powered SaaS solution revolutionized our data processing workflow. We've seen a 40% increase in efficiency and significant cost savings. Their team's expertise and support throughout the implementation process was exceptional.",
      rating: 5,
      avatar: "SJ",
      avatarColor: "bg-gradient-to-br from-purple-500 to-accent",
      industry: "Technology",
      highlight: "40% increase in efficiency",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "Operations Director, HealthPlus",
      content:
        "The digital transformation consulting provided by Xenetron helped us identify key areas for improvement in our patient management system. Their AI education program also empowered our team to maintain and enhance the solutions independently.",
      rating: 5,
      avatar: "MR",
      avatarColor: "bg-gradient-to-br from-blue-500 to-cyan-400",
      industry: "Healthcare",
      highlight: "Empowered our team",
    },
    {
      id: 3,
      name: "Emily Chen",
      position: "VP of Innovation, FinanceGrowth",
      content:
        "Working with Xenetron was a game-changer for our financial analysis capabilities. The custom AI solution they developed allows us to process complex data sets in minutes rather than days, giving us a significant competitive edge.",
      rating: 4,
      avatar: "EC",
      avatarColor: "bg-gradient-to-br from-green-500 to-teal-400",
      industry: "Finance",
      highlight: "Process data in minutes instead of days",
    },
    {
      id: 4,
      name: "David Patel",
      position: "Head of Engineering, CloudSystems",
      content:
        "We partnered with Xenetron to develop our infrastructure monitoring solution. The expertise of their team and the quality of their work exceeded our expectations. The solution has been deployed to over 200 clients with overwhelmingly positive feedback.",
      rating: 5,
      avatar: "DP",
      avatarColor: "bg-gradient-to-br from-amber-500 to-orange-400",
      industry: "Cloud Services",
      highlight: "Deployed to 200+ clients",
    }
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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const offset = e.clientX - dragStart;
      setDragOffset(offset);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      if (dragOffset > 100) {
        prevTestimonial();
      } else if (dragOffset < -100) {
        nextTestimonial();
      }
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  const toggleAutoplay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Handle autoplay timer
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

  // Logos with animations
  const clientLogos = [
    { name: "TechCorp", color: "bg-blue-500/20" },
    { name: "HealthPlus", color: "bg-green-500/20" },
    { name: "FinanceHub", color: "bg-purple-500/20" },
    { name: "CloudSys", color: "bg-cyan-500/20" },
    { name: "DataFlow", color: "bg-amber-500/20" },
    { name: "AIVentures", color: "bg-accent/20" }
  ];

  return (
    <section className="py-20 bg-background relative z-10 overflow-hidden">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-tertiary/50 to-transparent pointer-events-none z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 20 }}
          transition={{ duration: 0.7 }}
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
          <div 
            ref={sliderRef}
            className="overflow-hidden relative rounded-xl"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {/* Quote icon decoration */}
            <div className="absolute top-4 right-4 text-accent/10 text-6xl z-0">
              <FiMessageSquare />
            </div>
            
            <div
              className="flex transition-transform duration-500 ease-out cursor-grab"
              style={{
                transform: `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-secondary rounded-xl p-8 shadow-lg border border-accent/10 h-full">
                    {/* Highlight quote */}
                    <div className="mb-6 bg-accent/5 rounded-lg p-4 border-l-4 border-accent">
                      <p className="text-lg font-medium text-foreground/90">
                        "{testimonial.highlight}"
                      </p>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-full ${testimonial.avatarColor} shadow-lg overflow-hidden mr-4 flex items-center justify-center text-white font-semibold text-xl`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-foreground/70">
                          {testimonial.position}
                        </p>
                        <div className="flex mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
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
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                          {testimonial.industry}
                        </span>
                      </div>
                    </div>
                    
                    <blockquote className="text-foreground/90 text-lg relative pl-4 border-l border-accent/30">
                      <p className="leading-relaxed">
                        {testimonial.content}
                      </p>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Drag instruction */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-foreground/50 px-3 py-1 bg-background/50 backdrop-blur-sm rounded-full">
              Drag to explore
            </div>
          </div>

          {/* Enhanced navigation controls */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-secondary hover:bg-accent/10 text-accent transition-colors shadow-md"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Indicators with improved visual feedback */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className="group relative"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-accent scale-100"
                      : "bg-foreground/20 scale-75 group-hover:scale-100 group-hover:bg-foreground/40"
                  }`}></span>
                  
                  {/* Current indicator animation */}
                  {activeIndex === index && (
                    <span className="absolute inset-0 bg-accent/30 rounded-full animate-ping"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              {/* Autoplay toggle button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleAutoplay}
                className={`p-3 rounded-full transition-colors shadow-md ${
                  isAutoPlaying 
                    ? "bg-accent/20 text-accent" 
                    : "bg-secondary text-foreground/60"
                }`}
                aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
              >
                {isAutoPlaying ? <FiPause className="w-4 h-4" /> : <FiPlay className="w-4 h-4" />}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-secondary hover:bg-accent/10 text-accent transition-colors shadow-md"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                aria-label="Next testimonial"
              >
                <FiChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced client logos section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-center text-lg font-medium mb-2">Trusted by innovative companies</h3>
          <p className="text-center text-foreground/60 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that rely on Xenetron for their digital transformation journey
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className={`px-6 py-3 ${logo.color} rounded-lg shadow-sm flex items-center justify-center border border-white/5 group hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                    <span className="text-xs font-bold">{logo.name.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">{logo.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Case studies link */}
          <div className="text-center mt-8">
            <motion.a
              href="#case-studies"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors group"
              whileHover={{ x: 5 }}
            >
              <span>Read our case studies</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-tertiary/50 to-transparent pointer-events-none"></div>
    </section>
  );
}