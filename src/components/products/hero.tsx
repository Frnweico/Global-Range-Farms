import Button from "../button/page";

const ProductsHero = () => {
  return (
    <section className="bg-white px-6 lg:px-10 py-30 md:py-30 lg:py-50 grid grid-cols-1 md:grid-cols-2 text-[#0E0E0E]font-geist min-h-screen">
      <h2 className=" text-4xl md:text-5xl lg:text-[56px] leading-[70%] lg:leading-[110%] tracking-[-3%] ">Premium Livestock,<br /> Raised with Care</h2>
      <div className="flex flex-col gap-6 text-base md:text-[21px] lg:text-[23px] leading-[140%] tracking-[-2%]">
        <p>At Global Range Farms, we supply healthy, top-grade livestock, raised with care, fed right, and handled by trained professionals. Our animals are nurtured in a clean, well-managed environment and inspected by certified veterinarians to guarantee freshness, strength, and quality you can taste. Whether you’re buying for your home, restaurant, business, or celebration, we deliver livestock that meets the highest standards of health and hygiene.
</p>
<div className="w-fit">
        <Button text="Contact Us" href="https://wa.link/gobmim" />
</div>

      </div>
    </section>
  )
}

export default ProductsHero
