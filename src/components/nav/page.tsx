"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../button/page";

const Nav = () => {
  
  return (
    <div className="flex items-center justify-between p-4">
      <Image 
        src="/images/svgs/grfLogo.svg" 
        alt="Logo" 
        width={53} 
        height={53} 
      />
      <div className="flex gap-4 uppercase underline font-semibold text-[14px] leading-[150%] tracking-[-1%]"> 
        <Link href={"/"}>Home</Link>
        <Link href={"/products"}>Our Product</Link>
        <Link href={"/services"}>Our Services</Link>
        <Link href={"/about-us"}>About Us</Link>
      </div>
      <Button text="Contact Us" bgColor="bg-[#4ACD20]" className="" onClick={() => {}} showIcon={false}/>
    </div>
  );
};

export default Nav;