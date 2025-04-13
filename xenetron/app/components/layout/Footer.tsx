"use client";
 
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiChevronUp,
  FiMail,
} from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Courses", href: "#courses" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#documentation" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Webinars", href: "#webinars" },
        { name: "White Papers", href: "#white-papers" },
        { name: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "GDPR Compliance", href: "#gdpr" },
      ],
    },
  ];

  return (
    <footer className="bg-tertiary pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 overflow-hidden">
                <div className="absolute inset-0 bg-accent rounded-md"></div>
                <div className="absolute inset-1 bg-tertiary rounded-md flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">X</span>
                </div>
              </div>
              <span className="text-foreground font-bold text-xl">Xenetron</span>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Empowering businesses through AI-driven digital transformation. We
              build intelligent solutions that drive innovation and efficiency.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4 mb-8">
              <a
                href="#twitter"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-accent transition-colors"
              >
                <FiTwitter />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-accent transition-colors"
              >
                <FiLinkedin />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-accent transition-colors"
              >
                <FiFacebook />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-accent transition-colors"
              >
                <FiInstagram />
              </a>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-foreground font-semibold mb-3">
                Subscribe to our newsletter
              </h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-secondary text-foreground px-4 py-2 rounded-l-md flex-grow border-y border-l border-accent/20 focus:outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  className="bg-accent text-background px-4 py-2 rounded-r-md hover:bg-accent-light transition-colors"
                >
                  <FiMail />
                </button>
              </form>
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-foreground font-semibold mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Xenetron. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-colors"
            >
              <FiChevronUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}