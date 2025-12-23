import React from 'react';
import SecondaryButton from '../secondaryButton/page'; // Check path
import Image from 'next/image';
import Stats from './stats'; // Check path

const About = () => {
  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-20 w-full">
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        <div className="hidden lg:flex flex-col justify-between self-stretch w-[20%] pt-2">
          <p className="text-gray-500 font-medium text-sm tracking-wide uppercase">
            // About Us
          </p>
          
          <div className="pb-4">
             <SecondaryButton text="Read About Us" />
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-[80%] justify-between">
          
          <div className="flex flex-col lg:flex-row gap-2 items-start">
            
            <div className="flex flex-col gap-6 w-full lg:w-[60%]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
                Global Range Farms raises exceptional goats, rams, cows and poultry products through careful breeding and sustainable farming.
              </h2>
              
              <p className="text-gray-600 text-base leading-relaxed">
                Our livestock stand out for their health, size, and superior quality; perfect for celebrations, gifting, and festivals, with the added assurance of healthy meat and wholesome nutrition.
              </p>
              
              <p className="text-gray-600 text-base leading-relaxed">
                From our farm at Kara Market, OPIC, and our ranch at Along Shagamu-Abeokuta Road, <strong className="text-black font-semibold">we deliver trusted livestock across Lagos, Ogun, and Southwest Nigeria.</strong>
              </p>
              
              <div className="mt-2">
                <SecondaryButton text="Learn More about us" />
              </div>
            </div>

            <div className="w-full lg:w-[40%] relative">
              <Image 
                src="/images/pngs/aboutImg.png" 
                alt="Livestock feeding" 
                width={500} 
                height={400} 
                className="object-cover rounded-sm w-full h-auto"
              />
            </div>
          </div>

          <div className="w-full ">
            <Stats />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;