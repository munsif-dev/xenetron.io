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
  FiAlertCircle,
  FiGlobe,
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiMessageSquare,
  FiClock
} from "react-icons/fi";

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Changed to true to prevent disappearing on scroll
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    subject: "General Inquiry" // Added subject field with default value
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Validate form fields
  const validateField = (name, value) => {
    switch(name) {
      case 'email':
        return /\S+@\S+\.\S+/.test(value) ? null : 'Please enter a valid email address';
      case 'name':
        return value.trim().length > 0 ? null : 'Name is required';
      case 'message':
        return value.trim().length > 10 ? null : 'Message should be at least 10 characters';
      default:
        return null;
    }
  };

  const getFieldError = (name) => {
    if (!touchedFields[name]) return null;
    return validateField(name, formState[name]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Touch all fields for validation
    const allTouched = Object.keys(touchedFields).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouchedFields(allTouched);
    
    // Check for validation errors
    const hasErrors = Object.keys(touchedFields).some(
      key => validateField(key, formState[key]) !== null
    );
    
    if (hasErrors) {
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: "Please fix the errors in the form" 
      });
      return;
    }
    
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
        subject: "General Inquiry"
      });
      // Reset touched states
      setTouchedFields({
        name: false,
        email: false,
        message: false,
      });
    }, 1500);
  };

  const subjectOptions = [
    "General Inquiry",
    "Partnership Opportunity",
    "Technical Support",
    "Career Inquiry",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-background relative z-10 overflow-hidden">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-tertiary/50 to-transparent pointer-events-none z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-10 top-40 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute right-10 bottom-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 20 }}
          transition={{ duration: 0.7 }}
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
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.3, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-secondary rounded-xl p-8 h-full border border-accent/10 shadow-md relative overflow-hidden">
              {/* Background design element */}
              <div className="absolute right-0 top-0 w-40 h-40 bg-accent/5 rounded-full -mr-20 -mt-20"></div>
              
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="gradient-text">Get in Touch</span>
                <span className="flex-grow border-t border-accent/10 ml-4"></span>
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-accent/20 transition-colors">
                    <FiMail className="text-accent text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70 mb-1">
                      Email Us
                    </h4>
                    <a
                      href="mailto:info@xenetron.io"
                      className="text-foreground hover:text-accent transition-colors font-medium"
                    >
                      info@xenetron.io
                    </a>
                    <p className="text-xs text-foreground/50 mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-accent/20 transition-colors">
                    <FiPhone className="text-accent text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70 mb-1">
                      Call Us
                    </h4>
                    <a
                      href="tel:+11234567890"
                      className="text-foreground hover:text-accent transition-colors font-medium"
                    >
                      +1 (123) 456-7890
                    </a>
                    <p className="text-xs text-foreground/50 mt-1">
                      Monday to Friday, 9AM to 5PM EST
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-accent/20 transition-colors">
                    <FiMapPin className="text-accent text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70 mb-1">
                      Visit Us
                    </h4>
                    <address className="not-italic text-foreground font-medium">
                      101 Innovation Drive<br />
                      Tech District, CA 94103<br />
                      United States
                    </address>
                    <p className="text-xs text-foreground/50 mt-1">
                      Please schedule an appointment before visiting
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-accent/20 transition-colors">
                    <FiClock className="text-accent text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70 mb-1">
                      Business Hours
                    </h4>
                    <p className="text-foreground font-medium">
                      Monday - Friday: 9AM - 5PM EST<br />
                      Weekend: Closed
                    </p>
                    <p className="text-xs text-foreground/50 mt-1">
                      Support available 24/7 for enterprise clients
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* Social media links */}
              <div className="mt-8 pt-6 border-t border-accent/10">
                <h4 className="text-sm font-medium text-foreground/70 mb-3">
                  Connect With Us
                </h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="#linkedin"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin />
                  </motion.a>
                  <motion.a
                    href="#twitter"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                    aria-label="Twitter"
                  >
                    <FiTwitter />
                  </motion.a>
                  <motion.a
                    href="#github"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub />
                  </motion.a>
                  <motion.a
                    href="#website"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                    aria-label="Website"
                  >
                    <FiGlobe />
                  </motion.a>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden h-60 bg-tertiary relative shadow-inner">
                {/* Map mockup with grid lines */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-4 opacity-20">
                  {Array(48).fill(0).map((_, i) => (
                    <div key={i} className="border-r border-b border-foreground/10"></div>
                  ))}
                </div>
                
                {/* Map pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-5 h-5 bg-accent rounded-full shadow-lg flex items-center justify-center relative">
                    <div className="absolute w-10 h-10 bg-accent/30 rounded-full animate-ping"></div>
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  <div className="w-4 h-4 bg-accent transform rotate-45 -mt-1 ml-0.5"></div>
                </div>
                
                {/* Map labels */}
                <div className="absolute bottom-3 left-3 text-xs text-foreground/40 font-medium">
                  Tech District, CA
                </div>
                <div className="absolute top-3 right-3 px-2 py-1 bg-background/20 backdrop-blur-sm rounded text-xs text-foreground/70 font-medium">
                  <FiMapPin className="inline mr-1" size={10} />
                  Xenetron HQ
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.3, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-secondary rounded-xl p-8 border border-accent/10 shadow-md">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="gradient-text">Send Us a Message</span>
                <span className="flex-grow border-t border-accent/10 ml-4"></span>
              </h3>
              
              {formStatus.submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center my-4"
                >
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <FiCheck className="text-accent text-3xl" />
                  </div>
                  <h4 className="text-2xl font-semibold mb-3 gradient-text">Message Sent!</h4>
                  <p className="text-foreground/80 mb-6">
                    Thank you for reaching out. Our team will review your message and get back to you shortly.
                  </p>
                  <div className="flex flex-col space-y-2 items-center">
                    <p className="text-sm text-foreground/60 mb-2">
                      While you wait, you might want to:
                    </p>
                    <motion.a
                      href="#resources"
                      className="text-accent hover:text-accent-light transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Explore our resources
                    </motion.a>
                    <motion.a
                      href="#faq"
                      className="text-accent hover:text-accent-light transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Check our FAQ section
                    </motion.a>
                  </div>
                  <button
                    className="mt-8 px-6 py-3 bg-accent text-background rounded-md font-medium hover:bg-accent-light transition-colors shadow-md"
                    onClick={() => setFormStatus({ ...formStatus, submitted: false })}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Form error message */}
                  {formStatus.error && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
                      <FiAlertCircle className="text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-red-500/90 font-medium">{formStatus.error}</p>
                        <p className="text-xs text-foreground/60 mt-1">Please review the form and fix the errors highlighted below.</p>
                      </div>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground/70 mb-2 flex items-center"
                        >
                          Full Name <span className="text-accent ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={`w-full bg-tertiary border ${
                              getFieldError('name') 
                                ? 'border-red-500/50 focus:border-red-500' 
                                : touchedFields.name 
                                  ? 'border-green-500/50 focus:border-green-500' 
                                  : 'border-accent/10 focus:border-accent'
                            } rounded-lg px-4 py-3 text-foreground focus:outline-none transition-colors shadow-sm`}
                            placeholder="Your name"
                          />
                          {getFieldError('name') && (
                            <div className="text-xs text-red-500 mt-1 ml-1">
                              {getFieldError('name')}
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground/70 mb-2 flex items-center"
                        >
                          Email Address <span className="text-accent ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={`w-full bg-tertiary border ${
                              getFieldError('email') 
                                ? 'border-red-500/50 focus:border-red-500' 
                                : touchedFields.email && formState.email 
                                  ? 'border-green-500/50 focus:border-green-500' 
                                  : 'border-accent/10 focus:border-accent'
                            } rounded-lg px-4 py-3 text-foreground focus:outline-none transition-colors shadow-sm`}
                            placeholder="your.email@example.com"
                          />
                          {getFieldError('email') && (
                            <div className="text-xs text-red-500 mt-1 ml-1">
                              {getFieldError('email')}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full bg-tertiary border border-accent/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors shadow-sm"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-foreground/70 mb-2"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          className="w-full bg-tertiary border border-accent/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors shadow-sm appearance-none"
                          style={{ 
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ff3366' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1rem'
                          }}
                        >
                          {subjectOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground/70 mb-2 flex items-center"
                      >
                        Message <span className="text-accent ml-1">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          rows={4}
                          className={`w-full bg-tertiary border ${
                            getFieldError('message') 
                              ? 'border-red-500/50 focus:border-red-500' 
                              : touchedFields.message && formState.message.length > 10 
                                ? 'border-green-500/50 focus:border-green-500' 
                                : 'border-accent/10 focus:border-accent'
                          } rounded-lg px-4 py-3 text-foreground focus:outline-none transition-colors shadow-sm`}
                          placeholder="Tell us about your project and how we can help..."
                        ></textarea>
                        {getFieldError('message') && (
                          <div className="text-xs text-red-500 mt-1 ml-1">
                            {getFieldError('message')}
                          </div>
                        )}
                        <div className="absolute right-3 bottom-3 text-xs text-foreground/40">
                          {formState.message.length > 0 ? `${formState.message.length} characters` : ''}
                        </div>
                      </div>
                    </div>
                    
                    {/* Privacy note */}
                    <div className="text-xs text-foreground/60 bg-accent/5 p-3 rounded-lg">
                      <p>
                        By submitting this form, you agree to our{' '}
                        <a href="#privacy" className="text-accent hover:underline">
                          Privacy Policy
                        </a>
                        . We'll never share your information with third parties.
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-foreground/60 flex items-center">
                        <FiMessageSquare className="mr-1 text-accent" size={14} />
                        <span className="text-xs">Need immediate help? <a href="#chat" className="text-accent hover:underline">Chat with us</a></span>
                      </div>
                      <motion.button
                        type="submit"
                        disabled={formStatus.submitting}
                        className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background rounded-md font-medium hover:bg-accent-light transition-colors disabled:opacity-70 shadow-md"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
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
                      </motion.button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
        
        {/* FAQ shortcut */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70 mb-2">
            Have a question? Check our frequently asked questions
          </p>
          <a
            href="#faq"
            className="inline-flex items-center text-accent hover:text-accent-light transition-colors"
          >
            View FAQ Section
          </a>
        </motion.div>
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-tertiary/50 to-transparent pointer-events-none"></div>
    </section>
  );
}