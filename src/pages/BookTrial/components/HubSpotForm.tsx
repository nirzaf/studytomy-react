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
      <div id="hubspotForm" className="bg-white rounded-lg shadow-sm p-6">
        {/* HubSpot form will be rendered here */}
      </div>
    </div>
  );
};

export default HubSpotForm;
