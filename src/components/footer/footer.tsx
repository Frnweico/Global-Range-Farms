"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/page'; // Ensure this path matches your structure

const FooterMain = () => {
  
  // Function to handle smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-12 lg:px-20 w-full overflow-hidden">
      
      {/* --- TOP SECTION: GRID LAYOUT --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
        
        {/* 1. LEFT COLUMN (CTA) - Spans 5 columns */}
        <div className="lg:col-span-5 flex flex-col items-start gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Global Range Farms
          </h3>
          <p className="text-gray-400 text-base leading-relaxed max-w-sm">
            Ready to Experience Better Livestock and Reliable Supply with Global Range Farms?
          </p>
          
          <div className="mt-2">
            <Button 
              text="Contact Us Today" 
              bgColor="bg-[#3ed634]" 
              textColor="text-black"
              showIcon={true}
            />
          </div>
        </div>

        {/* 2. RIGHT COLUMN (LINKS) - Spans 7 columns */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Column 1: Farm */}
          <div className="flex flex-col gap-6">
            <h4 className="text-gray-500 font-medium text-sm uppercase tracking-wide">Farm</h4>
            <div className="flex flex-col gap-4 text-gray-300 text-sm">
              <Link href="/products" className="hover:text-[#3ed634] transition-colors">Our Livestock</Link>
              <Link href="/services" className="hover:text-[#3ed634] transition-colors">Services</Link>
            </div>
          </div>

          {/* Column 2: Resources */}
          <div className="flex flex-col gap-6">
            <h4 className="text-gray-500 font-medium text-sm uppercase tracking-wide">Resources</h4>
            <div className="flex flex-col gap-4 text-gray-300 text-sm">
              <Link href="/faqs" className="hover:text-[#3ed634] transition-colors">FAQs</Link>
              <Link href="/testimonials" className="hover:text-[#3ed634] transition-colors">Testimonials</Link>
            </div>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-6">
            <h4 className="text-gray-500 font-medium text-sm uppercase tracking-wide">Company</h4>
            <div className="flex flex-col gap-4 text-gray-300 text-sm">
              <Link href="/about-us" className="hover:text-[#3ed634] transition-colors">About Us</Link>
              <Link href="/why-choose-us" className="hover:text-[#3ed634] transition-colors">Why Choose Us</Link>
            </div>
          </div>

        </div>
      </div>

      {/* --- DIVIDER --- */}
      <div className="w-full h-px bg-gray-800 mb-8" />

      {/* --- BOTTOM SECTION --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-500 mb-12">
        <p>© 2025 Global Range Farms. All rights reserved.</p>
      </div>

      {/* --- BIG LOGO & BACK TO TOP --- */}
      <div className="relative w-full flex items-end justify-between">
        
        {/* 1. The Large Responsive Text Image */}
        {/* We use w-full to make it span across, and h-auto to keep aspect ratio */}
        <div className="w-[85%] md:w-[90%]">
             <Image 
                src="/images/svgs/GlobalRangeFarms.svg" // Ensure extension is correct (.svg vs .svgs)
                alt="Global Range Farms" 
                width={1200} 
                height={200}
                className="w-full h-auto object-contain"
             />
        </div>

        {/* 2. Custom Back To Top Button */}
        {/* Positioned at the bottom right, aligned with the text baseline */}
        <div className="flex flex-col items-center gap-2 cursor-pointer group mb-2 md:mb-6" onClick={scrollToTop}>
            <span className="text-white text-xs font-medium group-hover:text-[#3ed634] transition-colors">
                Back to top
            </span>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform group-hover:-translate-y-1">
                {/* Up Arrow SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            </div>
        </div>

      </div>
    </footer>
  )
}

export default FooterMain;