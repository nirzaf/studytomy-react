import { useState, useRef, useEffect } from 'react';

interface OptimizedVideoProps {
  src: string;
  alt: string;
  className?: string;
  poster?: string;
  width?: number;
  height?: number;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  alt,
  className = '',
  poster,
  width,
  height,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Convert GIF URLs to video URLs (for ImageKit)
  const getVideoSrc = (originalSrc: string) => {
    if (originalSrc.includes('ik.imagekit.io') && originalSrc.includes('.gif')) {
      // Try to get WebM version first, fallback to MP4
      const baseUrl = originalSrc.split('.gif')[0];
      return {
        webm: `${baseUrl}.webm`,
        mp4: `${baseUrl}.mp4`,
        fallback: originalSrc, // Original GIF as fallback
      };
    }
    return {
      webm: src,
      mp4: src,
      fallback: src,
    };
  };

  const videoSrcs = getVideoSrc(src);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => setIsLoaded(true);
      const handleError = () => setHasError(true);

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  // If video fails to load, show the original GIF
  if (hasError) {
    return (
      <img
        src={videoSrcs.fallback}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        poster={poster}
        width={width}
        height={height}
        aria-label={alt}
      >
        {/* WebM source for better compression */}
        <source src={videoSrcs.webm} type="video/webm" />
        
        {/* MP4 fallback */}
        <source src={videoSrcs.mp4} type="video/mp4" />
        
        {/* Final fallback message */}
        Your browser does not support the video tag.
      </video>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default OptimizedVideo;
