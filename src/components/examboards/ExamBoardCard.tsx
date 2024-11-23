import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface ExamBoardCardProps {
  board: {
    name: string;
    logo: string;
    description: string;
    subjects: string[];
    color: string;
    id: string;
  };
  index: number;
  isScrollTarget?: boolean;
}

const ExamBoardCard = ({ board, index, isScrollTarget }: ExamBoardCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isScrollTarget && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isScrollTarget]);

  return (
    <motion.div
      ref={cardRef}
      id={board.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-gradient-to-r ${board.color} backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="p-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-inner">
              <img 
                src={board.logo}
                alt={`${board.name} Logo`}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <div className="lg:w-3/4 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">{board.name}</h2>
            <p className="text-gray-700 leading-relaxed">{board.description}</p>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {board.subjects.map((subject) => (
                  <div 
                    key={subject}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExamBoardCard;
