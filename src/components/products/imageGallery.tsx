import Image from 'next/image';

const ImageGallery = () => {
  return (
    <section className=' bg-white'>

      {/* desktop (Unchanged) */}
      <div className="py-16 md:flex-row justify-center items-start gap-3 w-[93%] mx-auto hidden md:flex">
        <div className='flex flex-col gap-2 justify-between'>
          <Image src={'/images/pngs/gallery1.png'} alt='goats' className='fill' width={213} height={434} />
          <Image src={'/images/pngs/gallery2.png'} alt='rams' width={213} height={212} />
        </div>
        <div className='flex flex-col gap-2 justify-between'>
          <div className='flex items-start gap-2 justify-between'>
            <Image src={'/images/pngs/gallery3.png'} alt='sheep' width={213} height={212} />
            <Image src={'/images/pngs/gallery5.png'} alt='men' width={325} height={212} />
          </div>
          <div className='flex gap-2 justify-between'>
            <Image src={'/images/pngs/gallery4.png'} alt='rams' width={326} height={437} />
            <div className='flex flex-col gap-2 justify-between'>
              <Image src={'/images/pngs/gallery6.png'} alt='dog' width={214} height={210} />
              <Image src={'/images/pngs/gallery7.png'} alt='men' width={214} height={210} />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 justify-between'>
          <div className='flex gap-2 justify-between'>
            <Image src={'/images/pngs/gallery8.png'} alt='sheep' width={445} height={323} />
            <Image src={'/images/pngs/gallery11.png'} alt='goat' width={95} height={323} />
          </div>
          <div className='flex gap-2 justify-between'>
            <Image src={'/images/pngs/gallery9.png'} alt='sheep' width={213} height={322} />
            <Image src={'/images/pngs/gallery10.png'} alt='rams' width={326} height={315} />
          </div>
        </div>
      </div>

      {/* mobile (Fixed Layout) */}
      <div className='flex flex-col gap-2 md:hidden py-12 w-[90%] mx-auto'>
        
        {/* ROW 1 */}
        <div className='flex gap-2 w-full'>
          <div className='flex flex-col gap-2 flex-1'>
            <Image 
                src={'/images/pngs/gallery1.png'} 
                alt='goats' 
                width={183} height={311}
                className='w-full h-auto object-cover' 
            />
            <Image 
                src={'/images/pngs/gallery2.png'} 
                alt='rams' 
                width={183} height={151}
                className='w-full h-auto object-cover' 
            />
          </div>
          
          <div className='flex flex-col gap-2 flex-1'>
            <Image 
                src={'/images/pngs/gallery3.png'} 
                alt='sheep' 
                width={220} height={152}
                className='w-full h-auto object-cover' 
            />
            <Image 
                src={'/images/pngs/gallery4.png'} 
                alt='men' 
                width={220} height={321} 
                className='w-full h-full object-cover' 
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className='flex gap-2 w-full'>
           {/* Left Column */}
          <div className='flex flex-col gap-2 w-[60%]'>
            <Image 
                src={'/images/pngs/gallery5.png'} 
                alt='men' 
                width={227} height={190}
                className='w-full h-auto object-cover' 
            />
            <Image 
                src={'/images/pngs/gallery7.png'} 
                alt='men' 
                width={227} height={199} 
                className='w-full h-full object-cover'
            />
          </div>

           {/* Right Column */}
          <div className='flex flex-col gap-2 w-[40%]'>
            <Image 
                src={'/images/pngs/gallery11Mobile.png'} 
                alt='leaves' 
                width={181} height={200} 
                className='w-full h-auto object-cover'
            />
            <Image 
                src={'/images/pngs/gallery6.png'} 
                alt='dog' 
                width={181} height={106}
                className='w-full h-auto object-cover'
            />
          </div>
        </div>

        {/* ROW 3 (Stacked Full Width) */}
        <div className='flex flex-col gap-2 w-full'>
          <Image 
            src={'/images/pngs/gallery10Mobile.png'} 
            alt='rams' 
            width={350} height={121} 
            className='w-full h-auto object-cover'
          />
          <Image 
            src={'/images/pngs/gallery8.png'} 
            alt='sheep' 
            width={350} height={254} 
            className='w-full h-auto object-cover'
          />
        </div>

      </div>
    </section>
  );
};

export default ImageGallery;