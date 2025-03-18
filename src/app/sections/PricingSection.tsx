"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

export const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const pricingTiers: PricingTier[] = [
    {
      name: "Basic",
      price: billingPeriod === "monthly" ? "$99" : "$990",
      description: "Perfect for small personal projects",
      features: [
        "1 page",
        "Basic design",
        "1 revision",
        "7-day delivery",
        "Responsive design"
      ],
      buttonText: "Get Started"
    },
    {
      name: "Premium",
      price: billingPeriod === "monthly" ? "$199" : "$1,990",
      description: "Ideal for professional websites",
      features: [
        "5 pages",
        "Custom design",
        "3 revisions",
        "5-day delivery",
        "Responsive design",
        "SEO optimization",
        "Basic animations"
      ],
      highlighted: true,
      buttonText: "Choose Plan"
    },
    {
      name: "Enterprise",
      price: billingPeriod === "monthly" ? "$499" : "$4,990",
      description: "For complex business solutions",
      features: [
        "10+ pages",
        "Advanced custom design",
        "Unlimited revisions",
        "3-day delivery",
        "Responsive design",
        "Advanced SEO",
        "Complex animations",
        "E-commerce integration",
        "CMS setup"
      ],
      buttonText: "Contact Me"
    }
  ];

  return (
    <section className="py-20 px-4 bg-light-background dark:bg-dark-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-foreground dark:text-dark-foreground">
            Pricing Plans
          </h2>
          <p className="text-light-secondary dark:text-dark-secondary max-w-2xl mx-auto">
            Choose the perfect plan for your project needs. All plans include responsive design and SEO best practices.
          </p>
          
          {/* Billing toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-3 text-sm ${billingPeriod === "monthly" ? "text-light-foreground dark:text-dark-foreground" : "text-light-secondary dark:text-dark-secondary"}`}>
              Monthly
            </span>
            <button 
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-light-muted dark:bg-dark-muted"
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-light-accent transition-transform ${
                  billingPeriod === "yearly" ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`ml-3 text-sm ${billingPeriod === "yearly" ? "text-light-foreground dark:text-dark-foreground" : "text-light-secondary dark:text-dark-secondary"}`}>
              Yearly <span className="text-light-accent text-xs">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden flex flex-col ${
                tier.highlighted 
                  ? "border-2 border-light-accent shadow-xl relative md:scale-105 z-10 md:-my-4" 
                  : "border border-light-muted dark:border-dark-muted"
              } bg-white dark:bg-dark-muted`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 right-0 -mt-1 -mr-1">
                  <div className="bg-light-accent text-light-foreground dark:text-dark-background text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-6 md:p-8 flex-grow">
                <h3 className="text-xl font-bold text-light-foreground dark:text-dark-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-light-secondary dark:text-dark-secondary text-sm mb-4">
                  {tier.description}
                </p>
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-light-foreground dark:text-dark-foreground">
                    {tier.price}
                  </span>
                  <span className="text-light-secondary dark:text-dark-secondary ml-2">
                    {billingPeriod === "monthly" ? "/project" : "/year"}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-light-accent flex-shrink-0 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-light-foreground dark:text-dark-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  {/* Spacer div to push button to bottom */}
                  <div className="flex-grow"></div>
                </div>
              </div>
              
              <div className="px-6 pb-8 md:px-8">
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    tier.highlighted
                      ? "bg-light-accent hover:bg-opacity-90 text-light-foreground dark:text-dark-background"
                      : "bg-light-muted dark:bg-dark-muted border border-light-accent text-light-foreground dark:text-dark-foreground hover:bg-light-accent hover:text-light-foreground dark:hover:text-dark-background"
                  }`}
                >
                  {tier.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-light-secondary dark:text-dark-secondary mb-4">
            Need something more customized?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-light-foreground dark:text-dark-foreground hover:text-light-accent dark:hover:text-light-accent font-medium"
          >
            Get in touch for a custom quote
            <svg
              className="ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;