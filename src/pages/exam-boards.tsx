import { useEffect } from 'react';
import ExamBoardsList from '../components/examboards/ExamBoardsList';
import { EducationalBackground } from '../components/animations/EducationalAnimations';

const ExamBoards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <EducationalBackground variant="scientific" intensity="medium">
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <ExamBoardsList />
      </div>
    </EducationalBackground>
  );
};

export default ExamBoards;