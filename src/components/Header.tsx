import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, GraduationCap } from 'lucide-react';

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

  const BookTrialButton = () => (
    <Link 
      to="/book-trial"
      className="group relative inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-xl shadow-2xl transition-all duration-300 ease-out hover:scale-105 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 w-full h-full transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 animate-gradient"></div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 w-full h-full">
        <span className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-float1"></span>
        <span className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-float2"></span>
        <span className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white rounded-full animate-float3"></span>
      </div>

      {/* Button content */}
      <div className="relative flex items-center gap-2 px-2">
        <BookOpen className="w-5 h-5 transition-all duration-300 group-hover:rotate-12" />
        <span className="relative">
          Book Free Trial
          <GraduationCap className="absolute -top-3 -right-2 w-3 h-3 text-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
          <Sparkles className="absolute -bottom-3 -right-1 w-3 h-3 text-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-x-1" />
        </span>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 transition-all duration-1000 group-hover:translate-x-full">
        <div className="absolute skew-x-12 w-20 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    </Link>
  );

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
            <BookTrialButton />
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
                  <BookTrialButton />
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