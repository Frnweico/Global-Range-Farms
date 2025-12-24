import SecondaryButton from '../secondaryButton/page'; 
import Image from 'next/image';
import Stats from './stats';

const About = () => {
  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-20 w-full">
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        <div className="hidden lg:flex flex-col justify-between self-stretch w-[20%] pt-2">
          <p className="text-[#0E0E0E] text-base md:text-[20px] tracking-[-4%] leading-[140%] uppercase">
            // About Us
          </p>
          
             <SecondaryButton text="Read About Us" className="text-base font-medium leading-[150%] tracking-[-1%] text-[#0E0E0E]"/>
        </div>

        <div className="flex flex-col w-full lg:w-[80%] justify-between">
          
          <div className="flex flex-col lg:flex-row gap-2 items-start">
            
            <div className="flex flex-col gap-6 w-full lg:w-[80%]">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold leading-[120%] tracking-[-4%] text-[#0E0E0E]">
                Global Range Farms raises exceptional goats, rams, cows and poultry products through careful breeding and sustainable farming.
              </h2>
              
              <p className="text-[#0E0E0E] text-base leading-[142%] tracking-[-2%]">
                Our livestock stand out for their health, size, and superior quality; perfect for celebrations, gifting, and festivals, with the added assurance of healthy meat and wholesome nutrition.
              </p>
              
              <p className="text-[#0E0E0E] text-base leading-[142%] tracking-[-2%]">
                From our farm at Kara Market, OPIC, and our ranch at Along Shagamu-Abeokuta Road, <span className="text-[#0C1515] font-bold">we deliver trusted livestock across Lagos, Ogun, and Southwest Nigeria.</span>
              </p>
              
              <div className="mt-2">
                <SecondaryButton text="Learn More about us" className='font-medium text-base leading-[150%] tracking-[-1%] text-[#0E0E0E]' href='/about-us' />
              </div>
            </div>

            <div className="w-full lg:w-[40%] relative">
              <Image 
                src="/images/pngs/aboutImg.png" 
                alt="Livestock feeding" 
                width={500} 
                height={400} 
                className="object-cover w-full h-auto"
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