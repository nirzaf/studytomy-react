import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type MotionSafeImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
>;

interface ResponsiveImageProps extends MotionSafeImageProps {
  src: string;
  alt: string;
  className?: string;
  lowQualitySrc?: string;
  sizes?: string;
  priority?: boolean;
  aspectRatio?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  lowQualitySrc,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  aspectRatio = '4/3',
  width,
  height,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc || src);
  const [hasError, setHasError] = useState(false);

  // Generate WebP and responsive versions
  const generateResponsiveSrc = (originalSrc: string) => {
    // Check if it's an ImageKit URL
    if (originalSrc.includes('ik.imagekit.io')) {
      return {
        webp: `${originalSrc.split('?')[0]}?tr=f-webp,q-80`,
        small: `${originalSrc.split('?')[0]}?tr=w-400,h-300,f-webp,q-80`,
        medium: `${originalSrc.split('?')[0]}?tr=w-800,h-600,f-webp,q-80`,
        large: `${originalSrc.split('?')[0]}?tr=w-1200,h-900,f-webp,q-80`,
      };
    }
    return {
      webp: originalSrc,
      small: originalSrc,
      medium: originalSrc,
      large: originalSrc,
    };
  };

  const responsiveSrcs = generateResponsiveSrc(src);

  useEffect(() => {
    if (!priority) {
      // Preload the high-quality image
      const img = new Image();
      img.src = responsiveSrcs.webp;
      img.onload = () => {
        setCurrentSrc(responsiveSrcs.webp);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setHasError(true);
        setCurrentSrc(src); // Fallback to original
        setIsLoaded(true);
      };
    } else {
      setCurrentSrc(responsiveSrcs.webp);
      setIsLoaded(true);
    }
  }, [src, priority, responsiveSrcs.webp]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setCurrentSrc(src); // Fallback to original
    }
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSrc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <picture>
            {/* WebP sources for modern browsers */}
            <source
              srcSet={`
              ${responsiveSrcs.small} 400w,
              ${responsiveSrcs.medium} 800w,
              ${responsiveSrcs.large} 1200w
            `}
              sizes={sizes}
              type="image/webp"
            />
            
            {/* Fallback for browsers that don't support WebP */}
            <img
              src={currentSrc}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              className={`w-full h-full object-cover ${!isLoaded ? 'blur-sm scale-105' : ''}`}
              width={width}
              height={height}
              onError={handleError}
              {...props}
            />
          </picture>
        </motion.div>
      </AnimatePresence>
      
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default ResponsiveImage;
