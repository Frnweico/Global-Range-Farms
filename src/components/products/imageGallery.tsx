import Image from 'next/image';

const ImageGallery = () => {
  return (
    <section className=' bg-white'>

{/* desktop  */}
    <div className="py-16 md:flex-row justify-center items-start gap-3 w-[90%] hidden md:flex">
    <div className='flex flex-col gap-2 justify-between'>
      <Image src={'/images/pngs/gallery1.png'} alt='goats' className='fill' width={213} height={434}/>
      <Image src={'/images/pngs/gallery2.png'} alt='rams' width={213} height={212}/>
    </div>
    <div className='flex flex-col gap-2 justify-between'>
      <div className='flex items-start gap-2 justify-between'>
        <Image src={'/images/pngs/gallery3.png'} alt='sheep' width={213} height={212}/>
        <Image src={'/images/pngs/gallery5.png'} alt='men' width={325} height={212}/>
      </div>
      <div className='flex gap-2 justify-between'>
        <Image src={'/images/pngs/gallery4.png'} alt='rams' width={326} height={437}/>
        <div className='flex flex-col gap-2 justify-between'>
<Image src={'/images/pngs/gallery6.png'} alt='dog' width={214} height={210} />
<Image src={'/images/pngs/gallery7.png'} alt='men' width={214} height={210} />
        </div>
      </div>
    </div>
    <div className='flex flex-col gap-2 justify-between'>
      <div className='flex gap-2 justify-between'>
        <Image src={'/images/pngs/gallery8.png'} alt='sheep' width={445} height={323}/>
        <Image src={'/images/pngs/gallery11.png'} alt='goat' width={95} height={323}/>
        </div>
<div className='flex gap-2 justify-between'>
  <Image src={'/images/pngs/gallery9.png'} alt='sheep' width={213} height={322}/>
  <Image src={'/images/pngs/gallery10.png'} alt='rams' width={326} height={315}/>
</div>
    </div>
    </div>

    {/* mobile  */}
    <div className='flex flex-col gap-3 md:hidden py-12 w-[85%] mx-auto'>
      <div className='flex gap-1 justify-between'>
<div className='flex flex-col gap-2'>
      <Image src={'/images/pngs/gallery1.png'} alt='goats' className='fill' width={183} height={311}/>
      <Image src={'/images/pngs/gallery2.png'} alt='rams' width={183} height={151}/>
    </div>
    <div className='flex flex-col gap-1 justify-between'>
      <Image src={'/images/pngs/gallery3.png'} alt='sheep' width={220} height={152}/>
      <Image src={'/images/pngs/gallery4.png'} alt='men' width={220} height={321} className='h-full'/>
    </div>
      </div>
      <div className='flex gap-2 justify-between'>
        <div className='flex flex-col gap-2 justify-between'>
          <Image src={'/images/pngs/gallery5.png'} alt='men' width={220} height={148}/>
          <Image src={'/images/pngs/gallery7.png'} alt='men' width={220} height={199} className='w-full h-full'/>
        </div>
        <div className='flex flex-col gap-2 justify-between'>
          <Image src={'/images/pngs/gallery11Mobile.png'} alt='leaves' width={181} height={200} />
          <Image src={'/images/pngs/gallery6.png'} alt='dog' width={181} height={106}/>
        </div>
      </div>
      <div className='flex flex-col gap-2 justify-between'>
        <Image src={'/images/pngs/gallery10Mobile.png'} alt='rams' width={350} height={121} className='w-full'/>
        <Image src={'/images/pngs/gallery8.png'} alt='sheep' width={350} height={254} className='w-full'/>
      </div>
    </div>
    </section>
  );
};

export default ImageGallery;