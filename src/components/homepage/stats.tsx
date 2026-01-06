"use client";

import CountUp from "react-countup";

const stats = [
  {
    target: 10,
    suffix: "Years",
    label: "A decade+ of trusted livestock experience.",
  },
  {
    target: 7, 
    suffix: "Sold",
    unit: "k", 
    label: "Thousands of livestock successfully delivered.",
  },
  {
    target: 5, 
    suffix: "Livestock",
    unit: "K",
    label: "Healthy livestock raised with proper care.",
  },
  {
    target: 120,
    suffix: "Businesses",
    label: "Recognize us for excellence and uncompromising promise.",
  },
];

const Stats = () => {
  return (
    <section className=" bg-white w-full">
      <div className="container mx-auto">
        {/* FORCE 4 COLUMNS ON ALL SCREENS */}
        <div className="grid grid-cols-4 text-left gap-2 md:gap-0">
          
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start w-full">
          
              <div className="flex flex-col md:flex-row items-start md:items-center leading-none gap-0 md:gap-3">
                
                <div className="flex items-start">
                    <span className="text-[40px] md:text-6xl lg:text-[74px] font-medium tracking-[-4%] leading-[120%] text-[#0C1515] font-barlow">
                    <CountUp 
                        end={stat.target} 
                        duration={3} 
                        enableScrollSpy={true} 
                        scrollSpyOnce={true}  
                    />
                    {stat.unit}
                    </span>
                    <span className="md:hidden ml-0.5 text-[24px] font-medium text-[#0E0E0E] font-barlow leading-[120%]">
                        +
                    </span>
                </div>

                <div className="flex flex-col justify-start md:justify-between items-start">
                    <span className="hidden md:block text-[32px] font-medium text-[#0E0E0E] font-barlow leading-none">
                        +
                    </span>
                    
                    <span className="text-sm sm:text-xl md:text-2xl lg:text-[32px] font-regular text-[#0C151599] font-barlow leading-none ">
                      {stat.suffix}
                    </span>
                </div>
              </div>

              {/* Label Text */}
              <p className={`mt-2 md:mt-4 text-[#0C151599] text-[12px] sm:text-xs md:text-base font-regular leading-[100%] md:leading-[136%] tracking-[-2%] font-barlow ${index === 3 ? "md:w-[90%]" : "md:w-[80%]"}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;