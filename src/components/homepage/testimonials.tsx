import Image from "next/image";
import SecondaryButton from "../ui/secondaryButton"; 

interface TestimonialProps {
  imageUrl: string;
  testimonial: string;
  name: string;
  position: string;
}

const testimonials: TestimonialProps[] = [
  {
    imageUrl: "/images/svgs/abrahamTestimonial.svg",
    testimonial: "I’ve bought from them a number of times, and the rams have always been top quality. The delivery was seamless and that really made the whole experience stress-free.",
    name: "ABRAHAM DOSUNMU",
    position: "Managing Director - LYF Foods, Ibadan."
  },
  {
    imageUrl: "/images/svgs/bolajiTestimonial.svg",
    testimonial: "I’ve introduced many people to the farm, and everyone’s been impressed. The rams here stand out, you can see and feel the difference.",
    name: "BOLAJI AKINPELU",
    position: "DIRECTOR - GRF, Ogun"
  },
  {
    imageUrl: "/images/svgs/obongTestimonial.svg",
    testimonial: "I bought from abroad and they managed everything for me here. My family was really happy with the ram, it came just as promised.",
    name: "OBONG BEESONG",
    position: "Project Coordinator - Ignite Events, Estonia."
  },
]

const Testimonials = () => {
  return (
    <section className="bg-white py-20  mx-auto w-[85%] md:w-[93%]" id="testimonials">
      <div className="flex flex-col gap-5 items-start w-full">

        <div className="flex flex-col items-start gap-4 w-full font-barlow">
          <p className="text-[#0E0E0E] text-sm md:text-[18px] lg:text-[20px] tracking-wide uppercase opacity-80">
            // Reviews
          </p>
          <div className="flex items-center justify-between w-full md:w-[80%]">
            <h3 className="text-[40px] lg:text-[42px] leading-[124%] tracking-[-4%] text-[#0C1515]">
              What People Say About Us
            </h3>

<div className="hidden md:block">
            <SecondaryButton text="Read About Us"  />
</div>
          </div>
        </div>

        <div className="
            grid grid-flow-col auto-cols-[90%] gap-4 overflow-x-auto snap-x snap-mandatory pb-4 w-full
            md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 md:auto-cols-auto md:pb-0 md:overflow-visible md:min-h-[65vh] 
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
        ">
          {testimonials.map((item, index) => (
            <div 
                key={index} 
                className="
                    bg-[#252525] p-8 flex flex-col justify-between gap-8 
                    hover:shadow-md transition-shadow duration-300
                    min-w-[75vw] snap-center h-108 md:h-125
                    md:min-w-0
                "
            >
              
              <div className="flex flex-col gap-6">
                <Image src={item.imageUrl} alt={item.name} width={70} height={70} className="object-contain rounded-full" />
                <p className="text-white leading-[124%] tracking-[-4%] text-xl md:text-[24px] lg:text-[28px] font-semibold font-barlow">
                  {item.testimonial}
                </p>
              </div>

              <div className="flex flex-col gap-1 text-white">
                <h4 className="font-bold opacity-80 uppercase tracking-[-2%] text-base font-barlow">
                  {item.name}
                </h4>
                <p className="opacity-50 text-base leading-[124%] tracking-[-2%] font-barlow">
                  {item.position}
                </p>
              </div>
            </div>
          ))}
        </div>

<div className="block md:hidden">
        <SecondaryButton text="Read About Us"  />
        </div>
      </div>
    </section>
  )
}

export default Testimonials;