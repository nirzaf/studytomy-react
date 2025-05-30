import { useEffect } from 'react';
import Hero from '../components/Hero';
import Subjects from '../components/Subjects';
import WhyUs from '../components/WhyUs';
import DoubtSection from '../components/DoubtSection';
import ExamBoardsSection from '../components/ExamBoardsSection';
import GroupDiscount from '../components/GroupDiscount';
import Testimonials from '../components/Testimonials';
import ImageGallery from '../components/ImageGallery';
import { trackVisitor } from '../lib/visitorTracking';
import AchievementCardSection from '../components/AchievementCardSection';

export default function Home() {
  useEffect(() => {
    trackVisitor();
  }, []);

  return (
    <>
      <div className="relative">
        <Hero />
        <Subjects />
        <AchievementCardSection />
        <WhyUs />
        <ImageGallery />
        <DoubtSection />
        <ExamBoardsSection />
        <GroupDiscount />
        <Testimonials />
      </div>
    </>
  );
}
