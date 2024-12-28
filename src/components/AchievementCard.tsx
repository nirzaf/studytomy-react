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
              duration: 0.6,
              type: "spring",
              stiffness: 180,
              damping: 18
            }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
            className="relative w-full max-w-xl overflow-hidden rounded-xl shadow-xl"
        >
          {/* Background with gradient border and image */}
          <div className="relative bg-gradient-to-br from-[#003049] to-[#2b2e44] p-0.5 rounded-xl">
            {/* Background image with overlay */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <img
                src="https://ik.imagekit.io/mhvgbp9xk/f8881f47-749d-42f8-862b-27a599e17b99.png?updatedAt=1728447548634"
                alt="Achievement background"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#003049]/95 via-[#2b2e44]/90 to-[#2b2e44]/95 backdrop-blur-sm" />
            </div>

            <div className="relative rounded-xl p-8 sm:p-10">
              <div className="flex flex-col items-center text-center">
                {/* Top Achievement section */}
                <div className="relative mb-6">
                  <motion.div
                      className="relative"
                      animate={{
                        y: [0, -6, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                  >
                    {/* Achievement badge */}
                    <div className="relative">
                      <motion.div
                          className="absolute inset-0 rounded-md bg-[#F77F00]/40 blur-md"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.4, 0.6, 0.4],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                      />
                      <div className="relative bg-[#F77F00] rounded-md px-8 py-2 shadow-md">
                        <span className="text-lg uppercase font-bold tracking-wide text-[#003049] font-sans drop-shadow">
                          Top Achievement
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Congratulations Text */}
                <div ref={congratsRef} className="mb-6">
                  <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className="text-3xl md:text-4xl font-script text-[#FCBF49] drop-shadow-md"
                      style={{ fontFamily: 'Brush Script MT, cursive' }}
                  >
                    Congratulations!
                  </motion.div>
                </div>

                {/* Student Name */}
                <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold font-serif mb-4 text-[#EAE2B7] drop-shadow-md"
                >
                  {achievement.studentName}
                </motion.h3>

                {/* Studytomy Student */}
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-md font-medium text-white mb-6 drop-shadow"
                >
                  A proud student of <span className="font-bold">Studytomy</span>
                </motion.p>

                {/* Achievement Details */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3 mb-8"
                >
                  <div className="relative">
                    <p className="text-xl md:text-2xl font-semibold text-white drop-shadow-md">
                      {achievement.achievement} in {achievement.subject}
                    </p>
                    <p className="text-lg font-medium text-[#EAE2B7]/90 mt-1 drop-shadow">
                      {achievement.exam}
                    </p>
                  </div>
                </motion.div>

                {/* Join Button */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <Link
                      to="/book-trial"
                      className="inline-flex items-center px-8 py-3 text-lg font-semibold text-[#EAE2B7] bg-[#D62828] rounded-md hover:bg-[#953137] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Join Studytomy Today
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute top-10 left-10 w-20 h-20 bg-[#FCBF49] rounded-full blur-xl opacity-30"
          />
          <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, -10, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-10 right-10 w-20 h-20 bg-[#F77F00] rounded-full blur-xl opacity-30"
          />
           <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
              className="absolute top-2/4 -translate-y-1/2 right-0 w-16 h-16 bg-[#FC8862] rounded-full blur-2xl opacity-20"
          />
        </motion.div>
      </div>
  );
};

export default AchievementCard;