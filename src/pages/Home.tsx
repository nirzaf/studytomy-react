import { useEffect } from 'react';
import Hero from '../components/Hero';
import Subjects from '../components/Subjects';
import WhyUs from '../components/WhyUs';
import DoubtSection from '../components/DoubtSection';
import ExamBoardsSection from '../components/ExamBoardsSection';
import Testimonials from '../components/Testimonials';
import GroupDiscount from '../components/GroupDiscount';
import WhatsAppButton from '../components/WhatsAppButton';
import ImageGallery from '../components/ImageGallery';
import { trackVisitor } from '../lib/visitorTracking';

export default function Home() {
  useEffect(() => {
    trackVisitor();
  }, []);

  return (
    <div className="relative">
      <Hero />
      <Subjects />
      <WhyUs />
      <ImageGallery />
      <DoubtSection />
      <ExamBoardsSection />
      <Testimonials />
      <GroupDiscount />
      <WhatsAppButton />
    </div>
  );
}