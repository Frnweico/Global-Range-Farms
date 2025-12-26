"use client";

import React, { useState } from 'react';
import Image from "next/image";
import SecondaryButton from "../secondaryButton/page"; 
import { motion, AnimatePresence } from "framer-motion";

interface ServiceProps {
  mainTitle: string;
  subTitle: string;
  description: string;
  imageUrl: string;
}

const services: ServiceProps[] = [
  {
    mainTitle: "Highly nutritious meat from well-fed Livestock",
    subTitle: "Healthy & Well-fed Livestock",
    description: "Our animals are raised on a rich, balanced diet, so the meat you get is healthier, tastier, and packed with natural nutrients your family needs.",
    imageUrl: "/images/pngs/service1.png"
  },
  {
    mainTitle: "Wholesale & Retail Sales",
    subTitle: "Wholesale & Retail Sales",
    description: "Buy in bulk or single purchases. Whether you’re stocking for events, retail, or home use, we make ordering easy and dependable.",
    imageUrl: "/images/pngs/service2.png"
  },
  {
    mainTitle: "Free Delivery Service",
    subTitle: "Delivery Service",
    description: "FREE delivery on bulk purchases within Lagos, Oyo and Ogun states. Terms and Conditions apply.",
    imageUrl: "/images/pngs/service3.png"
  },
  {
    mainTitle: "Buy and Keep With Us Option",
    subTitle: "Buy and Keep Option",
    description: "Reserve your livestock until celebrations, slaughter day or delivery. We’ll feed, care for, and keep it in perfect condition. Terms and Conditions apply",
    imageUrl: "/images/pngs/service4.png"
  },
  {
    mainTitle: "Animal Identification & Traceability",
    subTitle: "Animal Identification & Traceability",
    description: "Giving you confidence in the source, health, and quality of every animal.",
    imageUrl: "/images/pngs/service5.png"
  },
  {
    mainTitle: "Standard consistent pricing system",
    subTitle: "Standard consistent pricing system",
    description: "You pay a consistent price based on the animal’s exact weight in KG.",
    imageUrl: "/images/pngs/service6.png"
  },
];

// --- SLIDE VARIANTS (Same as Light Version) ---
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300, 
    opacity: 1, 
  }),
  center: {
    x: 0,
    opacity: 1, 
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300, 
    opacity: 1, 
  }),
};

const ServicesAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); 
  
  const activeService = services[activeIndex] || services[0];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    } else {
      setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    }
  };

  const handleDirectClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const toggleMobile = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#164D04] text-white px-6 py-16 md:px-12 lg:px-20 w-full overflow-hidden" id='services'>
      
     {/* desktop  */}
      <div className="hidden lg:block">
        <div className="flex flex-row justify-between items-start gap-12 mb-16">
          
          <div className="w-[40%]">
            <p className="text-[20px] tracking-[-4%] leading-[140%] uppercase mb-3 text-white/70 font-barlow">
              // Why Choose Us?
            </p>
            <h2 className="text-[42px] leading-[124%] tracking-[-4%] mb-8 font-geist font-medium">
              What Makes Us Different.
            </h2>
            <div className="flex gap-4">
              <button 
                onClick={() => paginate(-1)}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#164D04] transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <button 
                onClick={() => paginate(1)}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#164D04] transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-5 items-start">
            {services.map((service, index) => (
              <h3
                key={index}
                onClick={() => handleDirectClick(index)}
                className={`
                  font-geist text-[28px] cursor-pointer leading-[124%] tracking-[-1%] transition-colors duration-300
                  ${index === activeIndex ? 'text-white font-bold' : 'text-white/70 hover:text-white'}
                `}
              >
                {service.mainTitle}
              </h3>
            ))}
            <div className="mt-6 w-full text-white">
               <SecondaryButton text="Learn More About Us" textColor="text-white" />
            </div>
          </div>
        </div>

        {/* BOTTOM: Slider Content */}
        <div className="relative h-[60vh] overflow-hidden">
          <AnimatePresence mode='wait' custom={direction}>
            <motion.div
              key={activeIndex} 
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }} 
              
              className={`
                flex gap-10 items-end w-full h-full
                ${activeIndex === 0 ? 'flex-row' : 'flex-row-reverse'}
              `}
            >
              {/* Text */}
              <div className="w-1/3 flex flex-col gap-4 pb-4">
                <h3 className="text-[28px] font-medium leading-[124%] tracking-[-4%]">
                  {activeService.subTitle}
                </h3>
                <p className="text-white/80 text-base font-geist leading-[140%] tracking-[-2%]">
                  {activeService.description}
                </p>
              </div>

              <div className="w-2/3 h-[60vh] relative rounded-lg">
                <Image 
                  src={activeService.imageUrl} 
                  alt={activeService.subTitle}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* -----------------------------
          MOBILE LAYOUT (Accordion - Dark Theme)
          Visible only on lg:hidden
         ----------------------------- */}
      <div className="flex flex-col lg:hidden w-full">
        <div className="mb-10">
            <p className="font-medium text-sm tracking-wide uppercase mb-2 text-white/70 font-barlow">
              // Why Choose Us?
            </p>
            <h2 className="text-3xl leading-[120%] font-geist font-medium">
              What Makes Us Different.
            </h2>
        </div>

        <div className="flex flex-col gap-6">
            {services.map((service, index) => {
                const isOpen = activeIndex === index;
                return (
                    <div key={index} >
                        {/* Header Row */}
                        <div 
                            className="flex justify-between items-start gap-4 cursor-pointer"
                            onClick={() => toggleMobile(index)}
                        >
                            <h3 className={`text-lg font-medium leading-[130%] transition-colors ${isOpen ? 'text-white' : 'text-white/70'}`}>
                                {service.mainTitle}
                            </h3>
                            {/* Chevron Icon */}
                            <div className="mt-1 shrink-0">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" viewBox="0 0 24 24" 
                                    strokeWidth={2} stroke="currentColor" 
                                    className={`w-5 h-5 transition-transform -rotate-180 duration-300 ${isOpen ? 'rotate-0' : ''}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </div>

                        {/* Expandable Body */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 flex flex-col gap-4">
                                        <p className="text-white/80 text-sm leading-[150%] font-geist">
                                            {service.description}
                                        </p>
                                        {/* Added bg-white/10 placeholder */}
                                        <div className="relative w-full h-[200px] rounded-lg overflow-hidden bg-white/10">
                                            <Image 
                                                src={service.imageUrl} 
                                                alt={service.mainTitle} 
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </div>
      </div>

    </section>
  );
};

export default ServicesAbout;