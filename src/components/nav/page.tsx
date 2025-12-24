"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../button/page";
import { usePathname } from "next/navigation"; 

const Nav = () => {
  const pathname = usePathname(); 
  
  const isHome = pathname === "/";
  const textColor = isHome ? "text-white" : "text-black";

  const handleContactClick = (e?: React.MouseEvent) => {
    if (isHome) {
      e?.preventDefault(); 
      const element = document.getElementById("contact-us");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`flex items-center justify-between p-4 transition-colors duration-300 ${textColor}`}>
      <Image 
        src="/images/svgs/grfLogo.svg" 
        alt="Logo" 
        width={53} 
        height={53} 
      />
      
      <div className="flex gap-8 uppercase underline font-semibold text-[14px] leading-[150%] tracking-[-1%] font-geist drop-shadow-xl"> 
        <Link href={"/"} className="hover:opacity-80">Home</Link>
        <Link href={"/products"} className="hover:opacity-80">Our Product</Link>
        <Link href={"#services"} className="hover:opacity-80">Our Services</Link>
        <Link href={"/about-us"} className="hover:opacity-80">About Us</Link>
      </div>

      <Button 
        text="Contact Us" 
        bgColor="bg-[#4ACD20]" 
        className="" 
       onClick={handleContactClick}
        showIcon={false}
        href="#contact-us"
      />
    </div>
  );
};

export default Nav;