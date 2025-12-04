import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ExamBoardCard from './ExamBoardCard';
import { examBoards } from './examBoardsData';

const ExamBoardsList = () => {
  const router = useRouter();
  const [targetSection, setTargetSection] = useState<string | null>(null);

  useEffect(() => {
    const hash = router.asPath ? router.asPath.split('#')[1] : null;
    setTargetSection(hash || null);
  }, [router.asPath]);

  return (
    <div className="container mx-auto px-4 -mt-8">
      <div className="text-center mb-8">
        <motion.h1 
          className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Our Exam Boards
        </motion.h1>
        <motion.p
          className="text-gray-600 text-sm max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Discover comprehensive tutoring across major examination boards. Our expert tutors are well-versed in various curricula to support your academic journey.
        </motion.p>
      </div>

      <div className="grid gap-8">
        {examBoards.map((board, index) => (
          <ExamBoardCard
            key={board.id}
            board={board}
            index={index}
            isScrollTarget={board.id === targetSection}
          />
        ))}
      </div>
    </div>
  );
};

export default ExamBoardsList;
