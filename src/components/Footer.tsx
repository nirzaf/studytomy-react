import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto">
        <div className="text-center">
          <p>
            <Link to="/consent-preferences" className="hover:text-primary">
              Manage Cookie Preferences
            </Link>
          </p>
          <p>
            <Link to="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </p>
          <p>
            Powered by{' '}
            <a 
              href="https://quadrate.lk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Quadrate TechSolutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;