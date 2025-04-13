"use client";

import { useState, useEffect } from "react";
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
  FiArrowRight,
  FiCode,
  FiLayers,
  FiAlertCircle,
  FiCalendar,
  FiGlobe,
  FiDatabase,
  FiCoffee
} from "react-icons/fi";
import Link from "next/link";

export default function CoursesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [isFilterAnimating, setIsFilterAnimating] = useState(false);

  // Updated course data with adjusted info
  const courses = [
    {
      id: 1,
      title: "Python Mastery Program",
      description:
        "Become a Python Pro in just 2 months! From basics to advanced concepts with practical challenges, taught in Tamil.",
      category: "programming",
      level: "Beginner to Advanced",
      duration: "2 months",
      schedule: "Sat & Sun | 7:00 – 9:00 PM",
      language: "Tamil",
      instructor: "Munsif M.F.A",
      price: "LKR 3,000",
      enrolled: 0,
      rating: 0, // Set to 0 as requested
      status: "Enrolling Now",
      startDate: "May 10, 2025",
      features: [
        "Python Basics to Advanced Concepts",
        "Object-Oriented Programming (OOP)",
        "7-Step Problem-Solving Method",
        "LeetCode & Hacker Rank Intro",
        "Git & GitHub for Version Control",
        "Weekly Quizzes + Final Assignment",
        "Industry-Recognized E-Certificate"
      ],
      highlighted: true,
      image: "/courses/python-mastery.jpg"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      description:
        "Master the core concepts of machine learning algorithms and build real-world applications with hands-on projects.",
      category: "ai-ml",
      level: "Intermediate",
      duration: "3 months",
      schedule: "Tue & Thu | 6:00 – 8:00 PM",
      language: "English",
      instructor: "Dr. Sarah Chen",
      price: "LKR 5,500",
      enrolled: 0,
      rating: 0,
      status: "Coming Soon",
      features: [
        "Supervised & Unsupervised Learning",
        "Classification & Regression Techniques",
        "Feature Engineering & Model Selection",
        "ML Pipeline Development",
        "Model Evaluation & Deployment",
        "4 End-to-End Projects",
        "Certificate of Completion"
      ],
      image: "/courses/machine-learning.jpg"
    },
    {
      id: 3,
      title: "Deep Learning Specialization",
      description:
        "Dive into neural networks, computer vision, and NLP to build cutting-edge deep learning solutions for complex problems.",
      category: "ai-ml",
      level: "Advanced",
      duration: "4 months",
      schedule: "Wed & Fri | 7:00 – 9:30 PM",
      language: "English",
      instructor: "Prof. Raj Kumar",
      price: "LKR 7,500",
      enrolled: 0,
      rating: 0,
      status: "Coming Soon",
      features: [
        "Neural Network Architecture & Training",
        "Convolutional Neural Networks (CNNs)",
        "Recurrent Neural Networks (RNNs)",
        "Transformer Models & BERT",
        "GANs & Reinforcement Learning",
        "GPU Training & Deployment",
        "Industry Project Portfolio"
      ],
      image: "/courses/deep-learning.jpg"
    },
    {
      id: 4,
      title: "Data Structures & Algorithms",
      description:
        "Build a strong foundation in DSA to excel in technical interviews and improve your problem-solving abilities.",
      category: "programming",
      level: "Intermediate",
      duration: "3 months",
      schedule: "Mon & Wed | 6:30 – 8:30 PM",
      language: "English/Tamil",
      instructor: "Arun Prakash",
      price: "LKR 4,500",
      enrolled: 0,
      rating: 0,
      status: "Coming Soon",
      features: [
        "Arrays, Linked Lists, Trees & Graphs",
        "Sorting & Searching Algorithms",
        "Dynamic Programming",
        "Time & Space Complexity Analysis",
        "LeetCode Problem Solving Patterns",
        "Mock Interview Practice",
        "Problem-Solving Framework"
      ],
      image: "/courses/dsa.jpg"
    },
    {
      id: 5,
      title: "AI Application Development",
      description:
        "Build practical AI-powered applications by integrating machine learning models into web and mobile platforms.",
      category: "ai-ml",
      level: "Intermediate",
      duration: "2.5 months",
      schedule: "Wed & Sat | 6:00 – 8:00 PM",
      language: "English",
      instructor: "Kavita Reddy",
      price: "LKR 5,000",
      enrolled: 0,
      rating: 0,
      status: "Coming Soon",
      features: [
        "AI Model Integration",
        "RESTful API Development",
        "Frontend & Backend Integration",
        "Real-time Processing",
        "Model Deployment Strategies",
        "Scalability & Performance Optimization",
        "Two Complete AI Applications"
      ],
      image: "/courses/ai-apps.jpg"
    }
  ];

  const filterOptions = [
    { id: "all", label: "All Courses", icon: <FiBook /> },
    { id: "programming", label: "Programming", icon: <FiCode /> },
    { id: "ai-ml", label: "AI & Machine Learning", icon: <FiMonitor /> },
    { id: "data", label: "Data Science", icon: <FiDatabase /> },
    { id: "web-dev", label: "Web Development", icon: <FiGlobe /> },
    { id: "infrastructure", label: "Cloud & DevOps", icon: <FiLayers /> }
  ];

  // Update displayed courses when filter changes
  useEffect(() => {
    setIsFilterAnimating(true);
    
    // Short delay to allow animation to complete
    const timer = setTimeout(() => {
      setDisplayedCourses(
        activeFilter === "all"
          ? courses
          : courses.filter((course) => course.category === activeFilter)
      );
      setIsFilterAnimating(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeFilter]);

  // Initialize displayed courses on first render
  useEffect(() => {
    setDisplayedCourses(courses);
  }, []);

  const getLevelColor = (level) => {
    if (level.includes("Beginner")) return "bg-green-500";
    if (level.includes("Intermediate")) return "bg-blue-500";
    if (level.includes("Advanced")) return "bg-purple-500";
    return "bg-gray-500";
  };

  const getStatusBadge = (status) => {
    if (status === "Enrolling Now") {
      return (
        <span className="bg-green-500 text-white text-xs py-1 px-3 rounded-full font-medium">
          Enrolling Now
        </span>
      );
    } else {
      return (
        <span className="bg-yellow-500 text-black text-xs py-1 px-3 rounded-full font-medium">
          Coming Soon
        </span>
      );
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="courses" className="py-20 bg-background relative z-10 min-h-screen">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-tertiary/50 to-transparent pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Our Courses
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Enhance Your Skills with
            <span className="gradient-text block mt-1">Expert-Led Training</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Explore our comprehensive range of courses designed to help you master
            the latest technologies and implementation strategies for career success.
          </p>
        </motion.div>

        {/* Enhanced filters with scroll indicators */}
        <div className="relative mb-12">
          {/* Shadow indicators for horizontal scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10 md:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10 md:hidden"></div>
          
          <motion.div
            className="flex overflow-x-auto pb-4 md:flex-wrap md:justify-center gap-3 md:overflow-visible"
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 15 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeFilter === filter.id
                    ? "bg-accent text-background shadow-md shadow-accent/20"
                    : "bg-secondary text-foreground/80 hover:bg-secondary/70"
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <span className="text-lg">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Announcement banner for Python course */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-lg p-4 mb-8 border border-accent/20 flex items-center gap-4"
        >
          <div className="bg-accent/20 rounded-full p-2 text-accent">
            <FiAlertCircle size={24} />
          </div>
          <div>
            <h3 className="font-medium text-foreground">Python Mastery Program starting May 10, 2025!</h3>
            <p className="text-sm text-foreground/70">Limited seats available. Enroll now to secure your spot.</p>
          </div>
          <Link
            href="#python-course"
            className="ml-auto bg-accent text-background px-4 py-2 rounded-md text-sm font-medium hover:bg-accent-light transition-colors shadow-sm whitespace-nowrap"
          >
            Enroll Now
          </Link>
        </motion.div>

        {/* Conditional message when no courses match filter */}
        {displayedCourses.length === 0 && !isFilterAnimating && (
          <motion.div 
            className="text-center py-20 bg-secondary/30 rounded-lg border border-accent/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <FiBook className="text-5xl text-accent/50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-foreground/70 mb-4">We couldn't find any courses matching your current filter.</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="px-4 py-2 rounded-md bg-accent text-background text-sm font-medium"
            >
              View All Courses
            </button>
          </motion.div>
        )}

        {/* Courses grid - CHANGED TO 2 COLUMNS ONLY */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]"
          variants={containerVariants}
          initial="hidden"
          animate={inView && !isFilterAnimating ? "visible" : "hidden"}
        >
          {displayedCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              className={`bg-secondary rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:translate-y-[-4px] border border-transparent hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 relative ${
                course.highlighted ? "ring-2 ring-accent/70 ring-offset-2 ring-offset-background" : ""
              }`}
            >
              {/* Course image with improved visual */}
              <div className="h-48 bg-tertiary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-tertiary flex items-center justify-center">
                  <div className="text-6xl text-foreground/10">
                    {course.category === "programming" && <FiCode />}
                    {course.category === "ai-ml" && <FiMonitor />}
                    {course.category === "data" && <FiDatabase />}
                    {course.category === "web-dev" && <FiGlobe />}
                    {course.category === "infrastructure" && <FiLayers />}
                  </div>
                </div>
                
                {/* Level badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs text-white font-medium shadow-md ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                
                {/* Status badge (Enrolling Now or Coming Soon) */}
                <div className="absolute top-4 right-4 z-10">
                  {getStatusBadge(course.status)}
                </div>
              </div>
              
              {/* Course content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {course.description}
                </p>
                
                {/* Course meta - improved spacing and layout */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                  <div className="flex items-center gap-2">
                    <FiClock className="text-accent w-4 h-4 flex-shrink-0" />
                    <span className="text-xs text-foreground/60 truncate">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiUsers className="text-accent w-4 h-4 flex-shrink-0" />
                    <span className="text-xs text-foreground/60">
                      {course.status === "Enrolling Now" ? "Enrolling now" : "Registration soon"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-accent w-4 h-4 flex-shrink-0" />
                    <span className="text-xs text-foreground/60 truncate">
                      {course.status === "Enrolling Now" ? 
                        `Starts ${course.startDate}` : 
                        course.schedule}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiGlobe className="text-accent w-4 h-4 flex-shrink-0" />
                    <span className="text-xs text-foreground/60">{course.language}</span>
                  </div>
                </div>
                
                {/* Rating - CHANGED TO SHOW COMING SOON OR NEW COURSE */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-accent/10">
                  <div className="flex items-center">
                    {course.status === "Enrolling Now" ? (
                      <span className="text-sm text-accent/90 font-medium flex items-center">
                        <FiCoffee className="mr-1" /> New Course
                      </span>
                    ) : (
                      <span className="text-sm text-yellow-500/90 font-medium flex items-center">
                        <FiClock className="mr-1" /> Coming Soon
                      </span>
                    )}
                  </div>
                  <div className="text-accent font-bold">
                    {course.price}
                  </div>
                </div>
                
                {/* Key features */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wide text-foreground/50 mb-2">Key Features</p>
                  <ul className="text-xs text-foreground/80 space-y-1.5">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {course.features.length > 3 && (
                      <li className="text-accent/80 text-xs italic">+{course.features.length - 3} more features</li>
                    )}
                  </ul>
                </div>
                
                {/* CTA Button */}
                {course.status === "Enrolling Now" ? (
                  <Link
                    href="#pricing"
                    className="block w-full py-3 text-center bg-accent text-background rounded-md font-medium hover:bg-accent-light transition-colors shadow-sm"
                  >
                    Enroll Now
                  </Link>
                ) : (
                  <button
                    className="block w-full py-3 text-center bg-secondary border border-accent/50 text-accent rounded-md font-medium hover:bg-accent/5 transition-colors shadow-sm"
                    onClick={() => window.open('#notify', '_blank')}
                  >
                    Notify Me
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View all courses CTA - improved animation stability */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-accent text-accent rounded-md hover:bg-accent hover:text-background transition-colors shadow-md hover:shadow-lg hover:shadow-accent/10"
          >
            Request Course Information <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-tertiary/50 to-transparent pointer-events-none"></div>
    </section>
  );
}