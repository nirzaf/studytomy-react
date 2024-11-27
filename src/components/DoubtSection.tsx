import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleQuestion, ArrowRight, Clock, Users, Star, Sparkles } from 'lucide-react';

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const sparkleVariants = {
  initial: { scale: 0, rotate: 0 },
  animate: {
    scale: [0, 1, 0],
    rotate: [0, 180, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1
    }
  }
};

export default function DoubtSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 py-8 sm:py-10 relative overflow-hidden"
    >
      {/* Animated background circles */}
      <motion.div 
        animate={{
          background: [
            "linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
            "linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.1))",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -left-4 -top-4 w-24 h-24 rounded-full bg-white/10 blur-xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-white/10 blur-xl" 
        />
      </motion.div>

      {/* Floating sparkles */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            variants={sparkleVariants}
            initial="initial"
            animate="animate"
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
          >
            <Sparkles className="w-4 h-4 text-white/30" />
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="flex items-center gap-2 mb-2"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-white/20 p-2 rounded-full backdrop-blur-sm inline-block"
              >
                <MessageCircleQuestion className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-white/90 font-medium">Instant Doubt Clearing</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl font-bold text-white mb-2"
            >
              Got Questions? We've Got Answers!
            </motion.h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3">
              {[
                { icon: Clock, text: "24/7 Support" },
                { icon: Users, text: "Expert Tutors" },
                { icon: Star, text: "Pay as you go" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-white/90"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex-shrink-0"
          >
            <Link to="/contact" className="inline-block group">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-orange-600 px-6 py-3 rounded-full font-medium 
                         shadow-lg shadow-orange-600/20 hover:shadow-orange-600/30
                         flex items-center gap-2 group-hover:gap-3 transition-all duration-300
                         relative overflow-hidden"
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  className="relative z-10"
                >
                  Clear Your Doubts
                </motion.span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-50 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}