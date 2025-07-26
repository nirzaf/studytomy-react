import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, Brain, Lightbulb, Star, Sparkles } from 'lucide-react';
import { educationalColors } from './animations/EducationalAnimations';

interface PageTransitionProps {
  children: React.ReactNode;
  pageKey: string;
  variant?: 'slide' | 'fade' | 'educational' | 'knowledge';
}

// Educational Page Transition Wrapper
export const EducationalPageTransition: React.FC<PageTransitionProps> = ({
  children,
  pageKey,
  variant = 'educational'
}) => {
  const getTransitionVariants = () => {
    switch (variant) {
      case 'slide':
        return {
          initial: { x: 300, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: -300, opacity: 0 }
        };
      
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
      
      case 'knowledge':
        return {
          initial: { 
            opacity: 0, 
            scale: 0.9,
            rotateY: -15
          },
          animate: { 
            opacity: 1, 
            scale: 1,
            rotateY: 0
          },
          exit: { 
            opacity: 0, 
            scale: 1.1,
            rotateY: 15
          }
        };
      
      case 'educational':
      default:
        return {
          initial: { 
            opacity: 0, 
            y: 50,
            scale: 0.95
          },
          animate: { 
            opacity: 1, 
            y: 0,
            scale: 1
          },
          exit: { 
            opacity: 0, 
            y: -50,
            scale: 1.05
          }
        };
    }
  };

  const variants = getTransitionVariants();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={variants.initial}
        animate={variants.animate}
        exit={variants.exit}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Educational Route Transition with Floating Elements
export const EducationalRouteTransition: React.FC<{
  isTransitioning: boolean;
  direction?: 'forward' | 'backward';
}> = ({ isTransitioning, direction = 'forward' }) => {
  if (!isTransitioning) return null;

  const floatingElements = [
    { icon: BookOpen, color: educationalColors.primary },
    { icon: GraduationCap, color: educationalColors.secondary },
    { icon: Brain, color: educationalColors.accent },
    { icon: Lightbulb, color: educationalColors.highlight },
    { icon: Star, color: educationalColors.success },
    { icon: Sparkles, color: educationalColors.info }
  ];

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {floatingElements.map((element, i) => {
        const Icon = element.icon;
        const startX = direction === 'forward' ? -100 : window.innerWidth + 100;
        const endX = direction === 'forward' ? window.innerWidth + 100 : -100;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + i * 12}%`,
              left: startX,
            }}
            animate={{
              x: [0, endX - startX],
              y: [0, Math.sin(i) * 50],
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          >
            <Icon size={24} color={element.color} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

// Section Transition Component
export const EducationalSectionTransition: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  variant?: 'default' | 'bounce' | 'spring';
}> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  variant = 'default'
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 50, x: 0 };
      case 'down': return { y: -50, x: 0 };
      case 'left': return { x: 50, y: 0 };
      case 'right': return { x: -50, y: 0 };
      default: return { y: 50, x: 0 };
    }
  };

  const getTransition = () => {
    switch (variant) {
      case 'bounce':
        return {
          type: "spring",
          stiffness: 400,
          damping: 10,
          delay
        };
      case 'spring':
        return {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay
        };
      default:
        return {
          duration: 0.6,
          ease: "easeOut",
          delay
        };
    }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...getInitialPosition()
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        y: 0
      }}
      viewport={{ once: true, amount: 0.1 }}
      transition={getTransition()}
    >
      {children}
    </motion.div>
  );
};

// Card Hover Transition with Educational Theme
export const EducationalCardTransition: React.FC<{
  children: React.ReactNode;
  hoverScale?: number;
  glowColor?: string;
}> = ({ 
  children, 
  hoverScale = 1.05,
  glowColor = educationalColors.primary
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: hoverScale,
        boxShadow: `0 10px 30px ${glowColor}20`,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className="relative"
    >
      {children}
      
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}15, transparent 70%)`,
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// Button Transition with Educational Theme
export const EducationalButtonTransition: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
}> = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          bg: `bg-gradient-to-r from-gray-500 to-gray-600`,
          hover: `hover:from-gray-600 hover:to-gray-700`,
          glow: educationalColors.secondary
        };
      case 'success':
        return {
          bg: `bg-gradient-to-r from-green-500 to-green-600`,
          hover: `hover:from-green-600 hover:to-green-700`,
          glow: educationalColors.success
        };
      default:
        return {
          bg: `bg-gradient-to-r from-orange-500 to-orange-600`,
          hover: `hover:from-orange-600 hover:to-orange-700`,
          glow: educationalColors.primary
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small': return 'px-3 py-1.5 text-sm';
      case 'large': return 'px-8 py-4 text-lg';
      default: return 'px-6 py-3 text-base';
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.button
      className={`
        ${styles.bg} ${styles.hover} ${getSizeStyles()}
        text-white font-medium rounded-lg
        transition-all duration-300
        shadow-md hover:shadow-lg
        disabled:opacity-50 disabled:cursor-not-allowed
        relative overflow-hidden
      `}
      whileHover={!disabled ? { 
        scale: 1.02,
        boxShadow: `0 8px 25px ${styles.glow}40`
      } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default EducationalPageTransition;
