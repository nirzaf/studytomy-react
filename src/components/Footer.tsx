import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 min-h-[120px] relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2 text-white">
          <p className="min-h-[24px]">
            <Link to="/consent-preferences" className="hover:text-blue-400 transition-colors duration-200">
              Manage Cookie Preferences
            </Link>
          </p>
          <p className="min-h-[24px]">
            <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </Link>
          </p>
          <p className="min-h-[24px] flex items-center justify-center gap-2">
            Powered by{' '}
            <img 
              src="https://ik.imagekit.io/quadrate/assets/img/QTS-logo-mini.png?updatedAt=1749668943695" 
              alt="QTS Logo" 
              className="w-6 h-6 inline-block"
            />
            <a
              href="https://quadrate.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Quadrate TechSolutions
            </a>
          </p>
        </div>
      </div>
      <WhatsAppButton />
    </footer>
  );
};

export default Footer;