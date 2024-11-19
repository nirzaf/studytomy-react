import { Link } from 'react-router-dom';
import { GraduationCap, Users, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

const featureVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  })
};

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="https://ik.imagekit.io/quadrate/Studytomy/studytomy-hero-image.jpg?updatedAt=1732017205290"
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
          <img 
            src="https://ik.imagekit.io/quadrate/Studytomy/Studytomy_Logobook-02.png?updatedAt=1731862139834"
            alt="Studytomy Logo"
            className="mx-auto w-[200px] mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-[#003049] mb-6">
            Transform Your Learning Journey
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
            With Expert Tutors Worldwide
          </h2>
          <Link 
            to="/book-trial"
            className="inline-block bg-[#F77F00] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#FCBF49] transition-colors"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              custom={0}
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
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              custom={1}
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
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              custom={2}
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