import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto">
        <div className="text-center">
          <p>
            <Link to="/consent" className="hover:text-primary">
              Consent Preferences
            </Link>
          </p>
          <p>
            <Link to="/terms" className="hover:text-primary">
              Terms of Service of
            </Link> Studytomy
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