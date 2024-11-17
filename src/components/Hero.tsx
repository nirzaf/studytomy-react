// React import removed as it's not used in this component
import { GraduationCap, Users, Globe2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Learning Journey</span>
            <span className="block text-orange-500">With Expert Tutors Worldwide</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connect with qualified tutors globally for personalized learning experiences. Master your subjects with confidence.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg md:px-10">
                Book Free Trial
              </button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
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
    </div>
  );
}