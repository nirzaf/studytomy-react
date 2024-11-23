import { GraduationCap, Users, Globe2 } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import HeroButton from './HeroButton';
import { useEffect, useState } from 'react';

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
            className="relative mx-auto w-[200px] mb-8 drop-shadow-2xl"
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
      <div className="relative z-10 pt-16 pb-20">
        {/* Logo Section */}
        <div className="container mx-auto px-4 text-center mb-12">
          <LogoAnimation />
          <h1 className="text-4xl md:text-5xl font-bold text-[#003049] mb-6">
            Transform Your Learning Journey
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
            With Expert Tutors Worldwide
          </h2>
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
    </section>
  );
}