import { motion } from 'framer-motion';
import { Shield, Users, UserCircle, Clock, GraduationCap, FileText, Star, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { EdexcelLogo, CambridgeLogo, IBLogo, AQALogo } from './ExamBoardLogos';
import { EducationalBackground, FloatingAchievements } from './animations/EducationalAnimations';
import { EducationalProgress } from './animations/EducationalExtras';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  longDesc: string;
  stats?: string;
}

const WhyUsCard = ({ icon, title, shortDesc, longDesc, stats }: CardProps) => {
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
          <div className="h-full bg-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#F77F00] mb-4 transform transition-transform duration-300 hover:scale-110">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-[#003049] mb-2">{title}</h3>
            <p className="text-gray-600">{shortDesc}</p>
            {stats && (
              <div className="mt-3 bg-[#F77F00]/10 px-3 py-1 rounded-full text-xs font-medium text-[#F77F00]">
                {stats}
              </div>
            )}
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
    title: "Vetted & Verified Tutors",
    shortDesc: "Your peace of mind is paramount",
    longDesc: "All tutors undergo rigorous background checks (PCC verified) for a safe learning environment. We prioritize student safety with regular monitoring, strict conduct guidelines, and transparent communication channels between parents and administration.",
    stats: "100% Safety Verified"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Personalized 1-on-1 Learning",
    shortDesc: "Undivided attention tailored to your needs",
    longDesc: "Experience truly personalized learning with dedicated one-on-one sessions. Get the undivided attention you deserve with lessons tailored specifically to your learning style, pace, and goals, scheduled at times that fit your busy life.",
    stats: "95% Student Satisfaction"
  },
  {
    icon: <UserCircle className="w-12 h-12" />,
    title: "Secure & Private Learning",
    shortDesc: "Dedicated accounts ensuring privacy",
    longDesc: "Benefit from dedicated student accounts ensuring privacy and focused learning. Each student receives a secure, password-protected account with encrypted data storage, allowing you to learn confidently while maintaining complete privacy.",
    stats: "Bank-grade Security"
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Your Schedule, Your Terms",
    shortDesc: "Learn when it works best for you",
    longDesc: "Take control of your learning schedule with our flexible booking system. Choose from multiple time zones and scheduling options that work best for you, with easy rescheduling and smart reminders to keep your education on track.",
    stats: "24/7 Scheduling"
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Qualified & Experienced Educators",
    shortDesc: "Learn from subject-matter experts",
    longDesc: "Learn from subject-matter experts, many with graduate degrees and proven track records in helping students succeed in IGCSE & IB curriculums. Our tutors average 5+ years of teaching experience and undergo regular training to stay current with exam requirements.",
    stats: "Avg. 5+ Years Experience"
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: "Exam-Focused Resources",
    shortDesc: "Curated materials to boost performance",
    longDesc: "Gain access to curated past papers, revision notes, and targeted practice materials designed to boost your exam performance. Our resources are regularly updated, aligned with current curricula, and include detailed solutions with step-by-step explanations.",
    stats: "Updated for 2025 Exams"
  }
];

export default function WhyUs() {
  return (
    <EducationalBackground variant="default" intensity="medium">
      <section className="py-24 bg-gray-50 relative">
        {/* Floating Achievement Indicators */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingAchievements count={6} variant="celebration" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#003049]">The Studytomy Advantage</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">See why thousands of students and parents worldwide trust us with their academic success</p>
          </motion.div>
          
          {/* Exam Board Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 opacity-70">
            <EdexcelLogo className="grayscale hover:grayscale-0 transition-all duration-300" />
            <CambridgeLogo className="grayscale hover:grayscale-0 transition-all duration-300" />
            <IBLogo className="grayscale hover:grayscale-0 transition-all duration-300" />
            <AQALogo className="grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
        
        {/* Testimonial Snippet */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-6 mb-16 max-w-3xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F77F00] to-[#FCBF49]"></div>
          <div className="flex items-start gap-4">
            <div className="text-[#F77F00] flex-shrink-0">
              <Star className="w-10 h-10 fill-[#F77F00]" />
            </div>
            <div>
              <p className="text-gray-700 italic mb-3">"Studytomy transformed my daughter's approach to learning. Her IGCSE results improved dramatically, and she gained the confidence to tackle challenging subjects. The personalized attention from her tutor made all the difference."</p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-[#003049]">Sarah Thompson</p>
                  <p className="text-sm text-gray-500">Parent of IGCSE Student</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FCBF49]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WhyUsCard
                icon={card.icon}
                title={card.title}
                shortDesc={card.shortDesc}
                longDesc={card.longDesc}
                stats={card.stats}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { value: "10+", label: "Countries Served" },
            { value: "5000+", label: "Tutoring Hours" },
            { value: "97%", label: "Exam Pass Rate" },
            { value: "85%", label: "A/A* Grades" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold text-[#F77F00] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="/book-trial" 
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#F77F00] rounded-lg hover:bg-[#D62828] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Free Trial Session
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
          <p className="mt-4 text-gray-500">No obligation, experience the difference firsthand</p>
        </motion.div>
      </div>
      </section>
    </EducationalBackground>
  );
}
