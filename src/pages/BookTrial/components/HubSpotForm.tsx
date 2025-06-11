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
          portalId: "your-portal-id",
          formId: "your-form-id",
          target: "#hubspot-form"
        });
      }
    });
  }, []);

  return (
    <div className="relative min-h-[400px]">
      {/* Loading placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-orange-500 rounded-full animate-spin" />
      </div>
      {/* HubSpot form will be rendered here */}
      <div id="hubspot-form"></div>
    </div>
  );
};

export default HubSpotForm;
