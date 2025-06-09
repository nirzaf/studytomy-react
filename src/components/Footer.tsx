import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 min-h-[120px] relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="min-h-[24px]">
            <Link to="/consent-preferences" className="hover:text-primary transition-colors duration-200">
              Manage Cookie Preferences
            </Link>
          </p>
          <p className="min-h-[24px]">
            <Link to="/terms" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
          </p>
          <p className="min-h-[24px]">
            Powered by{' '}
            <a
              href="https://quadrate.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
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