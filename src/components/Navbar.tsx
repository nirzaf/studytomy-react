import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Sparkles, GraduationCap, Phone, Mail, Globe, MessageCircle } from 'lucide-react';
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
      { title: "Edexcel", path: "/exam-boards#edexcel", icon: "fas fa-university" },
      { title: "Cambridge", path: "/exam-boards#cambridge", icon: "fas fa-university" },
      { title: "AQA", path: "/exam-boards#aqa", icon: "fas fa-university" },
      { title: "OCR A & OCR B", path: "/exam-boards#ocr-a-ocr-b", icon: "fas fa-university" },
      { title: "IB", path: "/exam-boards#ib", icon: "fas fa-university" },
      { title: "OSSD", path: "/exam-boards#ossd", icon: "fas fa-university" },
      { title: "VCE", path: "/exam-boards#vce", icon: "fas fa-university" },
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
      { title: "Join with us", path: "/join-studytomy", icon: "fas fa-users", external: true }
    ]
  },
  { 
    title: "Contact us", 
    path: "/contact",
    dropdownItems: [
      { title: "WhatsApp", path: "https://wa.me/61461367702?text=Hi,%20I'm%20interested%20to%20learn%20more%20about%20your%20tutorial.", icon: "fab fa-whatsapp", external: true },
      { title: "Chat", path: "#", icon: "fas fa-comments", onClick: "openHubSpotChat" },
      { title: "Mobile", path: "tel:+61461367702", icon: "fas fa-phone" },
      { title: "Email", path: "mailto:info@studytomy.com", icon: "far fa-envelope" },
      { title: "Web Form", path: "/submission-form", icon: "fas fa-globe" }
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

  const handleClick = (e: React.MouseEvent, dropdownItem: any) => {
    if (dropdownItem.onClick === 'openHubSpotChat') {
      e.preventDefault();
      if (window.HubSpotConversations) {
        window.HubSpotConversations.widget.open();
      }
    }
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={item.path}
        className={`${
          isActive
            ? 'text-orange-500'
            : 'text-gray-600 hover:text-orange-500'
        } transition py-2 inline-block ${isMobile ? 'block px-3 py-2 rounded-lg' : ''}`}
      >
        {item.title}
      </Link>

      {item.dropdownItems && isHovered && (
        <div className={`absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${isMobile ? 'static w-full' : ''}`}>
          {item.dropdownItems.map((dropdownItem, index) => (
            <Link
              key={index}
              to={dropdownItem.path}
              target={dropdownItem.external ? "_blank" : undefined}
              onClick={(e) => handleClick(e, dropdownItem)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-150"
            >
              <i className={`${dropdownItem.icon} mr-2`}></i>
              {dropdownItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://ik.imagekit.io/studytomy/minimal%20primary%20logo%20mini.png?updatedAt=1732362156819" 
                alt="Studytomy Logo" 
                className="h-8 w-auto"
                loading="eager"
                priority="true"
              />
              <span className="ml-2 text-xl font-bold text-gray-800">Studytomy</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
            
            {/* Book Trial Button */}
            <BookTrialButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} isMobile={true} />
            ))}
            
            {/* Mobile Book Trial Button */}
            <div className="px-3 py-2">
              <BookTrialButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;