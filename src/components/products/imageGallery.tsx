import Image from 'next/image';

const galleryItems = [
  // 1. Tall Left
  {
    src: '/images/pngs/gallery1.png',
    alt: 'Gallery image 1',
    desktopClass: 'md:col-span-1 md:row-span-2',
  },
  // 2. Wide Top Middle
  {
    src: '/images/pngs/gallery2.png',
    alt: 'Gallery image 2',
    desktopClass: 'md:col-span-2 md:row-span-1',
  },
  // 3. Tall Right
  {
    src: '/images/pngs/gallery3.png',
    alt: 'Gallery image 3',
    desktopClass: 'md:col-span-1 md:row-span-2',
  },
  // 4. Standard Middle Left
  {
    src: '/images/pngs/gallery4.png',
    alt: 'Gallery image 4',
    desktopClass: 'md:col-span-1 md:row-span-1',
  },
  // 5. Tall Center
  {
    src: '/images/pngs/gallery5.png',
    alt: 'Gallery image 5',
    desktopClass: 'md:col-span-1 md:row-span-2',
  },
  // 6. Wide Middle Right
  {
    src: '/images/pngs/gallery6.png',
    alt: 'Gallery image 6',
    desktopClass: 'md:col-span-2 md:row-span-1',
  },
  // 7. Wide Center
  {
    src: '/images/pngs/gallery7.png',
    alt: 'Gallery image 7',
    desktopClass: 'md:col-span-2 md:row-span-1',
  },
  // 8. Standard Center Left
  {
    src: '/images/pngs/gallery8.png',
    alt: 'Gallery image 8',
    desktopClass: 'md:col-span-1 md:row-span-1',
  },
  // 9. Tall Center Right
  {
    src: '/images/pngs/gallery9.png',
    alt: 'Gallery image 9',
    desktopClass: 'md:col-span-1 md:row-span-2',
  },
  // 10. Wide Bottom Left
  {
    src: '/images/pngs/gallery10.png',
    alt: 'Gallery image 10',
    desktopClass: 'md:col-span-2 md:row-span-1',
  },
  // 11. Wide Bottom Right
  {
    src: '/images/pngs/gallery11.png',
    alt: 'Gallery image 11',
    desktopClass: 'md:col-span-2 md:row-span-1',
  },
];

const ImageGallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[200px] md:[grid-auto-flow:row_dense]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative w-full h-full min-h-[250px] md:min-h-0 rounded-lg overflow-hidden group ${item.desktopClass}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;