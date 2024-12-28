import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Sparkles, Phone, Mail, Globe, MessageCircle,
  Users, MessageSquare, School
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
        Book a Free Session
      </motion.button>
    </Link>
  );
};

const NavItem = ({ item, isMobile = false }: { item: any; isMobile?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  interface DropdownItemProps {
    title: string;
    path: string;
    icon: JSX.Element;
    external?: boolean;
    onClick?: string;
  }

  const isActive: boolean = location.pathname === item.path || 
                    (item.dropdownItems && item.dropdownItems.some((dropdownItem: DropdownItemProps) => location.pathname + location.hash === dropdownItem.path));

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
        className={`group relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
          ${isActive 
            ? 'text-orange-600' 
            : 'text-gray-700 hover:text-orange-600'
          } ${isMobile ? 'block w-full text-left' : 'inline-flex items-center'}
          before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b 
          before:from-white/80 before:to-white/40 before:backdrop-blur-lg
          before:border before:border-white/20 
          before:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] hover:before:shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]
          overflow-hidden`}
      >
        <span className="relative z-10">{item.title}</span>
        
        {/* Top reflection */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.7),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Bottom reflection */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,255,255,0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45 animate-shine-slow"></div>
        </div>

        {/* Active state glow */}
        {isActive && (
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-100/50 via-orange-50/30 to-orange-100/50"></div>
        )}
      </Link>

      {/* Dropdown */}
      {item.dropdownItems && isHovered && !isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-2 w-56 rounded-xl overflow-hidden z-50"
        >
          {/* Dropdown glass background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/80 backdrop-blur-xl border border-white/20"></div>
          
          {/* Dropdown top reflection */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(255,255,255,0.7),transparent_70%)]"></div>
          
          {/* Dropdown content */}
          <div className="relative z-10 py-1">
            {item.dropdownItems.map((dropdownItem: DropdownItemProps, index: number) => (
              <Link
              key={index}
              to={dropdownItem.path}
              className="group relative flex items-center px-4 py-3 text-sm text-gray-700
                    transition-all duration-300"
              >
              <span className="relative z-10 flex items-center">
                {dropdownItem.icon}
                <span className="ml-3">{dropdownItem.title}</span>
              </span>
              
              {/* Dropdown item hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Dropdown item shine */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 animate-shine-slow"></div>
              </div>
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
    <nav className="fixed w-full z-50">
      {/* Main glass panel background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/80 backdrop-blur-xl border-b border-white/20"></div>
      
      {/* Top reflection */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(255,255,255,0.7),transparent_50%)]"></div>
      
      {/* Left to right shine effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1/2 h-[120%] -top-[10%] -left-[25%] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12 animate-shine"></div>
      </div>
      
      {/* Bottom edge highlight */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Text */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-10 w-auto sm:h-12"
                src="https://ik.imagekit.io/studytomy/minimal%20primary%20logo%20mini.png?updatedAt=1732362156819"
                alt="Studytomy"
              />
            </Link>
            {/* Desktop Text */}
            <Link to="/" className="ml-3 hidden sm:block">
              <span className="relative z-20 text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent whitespace-nowrap">
                Epitome of E-Tutoring
              </span>
            </Link>
            {/* Mobile Text - Two Lines */}
            <Link to="/" className="ml-2 sm:hidden">
              <div className="flex flex-col">
                <span className="relative z-20 text-base font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent leading-tight">
                  Epitome of
                </span>
                <span className="relative z-20 text-base font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent leading-tight">
                  E-Tutoring
                </span>
              </div>
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