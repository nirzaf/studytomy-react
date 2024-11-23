import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
          <Phone className="w-6 h-6 text-orange-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Phone</h3>
        <p className="text-gray-600">
          <a href="tel:+61461367702" className="hover:text-orange-600">
            +61 461 367 702
          </a>
        </p>
      </div>

      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
          <Mail className="w-6 h-6 text-orange-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Email</h3>
        <p className="text-gray-600">
          <a href="mailto:info@studytomy.com" className="hover:text-orange-600">
            info@studytomy.com
          </a>
        </p>
      </div>

      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
          <MapPin className="w-6 h-6 text-orange-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Location</h3>
        <p className="text-gray-600">Melbourne, Australia</p>
      </div>
    </div>
  );
};

export default ContactInfo;
