import Button from "../button/page";
import ColoredLine from "../coloredLine/page";

const VisitUs = () => {
  return (
    <section 
      className="relative w-full flex bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[80vh]"
      style={{backgroundImage: `url("/images/pngs/visitImg.png")`}}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-10 flex flex-col  justify-between gap-10">
        
            <h2 className="text-[42px] md:text[100px] lg:text-[130px] font-semibold font-geist text-white leading-[120%] tracking-[-7%]">
                Visit us at GRF Today
            </h2>

        <div className=" w-full flex flex-col md:flex-row items-start md:items-end gap-8 justify-between">
           <p className="text-white/90 text-lg md:text-xl lg:text-[28px] font-geist leading-[140%] tracking-[-2%] w-full md:w-[50%]">
              Come see how we raise healthy livestock firsthand.<br/> Schedule a visit to our farm or book a meeting to learn more about our services.
           </p>
           
           <Button 
              text="Get in Touch" 
              bgColor="bg-[#4ACD20]" 
              textColor="text-[#0E0E0E]"
              showIcon={true}
              href="/contact" 
           />
        </div>

      </div>

      <ColoredLine 
        bgColor="#4ACD20"
        width="60%"      
        className="absolute bottom-0 left-0 z-20" 
      />
    </section>
  )
}

export default VisitUs;