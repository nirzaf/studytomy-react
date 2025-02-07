import { motion } from 'framer-motion';
import { Calendar, BookOpen, Clock, Video } from 'lucide-react';

const ParentsCorner = () => {
  const resources = [
    {
      title: "Screen Time & Study Balance",
      icon: <Clock className="w-6 h-6" />,
      description: "Learn effective strategies to manage your child's screen time while maintaining productive study habits.",
      link: "#screen-time"
    },
    {
      title: "Educational Resources",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Access curated materials to support your child's learning journey at home.",
      link: "#resources"
    },
    {
      title: "Expert Webinars",
      icon: <Video className="w-6 h-6" />,
      description: "Join live sessions with child psychologists and educators for valuable insights.",
      link: "#webinars"
    },
    {
      title: "Upcoming Events",
      icon: <Calendar className="w-6 h-6" />,
      description: "Stay updated with our calendar of parent workshops and educational events.",
      link: "#events"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Parent's Corner</h1>
        <p className="text-xl text-gray-600">
          Empowering parents to support their children's educational journey
        </p>
      </motion.div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  {resource.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">
                  {resource.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a
                href={resource.link}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Upcoming Webinars Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-7xl mx-auto mt-16 bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Webinars</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-sm text-blue-600 mb-1">February 15, 2025 • 7:00 PM</p>
            <h3 className="text-xl font-semibold text-gray-900">Understanding Your Child's Learning Style</h3>
            <p className="text-gray-600">With Dr. Sarah Johnson, Educational Psychologist</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-sm text-blue-600 mb-1">February 22, 2025 • 7:00 PM</p>
            <h3 className="text-xl font-semibold text-gray-900">Effective Parent-Teacher Communication</h3>
            <p className="text-gray-600">With Prof. Michael Chen, Education Specialist</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ParentsCorner;
