import { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Studytomy Terms of Use</h1>
      <p className="text-gray-600 mb-8">Last updated: 02 June 2024</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Agreement to Our Legal Terms</h2>
        <p className="text-gray-700 mb-4">
          We are Studytomy ("Company," "we," "us," "our").
        </p>
        <p className="text-gray-700 mb-4">
          We operate <a href="https://studytomy.com" className="text-blue-600 hover:underline">studytomy.com</a>, 
          as well as any other related products and services that refer or link to these legal terms 
          (collectively, the "Services").
        </p>
        <p className="text-gray-700 mb-4">
          You can contact us by email at info@studytomy.com or by mail to 2202/4 Kurringal Court, 
          Fannie Bay, NT, 0820, Australia.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
        <nav className="space-y-2">
          {[
            { id: 'services', title: '1. OUR SERVICES' },
            { id: 'intellectual-property', title: '2. INTELLECTUAL PROPERTY RIGHTS' },
            { id: 'user-representations', title: '3. USER REPRESENTATIONS' },
            { id: 'prohibited-activities', title: '4. PROHIBITED ACTIVITIES' },
            { id: 'user-generated', title: '5. USER GENERATED CONTRIBUTIONS' },
            { id: 'contribution-license', title: '6. CONTRIBUTION LICENSE' },
            { id: 'services-management', title: '7. SERVICES MANAGEMENT' },
            { id: 'term-termination', title: '8. TERM AND TERMINATION' },
            { id: 'modifications', title: '9. MODIFICATIONS AND INTERRUPTIONS' },
            { id: 'governing-law', title: '10. GOVERNING LAW' },
            { id: 'dispute-resolution', title: '11. DISPUTE RESOLUTION' },
            { id: 'corrections', title: '12. CORRECTIONS' },
            { id: 'disclaimer', title: '13. DISCLAIMER' },
            { id: 'limitations', title: '14. LIMITATIONS OF LIABILITY' },
            { id: 'indemnification', title: '15. INDEMNIFICATION' },
            { id: 'user-data', title: '16. USER DATA' },
            { id: 'electronic-communications', title: '17. ELECTRONIC COMMUNICATIONS' },
            { id: 'miscellaneous', title: '18. MISCELLANEOUS' },
            { id: 'contact', title: '19. CONTACT US' },
          ].map(({ id, title }) => (
            <a
              key={id}
              href={`#${id}`}
              className="block text-blue-600 hover:underline"
            >
              {title}
            </a>
          ))}
        </nav>
      </section>

      {/* Services Section */}
      <section id="services" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. OUR SERVICES</h2>
        <p className="text-gray-700 mb-4">
          The information provided when using the Services is not intended for distribution to or use by any person or entity 
          in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would 
          subject us to any registration requirement within such jurisdiction or country.
        </p>
      </section>

      {/* Intellectual Property Section */}
      <section id="intellectual-property" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. INTELLECTUAL PROPERTY RIGHTS</h2>
        <h3 className="text-xl font-medium mb-3">Our intellectual property</h3>
        <p className="text-gray-700 mb-4">
          We are the owner or the licensee of all intellectual property rights in our Services, including all source code, 
          databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services 
          (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
        </p>
      </section>

      {/* Additional sections following the same pattern... */}

      {/* Contact Section */}
      <section id="contact" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">19. CONTACT US</h2>
        <p className="text-gray-700 mb-2">
          In order to resolve a complaint regarding the Services or to receive further information regarding use of the 
          Services, please contact us at:
        </p>
        <div className="text-gray-700 space-y-2">
          <p>2202/4 Kurringal Court, Fannie Bay, NT, 0820, Australia</p>
          <p>+61461367702</p>
          <p>info@studytomy.com</p>
        </div>
      </section>
    </div>
  );
};

export default Terms; 