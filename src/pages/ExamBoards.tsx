import { useEffect } from 'react';
import ExamBoardsList from '../components/examboards/ExamBoardsList';
import WhatsAppButton from '../components/WhatsAppButton';

const ExamBoards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <ExamBoardsList />
      <WhatsAppButton />
    </div>
  );
};

export default ExamBoards;