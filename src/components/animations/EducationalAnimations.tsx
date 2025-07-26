import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, GraduationCap, Brain, Lightbulb, Globe2, Users, 
  Calculator, Microscope, Palette, Music, Trophy, Star,
  Target, Zap, Award, Medal, Crown, Sparkles
} from 'lucide-react';

// Educational brand colors
export const educationalColors = {
  primary: '#F77F00',
  secondary: '#003049', 
  accent: '#D62828',
  highlight: '#FCBF49',
  success: '#06D6A0',
  info: '#118AB2'
};

// Floating Educational Icons Component
export const FloatingEducationalIcon = ({ 
  index, 
  variant = 'default',
  size = 'medium',
  opacity = 0.4,
  duration = 12
}: { 
  index: number;
  variant?: 'default' | 'minimal' | 'vibrant';
  size?: 'small' | 'medium' | 'large';
  opacity?: number;
  duration?: number;
}) => {
  const icons = [
    { icon: BookOpen, color: educationalColors.primary },
    { icon: GraduationCap, color: educationalColors.secondary },
    { icon: Brain, color: educationalColors.accent },
    { icon: Lightbulb, color: educationalColors.highlight },
    { icon: Globe2, color: educationalColors.info },
    { icon: Users, color: educationalColors.success },
    { icon: Calculator, color: educationalColors.primary },
    { icon: Microscope, color: educationalColors.secondary }
  ];

  const element = icons[index % icons.length];
  const Icon = element.icon;
  const angle = (index / icons.length) * Math.PI * 2;
  const radius = variant === 'minimal' ? 200 : variant === 'vibrant' ? 300 : 250;
  
  const sizeMap = {
    small: 24,
    medium: 32,
    large: 40
  };
  
  const iconSize = sizeMap[size];

  return (
    <motion.div
      className="absolute flex items-center justify-center"
      style={{
        width: `${iconSize + 8}px`,
        height: `${iconSize + 8}px`,
        background: variant === 'vibrant' 
          ? `radial-gradient(circle, ${element.color}15, ${element.color}08)`
          : variant === 'minimal'
          ? `${element.color}08`
          : `linear-gradient(135deg, ${element.color}12, ${element.color}06)`,
        border: variant === 'vibrant' ? `2px solid ${element.color}30` : `1px solid ${element.color}20`,
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
          Math.cos(angle + Math.PI * 0.1) * (radius + 30),
          Math.cos(angle) * radius,
        ],
        y: [
          Math.sin(angle) * radius,
          Math.sin(angle + Math.PI * 0.1) * (radius + 30),
          Math.sin(angle) * radius,
        ],
        opacity: [0, opacity, 0],
        scale: [0.3, 1, 0.3],
        rotate: variant === 'vibrant' ? [0, 360] : [0, 0],
      }}
      transition={{
        duration: duration + Math.random() * 4,
        repeat: Infinity,
        delay: index * 2,
        ease: "easeInOut",
      }}
    >
      <Icon size={iconSize} color={element.color} />
    </motion.div>
  );
};

// Knowledge Particles Component
export const KnowledgeParticles = ({ 
  count = 8,
  symbols = ['π', '∑', '∫', '∆', '∞', '√', 'α', 'β', 'γ', 'θ', 'Ω', 'λ'],
  variant = 'default'
}: {
  count?: number;
  symbols?: string[];
  variant?: 'default' | 'minimal' | 'mathematical' | 'scientific';
}) => {
  const getSymbolSet = () => {
    switch (variant) {
      case 'mathematical':
        return ['π', '∑', '∫', '∆', '∞', '√', 'α', 'β', 'γ', 'θ'];
      case 'scientific':
        return ['⚛', '🧬', '⚗', '🔬', '🧪', '⚡', '🌡', '📊', '📈', '🔍'];
      case 'minimal':
        return ['•', '○', '◦', '▪', '▫', '◊', '◈', '◇'];
      default:
        return symbols;
    }
  };

  const particleSymbols = getSymbolSet();

  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center font-semibold select-none"
          style={{
            width: '32px',
            height: '32px',
            background: `radial-gradient(circle, ${educationalColors.primary}12, ${educationalColors.primary}06)`,
            border: `1px solid ${educationalColors.primary}20`,
            borderRadius: '50%',
            color: educationalColors.primary,
            fontSize: variant === 'scientific' ? '16px' : '18px',
            opacity: 0.5,
          }}
          initial={{
            x: Math.cos((i / count) * Math.PI * 2) * (180 + Math.random() * 120),
            y: Math.sin((i / count) * Math.PI * 2) * (180 + Math.random() * 120),
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: [
              Math.cos((i / count) * Math.PI * 2) * (180 + Math.random() * 120),
              Math.cos((i / count) * Math.PI * 2 + Math.PI * 0.1) * (200 + Math.random() * 100),
              Math.cos((i / count) * Math.PI * 2) * (180 + Math.random() * 120),
            ],
            y: [
              Math.sin((i / count) * Math.PI * 2) * (180 + Math.random() * 120),
              Math.sin((i / count) * Math.PI * 2 + Math.PI * 0.1) * (200 + Math.random() * 100),
              Math.sin((i / count) * Math.PI * 2) * (180 + Math.random() * 120),
            ],
            opacity: [0, 0.4, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 15 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
        >
          {particleSymbols[i % particleSymbols.length]}
        </motion.div>
      ))}
    </div>
  );
};

// Subject Badges Component
export const FloatingSubjectBadges = ({ 
  subjects = [
    { name: 'Math', color: educationalColors.primary },
    { name: 'Science', color: educationalColors.secondary },
    { name: 'English', color: educationalColors.accent },
    { name: 'History', color: educationalColors.highlight },
    { name: 'Art', color: educationalColors.success },
    { name: 'Music', color: educationalColors.info }
  ],
  count = 6
}: {
  subjects?: Array<{ name: string; color: string }>;
  count?: number;
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        const subject = subjects[i % subjects.length];
        const angle = (i / count) * Math.PI * 2;
        const radius = 280 + Math.random() * 80;

        return (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium select-none"
            style={{
              background: `linear-gradient(135deg, ${subject.color}10, ${subject.color}05)`,
              border: `1px solid ${subject.color}25`,
              color: subject.color,
              backdropFilter: 'blur(2px)',
            }}
            initial={{
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: [
                Math.cos(angle) * radius,
                Math.cos(angle + Math.PI * 0.08) * (radius + 25),
                Math.cos(angle) * radius,
              ],
              y: [
                Math.sin(angle) * radius,
                Math.sin(angle + Math.PI * 0.08) * (radius + 25),
                Math.sin(angle) * radius,
              ],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 16 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut",
            }}
          >
            {subject.name}
          </motion.div>
        );
      })}
    </div>
  );
};

// Achievement Indicators Component
export const FloatingAchievements = ({ 
  count = 4,
  variant = 'default'
}: {
  count?: number;
  variant?: 'default' | 'minimal' | 'celebration';
}) => {
  const achievements = [
    { icon: Trophy, color: educationalColors.highlight, label: 'Excellence' },
    { icon: Star, color: educationalColors.success, label: 'Achievement' },
    { icon: Award, color: educationalColors.primary, label: 'Success' },
    { icon: Medal, color: educationalColors.accent, label: 'Honor' },
    { icon: Crown, color: educationalColors.info, label: 'Leadership' },
    { icon: Sparkles, color: educationalColors.highlight, label: 'Brilliance' }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        const achievement = achievements[i % achievements.length];
        const Icon = achievement.icon;
        const angle = (i / count) * Math.PI * 2;
        const radius = 320 + Math.random() * 60;

        return (
          <motion.div
            key={i}
            className="absolute flex flex-col items-center justify-center"
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
              opacity: [0, variant === 'celebration' ? 0.8 : 0.4, 0],
              scale: [0.3, 1, 0.3],
              rotate: variant === 'celebration' ? [0, 360] : [0, 15, -15, 0],
            }}
            transition={{
              duration: 18 + Math.random() * 8,
              repeat: Infinity,
              delay: i * 4,
              ease: "easeInOut",
            }}
          >
            <div
              className="flex items-center justify-center rounded-full p-2"
              style={{
                background: variant === 'celebration' 
                  ? `radial-gradient(circle, ${achievement.color}20, ${achievement.color}10)`
                  : `${achievement.color}15`,
                border: `1px solid ${achievement.color}30`,
              }}
            >
              <Icon size={24} color={achievement.color} />
            </div>
            {variant === 'celebration' && (
              <span 
                className="text-xs font-medium mt-1"
                style={{ color: achievement.color }}
              >
                {achievement.label}
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

// Educational Background Component
export const EducationalBackground = ({
  variant = 'default',
  intensity = 'medium',
  children
}: {
  variant?: 'default' | 'mathematical' | 'scientific' | 'artistic' | 'minimal';
  intensity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
}) => {
  const getComponentCounts = () => {
    const baseCount = intensity === 'low' ? 4 : intensity === 'medium' ? 6 : 8;
    return {
      icons: baseCount,
      particles: baseCount + 2,
      badges: Math.max(4, baseCount - 2),
      achievements: Math.max(2, baseCount - 4)
    };
  };

  const counts = getComponentCounts();
  const opacityMultiplier = intensity === 'low' ? 0.3 : intensity === 'medium' ? 0.5 : 0.7;

  return (
    <div className="relative">
      {/* Educational Icons Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingEducationalIcon
          index={0}
          variant={variant === 'minimal' ? 'minimal' : 'default'}
          opacity={0.3 * opacityMultiplier}
        />
        {Array.from({ length: counts.icons - 1 }).map((_, i) => (
          <FloatingEducationalIcon
            key={i + 1}
            index={i + 1}
            variant={variant === 'minimal' ? 'minimal' : 'default'}
            opacity={0.3 * opacityMultiplier}
          />
        ))}
      </div>

      {/* Knowledge Particles Layer */}
      {variant !== 'minimal' && (
        <div className="absolute inset-0 overflow-hidden">
          <KnowledgeParticles
            count={counts.particles}
            variant={variant === 'mathematical' ? 'mathematical' : variant === 'scientific' ? 'scientific' : 'default'}
          />
        </div>
      )}

      {/* Subject Badges Layer */}
      {intensity !== 'low' && (
        <div className="absolute inset-0 overflow-hidden">
          <FloatingSubjectBadges count={counts.badges} />
        </div>
      )}

      {/* Achievement Layer */}
      {intensity === 'high' && (
        <div className="absolute inset-0 overflow-hidden">
          <FloatingAchievements count={counts.achievements} />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
