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

const NavItem = ({ item, isMobile = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === item.path;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent, dropdownItem: any) => {
    if (dropdownItem.onClick === 'openHubSpotChat') {
      e.preventDefault();
      if (window.HubSpotConversations) {
        window.HubSpotConversations.widget.open();
      }
    }
  };

  const handleMobileClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <Link
        to={item.path}
        className={`${
          isActive
            ? 'text-orange-500'
            : 'text-gray-600 hover:text-orange-500'
        } transition py-2 inline-block ${isMobile ? 'block px-3 py-2 rounded-lg w-full' : ''}`}
        onClick={handleMobileClick}
      >
        {item.title}
      </Link>

      {item.dropdownItems && isHovered && !isMobile && (
        <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          {item.dropdownItems.map((dropdownItem, index) => (
            <Link
              key={index}
              to={dropdownItem.path}
              target={dropdownItem.external ? "_blank" : undefined}
              onClick={(e) => handleClick(e, dropdownItem)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-150"
            >
              <span className="flex items-center gap-2">
                {dropdownItem.icon}
                {dropdownItem.title}
              </span>
            </Link>
          ))}
        </div>
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
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src="https://ik.imagekit.io/quadrate/Studytomy/logo_studytomy_2x_1_?updatedAt=1696858649932"
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