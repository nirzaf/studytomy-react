import { useEffect, useState } from 'react';

const Career = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-center bg-gray-100 bg-opacity-50 z-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      )}
      <section id="why-choose-us" className="mt-12">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <iframe
              src="https://baserow.io/form/9TGwYrZSkDNQ1591Aom8mQ8Ku4lxkot5aNKnAGkppFo"
              className={`w-full h-[4200px] border-0 ${isLoading ? 'opacity-0' : ''}`}
              title="Career Application Form"
              onLoad={handleIframeLoad}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;