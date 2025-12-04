import { Users, Target, Globe2 } from 'lucide-react';

export default function KeyFeatures() {
  return (
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
  );
}
