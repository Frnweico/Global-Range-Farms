import Button from "../button/page";
import ColoredLine from "../coloredLine/page";

const VisitUs = () => {
  return (
    <section 
      className="relative w-full flex items-center bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: `url("/images/pngs/visitImg.png")`}}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20 flex flex-col  justify-between gap-10">
        
            <h2 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-geist text-white leading-[110%]">
                Visit us at GRF Today
            </h2>

        <div className=" w-full flex flex-col md:flex-row items-start gap-8">
           <p className="text-white/90 text-lg md:text-xl font-geist leading-[150%]">
              Come see how we raise healthy livestock firsthand. Schedule a visit to our farm or book a meeting to learn more about our services.
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