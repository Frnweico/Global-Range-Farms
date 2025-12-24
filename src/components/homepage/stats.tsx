"use client";

import CountUp from "react-countup";

const stats = [
  {
    target: 10,
    suffix: "Years",
    label: "Dedicated to advancing sustainable agriculture.",
  },
  {
    target: 7, 
    suffix: "Sold",
    unit: "k", 
    label: "Delivering Top Grade livestock Across the country",
  },
  {
    target: 5, 
    suffix: "Livestock",
    unit: "K",
    label: "Connected and supported through our solutions.",
  },
  {
    target: 120,
    suffix: "Businesses",
    label: "Recognize us for excellence in service and uncompromising promise.",
  },
];

const Stats = () => {
  return (
    <section className="pt-16 bg-white w-full">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="flex items-center leading-none gap-3">
                <span className="text-5xl md:text-6xl lg:text-[74px] font-medium tracking-[-4% leading-[120%] text-[#0C1515] font-barlow">
                  <CountUp 
                    end={stat.target} 
                    duration={3} 
                    enableScrollSpy={true} 
                    scrollSpyOnce={true}  
                  />
                  {stat.unit}
                </span>

<div className="flex flex-col justify-between items-start">
                <span className="text-2xl md:text-[32px] font-medium text-[#0E0E0E] font-barlow">+</span>
                
                <span className="text-2xl md:text-[32px] font-regular text-[#0C151599] font-barlow">
                  {stat.suffix}
                </span>
</div>
              </div>

              <p className="mt-4 text-[#0C151599] text-sm md:text-base fonnt-regular leading-[136%] tracking-[-2%] font-barlow ">
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