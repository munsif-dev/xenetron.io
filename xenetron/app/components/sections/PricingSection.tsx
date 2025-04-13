// components/sections/PricingSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCheck, FiHelpCircle } from "react-icons/fi";
import Link from "next/link";

export default function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with AI",
      price: {
        monthly: 499,
        annually: 479,
      },
      features: [
        "Basic AI-powered analytics",
        "1 custom SaaS application",
        "5 user accounts",
        "Email support",
        "Weekly data processing",
        "Basic API access",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing companies expanding their AI capabilities",
      price: {
        monthly: 999,
        annually: 899,
      },
      features: [
        "Advanced AI analytics & predictions",
        "3 custom SaaS applications",
        "25 user accounts",
        "Priority support",
        "Daily data processing",
        "Full API access",
        "AI strategy consultation",
        "Quarterly performance review",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large organizations",
      price: {
        monthly: 2499,
        annually: 2199,
      },
      features: [
        "Enterprise-level AI capabilities",
        "Unlimited custom applications",
        "Unlimited users",
        "24/7 dedicated support",
        "Real-time data processing",
        "Full API access with premium rate limits",
        "Ongoing strategy consultations",
        "Monthly performance reviews",
        "Custom AI model development",
        "White-labeling options",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const getDiscountPercentage = (monthly, annually) => {
    const yearlyPrice = annually * 12;
    const monthlyYearPrice = monthly * 12;
    const savings = monthlyYearPrice - yearlyPrice;
    const percentage = Math.round((savings / monthlyYearPrice) * 100);
    return percentage;
  };

  return (
    <section id="pricing" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transparent Plans for Your
            <span className="gradient-text block mt-1">Digital Transformation</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Choose the plan that suits your business needs and scale as you grow.
            All plans include our core AI-powered features.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center bg-secondary p-1 rounded-full">
            <button
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                billingCycle === "monthly"
                  ? "bg-accent text-background"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                billingCycle === "annually"
                  ? "bg-accent text-background"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              onClick={() => setBillingCycle("annually")}
            >
              Annually{" "}
              <span className="text-xs ml-1 opacity-80">
                (Save {getDiscountPercentage(
                  pricingPlans[1].price.monthly,
                  pricingPlans[1].price.annually
                )}%)
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-secondary rounded-xl overflow-hidden transition-transform ${
                plan.popular
                  ? "border-2 border-accent transform md:-translate-y-4"
                  : "border border-accent/10"
              }`}
            >
              {plan.popular && (
                <div className="bg-accent text-background text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/70 text-sm mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${plan.price[billingCycle]}
                  </span>
                  <span className="text-foreground/60 ml-2">/ month</span>
                  {billingCycle === "annually" && (
                    <div className="text-accent text-sm mt-1">
                      Billed annually (${plan.price.annually * 12}/year)
                    </div>
                  )}
                </div>

                <Link
                  href="#contact"
                  className={`block w-full py-3 text-center rounded-md font-medium transition-colors mb-8 ${
                    plan.popular
                      ? "bg-accent text-background hover:bg-accent-light"
                      : "bg-secondary border border-accent text-accent hover:bg-accent hover:text-background"
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="w-3 h-3" />
                      </div>
                      <p className="text-sm text-foreground/90">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-background rounded-xl p-8 max-w-4xl mx-auto border border-accent/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
              <p className="text-foreground/70">
                Contact our sales team for a tailored plan that fits your specific
                requirements.
              </p>
            </div>
            <Link
              href="#contact"
              className="px-6 py-3 bg-accent text-background rounded-md font-medium hover:bg-accent-light transition-colors whitespace-nowrap"
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiHelpCircle className="text-accent" />
            <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          </div>
          <Link
            href="#faq"
            className="text-accent hover:underline hover:text-accent-light transition-colors"
          >
            Visit our FAQ section for more information
          </Link>
        </motion.div>
      </div>
    </section>
  );
}