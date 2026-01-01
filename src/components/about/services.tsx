"use client";

import React, { useState } from 'react';
import Image from "next/image";
import SecondaryButton from "../ui/secondaryButton"; 
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

const ServicesAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const paginate = (newDirection: number) => {
    if (newDirection === 1) {
      setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    } else {
      setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    }
  };

  const handleDirectClick = (index: number) => {
    setActiveIndex(index);
  };

  const toggleMobile = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#164D04] py-16 md:pl-10 lg:pl-20 w-full overflow-hidden " id='services'>
      
      {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex flex-col gap-16">
        
        {/* TOP SECTION */}
        <div className="flex flex-row justify-between md:gap-6 lg:gap-12 h-auto">
          
          <div className="w-[40%] flex flex-col flex-1">
            <div>
            <p className="text-[20px] tracking-[-4%] leading-[140%] uppercase mb-3 text-white/70 font-barlow">
              // Why Choose Us?
            </p>
            <h2 className="text-white text-[42px] leading-[124%] tracking-[-4%] mb-8 font-geist font-medium">
              What Makes Us Different.
            </h2>
            </div>
            <div className="flex gap-4 text-white mt-auto">
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
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#164D04] transition-colors cursor-pointer "
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
                  ${index === activeIndex ? 'text-white font-medium' : 'text-white/70 hover:text-white hover:opacity-100'}
                `}
              >
                {service.mainTitle}
              </h3>
            ))}
            <div className="mt-6 w-full">
               <SecondaryButton text="Learn More About Us" textColor="text-white" href='/about-us' />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: CAROUSEL TRACK (Dark Version) */}
        <div className="w-full relative h-[60vh] overflow-hidden">
            <motion.div 
                className="flex gap-10 h-full w-full"
                animate={{ x: `calc(-${activeIndex} * (70% + 40px))` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {services.map((service, index) => {
                    const isFirst = index === 0;

                    return (
                        <div 
                            key={index}
                            className={`
                                w-[70%] shrink-0 flex items-end justify-between h-full
                                ${isFirst ? 'flex-row' : 'flex-row-reverse'} 
                            `}
                        >
                            {/* Text Content Block */}
                            <div className="w-[25%] flex flex-col gap-4 justify-end h-full">
                                <h3 className="text-[28px] font-medium leading-[124%] tracking-[-4%] text-white">
                                    {service.subTitle}
                                </h3>
                                <p className="text-white/70 text-base font-geist leading-[140%] tracking-[-2%]">
                                    {service.description}
                                </p>
                            </div>

                            <div className="w-[72%] h-[55vh] relative rounded-lg overflow-hidden shadow-lg">
                                <Image 
                                    src={service.imageUrl} 
                                    alt={service.subTitle} 
                                    fill
                                    className="object-cover object-center"
                                    priority={index === activeIndex} 
                                />
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>

      </div>

      {/* MOBILE LAYOUT */}
      <div className="flex flex-col md:hidden w-[85%] mx-auto">
        <div className="mb-10">
            <p className="font-medium text-sm tracking-wide uppercase mb-2 text-white/70 font-barlow">
              // Why Choose Us?
            </p>
            <h2 className="text-3xl leading-[120%] font-geist font-medium text-white">
              What Makes Us Different.
            </h2>
        </div>

        <div className="flex flex-col gap-6">
            {services.map((service, index) => {
                const isOpen = activeIndex === index;
                return (
                    <div key={index} className=" pb-6">
                        <div 
                            className="flex justify-between items-start gap-4 cursor-pointer"
                            onClick={() => toggleMobile(index)}
                        >
                            <h3 className={`text-lg font-medium leading-[130%] transition-colors ${isOpen ? 'text-white' : 'text-white/70'}`}>
                                {service.mainTitle}
                            </h3>
                            <div className="mt-1 shrink-0 text-white">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" viewBox="0 0 24 24" 
                                    strokeWidth={2} stroke="currentColor" 
                                    className={`w-5 h-5 transition-transform duration-300 -rotate-180 ${isOpen ? 'rotate-0' : ''}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </div>

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
                                        <div className="relative w-full h-50 rounded-lg overflow-hidden bg-white/10">
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