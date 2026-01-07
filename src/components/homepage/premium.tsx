"use client";

import { useState } from 'react';
import Image from "next/image";
import Button from "../ui/MainButton"; 
import ColoredLine from '../ui/ColoredLine';
import { motion, AnimatePresence } from "framer-motion";

const premiumData = [
  {
    title: "Buy And Keep Service",
    descriptionPrefix: "Buy & Keep:",
    description: "A premium way to plan ahead. Secure your livestock early and leave the care to us. We house, feed, and monitor your animals until your chosen pickup or slaughter date, so you get peace of mind, assured quality, and zero stress when it matters most.",
    imgUrl: "/images/pngs/buytokeepImg.png",
    imgUrlMobile: "/images/pngs/buytokeepImgMobile.png"
  },
  {
    title: "Delivery Service",
    descriptionPrefix: "Delivery:",
    description: "You don’t need to worry about transport. We deliver healthy livestock to customers across Lagos, Ogun, and Southwest Nigeria. (Free for bulk orders). Delivery also available to other locations on request. Terms and conditions apply.",
    imgUrl: "/images/pngs/premiumServicesImg.png",
    imgUrlMobile: "/images/pngs/premiumServicesImgMobile.png"
  },
];

const PremiumServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = premiumData[activeIndex];

  return (
    <section className="bg-[#164D04] py-16 text-white relative">
      
      <div className='mx-auto w-[85%] md:w-[90%] flex flex-col items-center md:items-start'>  
      <div className="mb-10 md:mb-20 self-start">
        <p className=" text-xl tracking-[-4%] leading-[140%] uppercase mb-2 font-barlow">
          // Premium
        </p>
        <h3 className="text-3xl md:text-[36px] lg:text-[42px] font-geist leading-[124%] tracking-[-4%]">
          Our Premium Services
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-10 mb-14 ">
        
        <div className="flex flex-col lg:w-[30%] font-geist">
          {premiumData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                text-left text-2xl md:text-[32px] leading-[124%] tracking-[-4%] transition-all duration-300 
                pl-6 border-l-2 pt-2 cursor-pointer 
                ${index === activeIndex 
                  ? 'text-[#E2A918] border-[#E2A918]' 
                  : 'text-[#CCCCCC] border-white/50 hover:text-[#E2A918] pt-1'
                }
              `}
            >
              <span className={index === activeIndex ? "border-b border-[#E2A918] " : ""}>
                 {item.title}
              </span>
            </button>
          ))}
        </div>

        <div className="lg:w-[46.5%]">
          <p key={activeIndex} className="text-[#ccc] text-base md:text-[20px] lg:text-[25px] leading-[140%] md:leading-[105%] tracking-[-3%] animate-in fade-in duration-300 font-geist opacity-90">
            <span className="text-white font-bold mr-2 opacity-80">
              {activeService.descriptionPrefix}
            </span>
            {activeService.description}
          </p>
        </div>

        {/* 3. Right Column: CTA Button */}
        <div className="lg:w-auto hidden md:flex justify-start self-center lg:self-end lg:justify-end ">
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
      <div className="w-full relative h-[20vh] lg:h-[55vh] overflow-hidden rounded-sm">
       <AnimatePresence mode='wait'>
            <motion.div
                key={activeIndex}
                initial={{ x: "100%", opacity: 0 }} 
                animate={{ x: "0%", opacity: 1 }}   
                exit={{ x: "-100%", opacity: 0 }} 
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
            >
              <Image 
                    src={activeService.imgUrlMobile} 
                    alt={activeService.title} 
                    fill
                    className="object-contain opacity-90 block md:hidden w-full "
                    priority={true}
                />

                {/* 2. DESKTOP IMAGE */}
                <Image 
                    src={activeService.imgUrl} 
                    alt={activeService.title} 
                    fill
                    className="object-contain opacity-90 hidden md:block"
                    priority={true}
                />
            </motion.div>
        </AnimatePresence>
        </div>
         <div className="block md:hidden self-center w-fit mt-10">
          <Button 
            text="Contact Us" 
            bgColor="bg-[#E2A918]" 
            textColor="text-black"
            href="https://wa.link/gobmim"
            showIcon={true}
          />
        </div>
      </div>
        <ColoredLine bgColor="#E2A918" width="60%" className="absolute bottom-0 left-0 z-20" />

    </section>
  );
};

export default PremiumServices;