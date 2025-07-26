import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Calculator, Microscope, Palette, Music, Target,
  Zap, Clock, TrendingUp, CheckCircle, ArrowRight
} from 'lucide-react';
import { educationalColors } from './EducationalAnimations';

// Study Tools Component
export const FloatingStudyTools = ({ 
  count = 6,
  variant = 'emoji'
}: {
  count?: number;
  variant?: 'emoji' | 'icons' | 'mixed';
}) => {
  const emojiTools = ['📚', '✏️', '📐', '🔬', '🎨', '🎵', '📊', '🧮', '📝', '🖊️'];
  const iconTools = [
    { icon: BookOpen, color: educationalColors.primary },
    { icon: Calculator, color: educationalColors.secondary },
    { icon: Microscope, color: educationalColors.accent },
    { icon: Palette, color: educationalColors.highlight },
    { icon: Music, color: educationalColors.success },
    { icon: Target, color: educationalColors.info }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const radius = 350 + Math.random() * 50;

        if (variant === 'emoji' || (variant === 'mixed' && i % 2 === 0)) {
          return (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center text-2xl select-none"
              style={{
                width: '40px',
                height: '40px',
                opacity: 0.4,
              }}
              initial={{
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                opacity: 0,
                scale: 0.3,
                rotate: 0,
              }}
              animate={{
                x: [
                  Math.cos(angle) * radius,
                  Math.cos(angle + Math.PI * 0.05) * (radius + 20),
                  Math.cos(angle) * radius,
                ],
                y: [
                  Math.sin(angle) * radius,
                  Math.sin(angle + Math.PI * 0.05) * (radius + 20),
                  Math.sin(angle) * radius,
                ],
                opacity: [0, 0.4, 0],
                scale: [0.3, 1, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 16 + Math.random() * 6,
                repeat: Infinity,
                delay: i * 3,
                ease: "easeInOut",
              }}
            >
              {emojiTools[i % emojiTools.length]}
            </motion.div>
          );
        } else {
          const tool = iconTools[i % iconTools.length];
          const Icon = tool.icon;
          
          return (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center"
              style={{
                width: '36px',
                height: '36px',
                background: `radial-gradient(circle, ${tool.color}15, ${tool.color}08)`,
                border: `1px solid ${tool.color}25`,
                borderRadius: '50%',
                backdropFilter: 'blur(2px)',
              }}
              initial={{
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                opacity: 0,
                scale: 0.3,
              }}
              animate={{
                x: [
                  Math.cos(angle) * radius,
                  Math.cos(angle + Math.PI * 0.05) * (radius + 20),
                  Math.cos(angle) * radius,
                ],
                y: [
                  Math.sin(angle) * radius,
                  Math.sin(angle + Math.PI * 0.05) * (radius + 20),
                  Math.sin(angle) * radius,
                ],
                opacity: [0, 0.4, 0],
                scale: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 16 + Math.random() * 6,
                repeat: Infinity,
                delay: i * 3,
                ease: "easeInOut",
              }}
            >
              <Icon size={20} color={tool.color} />
            </motion.div>
          );
        }
      })}
    </div>
  );
};

// Educational Loading Component
export const EducationalLoader = ({ 
  variant = 'books',
  size = 'medium',
  message = 'Loading...'
}: {
  variant?: 'books' | 'pencils' | 'knowledge' | 'graduation';
  size?: 'small' | 'medium' | 'large';
  message?: string;
}) => {
  const sizeMap = {
    small: { container: 'w-16 h-16', icon: 16 },
    medium: { container: 'w-24 h-24', icon: 24 },
    large: { container: 'w-32 h-32', icon: 32 }
  };

  const currentSize = sizeMap[size];

  const renderLoader = () => {
    switch (variant) {
      case 'books':
        return (
          <div className="relative">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              >
                <BookOpen 
                  size={currentSize.icon} 
                  color={i === 0 ? educationalColors.primary : i === 1 ? educationalColors.secondary : educationalColors.accent}
                />
              </motion.div>
            ))}
          </div>
        );
      
      case 'knowledge':
        return (
          <div className="relative">
            {['π', '∑', '∫'].map((symbol, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 flex items-center justify-center font-bold text-2xl"
                style={{ color: educationalColors.primary }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              >
                {symbol}
              </motion.div>
            ))}
          </div>
        );
      
      default:
        return (
          <motion.div
            className="flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <BookOpen size={currentSize.icon} color={educationalColors.primary} />
          </motion.div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`${currentSize.container} relative`}>
        {renderLoader()}
      </div>
      <p className="text-sm text-gray-600 font-medium">{message}</p>
    </div>
  );
};

// Progress Indicators Component
export const EducationalProgress = ({ 
  progress = 0,
  variant = 'default',
  showIcon = true
}: {
  progress?: number;
  variant?: 'default' | 'knowledge' | 'achievement';
  showIcon?: boolean;
}) => {
  const getProgressIcon = () => {
    if (progress < 25) return <Clock size={16} color={educationalColors.accent} />;
    if (progress < 75) return <TrendingUp size={16} color={educationalColors.highlight} />;
    return <CheckCircle size={16} color={educationalColors.success} />;
  };

  return (
    <div className="flex items-center space-x-3">
      {showIcon && (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {getProgressIcon()}
        </motion.div>
      )}
      
      <div className="flex-1 relative">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="h-2 rounded-full"
            style={{
              background: variant === 'knowledge' 
                ? `linear-gradient(90deg, ${educationalColors.primary}, ${educationalColors.highlight})`
                : variant === 'achievement'
                ? `linear-gradient(90deg, ${educationalColors.success}, ${educationalColors.info})`
                : `linear-gradient(90deg, ${educationalColors.primary}, ${educationalColors.secondary})`
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        
        {/* Floating particles on progress bar */}
        {progress > 0 && (
          <motion.div
            className="absolute top-0 left-0 w-2 h-2 rounded-full"
            style={{ 
              background: educationalColors.highlight,
              left: `${Math.min(progress, 95)}%`,
              top: '-1px'
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>
      
      <span className="text-sm font-medium text-gray-700">
        {Math.round(progress)}%
      </span>
    </div>
  );
};

// Educational Transition Component
export const EducationalTransition = ({ 
  isVisible = true,
  direction = 'up',
  children
}: {
  isVisible?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  children: React.ReactNode;
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

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...getInitialPosition()
      }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        x: isVisible ? 0 : getInitialPosition().x,
        y: isVisible ? 0 : getInitialPosition().y
      }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      {children}
    </motion.div>
  );
};
