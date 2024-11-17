import { Link } from 'react-router-dom';
import { GraduationCap, Users, Globe2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Logo Section */}
      <div className="container mx-auto px-4 text-center mb-12">
        <img 
          src="https://ik.imagekit.io/quadrate/Studytomy/Studytomy_Logobook-02.png?updatedAt=1731862139834"
          alt="Studytomy Logo"
          className="mx-auto w-[200px] mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Transform Your Learning Journey
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
          With Expert Tutors Worldwide
        </h2>
        <Link 
          to="/book-trial"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors"
        >
          Start Free Trial
        </Link>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center">
              <GraduationCap className="h-12 w-12 text-orange-500" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Expert Tutors</h3>
            <p className="mt-2 text-base text-gray-500">Qualified teachers from top institutions</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-orange-500" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">1-on-1 Sessions</h3>
            <p className="mt-2 text-base text-gray-500">Personalized attention and feedback</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center">
              <Globe2 className="h-12 w-12 text-orange-500" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Global Reach</h3>
            <p className="mt-2 text-base text-gray-500">Connect with tutors worldwide</p>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-orange-50 blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-orange-50 blur-3xl opacity-20"></div>
      </div>
    </section>
  );
}