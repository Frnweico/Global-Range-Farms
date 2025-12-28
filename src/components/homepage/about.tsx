import SecondaryButton from '../ui/secondaryButton'; 
import Image from 'next/image';
import Stats from './stats';

const About = () => {
  return (
    <section className="bg-white py-16 w-[85%] md:w-[90%] mx-auto">
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Desktop Label (Hidden on Mobile) */}
        <div className="hidden lg:flex flex-col justify-between self-stretch w-[20%] pt-2">
          <p className="text-[#0E0E0E] text-xl tracking-[-4%] leading-[140%] uppercase font-geist">
            // About Us
          </p>
        </div>

        {/* Right Content Area */}
        <div className="flex flex-col w-full lg:w-[80%] justify-between gap-12 lg:gap-0">
          
          {/* Mobile Label (Visible only on Mobile) */}
          <p className="lg:hidden text-[#0E0E0E] text-xl tracking-[-4%] leading-[140%] uppercase font-geist">
            // About Us
          </p>

          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-2 items-start">
            
            {/* Text Section */}
            <div className="flex flex-col gap-6 w-full lg:w-[80%]">
              <h3 className="text-2xl md:text-4xl lg:text-[42px] font-semibold leading-[120%] tracking-[-4%] text-[#0E0E0E] font-barlow">
                Global Range Farms raises exceptional goats, rams, cows and poultry products through careful breeding and sustainable farming.
              </h3>
              
              <p className="text-[#0E0E0E] text-base leading-[142%] tracking-[-2%] font-barlow">
                Our livestock stand out for their health, size, and superior quality; perfect for celebrations, gifting, and festivals, with the added assurance of healthy meat and wholesome nutrition.
              </p>
              
              <p className="text-[#0E0E0E] text-base leading-[142%] tracking-[-2%] font-barlow">
                From our farm at Kara Market, OPIC, and our ranch at Along Shagamu-Abeokuta Road, <span className="text-[#0C1515] font-bold">we deliver trusted livestock across Lagos, Ogun, and Southwest Nigeria.</span>
              </p>
              
              <div className="mt-2">
                <SecondaryButton text="Learn More about us" href='/about-us' />
              </div>
            </div>

            {/* Image Section */}
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

          {/* Stats Section */}
          <div className="w-full">
            <Stats />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;