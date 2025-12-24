import React from 'react';
import SecondaryButton from '../secondaryButton/page';

interface Product {
  name: string;
  imageUrl: string;
  description: string;
}

const products: Product[] = [
  {
    name: 'Goats',
    imageUrl: '/images/pngs/goat.png',
    description: "Strong, clean, and full of energy."
  },
  {
    name: 'Rams',
    imageUrl: '/images/pngs/ram.png',
    description: "Healthy and perfect for festivals or gifting."
  },
  {
    name: 'Cows',
    imageUrl: '/images/pngs/cow.png',
    description: "Big, well-fed, and great for large gatherings or meat supply."
  },
  {
    name: 'Poultry',
    imageUrl: '/images/pngs/poultry.png',
    description: "Large, nutritious eggs and healthy, well-fed chickens."
  },
]

const OurProducts: React.FC = () => {
  return (
    <section className='bg-white px-6 py-16 flex flex-col gap-12 w-full'>
      
      <div className='flex flex-col gap-4'>
        <div className='text-center'>
          <p className="text-[#0E0E0E] font-regular text-base md:text-[20px] tracking-[-4%] leading-[140%] uppercase font-barlow">// The Animals</p>
          <h3 className="text-3xl md:text-[36px] lg:text-[42px]font-regular text-[#0E0E0E] mt-2 leading-[124%] tracking-[-4%] font-barlow">Our Top-grade Livestock</h3>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-6'>
          <p className="text-[#0E0E0E] leading-[142%] tracking-[-2%] text-base font-barlow w-[33%]">
            We offer well-bred, high-quality livestock for all your needs, from family occasions to festive celebrations.
          </p>
          <div className="flex flex-wrap gap-4">
            <SecondaryButton text='View Our Products' className='font-medium text-base leading-[150%] tracking-[-1%]' />
            <SecondaryButton text='Schedule A Visit' className='font-medium text-base leading-[150%] tracking-[-1%]' />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
        {products.map((product, index) => (
          <div 
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
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurProducts;