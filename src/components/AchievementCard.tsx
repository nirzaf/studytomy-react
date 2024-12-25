import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

interface Achievement {
  studentName: string;
  exam: string;
  subject: string;
  achievement: string;
}

const AchievementCard = () => {
  const congratsRef = useRef(null);
  const isInView = useInView(congratsRef, { once: true, amount: 0.5 });

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
          {/* Background with gradient border and image */}
          <div className="relative bg-gradient-to-br from-yellow-400 via-purple-600 to-pink-500 p-1.5 rounded-2xl shadow-lg">
            {/* Background image with overlay */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img 
                src="https://ik.imagekit.io/mhvgbp9xk/f8881f47-749d-42f8-862b-27a599e17b99.png?updatedAt=1728447548634"
                alt="Achievement background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/85 to-pink-800/90 backdrop-blur-[2px]" />
            </div>

            <div className="relative rounded-2xl p-8 sm:p-10">
              <div className="flex flex-col items-center text-center">
                {/* Top Achievement section */}
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
                    {/* Achievement badge */}
                    <div className="relative">
                      <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500/30 via-yellow-400/30 to-orange-500/30 opacity-75 blur-xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                      />

                      <div className="relative bg-gradient-to-r from-yellow-500/90 to-orange-500/90 rounded-xl p-[2px] overflow-hidden">
                        <div className="relative bg-gradient-to-br from-yellow-500/90 to-orange-500/90 rounded-xl px-10 py-3">
                          <span className="text-lg uppercase font-black tracking-[0.2em] text-white font-serif drop-shadow-lg">
                            Top Achievement
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Congratulations Text */}
                <div ref={congratsRef} className="mb-8">
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-4xl font-script text-white drop-shadow-lg"
                      style={{ fontFamily: 'Pacifico, cursive' }}
                  >
                    Congratulations!
                  </motion.div>
                </div>

                {/* Student Name */}
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl font-bold font-serif mb-8 text-white drop-shadow-lg"
                >
                  {achievement.studentName}
                </motion.h3>

                {/* Achievement Details */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4 mb-10"
                >
                  <div className="relative">
                    <p className="text-2xl font-semibold text-yellow-300 drop-shadow-lg">
                      {achievement.achievement} in {achievement.subject}
                    </p>
                    <p className="text-xl font-medium text-yellow-100/90 mt-2 drop-shadow">
                      {achievement.exam}
                    </p>
                  </div>
                </motion.div>

                {/* Join Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <Link
                      to="/join"
                      className="inline-flex items-center px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Join Studytomy Today
                    <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Decorative light effects */}
          <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl"
          />
          <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl"
          />
        </motion.div>
      </div>
  );
};

export default AchievementCard;