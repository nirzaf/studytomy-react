import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

const AchievementCard = () => {
  const congratsRef = useRef(null);
  const isInView = useInView(congratsRef, { once: true, amount: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse movement animation setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  // Spring animations for smoother movement
  const springConfig = { damping: 20, stiffness: 300 };
  const scaleSpring = useSpring(1, springConfig);
  
  function handleMouseMove(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseEnter() {
    setIsHovered(true);
    scaleSpring.set(1.02);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    scaleSpring.set(1);
  }

  const handleJoinClick = () => {
    window.location.href = '/book-trial';
  };

  return (
    <div className="w-full flex justify-center items-center px-4 my-8">
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: scaleSpring,
          perspective: 1000
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-xl overflow-hidden rounded-xl shadow-xl"
      >
        <div className="relative bg-gradient-to-br from-[#003049] to-[#2b2e44] p-0.5 rounded-xl">
          <div className="relative rounded-xl p-8 sm:p-10">
            <div className="flex flex-col items-center text-center">
              {/* Congratulations Text */}
              <div ref={congratsRef} className="mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-script text-[#FCBF49] drop-shadow-md"
                  style={{ fontFamily: 'Brush Script MT, cursive' }}
                >
                  Celebrating Excellence
                </motion.div>
              </div>

              {/* Studytomy Pride Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
                className="mb-4"
              >
              </motion.div>

              {/* Student Name */}
              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold font-serif mb-2 text-[#EAE2B7] drop-shadow-md"
              >
                Fathima Alfassy
              </motion.h3>

              {/* Student of Studytomy - Enhanced Emphasis */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative mb-8"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.9, 1, 0.9],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div className="flex items-center space-x-2">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#FCBF49] to-transparent"/>
                    <span className="text-lg text-white">
                      Proud Student of{' '}
                      <motion.span
                        animate={{
                          color: ['#FCBF49', '#F77F00', '#FCBF49'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="font-bold text-xl"
                      >
                        Studytomy
                      </motion.span>
                    </span>
                    <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#FCBF49] to-transparent"/>
                  </div>
                </motion.div>
              </motion.div>

              {/* Achievement Details */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#003049]/30 p-4 rounded-lg mb-8 backdrop-blur-sm"
              >
                <motion.p 
                  className="text-xl md:text-2xl font-semibold text-white drop-shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  Top in Qatar in Accounting
                </motion.p>
                <motion.p 
                  className="text-lg font-medium text-[#FCBF49]/90 mt-1 drop-shadow"
                  whileHover={{ scale: 1.05 }}
                >
                  IAS EDEXCEL
                </motion.p>
              </motion.div>

              {/* Join Button */}
              <motion.button
                onClick={handleJoinClick}
                className="relative inline-flex items-center px-8 py-3 text-lg font-semibold text-[#EAE2B7] bg-[#D62828] rounded-md hover:bg-[#953137] transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative">
                  Join Studytomy
                  <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>

              {/* Interactive Particles */}
              {isHovered && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial="hidden"
                  animate="visible"
                >
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-[#FCBF49] rounded-full"
                      initial={{ 
                        x: 0, 
                        y: 0, 
                        opacity: 0 
                      }}
                      animate={{
                        x: [0, (Math.random() - 0.5) * 200],
                        y: [0, (Math.random() - 0.5) * 200],
                        opacity: [1, 0],
                        scale: [1, 0],
                      }}
                      transition={{
                        duration: 1 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 0.5,
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AchievementCard;