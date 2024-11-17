import { Users, Target, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Studytomy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming education through personalized online tutoring, connecting students with expert tutors worldwide.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-orange-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide accessible, high-quality education to students globally through personalized online tutoring, 
              helping them achieve their academic goals and unlock their full potential.
            </p>
          </div>
          <div className="bg-orange-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the world's leading online tutoring platform, known for excellence in education, 
              innovation in teaching methods, and commitment to student success.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Tutors</h3>
            <p className="text-gray-600">
              Our tutors are carefully selected professionals with extensive teaching experience and subject expertise.
            </p>
          </div>
          <div className="text-center">
            <Target className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Learning</h3>
            <p className="text-gray-600">
              Customized learning plans tailored to each student's unique needs, goals, and learning style.
            </p>
          </div>
          <div className="text-center">
            <Globe2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-gray-600">
              Connect with tutors and students from around the world, breaking geographical barriers.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">5000+</div>
              <div className="text-gray-600">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-gray-600">Expert Tutors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}