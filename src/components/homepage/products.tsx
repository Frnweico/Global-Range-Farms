import React from 'react';
import SecondaryButton from '../secondaryButton/page';
import Link from 'next/link';

interface Product {
  name: string;
  imageUrl: string;
  description: string;
  link: string;
}

const products: Product[] = [
  {
    name: 'Goats',
    imageUrl: '/images/pngs/goat.png',
    description: "Strong, clean, and full of energy.",
    link: "/products#goats"
  },
  {
    name: 'Rams',
    imageUrl: '/images/pngs/ram.png',
    description: "Healthy and perfect for festivals or gifting.",
    link: "/products#rams"
  },
  {
    name: 'Cows',
    imageUrl: '/images/pngs/cow.png',
    description: "Big, well-fed, and great for large gatherings or meat supply.",
    link: "/products#cows"
  },
  {
    name: 'Poultry',
    imageUrl: '/images/pngs/poultry.png',
    description: "Large, nutritious eggs and healthy, well-fed chickens.",
    link: "/products#poultry"
  },
]

const OurProducts: React.FC = () => {
  return (
    <section className='bg-white px-6 py-16 flex flex-col gap-12 w-full'>
      
      <div className='flex flex-col gap-4 text-center md:text-left w-full'>
        <div className='text-center'>
          <p className="text-[#0E0E0E] font-regular text-base md:text-[20px] tracking-[-4%] leading-[140%] uppercase font-barlow">// The Animals</p>
          <h3 className="text-3xl md:text-[36px] lg:text-[42px]font-regular text-[#0E0E0E] mt-2 leading-[124%] tracking-[-4%] font-barlow">Our Top-grade Livestock</h3>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-6'>
          <p className="text-[#0E0E0E] leading-[142%] tracking-[-2%] text-base font-barlow md:w-[33%]">
            We offer well-bred, high-quality livestock for all your needs, from family occasions to festive celebrations.
          </p>
          <div className="flex flex-wrap gap-4 w-full md:w-auto justify-between">
            <SecondaryButton text='View Our Products' className='font-medium text-base leading-[150%] tracking-[-1%]' href='/products' />
            <SecondaryButton text='Schedule A Visit' className='font-medium text-base leading-[150%] tracking-[-1%]' href="https://wa.link/gobmim" />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
        {products.map((product, index) => (
          <Link href={product.link} 
            key={index} 
            style={{ backgroundImage: `url(${product.imageUrl})`, backgroundPosition: 'top', backgroundSize: 'cover' }} 
            className={`
              w-full 
              aspect-4/5 
              bg-cover bg-center bg-no-repeat 
              rounded-sm overflow-hidden 
            `}
          >
            <div className="h-full w-full flex flex-col justify-end p-6 ">
              <h3 className="text-white text-2xl font-bold uppercase mb-1 font-barlow">
                {product.name}
              </h3>
              <p className="text-gray-200 text-sm leading-snug font-medium font-outfit">
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default OurProducts;