"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Button from "../button/page"; 
import ColoredLine from '../coloredLine/page';

const premiumData = [
  {
    title: "Delivery Service",
    descriptionPrefix: "Delivery:",
    description: "You don’t need to worry about transport. We deliver healthy livestock to customers across Lagos, Ogun, and Southwest Nigeria. (Free for bulk orders). Delivery also available to other locations on request. Terms and conditions apply."
  },
  {
    title: "Buy And Keep Service",
    descriptionPrefix: "Buy & Keep:",
    description: "Secure your livestock now and pick it up when you're ready. We feed, groom, and maintain them in perfect health until your event or slaughter day. Small maintenance fee applies."
  }
];

const PremiumServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = premiumData[activeIndex];

  return (
    <section className="bg-[#0E0E0E] px-6 py-16 md:px-12 lg:px-20 w-full text-white relative">
      
      {/* --- HEADER --- */}
      <div className="mb-12">
        <p className="text-gray-500 font-medium text-sm tracking-wide uppercase mb-2">
          // PREMIUM
        </p>
        <h3 className="text-3xl md:text-5xl font-bold">
          Our Premium Services
        </h3>
      </div>

      {/* --- MIDDLE SECTION --- */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-14">
        
        {/* 1. Left Column: Navigation Tabs */}
        {/* 'flex-col' with NO gap ensures the borders touch to form a continuous line */}
        <div className="flex flex-col lg:w-1/4">
          {premiumData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                text-left text-lg md:text-xl font-medium transition-all duration-300 
                pl-6 py-3 border-l-[3px] 
                ${index === activeIndex 
                  ? 'text-[#E2A918] border-[#E2A918]' // Active: Gold Line & Text
                  : 'text-gray-500 border-gray-700 hover:text-gray-300' // Inactive: Grey Line (Visible)
                }
              `}
            >
              <span className={index === activeIndex ? "border-b border-[#E2A918] pb-0.5" : ""}>
                 {item.title}
              </span>
            </button>
          ))}
        </div>

        {/* 2. Middle Column: Description Text */}
        <div className="lg:w-1/2">
          {/* We use a key here to trigger a tiny fade animation when content changes */}
          <p key={activeIndex} className="text-gray-400 text-base md:text-lg leading-relaxed animate-in fade-in duration-300">
            <span className="text-white font-bold mr-2">
              {activeService.descriptionPrefix}
            </span>
            {activeService.description}
          </p>
        </div>

        {/* 3. Right Column: CTA Button */}
        <div className="lg:w-auto flex justify-start lg:justify-end">
          <Button 
            text="Contact Us" 
            bgColor="bg-[#E2A918]" 
            textColor="text-black"
            showIcon={true}
          />
        </div>

      </div>

      {/* --- BOTTOM SECTION: LARGE IMAGE --- */}
      <div className="w-full relative h-[300px] md:h-[500px] overflow-hidden rounded-sm">
        <Image 
          src="/images/pngs/premiumServicesImg.png" 
          alt="Premium Livestock Delivery" 
          fill
          className="object-cover opacity-90"
        />
      </div>
        <ColoredLine bgColor="#E2A918" width="60%" className="absolute bottom-0 left-0 z-20" />

    </section>
  );
};

export default PremiumServices;