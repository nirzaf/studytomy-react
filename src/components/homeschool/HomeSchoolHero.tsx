import { motion } from 'framer-motion';
import Link from 'next/link';

const HomeSchoolHero = () => {
  return (
    <section className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://ik.imagekit.io/quadrate/Studytomy/photo-1584697964069-229fdf62aa30_q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA_3D_3D?updatedAt=1731864318174"
          alt="Homeschooling Environment" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Home Into A 
            <span className="text-orange-500"> Learning Paradise</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Discover the freedom of personalized education with our comprehensive homeschooling solutions.
          </p>
          <Link 
            href="/book-trial"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSchoolHero;
