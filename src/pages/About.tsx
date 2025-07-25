import HeroSection from './About/components/HeroSection';
import MissionVision from './About/components/MissionVision';
import KeyFeatures from './About/components/KeyFeatures';
import Statistics from './About/components/Statistics';
import { EducationalBackground } from '../components/animations/EducationalAnimations';

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