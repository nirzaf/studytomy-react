import Hero from '../components/Hero';
import Subjects from '../components/Subjects';
import WhyUs from '../components/WhyUs';
import DoubtSection from '../components/DoubtSection';
import ExamBoardsSection from '../components/ExamBoardsSection';
import Testimonials from '../components/Testimonials';
import GroupDiscount from '../components/GroupDiscount';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Subjects />
      <WhyUs />
      <DoubtSection />
      <ExamBoardsSection />
      <Testimonials />
      <GroupDiscount />
      <WhatsAppButton />
    </div>
  );
}