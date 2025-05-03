import { motion } from 'framer-motion';
import AchievementCard from './AchievementCard';

const AchievementCardSection = () => {
  return (
    <div className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-[#003049]/5 to-[#2b2e44]/10 rounded-3xl my-12 mx-auto max-w-5xl">
      {/* Visible Celebration Animation Elements */}
      
      {/* Confetti elements - larger and more visible */}
      <div className="confetti confetti-1" style={{ width: '25px', height: '25px' }}></div>
      <div className="confetti confetti-2" style={{ width: '20px', height: '20px' }}></div>
      <div className="confetti confetti-3" style={{ width: '28px', height: '28px' }}></div>
      <div className="confetti confetti-4" style={{ width: '18px', height: '18px' }}></div>
      
      {/* Additional confetti with different sizes and positions - larger and more visible */}
      <div className="confetti" style={{ backgroundColor: '#FCBF49', width: '15px', height: '15px', top: '40%', left: '5%' }}>
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full"
        />
      </div>
      
      <div className="confetti" style={{ backgroundColor: '#F77F00', width: '22px', height: '22px', top: '70%', right: '15%' }}>
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full"
        />
      </div>
      
      {/* Star elements */}
      <div className="star star-1"></div>
      <div className="star star-2"></div>
      <div className="star star-3"></div>
      <div className="star star-4"></div>
      
      {/* Additional stars with Framer Motion for more dynamic movement */}
      <motion.div 
        className="absolute"
        style={{ top: '60%', left: '80%' }}
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
          rotate: [0, 180, 360],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="star" style={{ borderBottomColor: '#D62828' }}></div>
      </motion.div>
      
      <motion.div 
        className="absolute"
        style={{ top: '20%', right: '5%' }}
        animate={{
          y: [0, 50, 0],
          x: [0, 20, 0],
          rotate: [0, -180, -360],
          scale: [1, 0.7, 1]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="star" style={{ borderBottomColor: '#EAE2B7' }}></div>
      </motion.div>
      
      {/* Decorative gradient blobs - larger and more visible */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-[#FCBF49]/20 rounded-full blur-xl float-up"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#F77F00]/20 rounded-full blur-xl float-down"></div>
      <div className="absolute top-1/3 right-20 w-40 h-40 bg-[#D62828]/20 rounded-full blur-xl float-left"></div>
      <div className="absolute bottom-1/3 left-20 w-52 h-52 bg-[#EAE2B7]/20 rounded-full blur-xl float-right"></div>
      
      {/* Achievement Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <AchievementCard />
      </motion.div>
    </div>
  );
};

export default AchievementCardSection;
