import { useEffect } from 'react';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="why-choose-us" className="mt-12">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <iframe 
            src="https://baserow.io/form/9TGwYrZSkDNQ1591Aom8mQ8Ku4lxkot5aNKnAGkppFo" 
            className="w-full h-[4200px] border-0"
            title="Career Application Form"
          />
        </div>
      </div>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/61461367702" 
        className="fixed left-5 bottom-5 w-[60px] h-[60px] z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp"
          className="w-full h-full"
        />
      </a>
    </section>
  );
};

export default Career; 