import { useEffect } from 'react';

const HubSpotForm = () => {
  useEffect(() => {
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
    <div className="w-full max-w-2xl mx-auto">
      <div id="hubspotForm" className="bg-white rounded-lg shadow-sm p-6 min-h-[600px] relative">
        {/* Loading placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-orange-500 rounded-full animate-spin" />
        </div>
        {/* HubSpot form will be rendered here */}
      </div>
    </div>
  );
};

export default HubSpotForm;
