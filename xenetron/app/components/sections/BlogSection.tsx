"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { FiArrowRight, FiClock, FiCalendar, FiBookmark } from "react-icons/fi";

export default function BlogSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Transformation",
      excerpt:
        "Explore how artificial intelligence is reshaping business processes and creating new opportunities for innovation across industries.",
      category: "AI Trends",
      readTime: "5 min read",
      date: "Apr 8, 2025",
      image: "/blog/post-1.jpg", // Placeholder for actual image path
      author: "Sarah Johnson",
      authorRole: "AI Research Director"
    },
    {
      id: 2,
      title: "Implementing Machine Learning for Better Decision Making",
      excerpt:
        "Learn practical strategies for implementing machine learning models to enhance your business decision-making process and drive data-informed results.",
      category: "Machine Learning",
      readTime: "7 min read",
      date: "Apr 2, 2025",
      image: "/blog/post-2.jpg",
      author: "Michael Chen",
      authorRole: "Data Science Lead"
    },
    {
      id: 3,
      title: "How to Build a Data-Driven Culture in Your Organization",
      excerpt:
        "Discover key steps to fostering a data-driven culture that empowers teams and drives business success through analytical thinking.",
      category: "Data Strategy",
      readTime: "6 min read",
      date: "Mar 25, 2025",
      image: "/blog/post-3.jpg",
      author: "Emily Rodriguez",
      authorRole: "Digital Transformation Consultant"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Our Blog
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Latest Insights and
            <span className="gradient-text block mt-1">Industry Knowledge</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Stay updated with the latest trends, best practices, and insights in
            AI, digital transformation, and technology innovation.
          </p>
        </motion.div>

        {/* Blog category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <button className="px-4 py-2 rounded-full text-sm bg-accent text-background">
            All Posts
          </button>
          <button className="px-4 py-2 rounded-full text-sm bg-secondary text-foreground/80 hover:bg-secondary/70 transition-colors">
            AI Trends
          </button>
          <button className="px-4 py-2 rounded-full text-sm bg-secondary text-foreground/80 hover:bg-secondary/70 transition-colors">
            Machine Learning
          </button>
          <button className="px-4 py-2 rounded-full text-sm bg-secondary text-foreground/80 hover:bg-secondary/70 transition-colors">
            Data Strategy
          </button>
        </motion.div>

        {/* Blog posts grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-secondary rounded-xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/5 border border-transparent hover:border-accent/20"
            >
              <div className="h-48 bg-tertiary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-tertiary flex items-center justify-center">
                  <div className="text-4xl text-foreground/10">
                    {index === 0 && "AI"}
                    {index === 1 && "ML"}
                    {index === 2 && "Data"}
                  </div>
                </div>
                
                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Bookmark button */}
                <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-colors">
                  <FiBookmark className="w-4 h-4" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-foreground/60 mb-3">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 hover:text-accent transition-colors">
                  <Link href="#blog">{post.title}</Link>
                </h3>
                
                <p className="text-foreground/70 text-sm mb-4">
                  {post.excerpt}
                </p>
                
                <Link
                  href="#blog"
                  className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm font-medium"
                >
                  Read more <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        {/* View all posts CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            href="#blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-accent text-accent rounded-md hover:bg-accent hover:text-background transition-colors"
          >
            View All Articles <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}