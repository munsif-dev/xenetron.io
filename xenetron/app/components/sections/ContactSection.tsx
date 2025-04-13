// components/sections/ContactSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiLoader,
} from "react-icons/fi";

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null,
      });
      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your
            <span className="gradient-text block mt-1">Business with AI?</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Get in touch with our team to discuss how Xenetron can help you
            achieve your digital transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-secondary rounded-xl p-8 h-full border border-accent/10">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70 mb-1">
                      Email Us
                    </h4>
                    <a
                      href="mailto:info@xenetron.io"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      info@xenetron.io
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70 mb-1">
                      Call Us
                    </h4>
                    <a
                      href="tel:+11234567890"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70 mb-1">
                      Visit Us
                    </h4>
                    <address className="not-italic text-foreground">
                      101 Innovation Drive<br />
                      Tech District, CA 94103<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
              
              {/* Map or image */}
              <div className="mt-8 rounded-lg overflow-hidden h-48 bg-tertiary relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-foreground/30">Interactive Map</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-secondary rounded-xl p-8 border border-accent/10">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              
              {formStatus.submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheck className="text-accent text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Message Sent!</h4>
                  <p className="text-foreground/80">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <button
                    className="mt-4 text-accent hover:underline"
                    onClick={() => setFormStatus({ ...formStatus, submitted: false })}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground/70 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-tertiary border border-accent/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground/70 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-tertiary border border-accent/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground/70 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full bg-tertiary border border-accent/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground/70 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-tertiary border border-accent/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-foreground/60">
                      * Required fields
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background rounded-md font-medium hover:bg-accent-light transition-colors disabled:opacity-70"
                    >
                      {formStatus.submitting ? (
                        <>
                          <FiLoader className="animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}