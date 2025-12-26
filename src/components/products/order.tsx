import Button from "../button/page";

const Order = () => {
  return (
    <section 
      className="relative w-full flex items-center text-center bg-cover bg-center bg-no-repeat min-h-[50vh] md:min-h-[80vh]"
      style={{backgroundImage: `url("/images/pngs/orderImg.png")`}}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-10 flex flex-col items-center  justify-between gap-1">
        
            <h2 className="text-3xl md:text-[48px] font-geist text-white leading-[121%] tracking-[-3%]">
                Order with Confidence!
            </h2>

           <p className="text-base md:text-[28px] font-geist font-bold text-white leading-[121%] tracking-[-3%] w-[65%] md:w-[40%]">
              Care, quality, and integrity, that’s the Global Range Farms promise.
           </p>
           
           <div className="w-fit mt-4">
           <Button 
              text="Get in Touch" 
              bgColor="bg-[#E2A918]" 
              textColor="text-[#0E0E0E]"
              showIcon={true}
              href="https://wa.link/gobmim"
              />
              </div>

      </div>
    </section>
  )
}

export default Order;