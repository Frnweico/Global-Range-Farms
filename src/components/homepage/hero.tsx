import Image from "next/image";
import Nav from "../nav/page"; 
import Button from "../button/page"; 

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-between">
      
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/pngs/heroImg.png" 
          alt="Livestock Background"
          fill
          className="object-cover"
          priority
        />
      </div>

    
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/30 via-black/60 to-black" />

      <div className="w-full z-10 text-white">
        <Nav /> 
      </div>

      <div className="container mx-auto px-6 pb-12 sm:pb-20 w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Buy top-grade Goats, Rams, Cows and Poultry products
            </h1>
          </div>

          <div className="flex flex-col gap-6 text-white md:items-end md:text-right">
            <p className="text-sm md:text-lg max-w-md opacity-90 leading-relaxed">
              Buy premium livestock for your home, family gatherings, events, restaurants, and every special celebration.
            </p>

            <div className="flex flex-wrap gap-4 justify-start md:justify-end">
              <Button 
                text="View our Livestock" 
                bgColor="bg-[#3ed634]" 
                textColor="text-black"
                showIcon={true}
              />
              
              <Button 
                text="Contact Us" 
                bgColor="bg-white" 
                textColor="text-black"
                showIcon={false}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;