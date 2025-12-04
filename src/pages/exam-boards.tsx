import { useEffect } from 'react';
import Head from 'next/head';
import ExamBoardsList from '../components/examboards/ExamBoardsList';
import { EducationalBackground } from '../components/animations/EducationalAnimations';
import SEOHead from '../components/SEO/SEOHead';
import SchemaMarkup from '../components/SEO/SchemaMarkup';

const ExamBoards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <EducationalBackground variant="scientific" intensity="medium">
      <Head>
        <SEOHead
          title="Exam Boards We Cover - IGCSE, IB, A-Levels | Studytomy"
          description="Expert tutoring for all major exam boards including IGCSE, IB, A-Levels, and more. Personalized online tutoring tailored to your curriculum and examination requirements."
          canonicalUrl="/exam-boards"
        />
        <SchemaMarkup
          type="Service"
          data={{
            name: 'Exam Board Tutoring Services',
            description: 'Comprehensive tutoring for IGCSE, IB, A-Levels and other major examination boards',
            serviceType: 'Educational Tutoring',
            areaServed: 'Worldwide',
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceType: 'Online Tutoring',
              availableLanguage: 'English'
            }
          }}
        />
      </Head>
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <ExamBoardsList />
      </div>
    </EducationalBackground>
  );
};

export default ExamBoards;