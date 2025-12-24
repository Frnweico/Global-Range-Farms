import Link from 'next/link';
import React from 'react'

const ContactUs = () => {
  return (
    <section className='bg-white grid grid-cols-1 md:grid-cols-2 py-4 px-8'>
      <div className='w-1/2 flex flex-col justify-between'>
        <div className='items-start'>
        <p>// CONTACT US</p>
        <h3>Let's talk</h3>
        </div>
        <div className='items-end'>
            <Link href={""}>/FACEBOOK</Link>
            <Link href={""}>/INSTAGRAM</Link>
            <Link href={""}>/YOUTUBE</Link>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 border'>
      <div className='w-full flex flex-col justify-between'>
      <div className = "items-start">
      <p>CONTACT US</p>
     <Link 
                href="tel:+2348034066000" 
                className='text-black font-bold text-lg underline hover:no-underline transition-all'
            >
                +234 803 406 6000
            </Link>
            <Link 
                href="tel:+2348030933046" 
                className='text-black font-bold text-lg underline hover:no-underline transition-all'
            >
                +234 803 093 3046
            </Link>
      </div>
      <div className='items-end'>
        <p>/ KARA MARKET</p>
        <p>OPIC, Lagos-Ibadan Expressway, Isheri, Ogun State.</p>
      </div>
      <div>

      </div>
      </div>
      <div className='w-full flex flex-col justify-between ml-auto'>
      <div className = "items-start">
      <p>EMAIL US</p>
      <Link 
                href="mailto:info@globalrangefarms.com.ng" 
                className='text-black font-bold text-lg underline hover:no-underline transition-all break-all'
            >
                info@globalrangefarms.com.ng
            </Link>
      </div>
      <div className='items-end'>
        <p>/ RANCH ADDRESS</p>
        <p>Logbara, directly behind Pepsi Soccer Academy, After International Breweries, Along Shagamu-Abeokuta Road</p>
      </div>
      </div>
      </div>
    </section>
  )
}

export default ContactUs
