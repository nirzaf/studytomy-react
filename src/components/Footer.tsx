import Link from 'next/link';
import WhatsAppButton from './WhatsAppButton';
import { FloatingStudyTools } from './animations/EducationalExtras';
import { KnowledgeParticles } from './animations/EducationalAnimations';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 min-h-[120px] relative overflow-hidden">
      {/* Educational Background Animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Study Tools */}
        <FloatingStudyTools count={4} variant="mixed" />

        {/* Knowledge Particles */}
        <KnowledgeParticles count={6} variant="minimal" />
      </div>

      {/* Educational Quote Animation */}
      <motion.div
        className="absolute top-2 left-4 text-xs text-gray-500 opacity-30 select-none"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        "Education is the most powerful weapon which you can use to change the world"
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-2 text-white">
          <p className="min-h-[24px]">
            <Link href="/consent-preferences" className="hover:text-blue-400 transition-colors duration-200">
              Manage Cookie Preferences
            </Link>
          </p>
          <p className="min-h-[24px]">
            <Link href="/terms" className="hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </Link>
          </p>
          <p className="min-h-[24px] flex items-center justify-center gap-2">
            Powered by{' '}
            <img 
              src="https://ik.imagekit.io/quadrate/assets/img/QTS-logo-mini.png?updatedAt=1749668943695" 
              alt="QTS Logo" 
              className="w-6 h-6 inline-block"
            />
            <a
              href="https://quadrate.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Quadrate TechSolutions
            </a>
          </p>
        </div>
      </div>
      <WhatsAppButton />
    </footer>
  );
};

export default Footer;
