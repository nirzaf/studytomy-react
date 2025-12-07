import React from 'react';
import Script from 'next/script';

const HubSpotForm = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div id="hubspotForm" className="bg-white rounded-lg shadow-sm p-6">
        {/* HubSpot form will be rendered here */}
      </div>
      <Script
        src="//js-eu1.hsforms.net/forms/embed/v2.js"
        strategy="lazyOnload"
        onLoad={() => {
          if ((window as any).hbspt) {
            (window as any).hbspt.forms.create({
              region: "eu1",
              portalId: "139752450",
              formId: "3d7bcd4c-0301-4e18-9818-99994fa2dab3",
              target: "#hubspotForm"
            });
          }
        }}
      />
    </div>
  );
};

export default HubSpotForm;
