import { useEffect, useState } from 'react';

interface LazyScriptProps {
  src: string;
  strategy?: 'afterInteractive' | 'lazyOnload' | 'worker';
  onLoad?: () => void;
  onError?: () => void;
  defer?: boolean;
  async?: boolean;
}

const LazyScript: React.FC<LazyScriptProps> = ({
  src,
  strategy = 'afterInteractive',
  onLoad,
  onError,
  defer = true,
  async = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      setIsLoaded(true);
      return;
    }

    const loadScript = () => {
      const script = document.createElement('script');
      script.src = src;
      script.async = async;
      script.defer = defer;

      script.onload = () => {
        setIsLoaded(true);
        onLoad?.();
      };

      script.onerror = () => {
        setHasError(true);
        onError?.();
      };

      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    };

    let cleanup: (() => void) | undefined;

    switch (strategy) {
      case 'afterInteractive':
        // Load after the page becomes interactive
        if (document.readyState === 'complete') {
          cleanup = loadScript();
        } else {
          const handleLoad = () => {
            cleanup = loadScript();
            window.removeEventListener('load', handleLoad);
          };
          window.addEventListener('load', handleLoad);
        }
        break;

      case 'lazyOnload':
        // Load after a delay or user interaction
        const timer = setTimeout(() => {
          cleanup = loadScript();
        }, 2000);

        const handleInteraction = () => {
          clearTimeout(timer);
          cleanup = loadScript();
          ['mousedown', 'touchstart', 'keydown', 'scroll'].forEach(event => {
            document.removeEventListener(event, handleInteraction);
          });
        };

        ['mousedown', 'touchstart', 'keydown', 'scroll'].forEach(event => {
          document.addEventListener(event, handleInteraction, { once: true });
        });
        break;

      case 'worker':
        // Load in a web worker if supported
        if ('Worker' in window) {
          try {
            const workerScript = `
              self.addEventListener('message', function(e) {
                if (e.data.type === 'LOAD_SCRIPT') {
                  importScripts(e.data.src);
                  self.postMessage({ type: 'SCRIPT_LOADED' });
                }
              });
            `;
            const blob = new Blob([workerScript], { type: 'application/javascript' });
            const worker = new Worker(URL.createObjectURL(blob));
            
            worker.postMessage({ type: 'LOAD_SCRIPT', src });
            worker.onmessage = () => {
              setIsLoaded(true);
              onLoad?.();
              worker.terminate();
            };
          } catch (error) {
            // Fallback to regular loading
            cleanup = loadScript();
          }
        } else {
          cleanup = loadScript();
        }
        break;

      default:
        cleanup = loadScript();
    }

    return cleanup;
  }, [src, strategy, onLoad, onError, async, defer]);

  return null; // This component doesn't render anything
};

export default LazyScript;
