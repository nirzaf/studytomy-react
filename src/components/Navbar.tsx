import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, type ReactNode } from 'react';
import {
  Menu,
  X,
  Sparkles,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Users,
  MessageSquare,
  School,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingEducationalIcon, KnowledgeParticles } from './animations/EducationalAnimations';

type DropdownItem = {
  title: string;
  path: string;
  icon: ReactNode;
  external?: boolean;
  onClick?: string;
};

type NavItemType = {
  title: string;
  path: string;
  dropdownItems?: DropdownItem[];
};

const navItems: NavItemType[] = [
  { title: 'Home', path: '/' },
  { title: 'About us', path: '/about' },
  {
    title: 'Exam Boards',
    path: '/exam-boards',
    dropdownItems: [
      { title: 'Edexcel', path: '/exam-boards#edexcel', icon: <School className="w-5 h-5" /> },
      { title: 'Cambridge', path: '/exam-boards#cambridge', icon: <School className="w-5 h-5" /> },
      { title: 'AQA', path: '/exam-boards#aqa', icon: <School className="w-5 h-5" /> },
      { title: 'OCR A & OCR B', path: '/exam-boards#ocr-a-ocr-b', icon: <School className="w-5 h-5" /> },
      { title: 'IB', path: '/exam-boards#ib', icon: <School className="w-5 h-5" /> },
      { title: 'OSSD', path: '/exam-boards#ossd', icon: <School className="w-5 h-5" /> },
      { title: 'VCE', path: '/exam-boards#vce', icon: <School className="w-5 h-5" /> }
    ]
  },
  {
    title: 'Home School',
    path: '/home-school',
    dropdownItems: [
      { title: "Parent's Corner", path: '/home-school#parents-corner', icon: <BookOpen className="w-5 h-5" /> }
    ]
  },
  {
    title: 'Career',
    path: '/career',
    dropdownItems: [
      { title: 'Join with us', path: '/join-studytomy', icon: <Users className="w-5 h-5" />, external: true }
    ]
  },
  {
    title: 'Contact us',
    path: '/contact',
    dropdownItems: [
      {
        title: 'WhatsApp',
        path: 'https://wa.me/61461367702?text=Hi,%20I%27m%20interested%20to%20learn%20more%20about%20your%20tutorial.',
        icon: <MessageSquare className="w-5 h-5" />,
        external: true
      },
      { title: 'Chat', path: '#', icon: <MessageCircle className="w-5 h-5" />, onClick: 'openHubSpotChat' },
      { title: 'Mobile', path: 'tel:+61461367702', icon: <Phone className="w-5 h-5" /> },
      { title: 'Email', path: 'mailto:info@studytomy.com', icon: <Mail className="w-5 h-5" /> },
      { title: 'Contact Form', path: '/contact', icon: <Globe className="w-5 h-5" /> }
    ]
  }
];

const BookTrialButton = () => (
  <Link href="/book-trial">
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

type NavItemProps = {
  item: NavItemType;
  isMobile?: boolean;
  currentPath: string;
  onNavigate?: () => void;
};

const NavItem = ({ item, isMobile = false, currentPath, onNavigate }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const isActive =
    currentPath === item.path ||
    (item.dropdownItems && item.dropdownItems.some((dropdownItem) => currentPath.startsWith(dropdownItem.path)));

  const handleNavigate = () => {
    setIsHovered(false);
    onNavigate?.();
  };

  const handleSpecialAction = (dropdownItem: DropdownItem) => {
    if (dropdownItem.onClick === 'openHubSpotChat' && typeof window !== 'undefined') {
      // @ts-ignore - HubSpot chat is injected globally
      window.HubSpotConversations?.widget?.open?.();
    }
    handleNavigate();
  };

  const dropdownLinkClasses =
    'group relative flex items-center px-4 py-3 text-sm text-gray-700 transition-all duration-300';

  const dropdownContent = (dropdownItem: DropdownItem) => (
    <>
      <span className="relative z-10 flex items-center">
        {dropdownItem.icon}
        <span className="ml-3">{dropdownItem.title}</span>
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 animate-shine-slow"></div>
      </div>
    </>
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={item.path}
        onClick={handleNavigate}
        className={`group relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
          ${isActive ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}
          ${isMobile ? 'block w-full text-left' : 'inline-flex items-center'}
          before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b 
          before:from-white/80 before:to-white/40 before:backdrop-blur-lg
          before:border before:border-white/20 
          before:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] hover:before:shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]
          overflow-hidden`}
      >
        <span className="relative z-10">{item.title}</span>

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.7),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,255,255,0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45 animate-shine-slow"></div>
        </div>
        {isActive && (
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-100/50 via-orange-50/30 to-orange-100/50"></div>
        )}
      </Link>

      {item.dropdownItems && isHovered && !isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-2 w-56 rounded-xl overflow-hidden z-50"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/80 backdrop-blur-xl border border-white/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(255,255,255,0.7),transparent_70%)]"></div>

          <div className="relative z-10 py-1">
            {item.dropdownItems.map((dropdownItem, index) => {
              const isExternalLink = dropdownItem.external || !dropdownItem.path.startsWith('/');
              const openInNewTab = dropdownItem.path.startsWith('http');
              if (isExternalLink && !dropdownItem.onClick) {
                return (
                  <a
                    key={index}
                    href={dropdownItem.path}
                    target={openInNewTab ? '_blank' : undefined}
                    rel={openInNewTab ? 'noreferrer' : undefined}
                    className={dropdownLinkClasses}
                    onClick={handleNavigate}
                  >
                    {dropdownContent(dropdownItem)}
                  </a>
                );
              }

              if (dropdownItem.onClick) {
                return (
                  <button
                    type="button"
                    key={index}
                    className={`${dropdownLinkClasses} w-full text-left`}
                    onClick={() => handleSpecialAction(dropdownItem)}
                  >
                    {dropdownContent(dropdownItem)}
                  </button>
                );
              }

              return (
                <Link key={index} href={dropdownItem.path} className={dropdownLinkClasses} onClick={handleNavigate}>
                  {dropdownContent(dropdownItem)}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.asPath || '/';

  const handleMobileMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingEducationalIcon index={0} variant="minimal" size="small" opacity={0.15} duration={20} />
        <FloatingEducationalIcon index={2} variant="minimal" size="small" opacity={0.12} duration={25} />
        <KnowledgeParticles count={4} variant="minimal" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/80 backdrop-blur-xl border-b border-white/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(255,255,255,0.7),transparent_50%)]"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1/2 h-[120%] -top-[10%] -left-[25%] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12 animate-shine"></div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img
                className="h-10 w-auto sm:h-12"
                src="https://ik.imagekit.io/studytomy/minimal%20primary%20logo%20mini.png?updatedAt=1732362156819"
                alt="Studytomy"
                width={48}
                height={48}
                loading="eager"
                fetchPriority="high"
              />
            </Link>
            <Link href="/" className="ml-3 hidden sm:block">
              <span className="relative z-20 text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent whitespace-nowrap">
                Epitome of E-Tutoring
              </span>
            </Link>
            <Link href="/" className="ml-2 sm:hidden">
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

          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} currentPath={currentPath} />
            ))}
            <BookTrialButton />
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-white border-t"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1" onClick={handleMobileMenuClick}>
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} currentPath={currentPath} isMobile onNavigate={handleMobileMenuClick} />
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
