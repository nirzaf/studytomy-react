import { useEffect } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const BookTrial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Load HubSpot script
    const script = document.createElement('script');
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    document.head.appendChild(script);

    // Create form after script loads
    script.addEventListener('load', () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: "eu1",
          portalId: "139752450",
          formId: "3d7bcd4c-0301-4e18-9818-99994fa2dab3",
          target: "#hubspotForm"
        });
      }
    });

    // Cleanup
    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Request your free trial</h2>
        <div className="w-full max-w-2xl mx-auto">
          <div id="hubspotForm" className="bg-white rounded-lg shadow-sm p-6">
            {/* HubSpot form will be rendered here */}
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </section>
  );
};

export default BookTrial; 