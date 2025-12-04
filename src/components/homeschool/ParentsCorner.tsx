import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

const ParentsCorner = () => {
  const benefits = [
    {
      title: "No More Commuting or Relocating",
      description: "Eliminate lengthy commutes and costly relocations. Access top-tier programs from anywhere in the world."
    },
    {
      title: "Choose Your Ideal Learning Environment",
      description: "Customize your study space - whether it's a quiet home office, cozy café, or peaceful park."
    },
    {
      title: "Earn While You Learn",
      description: "Balance work and education easily with flexible online courses while upgrading your skills."
    },
    {
      title: "Endless Course Options",
      description: "Access a vast range of learning opportunities from full degrees to specialized certifications."
    },
    {
      title: "Access to Elite Institutions",
      description: "Learn from world-class institutions like Yale, Google, and MIT with just a laptop."
    },
    {
      title: "Flexible Scheduling and Pacing",
      description: "Control your own pace with self-paced courses or accelerated learning options."
    },
    {
      title: "Cost-Effective Education",
      description: "Enjoy lower tuition fees and save on commuting, housing, and textbook costs."
    },
    {
      title: "Global Networking Opportunities",
      description: "Connect with professors and peers worldwide, enriching your learning experience."
    },
    {
      title: "Develop Essential Career Skills",
      description: "Enhance crucial skills in time management, self-discipline, and digital literacy."
    },
    {
      title: "Accredited and Respected Credentials",
      description: "Earn fully accredited online degrees and certificates that hold the same value as traditional degrees."
    }
  ];

  return (
    <section className="py-16 bg-white" id="parents-corner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 inline-flex items-center px-4 py-2 bg-gray-50 rounded-lg shadow-sm"
        >
          <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-gray-900">Parent's Corner</span>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            10 Surprising Benefits of Online Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Online learning has become a game-changer in education, offering students and professionals 
            a flexible and cost-effective way to acquire new skills and credentials.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </span>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Elevate Your Learning Experience?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Whether you're looking to enhance your career or embark on a new academic journey, 
            online learning provides an effective, flexible, and affordable way to achieve your goals.
          </p>
          <Link
            href="/book-trial"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
          >
            Discover Our Programs
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ParentsCorner;
