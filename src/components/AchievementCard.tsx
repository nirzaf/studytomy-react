import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Achievement {
  studentName: string;
  exam: string;
  subject: string;
  achievement: string;
}

const AchievementCard = () => {
  const achievement: Achievement = {
    studentName: "Fathima Alfassy",
    exam: "IAS EDEXCEL",
    subject: "Accounting",
    achievement: "Top in Qatar"
  };

  return (
    <div className="w-full flex justify-center items-center px-4 my-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        className="relative w-full max-w-xl overflow-hidden"
      >
        {/* Background with gradient border */}
        <div className="bg-gradient-to-br from-yellow-400 via-purple-600 to-pink-500 p-1.5 rounded-2xl shadow-lg">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col items-center text-center">
              
              {/* Top Achievement section - Now First */}
              <div className="relative mb-8">
                <motion.div
                  className="relative"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Main achievement container */}
                  <div className="relative">
                    {/* Background glow effects */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 opacity-75 blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Main content container */}
                    <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl p-[2px] overflow-hidden">
                      {/* Animated border */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                        }}
                        animate={{
                          x: ['-200%', '200%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      {/* Content background with inner glow */}
                      <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl px-10 py-3 overflow-hidden">
                        {/* Text container with effects */}
                        <div className="relative">
                          {/* Text shadow for depth */}
                          <div className="absolute inset-0 filter blur-[2px] text-white/50">
                            <span className="text-lg uppercase font-black tracking-[0.2em] font-serif">
                              Top Achievement
                            </span>
                          </div>

                          {/* Main text with shimmer */}
                          <motion.div
                            className="relative"
                            animate={{
                              scale: [1, 1.02, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <span className="relative text-lg uppercase font-black tracking-[0.2em] text-white font-serif" 
                                  style={{ 
                                    textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)',
                                  }}>
                              Top Achievement
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Congratulations Text - Now Second */}
              <motion.div
                className="relative mb-8"  // Reduced margin
                initial={{ y: -80, opacity: 0 }}
                animate={{ 
                  y: [-80, 10, 0, 5, 0],
                  opacity: 1
                }}
                transition={{
                  y: {
                    duration: 1.2,
                    times: [0, 0.5, 0.7, 0.85, 1],
                    ease: "easeOut"
                  },
                  opacity: { duration: 0.3 }
                }}
              >
                <div className="relative">
                  {/* Text shadow for depth */}
                  <div className="absolute inset-0 filter blur-[1px] opacity-50">
                    <span className="text-3xl text-orange-400" style={{ fontFamily: 'Pacifico, cursive' }}>
                      Congratulations!
                    </span>
                  </div>
                  
                  {/* Main text with gradient */}
                  <motion.span 
                    className="relative inline-block text-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-transparent bg-clip-text"
                    style={{
                      fontFamily: 'Pacifico, cursive',
                      WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    Congratulations!
                  </motion.span>
                  
                  {/* Impact effect particles */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                    }}
                  >
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full"
                        style={{
                          left: '50%',
                          top: '100%',
                        }}
                        animate={{
                          x: Math.cos(i * Math.PI / 4) * 30,
                          y: Math.sin(i * Math.PI / 4) * 30,
                          scale: [1, 0],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 0.6,
                          delay: 0.5,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Continuous sparkle effect */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full"
                      style={{
                        left: `${25 + (i * 15)}%`,
                        top: '50%',
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Student Name - Now Third */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8"
              >
                {achievement.studentName}
              </motion.h3>

              {/* Achievement Details - Now Fourth */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2 mb-8"  // Reduced margin
              >
                <p className="text-purple-600 font-bold text-lg">
                  {achievement.achievement} in {achievement.subject}
                </p>
                <p className="text-gray-600 font-medium">
                  {achievement.exam}
                </p>
              </motion.div>

              {/* Join Button - Now Last */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/join"
                  className="inline-flex items-center px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
                >
                  Join Studytomy Today
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced decorative elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
          className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500 rounded-full blur-xl"
        />
      </motion.div>
    </div>
  );
};

export default AchievementCard;