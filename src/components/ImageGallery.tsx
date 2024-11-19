import { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

const originalImages = [
  "https://ik.imagekit.io/quadrate/Studytomy/Creative%20september%204%20.png?updatedAt=1732009510839",
  "https://ik.imagekit.io/quadrate/Studytomy/Creative%204%20october%20%202.png?updatedAt=1732009510276",
  "https://ik.imagekit.io/quadrate/Studytomy/Creative%20september%201%20%202.png?updatedAt=1732009510173",
  "https://ik.imagekit.io/quadrate/Studytomy/2%203.png?updatedAt=1732009509965",
  "https://ik.imagekit.io/quadrate/Studytomy/Creative%202%20october%20%202.png?updatedAt=1732009509718",
  "https://ik.imagekit.io/quadrate/Studytomy/Creative%201%20october%20%202.png?updatedAt=1732009508555"
];

// Create a circular array by duplicating images at the edges
const images = [
  ...originalImages.slice(-2),  // Add last 2 images at the start
  ...originalImages,
  ...originalImages.slice(0, 2)  // Add first 2 images at the end
];

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [, setLoadedImages] = useState<Set<string>>(new Set());
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesPerView, setImagesPerView] = useState(3);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateImagesPerView = useCallback(() => {
    if (!containerRef.current) return;
    
    const containerWidth = containerRef.current.offsetWidth;
    const imageWidth = 400; // Base image width
    const gap = 32; // 8rem (gap-8) converted to pixels
    
    // Calculate how many images can fit with gaps
    const availableWidth = containerWidth - 96; // Subtracting padding (48px on each side)
    const possibleImages = Math.floor((availableWidth + gap) / (imageWidth + gap));
    
    // Limit to between 1 and 3 images
    const newImagesPerView = Math.max(1, Math.min(3, possibleImages));
    setImagesPerView(newImagesPerView);
  }, []);

  // Initial setup and window resize handler
  useEffect(() => {
    updateImagesPerView();
    const handleResize = () => {
      updateImagesPerView();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateImagesPerView]);

  const resetPosition = useCallback(() => {
    setIsTransitioning(true);
    if (currentIndex <= 1) {
      setCurrentIndex(images.length - 4);
    } else if (currentIndex >= images.length - 2) {
      setCurrentIndex(2);
    }
    setIsTransitioning(false);
  }, [currentIndex]);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, src]));
        };
      });
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!isTransitioning) {
      autoScrollRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [currentIndex, isTransitioning]);

  useEffect(() => {
    const transitionEndTimeout = setTimeout(resetPosition, 500);
    return () => clearTimeout(transitionEndTimeout);
  }, [currentIndex, resetPosition]);

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < imagesPerView; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index + 2);
  };

  // Calculate dynamic width based on images per view
  const getImageWidth = () => {
    switch (imagesPerView) {
      case 1:
        return 'w-full max-w-[600px] mx-auto';
      case 2:
        return 'w-[calc(50%-16px)]'; // 50% minus half of the gap
      default:
        return 'w-[calc(33.333%-22px)]'; // 33.333% minus portion of the gap
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#EAE2B7]/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#003049]">
          Our Learning Journey
        </h2>
        
        <div className="relative max-w-[1400px] mx-auto">
          {/* Image Container with Navigation Space */}
          <div ref={containerRef} className="relative overflow-hidden py-8 px-12 md:px-16">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#FCBF49] p-3 rounded-full shadow-lg transition-all z-20 group"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 text-[#003049] group-hover:text-[#003049]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#FCBF49] p-3 rounded-full shadow-lg transition-all z-20 group"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 text-[#003049] group-hover:text-[#003049]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Images Container */}
            <div className="flex gap-6 md:gap-8">
              <motion.div
                key={currentIndex}
                className="flex gap-6 md:gap-8 w-full"
                initial={{ x: direction > 0 ? 1000 : -1000 }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 1.5
                }}
              >
                {getVisibleImages().map((image, idx) => (
                  <div 
                    key={`${currentIndex}-${idx}`}
                    className={`${getImageWidth()} flex-shrink-0`}
                  >
                    <motion.div 
                      className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {/* Animated Border with Shine Effect */}
                      <div className="absolute inset-0 p-[2px] rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F77F00] via-[#FCBF49] to-[#F77F00] animate-border-slide" />
                        <div className="animate-shine" />
                      </div>
                      
                      {/* Image Container with Inner Shadow */}
                      <div className="absolute inset-[2px] rounded-lg overflow-hidden bg-white">
                        <img
                          src={image}
                          alt={`Gallery image ${((currentIndex + idx - 2) % originalImages.length) + 1}`}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003049]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {originalImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  (currentIndex - 2) % originalImages.length === index
                    ? 'bg-[#F77F00] w-8'
                    : 'bg-[#FCBF49]/30 w-2.5 hover:bg-[#FCBF49]'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
