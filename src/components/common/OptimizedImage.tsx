import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type MotionSafeImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
>;

interface OptimizedImageProps extends MotionSafeImageProps {
  src: string;
  alt: string;
  className?: string;
  lowQualitySrc?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  lowQualitySrc,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc || src);

  useEffect(() => {
    // Preload the high-quality image
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSrc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={currentSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover ${!isLoaded ? 'blur-sm scale-105' : ''}`}
            {...props}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OptimizedImage;
