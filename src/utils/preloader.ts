/**
 * Advanced preloading utility for React components and resources
 * Provides intelligent caching and performance optimization
 */

// Types for better type safety
interface PreloadItem {
  name: string;
  loader: () => Promise<any>;
  priority?: 'high' | 'medium' | 'low';
}

interface PreloadOptions {
  delay?: number;
  maxConcurrent?: number;
  useIdleCallback?: boolean;
}

// Global cache for preloaded modules
const moduleCache = new Map<string, any>();
const preloadPromises = new Map<string, Promise<any>>();
let isPreloading = false;

/**
 * Preloads a list of components with configurable options
 */
export const preloadComponents = async (
  components: PreloadItem[],
  options: PreloadOptions = {}
): Promise<void> => {
  if (isPreloading) return;
  isPreloading = true;

  const {
    delay = 100,
    maxConcurrent = 2,
    useIdleCallback = true
  } = options;

  // Sort by priority (high -> medium -> low)
  const sortedComponents = components.sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    const aPriority = priorityOrder[a.priority || 'medium'];
    const bPriority = priorityOrder[b.priority || 'medium'];
    return aPriority - bPriority;
  });

  const preloadQueue = [...sortedComponents];
  const activePromises: Promise<any>[] = [];

  const processNext = async (): Promise<void> => {
    if (preloadQueue.length === 0) {
      await Promise.all(activePromises);
      isPreloading = false;
      console.log('✅ All components preloaded successfully');
      return;
    }

    if (activePromises.length >= maxConcurrent) {
      await Promise.race(activePromises);
      // Remove completed promises
      for (let i = activePromises.length - 1; i >= 0; i--) {
        const promise = activePromises[i];
        if (await isPromiseResolved(promise)) {
          activePromises.splice(i, 1);
        }
      }
    }

    const item = preloadQueue.shift()!;
    const promise = preloadComponent(item, { delay, useIdleCallback });
    activePromises.push(promise);

    // Continue processing
    processNext();
  };

  await processNext();
};

/**
 * Preloads a single component
 */
export const preloadComponent = async (
  item: PreloadItem,
  options: Pick<PreloadOptions, 'delay' | 'useIdleCallback'> = {}
): Promise<void> => {
  const { name, loader } = item;
  const { delay = 100, useIdleCallback = true } = options;

  // Return existing promise if already preloading
  if (preloadPromises.has(name)) {
    return preloadPromises.get(name);
  }

  // Return immediately if already cached
  if (moduleCache.has(name)) {
    return Promise.resolve();
  }

  const preloadPromise = new Promise<void>((resolve, reject) => {
    const executePreload = () => {
      loader()
        .then((module) => {
          moduleCache.set(name, module);
          console.log(`📦 Preloaded: ${name}`);
          resolve();
        })
        .catch((error) => {
          console.warn(`⚠️ Failed to preload ${name}:`, error);
          reject(error);
        })
        .finally(() => {
          preloadPromises.delete(name);
        });
    };

    if (useIdleCallback && 'requestIdleCallback' in window) {
      requestIdleCallback(() => {
        setTimeout(executePreload, delay);
      }, { timeout: 2000 });
    } else {
      setTimeout(executePreload, delay);
    }
  });

  preloadPromises.set(name, preloadPromise);
  return preloadPromise;
};

/**
 * Preloads critical resources like fonts, images, and stylesheets
 */
export const preloadCriticalResources = (): void => {
  const resources = [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
      as: 'style',
      type: 'font'
    }
    // Add more critical resources here
  ];

  resources.forEach(({ href, as, type }) => {
    // Check if already preloaded
    const existing = document.querySelector(`link[href="${href}"]`);
    if (existing) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    
    if (type === 'font') {
      link.crossOrigin = 'anonymous';
    }
    
    link.onload = () => console.log(`🎨 Preloaded resource: ${type}`);
    link.onerror = () => console.warn(`⚠️ Failed to preload resource: ${href}`);
    
    document.head.appendChild(link);
  });
};

/**
 * Preloads images with intersection observer for lazy loading
 */
export const preloadImages = (imageUrls: string[]): void => {
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'image';
    link.onload = () => console.log(`🖼️ Preloaded image: ${url}`);
    document.head.appendChild(link);
  });
};

/**
 * Checks if a promise has been resolved
 */
const isPromiseResolved = async (promise: Promise<any>): Promise<boolean> => {
  try {
    await Promise.race([
      promise,
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 0))
    ]);
    return true;
  } catch {
    return false;
  }
};

/**
 * Gets cached module if available
 */
export const getCachedModule = (name: string): any => {
  return moduleCache.get(name);
};

/**
 * Clears the module cache (useful for development)
 */
export const clearCache = (): void => {
  moduleCache.clear();
  preloadPromises.clear();
  console.log('🧹 Module cache cleared');
};

/**
 * Gets cache statistics
 */
export const getCacheStats = () => {
  return {
    cachedModules: moduleCache.size,
    activePreloads: preloadPromises.size,
    isPreloading
  };
};