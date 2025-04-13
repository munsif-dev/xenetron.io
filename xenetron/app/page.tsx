"use client";

import HeroSection from "@/app/components/sections/HeroSection";
import BenefitsBanner from "@/app/components/sections/BenefitsBanner";
import AboutSection from "@/app/components/sections/AboutSection";
import ServicesSection from "@/app/components/sections/ServicesSection";
import CoursesSection from "@/app/components/sections/CoursesSection";
//import TechnologiesSection from "@/app/components/sections/TechnologiesSection";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection";
import FaqSection from "@/app/components/sections/FaqSection";
import ContactSection from "@/app/components/sections/ContactSection";
import ProductsSection from "@/app/components/sections/ProductsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsBanner />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <CoursesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}