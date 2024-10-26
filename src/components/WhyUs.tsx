import React from 'react';
import { Shield, Users, UserCircle, Clock, GraduationCap, FileText } from 'lucide-react';

const features = [
  {
    icon: Shield,
    text: 'Highly Safe Tutors with Police Clearance Certificate (PCC)',
    image: 'https://ik.imagekit.io/studytomy/highly_safe_tutors_with_police_clearance_certificate?updatedAt=1717855231835'
  },
  {
    icon: Users,
    text: '1 to 1 Online Tutoring with flexible schedules',
    image: 'https://ik.imagekit.io/studytomy/1_to_1_online_tutoring_with_flexible_schedules?updatedAt=1717855335273'
  },
  {
    icon: UserCircle,
    text: 'Unique accounts for each student to ensure privacy',
    image: 'https://ik.imagekit.io/studytomy/unique_accounts_for_each_student_to_ensure_privacy?updatedAt=1717855414994'
  },
  {
    icon: Clock,
    text: 'Customized time according to your preference',
    image: 'https://ik.imagekit.io/studytomy/customized_time_according_to_your_preference?updatedAt=1717855483552'
  },
  {
    icon: GraduationCap,
    text: 'Graduate tutors with excellent experience',
    image: 'https://ik.imagekit.io/studytomy/graduate_tutors_with_excellent_experience?updatedAt=1717855559491'
  },
  {
    icon: FileText,
    text: 'Past papers and revision papers are provided',
    image: 'https://ik.imagekit.io/studytomy/past_papers_and_revision_papers_are_provided?updatedAt=1717855652900'
  }
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
          WHY US?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img
                src={feature.image}
                alt={feature.text}
                className="w-16 h-16 object-contain mb-4"
              />
              <p className="text-gray-600 mt-2">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}