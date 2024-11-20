import { motion } from 'framer-motion';
import { Shield, Users, UserCircle, Clock, GraduationCap, FileText } from 'lucide-react';
import { useState } from 'react';
import '../styles/WhyUs.css';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  longDesc: string;
}

const WhyUsCard = ({ icon, title, shortDesc, longDesc }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsFlipped(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsFlipped(false);
  };

  return (
    <motion.div
      className="relative h-[300px] w-full perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      initial="front"
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full bg-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center text-center">
            <div className="text-[#F77F00] mb-4">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-[#003049] mb-2">{title}</h3>
            <p className="text-gray-600">{shortDesc}</p>
            <span className="md:hidden text-xs text-gray-400 mt-4">Tap to learn more</span>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full bg-[#003049] rounded-xl p-6 shadow-lg flex items-center justify-center text-center">
            <p className="text-white text-sm leading-relaxed">{longDesc}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const cards: CardProps[] = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Highly Safe Tutors",
    shortDesc: "Police Clearance Certificate (PCC) Verified",
    longDesc: "Our tutors undergo rigorous background checks and must provide valid Police Clearance Certificates. We prioritize student safety with regular monitoring, strict conduct guidelines, and transparent communication channels between parents and administration."
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "1-to-1 Online Tutoring",
    shortDesc: "Flexible schedules that work for you",
    longDesc: "Experience personalized learning with our dedicated one-on-one sessions. Our flexible scheduling system allows you to book lessons at your convenience, reschedule when needed, and choose time slots that fit perfectly with your daily routine."
  },
  {
    icon: <UserCircle className="w-12 h-12" />,
    title: "Private Student Accounts",
    shortDesc: "Unique accounts for enhanced privacy",
    longDesc: "Each student receives a secure, password-protected account with encrypted data storage. Access personalized learning materials, track progress, store session recordings, and communicate safely with tutors through our secure platform."
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Customized Timing",
    shortDesc: "Schedule sessions at your convenience",
    longDesc: "Choose from multiple time zones and scheduling options that work best for you. Our smart booking system remembers your preferences, suggests optimal slots based on your learning patterns, and sends timely reminders."
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Expert Graduate Tutors",
    shortDesc: "Experienced and qualified educators",
    longDesc: "Learn from highly qualified tutors with proven teaching experience and advanced degrees. Our tutors are subject matter experts who undergo regular training, performance evaluations, and maintain consistently high student satisfaction ratings."
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: "Comprehensive Materials",
    shortDesc: "Past papers and revision resources",
    longDesc: "Access an extensive library of past papers, practice tests, and revision materials. Our resources are regularly updated, aligned with current curricula, and include detailed solutions with step-by-step explanations."
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#003049]">Why Choose Us?</h2>
        <p className="text-xl text-center text-gray-600 mb-16">Discover the advantages of learning with Studytomy</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <WhyUsCard
              key={index}
              icon={card.icon}
              title={card.title}
              shortDesc={card.shortDesc}
              longDesc={card.longDesc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}