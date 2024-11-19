import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Subjects', href: '/subjects' },
    { name: 'Homeschool', href: '/homeschool' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">EduConnect</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-orange-500'
                    : 'text-gray-600 hover:text-orange-500'
                } transition`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/book-trial" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
              Book Free Trial
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 ${
                  location.pathname === item.href
                    ? 'text-orange-500'
                    : 'text-gray-600 hover:text-orange-500'
                } transition`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/book-trial" className="w-full text-left px-3 py-2 text-orange-500 font-medium">
              Book Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}