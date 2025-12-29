import Button from "../ui/MainButton";

const ProductsHero = () => {
  return (
    <section className="bg-white w-[85%] md:w-[90%] mx-auto pt-40 pb-10 lg:pt-50 lg:pb-20 grid grid-cols-1 gap-4 md:grid-cols-2 text-[#0E0E0E]font-geist min-h-[70vh]">
      <h2 className=" text-4xl md:text-5xl lg:text-[56px] leading-[110%] tracking-[-3%] ">Premium Livestock,<br /> Raised with Care</h2>
      <div className="flex flex-col gap-6 text-base md:text-[21px] lg:text-[22px] leading-[140%] tracking-[-2%]">
        <p className="hidden md:block">At Global Range Farms, we supply healthy, top-grade livestock, raised with care, fed right, and handled by trained professionals. Our animals are nurtured in a clean, well-managed environment and inspected by certified veterinarians to guarantee freshness, strength, and quality you can taste. Whether you’re buying for your home, restaurant, business, or celebration, we deliver livestock that meets the highest standards of health and hygiene.

</p>
          <div className="flex flex-col gap-6 md:hidden">
            <p>At Global Range Farms, we supply healthy, top-grade livestock, raised with care, fed right, and handled by trained professionals.</p>
            <p>Our animals are nurtured in a clean, well-managed environment and inspected by certified veterinarians to guarantee freshness, strength, and quality you can taste. Whether you’re buying for your home, restaurant, business, or celebration, we deliver livestock that meets the highest standards of health and hygiene</p>
          </div>
<div className="w-fit">
        <Button text="Contact Us" href="https://wa.link/gobmim" />
</div>

      </div>
    </section>
  )
}

export default ProductsHero
