"use client";
import Image from 'next/image';

// 1. DATA STRUCTURE
const productData = [
  {
    id: "rams",
    title: "Rams",
    description: "Quality rams known for their strong build, clean coats, and healthy weight, perfect for festive seasons like Sallah, weddings, and family events.",
    images: [
      "/images/pngs/Rams01.png",
      "/images/pngs/Rams02.png",
      "/images/pngs/Rams03.png", 
      "/images/pngs/Rams04.png", 
      "/images/pngs/Rams05.png", 
      "/images/pngs/Rams06.png", 
    ]
  },
  {
    id: "goats",
    title: "Goats",
    description: "Lean, tasty, raised in hygienic environment. A reliable choice for households, caterers, and meat vendors who value quality and freshness.",
    images: [
      "/images/pngs/Goats01.png",
      "/images/pngs/Goats02.png",
      "/images/pngs/Goats03.png",
      "/images/pngs/Goats04.png",
      "/images/pngs/Goats05.png",
      "/images/pngs/Goats06.png",
    ]
  },
  {
    id: "cows",
    title: "Cows",
    description: "Big, Fat, Strong, well-fed, and ideal for large gatherings, restaurant supply, and special occasions. Each one is bred for size, health, and excellent meat quality.",
    images: [
      "/images/pngs/Cows01.png",
      "/images/pngs/Cows02.png",
      "/images/pngs/Cows03.png",
      "/images/pngs/Cows04.png",
      "/images/pngs/Cows05.png",
    ]
  },
  {
    id: "poultry",
    title: "Poultry",
    description: "Large, nutritious eggs and healthy, well-grown chickens that deliver better flavour, richer nutrition, and real value for your home or business.",
    images: [
      "/images/pngs/Poultry01.png",
      "/images/pngs/Poultry02.png",
      "/images/pngs/Poultry03.png",
      "/images/pngs/Poultry04.png",
      "/images/pngs/Poultry05.png",
    ]
  }
];

// 2. REUSABLE MARQUEE COMPONENT
const ImageMarquee = ({ images, alt }: { images: string[], alt: string }) => {
  return (
    <div className="relative w-full overflow-hidden mt-8 md:mt-12">

      <div className="flex w-max animate-scroll gap-4 md:gap-6">
        
        {/* Set 1 */}
        {images.map((src, idx) => (
          <div key={`set1-${idx}`} className="relative h-[60vh] aspect-3/4 w-[40vw] shrink-0  overflow-hidden">
             <Image 
                src={src} 
                alt={`${alt} ${idx}`}
                fill
                sizes="(max-width: 768px) 70vw, 30vw"
                className="object-cover"
             />
          </div>
        ))}

        {images.map((src, idx) => (
          <div key={`set2-${idx}`} className="relative h-[60vh] aspect-3/4 w-[40vw] shrink-0  overflow-hidden ">
             <Image 
                src={src} 
                alt={`${alt} ${idx}`}
                fill
                sizes="(max-width: 768px) 70vw, 30vw"
                className="object-cover"
             />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductCarousel = () => {
  return (
    <section className="flex flex-col py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden">
      
      {/* Main Page Header */}
      <div className="flex flex-col gap-2 text-center w-full mb-16 lg:mb-24">
        <p className="font-medium text-[20px] tracking-[-4%] leading-[140%] uppercase mb-2 font-barlow text-[#0E0E0E]">
          // Our Products
        </p>
        <h3 className="text-[42px] font-barlow leading-[124%] tracking-[-4%] text-[#0E0E0E]">
          Our Top-grade Livestock Selection
        </h3>
      </div>

      {/* Product Sections Loop */}
      <div className="flex flex-col gap-20 md:gap-32">
        {productData.map((product) => (
          <div 
            key={product.id} 
            id={product.id} 
            className="flex flex-col w-full scroll-mt-28" 
          >
          
            <div className="flex flex-col md:flex-row justify-between items-start w-full gap-4 md:gap-10  pt-8 md:pt-0">
              
              {/* Title */}
              <h4 className="text-3xl md:text-[36px] lg:text-[42px] font-geist text-[#0C1515] tracking-[-4%] leading-[124%]">
                {product.title}
              </h4>

              {/* Description */}
              <p className="text-[#0E0E0E] text-xl md:text-2xl lg:text-[28px] leading-[140%] tracking-[-2%] font-geist md:w-[45%] ">
                {product.description}
              </p>
            </div>

            {/* Infinite Carousel */}
            <ImageMarquee images={product.images} alt={product.title} />

          </div>
        ))}
      </div>

    </section>
  )
}

export default ProductCarousel;