import { motion } from 'framer-motion';
import Link from 'next/link';

const HomeSchoolJoin = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Start Your Homeschooling Journey Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our community of successful homeschoolers and give your child the 
            personalized education they deserve.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSchoolJoin;
