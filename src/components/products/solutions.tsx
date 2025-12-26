"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SecondaryButton from "../secondaryButton/page";

// Data matching the image text
const options = [
  {
    id: 1,
    title: "Wholesale & Retail Sales",
    description: "We offer competitive prices for bulk and single purchases, ensuring you get the best value whether you are a business or an individual.",
    link: "/contact"
  },
  {
    id: 2,
    title: "Buy & Keep Service",
    description: "Transparent and sustainable systems that connect farmers to markets with efficiency and fairness.",
    link: "/contact"
  },
  {
    id: 3,
    title: "Delivery Service",
    description: "Fast, reliable, and careful transportation of your livestock directly to your location within our coverage areas.",
    link: "/contact"
  },
];

const OurSolutions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:px-20 w-full text-[#0E0E0E]">
      
      {/* HEADER */}
      <div className="mb-12">
        <p className="font-medium text-base md:text-[20px] tracking-[-2%] leading-[140%] uppercase mb-2 text-[#0E0E0E] font-barlow">
          // Our Solution
        </p>
        <h2 className="text-3xl md:text-[42px] lg:text-5xl leading-[110%] tracking-[-3%] font-geist">
          Buying options
        </h2>
      </div>

      {/* ACCORDION LIST */}
      <div className="flex flex-col">
        {options.map((option, index) => {
          const isOpen = activeIndex === index;

          return (
            <div 
              key={option.id} 
              className="border-b border-black/24 "
            >
              {/* ITEM HEADER (Clickable) */}
              <div 
                onClick={() => toggleIndex(index)}
                className={`
                  flex items-center justify-between cursor-pointer py-8 transition-colors duration-300
                  ${isOpen ? 'bg-[#F3851E] px-5' : 'bg-transparent hover:bg-gray-50'}
                `}
              >
                <h3 className={`text-4xl  md:text-5xl  lg:text-[64px] text-[#0E0E0E] font-geist tracking-[-3%] leading-[106%] `}>
                  {option.title}
                </h3>
                
                {/* Arrow Icon */}
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 md:w-8 md:h-8"
                  >
                    <path 
                      d="M9 18L15 12L9 6" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* ITEM BODY (Expandable) */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-[#F3851E]"
                  >
                    <div className="px-5 md:px-9 pb-8 pt-0 flex flex-col gap-6 max-w-2xl">
                      <p className="text-[#0E0E0E]/80 text-lg md:text-xl font-geist leading-[150%] tracking-[-1%]">
                        {option.description}
                      </p>
                      
                      <SecondaryButton text="Get in Touch" href="https://wa.link/gobmim"/>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default OurSolutions;