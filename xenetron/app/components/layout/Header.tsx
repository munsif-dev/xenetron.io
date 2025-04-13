"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Courses", href: "#courses" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-accent">
              <Image src={logo} alt="Company Logo" width={140} height={140} />
            </div>
            <span className="text-foreground font-bold text-xl brand-name">Xenetron</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-foreground/80 hover:text-accent transition-colors relative group tracking-wide"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="#contact"
              className="btn btn-secondary text-sm px-4 py-2 tracking-wide"
            >
              Book a Demo
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="#pricing" className="btn btn-primary text-sm px-4 py-2 tracking-wide">
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          <div className="relative w-6 h-5">
            <span
              className={`absolute h-0.5 w-6 bg-foreground transform transition duration-300 ${
                isMobileMenuOpen ? "rotate-45 top-2" : "rotate-0 top-0"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 bg-foreground transform transition-all duration-300 ${
                isMobileMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100 top-2"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-foreground transform transition duration-300 ${
                isMobileMenuOpen ? "-rotate-45 top-2" : "rotate-0 top-4"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          height: isMobileMenuOpen ? "auto" : 0 
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-tertiary overflow-hidden"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-foreground/80 hover:text-accent transition-colors block py-2 tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="#contact"
                className="btn btn-secondary text-sm tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Demo
              </Link>
              <Link
                href="#pricing"
                className="btn btn-primary text-sm tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  );
}