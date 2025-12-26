"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/page";
import { usePathname } from "next/navigation"; 
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track visibility for scroll
  const [isDarkSection, setIsDarkSection] = useState(false); // Track background darkness
  
  const pathname = usePathname(); 
  const isHome = pathname === "/";
  const lastScrollY = useRef(0);

  // --- 1. HANDLE SCROLL VISIBILITY & COLOR DETECTION ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // A. Hide/Show Logic
      // If scrolling DOWN and past 100px, hide. If scrolling UP, show.
      if (currentScrollY > 100 && currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;

      // B. Dynamic Text Color Logic
      // We check the element at the center-top of the screen (behind the nav)
      // If it contains your specific dark classes, we switch text to white.
      const elementUnderNav = document.elementFromPoint(window.innerWidth / 2, 40);
      if (elementUnderNav) {
        // Traverse up to find the closest section container with a background class
        const section = elementUnderNav.closest('section') || elementUnderNav.closest('div');
        if (section) {
          const className = section.className;
          // Check for your specific dark background colors
          const isDark = className.includes("bg-[#0E0E0E]") || className.includes("bg-[#133405]");
          setIsDarkSection(isDark);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- DYNAMIC STYLING ---
  // If Mobile Menu is Open -> White BG, Black Text
  // Else if Over Dark Section -> Transparent BG, White Text
  // Else (Over White Section) -> Transparent BG, Black Text
  // (Exception: On Home Page top, we force White Text unless menu is open)
  
  const isTop = typeof window !== 'undefined' ? window.scrollY < 50 : true;
  
  // Determine Text Color Priority:
  // 1. Menu Open = Black
  // 2. Home Page at Top = White
  // 3. Over Dark Section = White
  // 4. Default = Black
  let dynamicTextColor = "text-black";
  if (isOpen) {
    dynamicTextColor = "text-black";
  } else if (isHome && isTop) {
    dynamicTextColor = "text-white";
  } else if (isDarkSection) {
    dynamicTextColor = "text-white";
  }

  const navBgColor = isOpen ? "bg-white" : "bg-transparent backdrop-blur-sm"; // Added blur for better read
  const logoSrc = "/images/svgs/grfLogo.svg"; 

  const handleContactClick = (e?: React.MouseEvent) => {
    setIsOpen(false); 
    if (isHome) {
      e?.preventDefault(); 
      const element = document.getElementById("contact-us");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${navBgColor} 
        ${isVisible || isOpen ? "translate-y-0" : "-translate-y-full"} 
      `}
    >
      
      {/* --- MAIN HEADER BAR --- */}
      <div className={`flex items-center justify-between p-4 md:px-6 lg:px-12 transition-colors duration-300 ${dynamicTextColor}`}>
        
        {/* LOGO */}
        <div className="relative z-50">
           <Link href="/" onClick={() => setIsOpen(false)}>
            <Image 
                src={logoSrc} 
                alt="Logo" 
                width={53} 
                height={53} 
                className="object-contain"
            />
           </Link>
        </div>
        
        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex gap-8 uppercase underline font-semibold text-[14px] leading-[150%] tracking-[-1%] font-geist drop-shadow-md"> 
          <Link href={"/"} className="hover:opacity-80 transition-opacity">Home</Link>
          <Link href={"/products"} className="hover:opacity-80 transition-opacity">Our Product</Link>
          <Link href={"/#services"} className="hover:opacity-80 transition-opacity">Our Services</Link>
          <Link href={"/about-us"} className="hover:opacity-80 transition-opacity">About Us</Link>
        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden lg:block">
            <Button 
                text="Contact Us" 
                bgColor="bg-[#4ACD20]" 
                textColor="text-[#0E0E0E]" // Force black text on button for readability
                className="" 
                onClick={handleContactClick}
                showIcon={false}
                href="#contact-us"
            />
        </div>

        {/* MOBILE HAMBURGER */}
        <button 
            onClick={toggleMenu} 
            className="lg:hidden z-50 flex flex-col justify-center gap-[6px] w-8 h-8 focus:outline-none cursor-pointer"
        >
            <span className={`block w-full h-[2px] bg-current transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
            <span className={`block w-full h-[2px] bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block w-full h-[2px] bg-current transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>

      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full bg-white px-6 pb-10 shadow-xl lg:hidden overflow-y-auto h-[60vh]"
            >

                <div className="flex flex-col flex-grow mt-10">
                    {[
                        { name: "HOME", href: "/" },
                        { name: "OUR PRODUCT", href: "/products" },
                        { name: "OUR SERVICES", href: "/#services" },
                        { name: "ABOUT US", href: "/about-us" },
                        { name: "CONTACT US", href: "#contact-us", isContact: true },
                    ].map((link, index) => (
                        <div key={index} className="w-full">
                            <Link 
                                href={link.href}
                                onClick={(e) => {
                                    if (link.isContact) handleContactClick(e);
                                    else setIsOpen(false);
                                }}
                                className={`block py-4 text-[#0E0E0E] text-base uppercase tracking-[-1%] hover:text-[#4ACD20] leading-[150%] transition-colors duration-300 font-geist border-b border-black/30 ${index === 0? "border-t": ""}`}
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;