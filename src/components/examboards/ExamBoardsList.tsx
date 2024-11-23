import { motion } from 'framer-motion';
import ExamBoardCard from './ExamBoardCard';
import { examBoards } from './examBoardsData';

const ExamBoardsList = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.h1 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore Our Exam Boards
      </motion.h1>

      <div className="grid gap-8">
        {examBoards.map((board, index) => (
          <ExamBoardCard key={board.name} board={board} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ExamBoardsList;
