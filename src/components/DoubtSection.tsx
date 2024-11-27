import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircleQuestion, ArrowRight, Clock, Users, Star } from 'lucide-react';

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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 -top-4 w-24 h-24 rounded-full bg-white/10 blur-xl" />
        <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-white/10 blur-xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-2"
            >
              <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm inline-block">
                <MessageCircleQuestion className="w-5 h-5 text-white" />
              </div>
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
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-4 h-4" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Users className="w-4 h-4" />
                <span className="text-sm">Expert Tutors</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Star className="w-4 h-4" />
                <span className="text-sm">Pay as you go</span>
              </div>
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
                         flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
              >
                Clear Your Doubts
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}