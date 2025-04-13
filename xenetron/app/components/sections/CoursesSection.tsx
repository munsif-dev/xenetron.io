"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiBook,
  FiStar,
  FiClock,
  FiBarChart2,
  FiUsers,
  FiMonitor,
  FiFilter,
  FiArrowRight  // Add this import
} from "react-icons/fi";
import Link from "next/link";

export default function CoursesSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("all");

  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Introduction to AI for Business",
      description:
        "Learn the fundamentals of artificial intelligence and how it can transform your business operations.",
      category: "foundations",
      level: "Beginner",
      duration: "4 weeks",
      enrolled: 1245,
      rating: 4.8,
      image: "/courses/ai-intro.jpg", // This would be a real image path in production
    },
    {
      id: 2,
      title: "Machine Learning Implementation",
      description:
        "Hands-on course for implementing machine learning models for business problems.",
      category: "practical",
      level: "Intermediate",
      duration: "6 weeks",
      enrolled: 892,
      rating: 4.7,
      image: "/courses/ml-implement.jpg",
    },
    {
      id: 3,
      title: "AI Strategy for Executives",
      description:
        "Strategic framework for executives to lead AI initiatives in their organizations.",
      category: "leadership",
      level: "Advanced",
      duration: "3 weeks",
      enrolled: 678,
      rating: 4.9,
      image: "/courses/ai-strategy.jpg",
    },
    {
      id: 4,
      title: "Natural Language Processing Fundamentals",
      description:
        "Master the basics of NLP and learn how to implement text analysis in your applications.",
      category: "practical",
      level: "Intermediate",
      duration: "5 weeks",
      enrolled: 1032,
      rating: 4.6,
      image: "/courses/nlp-basics.jpg",
    },
    {
      id: 5,
      title: "AI Ethics and Governance",
      description:
        "Understanding ethical considerations and governance frameworks for AI implementation.",
      category: "leadership",
      level: "Intermediate",
      duration: "4 weeks",
      enrolled: 542,
      rating: 4.7,
      image: "/courses/ai-ethics.jpg",
    },
    {
      id: 6,
      title: "Building Your First AI Model",
      description:
        "Step-by-step guide to building and deploying your first AI model with no coding experience required.",
      category: "foundations",
      level: "Beginner",
      duration: "3 weeks",
      enrolled: 1567,
      rating: 4.8,
      image: "/courses/first-ai-model.jpg",
    },
  ];

  const filteredCourses =
    activeFilter === "all"
      ? courses
      : courses.filter((course) => course.category === activeFilter);

  const filterOptions = [
    { id: "all", label: "All Courses" },
    { id: "foundations", label: "Foundations" },
    { id: "practical", label: "Practical Implementation" },
    { id: "leadership", label: "Leadership & Strategy" },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500";
      case "Intermediate":
        return "bg-blue-500";
      case "Advanced":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Our Courses
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Enhance Your Skills with
            <span className="gradient-text block mt-1">Expert-Led AI Training</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Explore our comprehensive range of courses designed to help you master
            the latest AI technologies and implementation strategies for business
            success.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${
                activeFilter === filter.id
                  ? "bg-accent text-background"
                  : "bg-secondary text-foreground/80 hover:bg-secondary/70"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <FiFilter className="w-4 h-4" />
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Courses grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              className="bg-secondary rounded-xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02] border border-transparent hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Course image */}
              <div className="h-48 bg-tertiary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-tertiary flex items-center justify-center">
                  <div className="text-4xl text-foreground/10">
                    {course.category === "foundations" && <FiBook />}
                    {course.category === "practical" && <FiMonitor />}
                    {course.category === "leadership" && <FiUsers />}
                  </div>
                </div>
                
                {/* Level badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs text-white font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
              </div>
              
              {/* Course content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {course.description}
                </p>
                
                {/* Course meta */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    <FiClock className="text-accent w-4 h-4" />
                    <span className="text-xs text-foreground/60">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiUsers className="text-accent w-4 h-4" />
                    <span className="text-xs text-foreground/60">{course.enrolled.toLocaleString()} enrolled</span>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? "text-accent fill-accent"
                              : "text-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium ml-2">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiBarChart2 className="text-accent w-4 h-4" />
                    <span className="text-xs text-foreground/60">
                      {course.category === "foundations" && "Foundations"}
                      {course.category === "practical" && "Practical"}
                      {course.category === "leadership" && "Leadership"}
                    </span>
                  </div>
                </div>
                
                {/* CTA */}
                <Link
                  href="#pricing"
                  className="block w-full py-3 text-center bg-accent text-background rounded-md font-medium hover:bg-accent-light transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View all courses CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            href="#courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-accent text-accent rounded-md hover:bg-accent hover:text-background transition-colors"
          >
            View All Courses <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}