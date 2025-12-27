"use client";

import { useState } from 'react';
import Image from "next/image";
import Button from "../ui/MainButton"; 
import ColoredLine from '../ui/ColoredLine';

const premiumData = [
  {
    title: "Buy And Keep Service",
    descriptionPrefix: "Buy & Keep:",
    description: "A premium way to plan ahead. Secure your livestock early and leave the care to us. We house, feed, and monitor your animals until your chosen pickup or slaughter date, so you get peace of mind, assured quality, and zero stress when it matters most.",
    imgUrl: "/images/pngs/buytokeepImg.png"
  },
  {
    title: "Delivery Service",
    descriptionPrefix: "Delivery:",
    description: "You don’t need to worry about transport. We deliver healthy livestock to customers across Lagos, Ogun, and Southwest Nigeria. (Free for bulk orders). Delivery also available to other locations on request. Terms and conditions apply.",
    imgUrl: "/images/pngs/premiumServicesImg.png"
  },
];

const PremiumServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = premiumData[activeIndex];

  return (
    <section className="bg-[#0E0E0E] px-6 py-16 md:px-12 lg:px-20 w-full text-white relative">
      
      <div className="mb-12">
        <p className=" font-medium text-sm md:text-[18px] lg:text-[20px] tracking-[-4%] leading-[140%] uppercase mb-2 font-barlow opacity-50">
          // Premium
        </p>
        <h3 className="text-3xl md:text-[36px] lg:text-[42px] font-geist leading-[124%] tracking-[-4%]">
          Our Premium Services
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row justify-between md:items-end gap-10 mb-14">
        
        <div className="flex flex-col lg:w-1/4 font-geist ">
          {premiumData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                text-left text-xl md:text-[24px] lg:text-[32px] leading-[124%] tracking-[-4%] transition-all duration-300 
                pl-6 py-3 border-l-2 cursor-pointer 
                ${index === activeIndex 
                  ? 'text-[#E2A918] border-[#E2A918]' 
                  : 'text-[#CCCCCC] border-gray-700 hover:text-[#E2A918]'
                }
              `}
            >
              <span className={index === activeIndex ? "border-b border-[#E2A918] pb-0.5" : ""}>
                 {item.title}
              </span>
            </button>
          ))}
        </div>

        <div className="lg:w-1/2">
          <p key={activeIndex} className="text-white opacity-60 text-lg md:text-[20px] lg:text-[25px] leading-[100%] tracking-[-3%] animate-in fade-in duration-300 font-geist">
            <span className="text-white font-bold mr-2">
              {activeService.descriptionPrefix}
            </span>
            {activeService.description}
          </p>
        </div>

        {/* 3. Right Column: CTA Button */}
        <div className="lg:w-auto flex justify-start self-center lg:self-end lg:justify-end">
          <Button 
            text="Contact Us" 
            bgColor="bg-[#E2A918]" 
            textColor="text-black"
            href="https://wa.link/gobmim"
            showIcon={true}
          />
        </div>

      </div>

      {/* --- BOTTOM SECTION: LARGE IMAGE --- */}
      <div className="w-full relative h-[300px] md:h-[500px] overflow-hidden rounded-sm">
        <Image 
          src={activeService.imgUrl} 
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