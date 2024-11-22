import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Gift } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Achievement {
  studentName: string;
  exam: string;
  subject: string;
  achievement: string;
}

const AchievementPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isGiftOpened, setIsGiftOpened] = useState(false);

  const achievement: Achievement = {
    studentName: "Fathima Alfassy",
    exam: "IAS EDEXCEL",
    subject: "Accounting",
    achievement: "Top in Qatar"
  };

  useEffect(() => {
    // Check if the popup has been shown before
    const hasSeenPopup = localStorage.getItem('hasSeenAchievementPopup');
    
    if (!hasSeenPopup) {
      // If not shown before, show it after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Open gift box after 1 second of popup appearing
        setTimeout(() => setIsGiftOpened(true), 1000);
        // Hide popup after 2 seconds of being visible
        setTimeout(() => setIsVisible(false), 4000);
        // Mark as shown in localStorage
        localStorage.setItem('hasSeenAchievementPopup', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.8 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
          />

          <motion.div
            className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 p-1 rounded-2xl shadow-xl max-w-md w-full"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative bg-white rounded-2xl p-6 overflow-hidden">
              {/* Gift Box Animation */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ 
                  scale: isGiftOpened ? [1, 1.2, 0] : 1,
                  rotateY: isGiftOpened ? 180 : 0
                }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <Gift className={`w-20 h-20 text-pink-500 ${isGiftOpened ? 'opacity-0' : 'opacity-100'}`} />
              </motion.div>

              {/* Sparkles Animation */}
              {isGiftOpened && (
                <div className="absolute inset-0 z-10">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        opacity: 1,
                        scale: 0,
                        x: "50%",
                        y: "50%"
                      }}
                      animate={{ 
                        opacity: 0,
                        scale: 1,
                        x: `${Math.random() * 100}%`,
                        y: `${Math.random() * 100}%`
                      }}
                      transition={{ 
                        duration: 1.5,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                    />
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="relative z-30">
                <div className="text-center mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-lg font-bold mb-4"
                  >
                    🎉 Congratulations! 🎉
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-purple-600 font-medium mb-2"
                  >
                    Proud Studytomy Student
                  </motion.div>
                  
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold text-gray-800 mb-2"
                  >
                    {achievement.studentName}
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-2 mb-3"
                  >
                    <Trophy className="w-6 h-6 text-yellow-500" />
                    <span className="font-semibold text-xl text-purple-600">{achievement.achievement}</span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4"
                >
                  <div className="text-center">
                    <p className="text-gray-600 mb-2 flex items-center justify-center gap-2">
                      <span className="font-medium uppercase">{achievement.exam}</span>
                    </p>
                    <p className="text-purple-600 font-semibold text-lg">
                      {achievement.subject}
                    </p>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center text-gray-600 text-sm"
                >
                  <Link 
                    to="/book-trial" 
                    className="text-purple-600 hover:text-purple-700 font-medium underline decoration-2 decoration-purple-400 hover:decoration-purple-600 transition-colors"
                  >
                    Join
                  </Link>
                  {" Studytomy to unlock your full potential!"}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementPopup;