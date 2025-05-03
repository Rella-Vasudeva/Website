import React, { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    src: '/images/Gallery/Vermicompost facility.jpeg',
    alt: 'Vermicompost Facility',
    title: 'Our Modern Vermicompost Facility'
  },
  {
    id: 2,
    src: '/images/Gallery/compost production.jpeg',
    alt: 'Compost Production',
    title: 'Compost Production Process'
  },
  {
    id: 3,
    src: '/images/Gallery/Vermi wash.JPG',
    alt: 'Vermi Wash Production',
    title: 'Vermi Wash Production Unit'
  },
  {
    id: 4,
    src: '/images/Gallery/Red wigler worms.jpeg',
    alt: 'Red Wiggler Worms',
    title: 'Our Healthy Red Wiggler Worms'
  },
  {
    id: 5,
    src: '/images/Gallery/Cocopeat production.jpeg',
    alt: 'Cocopeat Production',
    title: 'Cocopeat Processing Unit'
  },
  {
    id: 6,
    src: '/images/Gallery/Neem compost.jpeg',
    alt: 'Neem Compost',
    title: 'Neem Compost Production'
  },
  {
    id: 7,
    src: '/images/Gallery/Results 1.jpeg',
    alt: 'Product Results 1',
    title: 'Successful Results in Farming'
  },
  {
    id: 8,
    src: '/images/Gallery/Results 2.jpeg',
    alt: 'Product Results 2',
    title: 'Improved Crop Yield'
  },
  {
    id: 9,
    src: '/images/Gallery/Transport compost.jpeg',
    alt: 'Transport Compost',
    title: 'Product Transportation & Delivery'
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [isLightboxLoading, setIsLightboxLoading] = useState(false);

  const handleImageError = (imageId: number) => {
    const image = galleryImages.find(img => img.id === imageId);
    console.error(`Failed to load image: ${image?.src}`);
    console.error(`Image details: ID=${imageId}, Alt=${image?.alt}`);
    console.error('Please check if the image exists and the path is correct');
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => ({ ...prev, [imageId]: true }));
    const image = galleryImages.find(img => img.id === imageId);
    console.log(`Successfully loaded image: ${image?.src}`);
  };

  const openLightbox = (imageId: number) => {
    if (!imageErrors[imageId]) {
      setSelectedImage(imageId);
      setIsLightboxLoading(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsLightboxLoading(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 via-white/80 to-primary-50/90" />
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-primary-800 mb-4">
          Our Gallery
        </h2>
        <p className="text-lg text-center text-secondary-700 mb-16 max-w-2xl mx-auto">
          Take a visual journey through our production facilities and see the results of our premium organic products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm"
              onClick={() => !imageErrors[image.id] && openLightbox(image.id)}
            >
              <div className="relative w-full pt-[75%]">
                {!imageErrors[image.id] ? (
                  <>
                    <div className={`
                      absolute inset-0 bg-primary-100 flex items-center justify-center
                      ${loadedImages[image.id] ? 'opacity-0' : 'opacity-100'}
                      transition-opacity duration-300
                    `}>
                      <div className="w-8 h-8 border-4 border-primary-300 border-t-primary-600 rounded-full animate-spin" />
                    </div>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`
                        absolute inset-0 w-full h-full object-cover transform transition-all duration-300
                        ${loadedImages[image.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
                        group-hover:scale-110
                      `}
                      onError={() => handleImageError(image.id)}
                      onLoad={() => handleImageLoad(image.id)}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <p className="text-white text-lg font-medium drop-shadow-lg">
                        {image.title}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center p-4">
                    <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-500 text-center mb-1">Image not available</span>
                    <span className="text-gray-400 text-sm text-center break-all">
                      {image.src.split('/').pop()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl w-full">
            {isLightboxLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.src}
              alt={galleryImages.find(img => img.id === selectedImage)?.alt}
              className={`
                w-full h-auto rounded-lg shadow-2xl transition-opacity duration-300
                ${isLightboxLoading ? 'opacity-0' : 'opacity-100'}
              `}
              onLoad={() => setIsLightboxLoading(false)}
            />
            <p className="absolute bottom-4 left-4 text-white text-xl font-medium bg-black/50 px-4 py-2 rounded-lg">
              {galleryImages.find(img => img.id === selectedImage)?.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 