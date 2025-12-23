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
    description: "strong, clean, and full of energy."
  },
  {
    name: 'Rams',
    imageUrl: '/images/pngs/ram.png',
    description: "healthy and perfect for festivals or gifting."
  },
  {
    name: 'Cows',
    imageUrl: '/images/pngs/cow.png',
    description: "Big, well-fed, and great for large gatherings or meat supply."
  },
  {
    name: 'Poultry',
    imageUrl: '/images/pngs/poultry.png',
    description: "Large, nutritious eggs and healthy, well-fed chickens"
  },
]

const OurProjects: React.FC = () => {
  return (
    <section className='bg-white px-5 py-10 flex flex-col gap-10 w-full h-screen'>
      <div>
        <p>// THE ANIMALS</p>
        <h3>Our Top-grade Livestock</h3>
      </div>

      <div className='flex flex-col gap-4'>

        <div className='flex justify-between items-center'>
          <p>We offer well-bred, high-quality livestock for all your needs, from family occasions to festive celebrations.</p>
          <div>
            <SecondaryButton text='View Our Products' />
            <SecondaryButton text='Schedule A Visit' />
          </div>
        </div>

        <div className='flex items-center justify-between h-[60vh]'>
          {products.map((product, index) => (
            <div key={index} style={{ backgroundImage: `url(${product.imageUrl})`, backgroundRepeat: 'no-repeat' }} className='h-full'>
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProjects;