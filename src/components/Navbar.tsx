import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

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
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Link 
                to="/book-trial" 
                className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg transform transition-all duration-300 shadow-lg hover:shadow-orange-500/50 overflow-hidden group"
              >
                <span className="absolute right-0 w-12 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-96 ease"></span>
                <BookOpen className="w-5 h-5 animate-bounce-subtle" />
                <span className="relative">Book Free Trial</span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-1 h-1 bg-white rounded-full animate-sparkle-1"></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-sparkle-2"></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-sparkle-3"></div>
                </div>
              </Link>
            </motion.div>
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