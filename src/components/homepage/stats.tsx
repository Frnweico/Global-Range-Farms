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
              {/* Number Row */}
              <div className="flex items-baseline text-black leading-none">
                {/* The Counter */}
                <span className="text-6xl md:text-7xl font-bold tracking-tighter">
                  <CountUp 
                    end={stat.target} 
                    duration={2.5}    // Animation lasts 2.5 seconds
                    enableScrollSpy={true} // Starts only when visible
                    scrollSpyOnce={true}   // Only runs once
                  />
                  {stat.unit}
                </span>

                {/* The Plus Sign (Superscript) */}
                <sup className="text-3xl font-bold ml-1 -top-6 relative">+</sup>
                
                {/* The Small Label next to the number (Years, Sold, etc.) */}
                <span className="text-xl md:text-2xl text-gray-500 ml-2 font-normal self-end mb-2">
                  {stat.suffix}
                </span>
              </div>

              {/* Description Text */}
              <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-[200px]">
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