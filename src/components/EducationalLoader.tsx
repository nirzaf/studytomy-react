import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Brain, Lightbulb } from 'lucide-react';
import { educationalColors } from './animations/EducationalAnimations';

interface EducationalLoaderProps {
  variant?: 'books' | 'graduation' | 'knowledge' | 'lightbulb' | 'mixed';
  size?: 'small' | 'medium' | 'large';
  message?: string;
  showMessage?: boolean;
}

const EducationalLoader: React.FC<EducationalLoaderProps> = ({
  variant = 'mixed',
  size = 'medium',
  message = 'Loading...',
  showMessage = true
}) => {
  const sizeConfig = {
    small: { container: 'w-12 h-12', icon: 16, text: 'text-sm' },
    medium: { container: 'w-20 h-20', icon: 24, text: 'text-base' },
    large: { container: 'w-32 h-32', icon: 32, text: 'text-lg' }
  };

  const config = sizeConfig[size];

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
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              >
                <BookOpen 
                  size={config.icon} 
                  color={i === 0 ? educationalColors.primary : i === 1 ? educationalColors.secondary : educationalColors.accent}
                />
              </motion.div>
            ))}
          </div>
        );

      case 'graduation':
        return (
          <motion.div
            className="flex items-center justify-center"
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <GraduationCap size={config.icon} color={educationalColors.primary} />
          </motion.div>
        );

      case 'knowledge':
        return (
          <div className="relative">
            {['π', '∑', '∫', '∆'].map((symbol, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 flex items-center justify-center font-bold"
                style={{ 
                  color: educationalColors.primary,
                  fontSize: `${config.icon}px`
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
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

      case 'lightbulb':
        return (
          <motion.div
            className="flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{
                filter: [
                  'brightness(1) drop-shadow(0 0 0px rgba(252, 191, 73, 0))',
                  'brightness(1.3) drop-shadow(0 0 10px rgba(252, 191, 73, 0.8))',
                  'brightness(1) drop-shadow(0 0 0px rgba(252, 191, 73, 0))'
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Lightbulb size={config.icon} color={educationalColors.highlight} />
            </motion.div>
          </motion.div>
        );

      case 'mixed':
      default:
        return (
          <div className="relative">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <BookOpen size={config.icon} color={educationalColors.primary} />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <GraduationCap 
                size={Math.round(config.icon * 0.8)} 
                color={educationalColors.secondary}
                style={{ transform: 'translate(15px, 0)' }}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Brain 
                size={Math.round(config.icon * 0.6)} 
                color={educationalColors.accent}
                style={{ transform: 'translate(-15px, 0)' }}
              />
            </motion.div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`${config.container} relative`}>
        {renderLoader()}
      </div>
      {showMessage && (
        <motion.p 
          className={`${config.text} text-gray-600 font-medium`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {message}
        </motion.p>
      )}
    </div>
  );
};

// Page Loading Overlay Component
export const EducationalPageLoader: React.FC<{
  isLoading: boolean;
  message?: string;
}> = ({ isLoading, message = "Loading your educational experience..." }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center">
        <EducationalLoader variant="mixed" size="large" message={message} />
        
        {/* Floating Educational Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              {i % 4 === 0 && <BookOpen size={20} color={educationalColors.primary} />}
              {i % 4 === 1 && <GraduationCap size={20} color={educationalColors.secondary} />}
              {i % 4 === 2 && <Brain size={20} color={educationalColors.accent} />}
              {i % 4 === 3 && <Lightbulb size={20} color={educationalColors.highlight} />}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Component Loading Skeleton with Educational Theme
export const EducationalSkeleton: React.FC<{
  lines?: number;
  showIcon?: boolean;
}> = ({ lines = 3, showIcon = true }) => {
  return (
    <div className="animate-pulse">
      {showIcon && (
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full flex items-center justify-center">
            <BookOpen size={16} color={educationalColors.primary} />
          </div>
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-32"></div>
        </div>
      )}
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div 
            key={i}
            className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded"
            style={{ width: `${100 - i * 10}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default EducationalLoader;
