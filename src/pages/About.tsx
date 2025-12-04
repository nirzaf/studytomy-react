import HeroSection from '@/components/about/HeroSection';
import MissionVision from '@/components/about/MissionVision';
import KeyFeatures from '@/components/about/KeyFeatures';
import Statistics from '@/components/about/Statistics';
import { EducationalBackground } from '@/components/animations/EducationalAnimations';

export default function About() {
  return (
    <EducationalBackground variant="default" intensity="low">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <MissionVision />
          <KeyFeatures />
          <Statistics />
        </div>
      </div>
    </EducationalBackground>
  );
}
