import React from 'react';
import { BookOpen, Beaker, PiSquare, Globe2, Calculator, Microscope } from 'lucide-react';

const subjects = [
  { name: 'Mathematics', icon: Calculator, imageUrl: '/images/mathematics.png', description: 'From algebra to calculus' },
  { name: 'Physics', icon: PiSquare, imageUrl: '/images/physics.png', description: 'Mechanics to quantum physics' },
  { name: 'Chemistry', icon: Beaker, imageUrl: '/images/chemistry.png', description: 'Organic to inorganic' },
  { name: 'Biology', icon: Microscope, imageUrl: '/images/biology.png', description: 'Cells to ecosystems' },
  { name: 'English', icon: BookOpen, imageUrl: '/images/english.png', description: 'Literature and language' },
  { name: 'Geography', icon: Globe2, imageUrl: '/images/geography.png', description: 'Physical to human geography' },
];

export default function Subjects() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Our Subjects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose from a wide range of subjects taught by expert tutors
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <div
                key={subject.name}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-orange-50 text-orange-500 ring-4 ring-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {subject.name}
                    </a>
                  </h3>
                  <img src={subject.imageUrl} alt={subject.name} className="mt-4 w-full h-32 object-cover" />
                  <p className="mt-2 text-sm text-gray-500">
                    {subject.description}
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
