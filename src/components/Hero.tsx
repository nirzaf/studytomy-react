import { GraduationCap, Users, Globe2 } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import HeroButton from './HeroButton';
import { useEffect, useState } from 'react';

// Animation text content
const heroTexts = [
  {
    title: "Transform Your Learning Journey",
    subtitle: "With Expert Tutors Worldwide"
  },
  {
    title: "Personalized 1-on-1 Learning",
    subtitle: "Tailored to Your Academic Goals"
  },
  {
    title: "Expert IGCSE & IB Tutoring",
    subtitle: "From Experienced Educators"
  },
  {
    title: "Flexible Online Sessions",
    subtitle: "Learn at Your Own Pace"
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

  const containerVariants = {
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
        ease: [0.43, 0.13, 0.23, 0.96],
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

  const wordVariants = {
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

const Particle = ({ index }: { index: number }) => {
  const radius = Math.random() * 100 + 50;
  const angle = (index * 2 * Math.PI) / 12;
  const size = Math.random() * 8 + 4; // Random size between 4-12px
  
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 40%, rgba(247, 127, 0, 0.05) 60%, rgba(255, 255, 255, 0.1) 100%)',
        boxShadow: `
          inset -2px -2px 4px rgba(0, 0, 0, 0.1),
          inset 2px 2px 4px rgba(255, 255, 255, 0.5),
          0 0 8px rgba(255, 255, 255, 0.3)
        `,
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
          Math.cos(angle + Math.PI) * (radius + 20),
          Math.cos(angle) * radius,
        ],
        y: [
          Math.sin(angle) * radius,
          Math.sin(angle + Math.PI) * (radius + 20),
          Math.sin(angle) * radius,
        ],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
        rotate: [0, 360],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay: index * 0.3,
        ease: "easeInOut",
      }}
    >
      {/* Bubble shine effect */}
      <div 
        className="absolute w-[30%] h-[30%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
          top: '20%',
          left: '20%',
          transform: 'rotate(-45deg)',
        }}
      />
    </motion.div>
  );
};

const FloatingBubble = ({ index }: { index: number }) => {
  const size = Math.random() * 6 + 3; // Random size between 3-9px
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 40%, rgba(247, 127, 0, 0.05) 60%, rgba(255, 255, 255, 0.1) 100%)',
        boxShadow: `
          inset -1px -1px 2px rgba(0, 0, 0, 0.1),
          inset 1px 1px 2px rgba(255, 255, 255, 0.5),
          0 0 4px rgba(255, 255, 255, 0.3)
        `,
      }}
      initial={{
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        scale: 0,
        opacity: 0,
      }}
      animate={{
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        scale: [0, 1, 0],
        opacity: [0, 0.7, 0],
        rotate: 360,
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: index * 0.5,
        ease: "easeInOut",
      }}
    >
      <div 
        className="absolute w-[30%] h-[30%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
          top: '20%',
          left: '20%',
          transform: 'rotate(-45deg)',
        }}
      />
    </motion.div>
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
        {/* Particles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 15 }).map((_, i) => (
            <Particle key={i} index={i} />
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
          <motion.img
            src="https://ik.imagekit.io/quadrate/Studytomy/Studytomy_Logobook-02.png?updatedAt=1731862139834"
            alt="Studytomy Logo"
            className="relative mx-auto w-[200px] mb-16 drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.2))",
            }}
          />
        </motion.div>

        {/* Floating bubbles */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <FloatingBubble key={i} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="https://ik.imagekit.io/quadrate/Studytomy/studytomy-hero-image-compressed.jpg?updatedAt=1732129621752"
          alt="Studytomy Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-30 pt-16 pb-20">
        {/* Hero Content Section */}
        <div className="container mx-auto px-4 text-center">
          {/* Logo Section */}
          <div className="relative z-20 mb-16 md:mb-8">  
            <LogoAnimation />
          </div>
          <div className="relative z-40">  
            <div className="h-[180px] md:h-[160px] flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-0">  
              <AnimatedText texts={heroTexts} />
            </div>
          </div>

          <HeroButton />
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

      {/* Add floating particles for visual enhancement */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}
        {[...Array(20)].map((_, i) => (
          <FloatingBubble key={i} index={i} />
        ))}
      </div>
    </section>
  );
}