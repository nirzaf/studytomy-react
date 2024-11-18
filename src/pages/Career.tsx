import { useEffect } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
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
      </section>
      <WhatsAppButton />
    </div>
  );
};

export default Career; 