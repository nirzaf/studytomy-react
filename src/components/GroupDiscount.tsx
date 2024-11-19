import { motion } from 'framer-motion';
import { Users, Gift, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-xl shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-orange-500 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default function GroupDiscount() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Learning",
      description: "Learn together with friends and save up to 30% on group bookings of 3 or more students."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Refer & Earn",
      description: "Get $20 off your next session when you refer a friend. Your friend gets 20% off their first booking!"
    },
    {
      icon: <Percent className="w-8 h-8" />,
      title: "Special Rates",
      description: "Enjoy exclusive discounts on long-term bookings and premium study materials."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Better Together, Better Savings!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join with friends or refer others to unlock exclusive discounts and make your learning journey more affordable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-2xl shadow-xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Saving?
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            Contact us now to learn more about our group discounts and referral benefits!
          </p>
          <Link to="/book-trial">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}