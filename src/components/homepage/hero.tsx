import Image from "next/image";
import Button from "../button/page"; 

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-end">
      
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/pngs/heroImg.png" 
          alt="Livestock Background"
          fill
          className="object-cover"
          priority
        />
      </div>

    
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/30 via-black/30 to-black" />

      <div className="container mx-auto px-6 pb-12 sm:pb-20 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] items-end">
          
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[120%] tracking-[-4%] text-white drop-shadow-lg font-geist">
              Buy top-grade Goats, Rams, Cows and Poultry products
            </h1>

          <div className="flex flex-col gap-6 text-white md:items-end ml-auto">
            <p className="text-lg md:text-2xl max-w-md opacity-90 leading-[140%] tracking-[-2%] font-barlow font-bold">
              Buy premium livestock for your home, family gatherings, events, restaurants, and every special celebration.
            </p>

            <div className="flex flex-wrap gap-4 justify-start w-full">
              <Button 
                text="View our Livestock" 
                bgColor="bg-[#3ed634]" 
                textColor="text-black"
                showIcon={true}
                className="text-base font-medium leading-[150%] tracking-[-1%] text-[#0E0E0E]"
              />
              
              <Button 
                text="Contact Us" 
                bgColor="bg-white" 
                textColor="text-black"
                showIcon={false}
                 className="text-base font-medium leading-[150%] tracking-[-1%] text-[#0E0E0E]"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;