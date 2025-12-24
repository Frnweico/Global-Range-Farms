"use client";

import React, { useState } from 'react';
import Image from "next/image";
import SecondaryButton from "../secondaryButton/page"; 
import { motion, AnimatePresence } from "framer-motion"; // Import Animation tools

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

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-20 w-full overflow-hidden">
      
      {/* --- TOP SECTION (Static) --- */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-10">
        <div className="lg:w-1/3 pt-2">
          <p className="text-gray-500 font-medium text-sm tracking-wide uppercase mb-3">
            // WHY CHOOSE US?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            What Makes Us Different.
          </h2>
          <div className="flex gap-4">
            <button 
              onClick={() => setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
              className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button 
              onClick={() => setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-5 items-start">
          {services.map((service, index) => (
            <h3
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                text-lg md:text-xl font-medium cursor-pointer transition-colors duration-300
                ${index === activeIndex ? 'text-green-600' : 'text-gray-400 hover:text-gray-600'}
              `}
            >
              {service.mainTitle}
            </h3>
          ))}
          <div className="mt-6 border-t border-gray-200 pt-6 w-full">
             <SecondaryButton text="Learn More About Us" />
          </div>
        </div>
      </div>

      {/* --- BOTTOM SECTION (Animated) --- */}
      <div className="relative min-h-[450px]"> {/* Fixed height container to prevent layout jumping */}
        
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeIndex} // Changing the key triggers the animation
            initial={{ opacity: 0, x: 20 }} // Start slightly invisible and to the right
            animate={{ opacity: 1, x: 0 }}  // Slide to center
            exit={{ opacity: 0, x: -20 }}   // Slide out to the left
            transition={{ duration: 0.4, ease: "easeInOut" }}
            
            className={`
              flex flex-col gap-10 lg:items-end w-full h-full
              ${activeIndex === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
            `}
          >
            
            {/* TEXT PART */}
            <div className="lg:w-1/3 flex flex-col gap-4 pb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-black">
                {activeService.subTitle}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {activeService.description}
              </p>
            </div>

            {/* IMAGE PART */}
            <div className="lg:w-2/3 w-full h-[300px] md:h-[450px] relative">
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
    </section>
  );
};

export default OurServices;