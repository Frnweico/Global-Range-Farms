import Image from "next/image";
import ColoredLine from "../coloredLine/page";

const visionData = [
  {
    title: "/ Our Vision",
    description: "To supply premium-quality, healthy livestock while championing ethical and sustainable farming across Nigeria."
  },
  {
    title: "/ Our Mission",
    description: "To be Nigeria’s leading livestock farm, known for breeding strong, disease-free animals that promote food security and festive celebrations."
  }
];

const Vision = () => {
  return (
    <section className="relative">
       <ColoredLine 
        bgColor="#E2A918"
        width="60%"      
        className="absolute top-0 right-0 z-20" 
      />

      <div className="flex flex-col py-20 px-8 lg:px-16">
        <div className="flex flex-col gap-2 text-center w-full mb-8">
            <p className=" font-medium text-[20px] tracking-[-4%] leading-[140%] uppercase mb-2 font-barlow text-[#0E0E0E]">
          // About Us
        </p>
        <h3 className="text-[42px] font-barlow leading-[124%] tracking-[-4%] text-[#0E0E0E]">
          Our Vision & Mission
        </h3>
        </div>
       <div className="w-full relative h-[250px] md:h-[400px] lg:h-[500px] mb-12 rounded-lg overflow-hidden">
            <Image 
                src="/images/pngs/aboutPageImg.png" 
                alt="cows on a field" 
                fill
                className="object-cover"
            />
        </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 w-full">
            {visionData.map((item, index) => (
                <div 
                    key={index} 
                    className="flex flex-col gap-4 border-b-2 border-black pb-5"
                >
                    <h4 className="text-4xl lg:text-5xl font-geist text-[#0E0E0E] leading-[100%] tracking-[-3%]">
                        {item.title}
                    </h4>
                    <p className="text-[#0E0E0E] text-2xl lg:text-[28px] leading-[100%] tracking-[-3%] font-light font-geist">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Vision
