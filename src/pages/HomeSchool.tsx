import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, Heart, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: Clock,
    title: "Flexible Learning Schedule",
    description: "Learn at your own pace and time, with schedules that adapt to your lifestyle.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Brain,
    title: "Personalized Learning",
    description: "Customized curriculum and teaching methods tailored to your learning style.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Heart,
    title: "Safe Learning Environment",
    description: "Create a comfortable and secure space for focused learning at home.",
    color: "bg-pink-50 text-pink-600"
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    description: "Set and achieve academic goals with structured learning paths.",
    color: "bg-green-50 text-green-600"
  }
];

const HomeSchool = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
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
              to="/book-trial"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Homeschooling?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 ${benefit.color} rounded-full flex items-center justify-center mb-4`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section 1 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-1 lg:order-1"
            >
              <h2 className="text-3xl font-bold text-gray-900">Personalized Learning Environment</h2>
              <p className="text-gray-600">
                Create an optimal learning environment that adapts to your child's unique needs and learning style.
                Our homeschooling approach ensures that every student can thrive in their educational journey.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-2"
            >
              <img 
                src="https://ik.imagekit.io/quadrate/Studytomy/photo-1610484826917-0f101a7bf7f4_q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA_3D_3D?updatedAt=1731864216199"
                alt="Personalized Learning Environment"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://ik.imagekit.io/quadrate/Studytomy/photo-1585314540237-13cb52fe9998_q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA_3D_3D?updatedAt=1731864285260"
                alt="Interactive Learning"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-gray-900">Understanding Homeschooling</h2>
              <p className="text-gray-600">
                Homeschooling provides education outside the conventional school system, 
                guided by parents, guardians, or tutors - either in person or online. 
                It offers a flexible, personalized approach where educational structures 
                and curriculum are tailored to each child's unique needs and learning style.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Section 2 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-1 lg:order-1"
            >
              <h2 className="text-3xl font-bold text-gray-900">Focused Learning Experience</h2>
              <p className="text-gray-600">
                Our structured approach to homeschooling combines the flexibility of learning from home
                with the rigor of a traditional academic curriculum, ensuring comprehensive educational development.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-2"
            >
              <img 
                src="https://ik.imagekit.io/quadrate/Studytomy/photo-1610484826625-ac2be7f1c8c1_q=80&w=2136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA_3D_3D?updatedAt=1731864243622"
                alt="Focused Learning Environment"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">Join Studytomy for Homeschooling Support</h2>
            <p className="text-xl text-gray-600 mb-12 text-justify">
              Enhance your homeschooling journey with Studytomy's specialized online tutoring services. Our expert tutors provide targeted academic support to complement and strengthen your homeschool curriculum, helping students excel in their educational goals.
            </p>
            <Link to="/book-trial">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl">
                Book a Free Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/61461367702" 
        className="fixed left-5 bottom-5 w-[60px] h-[60px] z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp"
          className="w-full h-full"
        />
      </a>
    </div>
  );
};

export default HomeSchool;