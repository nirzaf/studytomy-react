import { useEffect } from 'react';
import ExamBoardsList from '../components/examboards/ExamBoardsList';

const ExamBoards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <ExamBoardsList />
    </div>
  );
};

export default ExamBoards;