import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About us" },
    { path: "/exam-boards", label: "Exam Boards" },
    { path: "/home-school", label: "Home School" },
    { path: "/career", label: "Career" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book Trial Button */}
          <div className="hidden md:block">
            <Link 
              to="/book-trial"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
            >
              BOOK A FREE TRIAL
            </Link>
          </div>
        </div>

        {/* Mobile Menu (Expanded) */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white shadow-lg overflow-y-auto">
            <div className="max-h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <ul className="px-4 py-2">
                {menuItems.map((item) => (
                  <li key={item.path} className="py-2">
                    <Link 
                      to={item.path} 
                      className="block hover:text-orange-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="py-2">
                  <Link 
                    to="/book-trial"
                    className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    BOOK A FREE TRIAL
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 