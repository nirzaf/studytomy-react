import { GraduationCap, Users, Globe2, BookOpen, Brain, Lightbulb } from 'lucide-react';
import { motion, useAnimation, type Variants } from 'framer-motion';
import HeroButton from './HeroButton';
import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import StaticHeroFallback from './StaticHeroFallback';

// Dynamically import 3D Scene to improve LCP
const Scene3D = dynamic(() => import('./Scene3D'), {
  ssr: false,
  loading: () => <StaticHeroFallback />,
});

// Animation text content
const heroTexts = [
  {
    title: "Transform Your Learning",
    subtitle: "With Expert Tutors Worldwide",
    emptyLine: "‎"
  },
  {
    title: "Personalized 1-on-1 Learning",
    subtitle: "Tailored to Your Academic Goals",
    emptyLine: "‎"
  },
  {
    title: "Expert IGCSE & IB Tutoring",
    subtitle: "From Experienced Educators",
    emptyLine: "‎"
  },
  {
    title: "Flexible Online Sessions",
    subtitle: "Learn at Your Own Pace",
    emptyLine: "‎"
  }
];

const AnimatedText = ({ texts }: { texts: typeof heroTexts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      rotateX: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96] as const,
        staggerChildren: 0.08
      }
    },
    exit: {
      opacity: 0,
      rotateX: 20,
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateY: -20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="h-[180px] md:h-[160px] flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        key={currentIndex}
        variants={containerVariants}
        initial="hidden"
        animate={isAnimating ? "exit" : "visible"}
        className="text-center perspective-[1000px] transform-gpu"
      >
        {/* Empty Line */}
        <motion.div
          className="h-6 md:h-8"
          variants={wordVariants}
        >
          {texts[currentIndex].emptyLine}
        </motion.div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 relative">
          <div className="overflow-hidden">
            <motion.div className="flex flex-wrap justify-center gap-x-3">
              {texts[currentIndex].title.split(' ').map((word, i) => (
                <motion.div
                  key={i}
                  className="relative inline-block perspective-[1000px] transform-gpu"
                  variants={wordVariants}
                >
                  <motion.span
                    className="inline-block relative text-[#003049] drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]
                             [text-shadow:_2px_2px_0_#fff,_4px_4px_0_rgba(0,48,73,0.1)]
                             hover:text-[#F77F00] transition-colors duration-300"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: {
                        type: "spring",
                        stiffness: 300
                      }
                    }}
                  >
                    {word}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Background glow effect */}
          <motion.div
            className="absolute -inset-4 rounded-2xl opacity-75 -z-10"
            style={{
              background: 'radial-gradient(circle at center, rgba(252,191,73,0.2) 0%, rgba(247,127,0,0.1) 50%, transparent 100%)',
              filter: 'blur(20px)'
            }}
          />
        </h1>

        {/* Subtitle */}
        <motion.h2
          variants={wordVariants}
          className="text-2xl md:text-3xl font-bold mb-8 relative"
        >
          <span className="relative inline-block
                         text-[#003049]
                         drop-shadow-[0_2px_2px_rgba(0,0,0,0.05)]">
            {texts[currentIndex].subtitle}

            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-[#F77F00]"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: 1,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                  ease: "easeOut"
                }
              }}
            />

            {/* Subtle glow effect */}
            <motion.div
              className="absolute -inset-2 rounded-lg opacity-25"
              style={{
                background: 'radial-gradient(circle at center, rgba(247,127,0,0.2) 0%, transparent 70%)',
                filter: 'blur(8px)'
              }}
              animate={{
                opacity: [0.25, 0.4, 0.25],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </span>
        </motion.h2>
      </motion.div>
    </div>
  );
};

const KnowledgeParticle = ({ index }: { index: number }) => {
  const formulas = ['π', '∑', '∫', '∆', '∞', '√', 'α', 'β'];
  const content = formulas[index % formulas.length];

  const radius = Math.random() * 180 + 140;
  const angle = (index * 2 * Math.PI) / 8;
  const color = '#F77F00';

  return (
    <motion.div
      className="absolute flex items-center justify-center font-semibold text-lg select-none"
      style={{
        width: '28px',
        height: '28px',
        background: `radial-gradient(circle, ${color}10, ${color}05)`,
        border: `1px solid ${color}15`,
        borderRadius: '50%',
        color: color,
        opacity: 0.4,
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
          Math.cos(angle + Math.PI * 0.1) * (radius + 15),
          Math.cos(angle) * radius,
        ],
        y: [
          Math.sin(angle) * radius,
          Math.sin(angle + Math.PI * 0.1) * (radius + 15),
          Math.sin(angle) * radius,
        ],
        opacity: [0, 0.3, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 15 + Math.random() * 5,
        repeat: Infinity,
        delay: index * 3,
        ease: "easeInOut",
      }}
    >
      {content}
    </motion.div>
  );
};

const FloatingEducationElement = ({ index }: { index: number }) => {
  const elements = [
    { icon: BookOpen, color: '#F77F00' },
    { icon: GraduationCap, color: '#003049' },
    { icon: Brain, color: '#D62828' },
    { icon: Lightbulb, color: '#FCBF49' },
    { icon: Globe2, color: '#003049' },
    { icon: Users, color: '#D62828' }
  ];

  const element = elements[index % elements.length];
  const Icon = element.icon;
  const angle = (index / 6) * Math.PI * 2;
  const radius = 220 + Math.random() * 100;
  const size = 32;

  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-xl"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `linear-gradient(135deg, ${element.color}08, ${element.color}04)`,
        border: `1px solid ${element.color}20`,
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
          Math.cos(angle + Math.PI * 0.2) * (radius + 20),
          Math.cos(angle) * radius,
        ],
        y: [
          Math.sin(angle) * radius,
          Math.sin(angle + Math.PI * 0.2) * (radius + 20),
          Math.sin(angle) * radius,
        ],
        opacity: [0, 0.4, 0],
        scale: [0.5, 1, 0.5],
        rotate: [0, 360],
      }}
      transition={{
        duration: 12 + Math.random() * 6,
        repeat: Infinity,
        delay: index * 2,
        ease: "easeInOut",
      }}
    >
      <Icon
        size={16}
        color={element.color}
        style={{ opacity: 0.6 }}
      />
    </motion.div>
  );
};

// Floating subject badges
const FloatingSubjectBadge = ({ index }: { index: number }) => {
  const subjects = [
    { name: 'Math', color: '#F77F00' },
    { name: 'Science', color: '#003049' },
    { name: 'English', color: '#D62828' },
    { name: 'History', color: '#FCBF49' },
    { name: 'Art', color: '#F77F00' },
    { name: 'Music', color: '#003049' }
  ];

  const subject = subjects[index % subjects.length];
  const angle = (index / 6) * Math.PI * 2;
  const radius = 300 + Math.random() * 60;

  return (
    <motion.div
      className="absolute flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium select-none"
      style={{
        background: `linear-gradient(135deg, ${subject.color}08, ${subject.color}04)`,
        border: `1px solid ${subject.color}20`,
        color: subject.color,
        backdropFilter: 'blur(2px)',
        opacity: 0.6,
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
          Math.cos(angle + Math.PI * 0.1) * (radius + 25),
          Math.cos(angle) * radius,
        ],
        y: [
          Math.sin(angle) * radius,
          Math.sin(angle + Math.PI * 0.1) * (radius + 25),
          Math.sin(angle) * radius,
        ],
        opacity: [0, 0.5, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 14 + Math.random() * 4,
        repeat: Infinity,
        delay: index * 2.5,
        ease: "easeInOut",
      }}
    >
      {subject.name}
    </motion.div>
  );
};

// Floating study tools
const FloatingStudyTool = ({ index }: { index: number }) => {
  const tools = ['📚', '✏️', '📐', '🔬', '🎨', '🎵'];
  const tool = tools[index % tools.length];
  const angle = (index / 6) * Math.PI * 2;
  const radius = 350 + Math.random() * 50;

  return (
    <motion.div
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
        delay: index * 3,
        ease: "easeInOut",
      }}
    >
      {tool}
    </motion.div>
  );
};

// Subtle network connection lines representing online learning
const NetworkConnections = () => {
  const connections = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    startAngle: (i * Math.PI * 2) / 3,
    endAngle: ((i + 1) * Math.PI * 2) / 3,
    radius: 280,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {connections.map((connection) => {
        const startX = Math.cos(connection.startAngle) * connection.radius;
        const startY = Math.sin(connection.startAngle) * connection.radius;
        const endX = Math.cos(connection.endAngle) * connection.radius;
        const endY = Math.sin(connection.endAngle) * connection.radius;

        return (
          <motion.svg
            key={connection.id}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: -1 }}
          >
            <motion.line
              x1={`${50 + (startX / 600) * 100}%`}
              y1={`${50 + (startY / 600) * 100}%`}
              x2={`${50 + (endX / 600) * 100}%`}
              y2={`${50 + (endY / 600) * 100}%`}
              stroke="#F77F00"
              strokeWidth="1"
              strokeOpacity="0.15"
              strokeDasharray="3,6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.2, 0],
                strokeDashoffset: [0, -9]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: connection.id * 2,
                ease: "easeInOut"
              }}
            />
          </motion.svg>
        );
      })}
    </div>
  );
};

// Subtle floating book pages animation
const FloatingBookPages = () => {
  const pages = Array.from({ length: 2 }, (_, i) => ({
    id: i,
    angle: (i * Math.PI),
    radius: 320,
    delay: i * 4,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {pages.map((page) => {
        const x = Math.cos(page.angle) * page.radius;
        const y = Math.sin(page.angle) * page.radius;

        return (
          <motion.div
            key={page.id}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0.3, 1, 0.3],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: page.delay,
              ease: "easeInOut",
            }}
          >
            {/* Simplified book page */}
            <div
              className="relative w-8 h-10 rounded-r-md"
              style={{
                background: 'linear-gradient(135deg, #EAE2B708, #F5F5DC05)',
                border: '1px solid #D4C5A915',
                opacity: 0.6,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

const LogoAnimation = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const controls = useAnimation();

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMouseX(x);
    setMouseY(y);
  };

  useEffect(() => {
    controls.start({
      rotateY: mouseX * 20,
      rotateX: -mouseY * 20,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        opacity: { duration: 1, ease: "easeOut" },
        scale: { duration: 1, ease: "easeOut" }
      }
    });
  }, [mouseX, mouseY, controls]);

  return (
    <div
      className="relative inline-block perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setMouseX(0);
        setMouseY(0);
      }}
    >
      <motion.div
        className="relative"
        animate={controls}
        initial={{ scale: 0.8, opacity: 0 }}
      >
        {/* Knowledge Particles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 15 }).map((_, i) => (
            <KnowledgeParticle key={i} index={i} />
          ))}
        </div>

        {/* Glowing effect */}
        <motion.div
          className="absolute -inset-4 rounded-full"
          animate={{
            background: [
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
              "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
            ],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Logo */}
        <motion.div
          className="relative transform-gpu"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <div
            className="relative mx-auto w-[200px] mb-16 drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.2))",
            }}
          >
            <img
              src="https://ik.imagekit.io/quadrate/Studytomy/Studytomy_Logobook-02.png?updatedAt=1731862139834"
              alt="Studytomy Logo"
              width={200}
              height={200}
              loading="eager"
              fetchPriority="high"
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Floating educational elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <FloatingEducationElement key={i} index={i} />
          ))}
        </div>

        {/* Subject badges */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <FloatingSubjectBadge key={i} index={i} />
          ))}
        </div>

        {/* Study tools */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <FloatingStudyTool key={i} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Animated Background - Dynamically loaded 3D Scene */}
      <Scene3D />

      {/* Dynamic learning pulse overlay */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(247, 127, 0, 0.1) 0%, rgba(252, 191, 73, 0.05) 30%, transparent 60%)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 pt-16 pb-20">
        <div className="container mx-auto px-4 text-center mb-12">
          {/* Logo Section with negative margin */}
          <div className="relative -mb-16">
            <LogoAnimation />
          </div>

          {/* Hero Text Section with higher z-index */}
          <div className="relative z-20">
            <AnimatedText texts={heroTexts} />
            <HeroButton />
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-center">
                <GraduationCap className="h-12 w-12 text-[#F77F00]" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-[#003049]">Expert Tutors</h3>
              <p className="mt-2 text-base text-gray-600">Qualified teachers from top institutions</p>
            </motion.div>

            <motion.div
              className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-[#F77F00]" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-[#003049]">1-on-1 Sessions</h3>
              <p className="mt-2 text-base text-gray-600">Personalized attention and feedback</p>
            </motion.div>

            <motion.div
              className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-center">
                <Globe2 className="h-12 w-12 text-[#F77F00]" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-[#003049]">Global Reach</h3>
              <p className="mt-2 text-base text-gray-600">Connect with tutors worldwide</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Particles */}
      {/* Network connections for online learning theme */}
      <NetworkConnections />

      {/* Floating book pages for interactive learning */}
      <FloatingBookPages />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <KnowledgeParticle key={i} index={i} />
        ))}
        {[...Array(12)].map((_, i) => (
          <FloatingEducationElement key={`education-${i}`} index={i} />
        ))}
        {[...Array(6)].map((_, i) => (
          <FloatingSubjectBadge key={`subject-${i}`} index={i} />
        ))}
        {[...Array(6)].map((_, i) => (
          <FloatingStudyTool key={`tool-${i}`} index={i} />
        ))}
      </div>
    </section>
  );
}
