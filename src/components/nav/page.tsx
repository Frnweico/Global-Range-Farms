"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/page";
import { usePathname } from "next/navigation"; 
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 
  
  const isHome = pathname === "/";

  // DYNAMIC STYLING:
  // 1. If Mobile Menu is OPEN: Force White Background & Black Text
  // 2. If Closed & Home: Transparent Background & White Text
  // 3. If Closed & Other Page: Transparent Background & Black Text
  const navBgColor = isOpen ? "bg-white" : "bg-transparent";
  const textColor = isOpen ? "text-black" : (isHome ? "text-white" : "text-black");
  const logoSrc = isOpen ? "/images/svgs/grfLogo.svg" : "/images/svgs/grfLogo.svg"; // Assuming logo works on both, or swap if needed

  const handleContactClick = (e?: React.MouseEvent) => {
    setIsOpen(false); // Close menu if clicked
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
    <div className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${navBgColor}`}>
      
      {/* --- MAIN HEADER BAR --- */}
      <div className={`flex items-center justify-between p-4 md:px-6 lg:px-12 ${textColor}`}>
        
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
        
        <div className="hidden lg:flex gap-8 uppercase underline font-semibold text-[14px] leading-[150%] tracking-[-1%] font-geist drop-shadow-md"> 
          <Link href={"/"} className="hover:opacity-80">Home</Link>
          <Link href={"/products"} className="hover:opacity-80">Our Product</Link>
          <Link href={"/#services"} className="hover:opacity-80">Our Services</Link>
          <Link href={"/about-us"} className="hover:opacity-80">About Us</Link>
        </div>

        {/* --- DESKTOP BUTTON (Hidden on Mobile) --- */}
        <div className="hidden lg:block">
            <Button 
                text="Contact Us" 
                bgColor="bg-[#4ACD20]" 
                className="" 
                onClick={handleContactClick}
                showIcon={false}
                href="#contact-us"
            />
        </div>

        {/* --- MOBILE HAMBURGER (Visible on Mobile) --- */}
        <button 
            onClick={toggleMenu} 
            className="lg:hidden z-50 flex flex-col justify-center gap-[6px] w-8 h-8 focus:outline-none cursor-pointer"
        >
            {/* The 3 lines of the hamburger */}
            {/* Line 1 */}
            <span className={`block w-full h-[2px] bg-current transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
            {/* Line 2 */}
            <span className={`block w-full h-[2px] bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            {/* Line 3 */}
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