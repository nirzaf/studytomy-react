// Image optimization utilities for better performance

export interface ImageTransformOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
  blur?: number;
  progressive?: boolean;
}

export interface ResponsiveImageSizes {
  small: string;
  medium: string;
  large: string;
  xlarge?: string;
}

/**
 * Generate optimized image URLs for ImageKit
 */
export const generateImageKitUrl = (
  originalUrl: string,
  options: ImageTransformOptions = {}
): string => {
  if (!originalUrl.includes('ik.imagekit.io')) {
    return originalUrl;
  }

  const {
    width,
    height,
    quality = 80,
    format = 'webp',
    blur,
    progressive = true,
  } = options;

  const baseUrl = originalUrl.split('?')[0];
  const transformations: string[] = [];

  if (width) transformations.push(`w-${width}`);
  if (height) transformations.push(`h-${height}`);
  if (quality) transformations.push(`q-${quality}`);
  if (format) transformations.push(`f-${format}`);
  if (blur) transformations.push(`bl-${blur}`);
  if (progressive) transformations.push('pr-true');

  const transformString = transformations.join(',');
  return transformString ? `${baseUrl}?tr=${transformString}` : baseUrl;
};

/**
 * Generate responsive image sizes for different breakpoints
 */
export const generateResponsiveImages = (
  originalUrl: string,
  options: Partial<ImageTransformOptions> = {}
): ResponsiveImageSizes => {
  const baseOptions = { quality: 80, format: 'webp' as const, ...options };

  return {
    small: generateImageKitUrl(originalUrl, { ...baseOptions, width: 400 }),
    medium: generateImageKitUrl(originalUrl, { ...baseOptions, width: 800 }),
    large: generateImageKitUrl(originalUrl, { ...baseOptions, width: 1200 }),
    xlarge: generateImageKitUrl(originalUrl, { ...baseOptions, width: 1600 }),
  };
};

/**
 * Generate srcSet string for responsive images
 */
export const generateSrcSet = (
  originalUrl: string,
  options: Partial<ImageTransformOptions> = {}
): string => {
  const sizes = generateResponsiveImages(originalUrl, options);
  
  return [
    `${sizes.small} 400w`,
    `${sizes.medium} 800w`,
    `${sizes.large} 1200w`,
    `${sizes.xlarge} 1600w`,
  ].join(', ');
};

/**
 * Generate low-quality image placeholder (LQIP)
 */
export const generateLQIP = (originalUrl: string): string => {
  return generateImageKitUrl(originalUrl, {
    width: 20,
    quality: 20,
    blur: 10,
    format: 'webp',
  });
};
