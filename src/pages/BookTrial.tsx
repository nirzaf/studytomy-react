import { useEffect } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const BookTrial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Request your free trial</h2>
        <div className="w-full">
          <div id="hs_cos_wrapper_form_3d7bcd4c-0301-4e18-9818-99994fa2dab3" className="hs-form-wrapper">
            <script 
              charSet="utf-8" 
              type="text/javascript" 
              src="//js-eu1.hsforms.net/forms/embed/v2.js"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  hbspt.forms.create({
                    region: "eu1",
                    portalId: "139752450",
                    formId: "3d7bcd4c-0301-4e18-9818-99994fa2dab3"
                  });
                `
              }}
            />
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </section>
  );
};

export default BookTrial; 