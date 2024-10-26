import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    image: "https://res.cloudinary.com/durxawmiv/image/upload/c_scale,w_90/v1696699864/6829b881ae314429369d7743331d48ea_ayikvw_-_Profile_Picture_fr5iy1.png",
    content: "Studytomy tutors provided me with comprehensive preparation for my exam. They assisted me in fully comprehending and applying all the required content. They offered tips and strategies on how to answer questions precisely. Learning became simpler due to their expertise in the field. I wholeheartedly recommend anyone wishing to excel in their exams to use Studytomy.",
    name: "Aysha (Qatar)",
    course: "AS level edexcel biology & chemistry"
  },
  {
    image: "https://res.cloudinary.com/durxawmiv/image/upload/c_scale,h_90,w_90/v1698599430/boy-avatar_noau3k.jpg",
    content: "The best lecturer. You have the most attractive methods of explaining lessons without making the students bored. The friendly relationship that you build between the student and your self makes students feel free to learn from you easily",
    name: "Dihursan (Qatar)",
    course: "AS Edexcel Biology"
  },
  {
    image: "https://res.cloudinary.com/durxawmiv/image/upload/c_scale,w_90/v1696699864/6829b881ae314429369d7743331d48ea_ayikvw_-_Profile_Picture_fr5iy1.png",
    content: "The biology course at Studytomy has been extremely helpful and has enhanced my academic understanding on the subject. The mentor makes complex concepts easy to understand by giving detailed explanations and encourages critical thinking, which has really made my experience much more effective.",
    name: "Yushfa (Qatar)",
    course: "AS level Biology Edexcel"
  }
];

export default function Testimonials() {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: "url(https://ik.imagekit.io/studytomy/Studytomy_Testimonial_Background.jpg?updatedAt=1717449732211)"
      }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h5 className="text-orange-400 font-medium mb-2">Testimonial</h5>
          <h2 className="text-3xl font-bold text-white">What they say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-auto">
                  <Quote className="w-8 h-8 text-orange-400" />
                </div>
              </div>
              <div className="text-white">
                <p className="mb-4 text-sm leading-relaxed">{testimonial.content}</p>
                <h6 className="font-semibold">{testimonial.name}</h6>
                <span className="text-sm text-orange-400">{testimonial.course}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}