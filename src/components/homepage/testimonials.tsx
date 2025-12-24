import Image from "next/image";
import SecondaryButton from "../secondaryButton/page"; // Ensure path is correct

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
    <section className="bg-white px-6 py-20 md:px-12 lg:px-20 w-full">
      <div className="flex flex-col  gap-16 lg:gap-20 items-start w-full">

        <div className="flex flex-col items-start gap-4 w-full">
          <p className="text-gray-500 font-medium text-sm tracking-wide uppercase">
            // REVIEWS
          </p>
          <div className="flex items-center justify-between w-full">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black mb-6">
            What People Say About Us
          </h3>
          <SecondaryButton text="Read About Us" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[60vh]">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-[#252525] p-8 flex flex-col justify-between gap-8 h-full hover:shadow-md transition-shadow duration-300">
              
              <div className="flex flex-col gap-6">
                    <Image src={item.imageUrl} alt={item.name} width={40} height={40} className="object-contain rounded-full" />
                <p className="text-white leading-relaxed text-lg font-medium">
                  {item.testimonial}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-base mb-1">
                  {item.name}
                </h4>
                <p className="text-white opacity-30 text-sm font-medium">
                  {item.position}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials;