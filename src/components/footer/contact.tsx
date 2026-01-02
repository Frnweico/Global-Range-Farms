import Link from 'next/link';

const ContactUs = () => {
  return (
    <section className='bg-white w-full' id='contact-us'>
      <div className='w-[90%] mx-auto'>
      <div className='hidden md:grid grid-cols-1 md:grid-cols-[40%_60%] pt-8 pb-16  w-full min-h-[50vh] justify-between'>
        <div className=' flex flex-col justify-between w-[70%]'>
          <div className='items-start'>
            <p className='text-[#0E0E0E] font-medium text-sm md:text-[18px] lg:text-[20px]  tracking-[-4%] uppercase font-barlow leading-[140%]'>// Contact Us</p>
            <h3 className="text-5xl md:text-6xl lg:text-[76px] leading-[106%] tracking-[-3%] text-[#0C1515] font-geist font-medium">Let's talk</h3>
          </div>
          <div className='items-end flex justify-between gap-6 text-[#0E0E0E] text-sm leading-[150%] tracking-[-1%] font-geist '>
            <Link href={"https://www.instagram.com/globalrangefarms/"} target='_blank' className='no-underline hover:underline transition-all duration-300'>/INSTAGRAM</Link>
            <Link href={"https://www.facebook.com/share/1FCc4ijjLe/?mibextid=wwXIfr"} target='_blank' className='no-underline hover:underline transition-all duration-300'>/FACEBOOK</Link>
            <Link href={"https://www.youtube.com/@GlobalRangeFarms"} target='_blank' className='no-underline hover:underline transition-all duration-300'>/YOUTUBE</Link>
          </div>
        </div>
        <div className='w-[85%] grid grid-cols-1 md:grid-cols-[45%_55%] ml-auto'>
          <div className='w-full flex flex-col justify-between'>
            <div className="items-start">
              <p className='text-[#0E0E0E] text-sm   tracking-[-1%] leading-[150%] uppercase font-geist'>CONTACT US</p>
              <div className='flex flex-col gap-1'>
                <Link
                  href="tel:+2348034066000"
                  className='text-[#0C1515] font-medium text-lg md:text-[22px] lg:text-[26px] leading-[150%] underline hover:no-underline transition-all font-geist'
                >
                  +234 803 406 6000
                </Link>
                <Link
                  href="https://wa.link/gobmim"
                  target='_blank'
                  className='text-[#0C1515] font-medium text-lg md:text-[22px] lg:text-[26px] leading-[150%] underline hover:no-underline transition-all font-geist'
                >
                  +234 803 093 3046
                </Link>
              </div>
            </div>
            <div className='items-end font-geist text-sm leading-[150%] tracking-[-1%] text-[#0C1515]'>
              <p>/ KARA MARKET</p>
              <p>OPIC, Lagos-Ibadan Expressway,<br /> Isheri, Ogun State.</p>
            </div>
          </div>
          <div className='w-full flex flex-col justify-between ml-auto'>
            <div className="items-start">
              <p className='text-[#0E0E0E] text-sm   tracking-[-1%] leading-[150%] uppercase font-geist'>EMAIL US</p>
              <Link
                href="mailto:info@globalrangefarms.com.ng"
                className='text-[#0C1515] font-medium text-lg md:text-[22px] lg:text-[26px] leading-[150%] underline hover:no-underline transition-all break-all font-geist'
              >
                info@globalrangefarms.com.ng
              </Link>
            </div>
            <div className='items-end font-geist text-sm leading-[150%] tracking-[-1%] text-[#0C1515]'>
              <p>/ RANCH ADDRESS</p>
              <p>Logbara, directly behind Pepsi Soccer Academy, After International Breweries, Along Shagamu-Abeokuta Road.</p>
            </div>
          </div>
        </div>
      </div>
      </div>

{/* mobile  */}
      <div className='flex flex-col md:hidden py-12 gap-10 w-[85%] mx-auto'>
        
        <div>
          <p className='text-[#0E0E0E] font-medium text-xl tracking-[-4%] uppercase font-barlow leading-[140%]opacity-80'>
            // Contact Us
          </p>
          <h3 className="text-[64px] leading-[106%] tracking-[-3%] text-[#0C1515] font-geist font-medium">
            Let's talk
          </h3>
        </div>

        <div className="flex flex-col gap-2">
            <p className='text-[#0E0E0E] text-sm uppercase font-geist tracking-[-1%] opacity-80'>
                CONTACT
            </p>
            <div className='flex flex-col gap-1'>
                <Link href="tel:+2348034066000" className='text-[#0C1515] font-medium text-xl underline leading-[150%] tracking-[-1%] font-geist'>
                    +234 803 4066 000
                </Link>
                <Link href="https://wa.link/gobmim" target='_blank' className='text-[#0C1515] font-medium text-xl underline leading-[150%] tracking-[-1%] font-geist'>
                    +234 803 093 3046
                </Link>
            </div>
        </div>

        {/* 3. Email */}
        <div className="flex flex-col gap-2">
            <p className='text-[#0E0E0E] text-sm uppercase font-geist tracking-[-1%] opacity-80'>
                EMAIL US
            </p>
            <Link href="mailto:info@globalrangefarms.com.ng" className='text-[#0C1515] font-medium text-xl underline leading-[150%] tracking-[-1%] wrap-break font-geist'>
                info@globalrangefarms.com.ng
            </Link>
        </div>

         <div className='flex gap-6 text-[#0E0E0E] text-sm leading-[150%] tracking-[-1%] font-geist uppercase'>
            <Link href={"https://www.instagram.com/globalrangefarms/"} target='_blank'>/INSTAGRAM</Link>
            <Link href={"https://www.facebook.com/share/1FCc4ijjLe/?mibextid=wwXIfr"} target='_blank'>/FACEBOOK</Link>
            <Link href={"https://www.youtube.com/@GlobalRangeFarms"} target='_blank'>/YOUTUBE</Link>
        </div>

<div className='flex flex-col gap-4'>
        {/* 4. Kara Market */}
        <div className="flex flex-col gap-1">
            <p className='text-[#0E0E0E] text-sm font-geist tracking-[-1%] leading-[150%]'>
                / KARA MARKET
            </p>
            <p className='text-[#0E0E0E] text-sm  font-geist tracking-[-1%] leading-[150%]'>
                OPIC, Lagos-Ibadan Expressway, <br/> Isheri, Ogun State.
            </p>
        </div>

        {/* 5. Ranch Address */}
        <div className="flex flex-col gap-1">
            <p className='text-[#0E0E0E] text-sm font-geist tracking-[-1%] leading-[150%]'>
                / RANCH ADDRESS
            </p>
            <p className='text-[#0E0E0E] text-sm font-geist tracking-[-1%] leading-[150%]'>
                Logbara, directly behind Pepsi Soccer <br/> Academy, After International Breweries, <br/> Along Shagamu-Abeokuta Road
            </p>
        </div>
</div>

      </div>

    </section>
  )
}

export default ContactUs;