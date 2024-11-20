import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  title: string;
  path: string;
  dropdownItems?: {
    title: string;
    path: string;
    icon?: string;
  }[];
}

const navItems: NavItem[] = [
  { title: 'Home', path: '/' },
  { title: 'About us', path: '/about' },
  {
    title: 'Exam Boards',
    path: '/exam-boards',
    dropdownItems: [
      { title: 'Edexcel', path: '/exam-boards#edexcel', icon: 'fas fa-university' },
      { title: 'Cambridge', path: '/exam-boards#cambridge', icon: 'fas fa-university' },
      { title: 'AQA', path: '/exam-boards#aqa', icon: 'fas fa-university' },
      { title: 'OCR A & OCR B', path: '/exam-boards#ocr', icon: 'fas fa-university' },
      { title: 'IB', path: '/exam-boards#ib', icon: 'fas fa-university' },
      { title: 'OSSD', path: '/exam-boards#ossd', icon: 'fas fa-university' },
      { title: 'VCE', path: '/exam-boards#vce', icon: 'fas fa-university' },
    ],
  },
  { title: 'Home School', path: '/home-school' },
  {
    title: 'Career',
    path: '/career',
    dropdownItems: [
      { title: 'Join with us', path: '/join-studytomy', icon: 'fas fa-users' },
    ],
  },
  {
    title: 'Contact us',
    path: '/contact',
    dropdownItems: [
      { title: 'WhatsApp', path: 'https://wa.me/61461367702', icon: 'fab fa-whatsapp' },
      { title: 'Chat', path: '#', icon: 'fas fa-comments' },
      { title: 'Mobile', path: 'tel:+61461367702', icon: 'fas fa-phone' },
      { title: 'Email', path: 'mailto:info@studytomy.com', icon: 'far fa-envelope' },
      { title: 'Web Form', path: '/submission-form', icon: 'fas fa-globe' },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'text-orange-500'
                      : 'text-gray-600 hover:text-orange-500'
                  } transition py-2 inline-block`}
                >
                  {item.title}
                </Link>

                {/* Updated Dropdown menu */}
                {item.dropdownItems && (
                  <div 
                    className={`absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-200 transform
                      ${hoveredItem === item.title 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-1'
                      }`}
                    style={{ zIndex: 100 }}
                  >
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.title}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-150"
                        onClick={() => setHoveredItem(null)}
                      >
                        {dropdownItem.icon && (
                          <i className={`${dropdownItem.icon} mr-2`}></i>
                        )}
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to={item.path}
                  className={`block px-3 py-2 ${
                    location.pathname === item.path
                      ? 'text-orange-500'
                      : 'text-gray-600 hover:text-orange-500'
                  } transition`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>

                {/* Dropdown menu */}
                {item.dropdownItems && hoveredItem === item.title && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.title}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {dropdownItem.icon && (
                          <i className={`${dropdownItem.icon} mr-2`}></i>
                        )}
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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