"use client";
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/MainButton'; 

const FooterMain = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0E0E0E] text-white pt-10 md:pt-20 pb-10 w-full overflow-hidden">
      <div className='w-[85%] md:w-[90%] mx-auto'>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
        
        <div className="lg:col-span-5 flex flex-col items-start gap-3 md:gap-6">
          <h3 className="text-[32px] font-semibold text-white font-geist">
            Global Range Farms
          </h3>
          <p className="text-white opacity-90 text-xl md:text-[24px] lg:text-[28px] leading-[142%] tracking-[-2%] font-geist w-full md:w-[70%]">
            Ready to Experience Better Livestock and Reliable Supply with Global Range Farms?
          </p>
          
          <div className="mt-2">
            <Button 
              text="Contact Us Today" 
              bgColor="bg-[#4ACD20]" 
              textColor="text-[#0E0E0E]"
              showIcon={true}
              href="https://wa.link/gobmim"
            />
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-3 justify-between">
          
          <div className="flex flex-col gap-6 md:w-1/2">
            <h4 className="text-white font-geist text-xl leading-[140%] tracking-[-2%] ">Farm</h4>
            <div className="flex flex-col gap-4 text-white opacity-60 text-sm md:text-base leading-[150%] tracking-[-2%] font-geist">
              <Link href="/products" className="hover:text-[#4ACD20] transition-colors">Our Livestock</Link>
              <Link href="#services" className="hover:text-[#4ACD20] transition-colors">Services</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:w-1/2">
            <h4 className="text-white font-geist text-xl leading-[140%] tracking-[-2%]">Resources</h4>
            <div className="flex flex-col gap-4 text-white opacity-60 text-sm md:text-base leading-[150%] tracking-[-2%] font-geist">
              <Link href="/#faqs" className="hover:text-[#4ACD20] transition-colors">FAQs</Link>
              <Link href="/#testimonials" className="hover:text-[#4ACD20] transition-colors">Testimonials</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:w-1/2 ">
            <h4 className="text-white font-geist text-xl leading-[140%] tracking-[-2%]">Company</h4>
            <div className="flex flex-col gap-4 text-white opacity-60 text-sm md:text-base leading-[150%] tracking-[-2%] font-geist ">
              <Link href="/about-us" className="hover:text-[#4ACD20] transition-colors">About Us</Link>
              <Link href="#services" className="hover:text-[#4ACD20] transition-colors ">Why Choose Us</Link>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full h-px bg-white opacity-10 mb-4 hidden md:block" />

      <div className="text-base md:text-xl text-white opacity-50 mb-12 font-geist leading-[150%] tracking-[-2%]">
        <p>© 2025 Global Range Farms. All rights reserved.</p>
      </div>

      <div className="relative w-full flex">
        
        <div className="w-full md:w-[95%] mx-auto ">
             <Image 
                src="/images/svgs/GlobalRangeFarms.svg" 
                alt="Global Range Farms" 
                width={1330} 
                height={200}
                className="w-full h-auto object-contain "
             />
        </div>

       <div 
            onClick={scrollToTop}
            className={`
                absolute bottom-4 right-0 lg:bottom-4 lg:right-4 z-20 cursor-pointer group hidden lg:flex items-center gap-3
                bg-transparent p-0
                lg:bg-[#0E0E0E] lg:px-6 lg:py-2 lg:rounded-full
            `}
        >
            <span className="hidden lg:block text-white text-xs font-medium transition-colors font-geist">
                Back to top
            </span>
            
            <div className="w-10 h-10 lg:w-9 lg:h-9 bg-white rounded-full flex items-center justify-center transition-transform group-hover:-translate-y-1 shadow-lg lg:shadow-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" 
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#0E0E0E" 
                    className="w-5 h-5 -rotate-90"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                </svg>
            </div>
        </div>

      </div>
      </div>
    </footer>
  )
}

export default FooterMain;