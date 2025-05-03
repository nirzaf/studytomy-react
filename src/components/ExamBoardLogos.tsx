import React from 'react';

interface ExamBoardLogoProps {
  className?: string;
}

// Using Studytomy's brand colors from color-codes.md
// Primary: Prussian Blue (#003049), Cinnabar (#D62828), Orange Peel (#F77F00), Maize (#FCBF49), Bone (#EAE2B7)
// Secondary: Burnt Sienna (#e56b49), Dark Slate (#2b2e44), Deep Red (#953137), Gray Blue (#a1a4b0), Taupe Gray (#a0949c)

export const EdexcelLogo: React.FC<ExamBoardLogoProps> = ({ className = '' }) => {
  return (
    <div className={`exam-board-logo ${className}`}>
      <div className="font-bold text-[#003049] tracking-tight"> {/* Using Prussian Blue */}
        <span className="text-lg">edexcel</span>
        <span className="text-xs block -mt-1">Pearson</span>
      </div>
    </div>
  );
};

export const CambridgeLogo: React.FC<ExamBoardLogoProps> = ({ className = '' }) => {
  return (
    <div className={`exam-board-logo ${className}`}>
      <div className="flex items-center">
        <div className="w-6 h-6 bg-[#D62828] rounded-full flex items-center justify-center mr-1"> {/* Using Cinnabar */}
          <span className="text-[#EAE2B7] font-bold text-xs">C</span> {/* Using Bone */}
        </div>
        <div className="font-semibold text-[#2b2e44] text-sm"> {/* Using Dark Slate */}
          Cambridge
        </div>
      </div>
    </div>
  );
};

export const IBLogo: React.FC<ExamBoardLogoProps> = ({ className = '' }) => {
  return (
    <div className={`exam-board-logo ${className}`}>
      <div className="flex items-center">
        <div className="font-bold text-[#003049] text-lg tracking-tight mr-1">IB</div> {/* Using Prussian Blue */}
        <div className="text-[#2b2e44] text-xs leading-tight"> {/* Using Dark Slate */}
          <span className="block">International</span>
          <span className="block">Baccalaureate</span>
        </div>
      </div>
    </div>
  );
};

export const AQALogo: React.FC<ExamBoardLogoProps> = ({ className = '' }) => {
  return (
    <div className={`exam-board-logo ${className}`}>
      <div className="font-bold text-[#953137] tracking-tight text-lg"> {/* Using Deep Red */}
        AQA
      </div>
    </div>
  );
};

const ExamBoardLogos: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      <EdexcelLogo className="grayscale hover:grayscale-0 transition-all duration-300" />
      <CambridgeLogo className="grayscale hover:grayscale-0 transition-all duration-300" />
      <IBLogo className="grayscale hover:grayscale-0 transition-all duration-300" />
      <AQALogo className="grayscale hover:grayscale-0 transition-all duration-300" />
    </div>
  );
};

export default ExamBoardLogos;
