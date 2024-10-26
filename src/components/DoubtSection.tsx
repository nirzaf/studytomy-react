import React from 'react';

export default function DoubtSection() {
  return (
    <div className="bg-orange-500 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h4 className="text-2xl font-bold text-white mb-4">
          Pay-as-you-Go Clear Your Doubts
        </h4>
        <p className="text-white mb-6">
          Got doubts and not a student of ours? No worries! Contact us for an exclusive doubt clearing session
        </p>
        <button className="bg-white text-orange-500 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition">
          Contact
        </button>
      </div>
    </div>
  );
}