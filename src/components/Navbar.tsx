import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, BookOpen, Sparkles, GraduationCap, Phone, Mail, Globe, MessageCircle,
  Building2, Users, MessageSquare, ExternalLink, School
} from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { 
    title: "Home", 
    path: "/" 
  },
  { 
    title: "About us", 
    path: "/about" 
  },
  { 
    title: "Exam Boards", 
    path: "/exam-boards",
    dropdownItems: [
      { title: "Edexcel", path: "/exam-boards#edexcel", icon: <School className="w-5 h-5" /> },
      { title: "Cambridge", path: "/exam-boards#cambridge", icon: <School className="w-5 h-5" /> },
      { title: "AQA", path: "/exam-boards#aqa", icon: <School className="w-5 h-5" /> },
      { title: "OCR A & OCR B", path: "/exam-boards#ocr-a-ocr-b", icon: <School className="w-5 h-5" /> },
      { title: "IB", path: "/exam-boards#ib", icon: <School className="w-5 h-5" /> },
      { title: "OSSD", path: "/exam-boards#ossd", icon: <School className="w-5 h-5" /> },
      { title: "VCE", path: "/exam-boards#vce", icon: <School className="w-5 h-5" /> },
    ]
  },
  { 
    title: "Home School", 
    path: "/home-school" 
  },
  { 
    title: "Career", 
    path: "/career",
    dropdownItems: [
      { title: "Join with us", path: "/join-studytomy", icon: <Users className="w-5 h-5" />, external: true }
    ]
  },
  { 
    title: "Contact us", 
    path: "/contact",
    dropdownItems: [
      { title: "WhatsApp", path: "https://wa.me/61461367702?text=Hi,%20I'm%20interested%20to%20learn%20more%20about%20your%20tutorial.", icon: <MessageSquare className="w-5 h-5" />, external: true },
      { title: "Chat", path: "#", icon: <MessageCircle className="w-5 h-5" />, onClick: "openHubSpotChat" },
      { title: "Mobile", path: "tel:+61461367702", icon: <Phone className="w-5 h-5" /> },
      { title: "Email", path: "mailto:info@studytomy.com", icon: <Mail className="w-5 h-5" /> },
      { title: "Contact Form", path: "/contact", icon: <Globe className="w-5 h-5" /> }
    ]
  }
];

const BookTrialButton = () => {
  return (
    <Link to="/book-trial">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium
                   bg-gradient-to-r from-orange-500 to-orange-600
                   text-white shadow-md hover:shadow-lg
                   transition-all duration-300
                   backdrop-blur-sm backdrop-saturate-150
                   border border-orange-400/20"
      >
        <Sparkles className="w-4 h-4 mr-2" />
        Book Trial
      </motion.button>
    </Link>
  );
};

const NavItem = ({ item, isMobile = false }: { item: any; isMobile?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === item.path || 
                  (item.dropdownItems && item.dropdownItems.some(dropdownItem => location.pathname + location.hash === dropdownItem.path));

  const handleMobileClick = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={item.path}
        onClick={handleMobileClick}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
          ${isActive 
            ? 'bg-orange-500/10 text-orange-600' 
            : 'hover:bg-white/40 hover:text-orange-500 text-gray-700'
          } ${isMobile ? 'block w-full text-left' : 'inline-flex items-center'}
          backdrop-blur-sm backdrop-saturate-150 hover:shadow-sm`}
      >
        {item.title}
      </Link>

      {/* Dropdown */}
      {item.dropdownItems && isHovered && !isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-2 w-56 rounded-xl bg-white/80 backdrop-blur-lg backdrop-saturate-150 
                     shadow-lg ring-1 ring-black/5 overflow-hidden z-50"
        >
          <div className="py-2">
            {item.dropdownItems.map((dropdownItem, index) => (
              <Link
                key={index}
                to={dropdownItem.path}
                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-orange-500/10 
                          hover:text-orange-600 transition-all duration-300"
              >
                {dropdownItem.icon}
                <span className="ml-3">{dropdownItem.title}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src="https://ik.imagekit.io/studytomy/minimal%20primary%20logo%20mini.png?updatedAt=1732362156819"
                alt="Studytomy"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
            <BookTrialButton />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white border-t"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1" onClick={handleMobileMenuClick}>
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} isMobile={true} />
            ))}
            <div className="px-3 py-2">
              <BookTrialButton />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;