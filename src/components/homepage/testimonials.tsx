import Image from "next/image";
import SecondaryButton from "../secondaryButton/page"; 

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
    <section className="bg-white px-6 py-20 md:px-12 lg:px-20 w-full" id="testimonials">
      <div className="flex flex-col gap-5 items-start w-full">

        <div className="flex flex-col items-start gap-4 w-full font-barlow">
          <p className="text-[#0E0E0E] font-medium text-sm md:text-[18px] lg:text-[20px] tracking-wide uppercase">
            // Reviews
          </p>
          <div className="flex items-center justify-between w-full md:w-[80%]">
            <h3 className="text-3xl md:text-[36px] lg:text-[42px] leading-[124%] tracking-[-4%] text-[#0C1515]">
              What People Say About Us
            </h3>
            <SecondaryButton text="Read About Us" className="hidden md:block w-[60%]" />
          </div>
        </div>

        <div className="
            flex overflow-x-auto snap-x snap-mandatory gap-6 w-full pb-4
            md:grid md:grid-cols-2 lg:grid-cols-3 md:pb-0 md:overflow-visible md:min-h-[65vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-full items-stretch">
          {testimonials.map((item, index) => (
            <div 
                key={index} 
                className="
                    bg-[#252525] p-8 flex flex-col justify-between gap-8 
                    hover:shadow-md transition-shadow duration-300
                    min-w-[75vw] snap-center h-full
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

        <SecondaryButton text="Read About Us" className="block md:hidden" />
      </div>
    </section>
  )
}

export default Testimonials;