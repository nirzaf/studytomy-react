import Head from 'next/head';
import HeroSection from '@/components/about/HeroSection';
import MissionVision from '@/components/about/MissionVision';
import KeyFeatures from '@/components/about/KeyFeatures';
import Statistics from '@/components/about/Statistics';
import { EducationalBackground } from '@/components/animations/EducationalAnimations';
import SEOHead from '@/components/SEO/SEOHead';
import SchemaMarkup from '@/components/SEO/SchemaMarkup';

export default function About() {
  return (
    <EducationalBackground variant="default" intensity="low">
      <Head>
        <SEOHead
          title="About Studytomy - Our Mission & Vision | Online Tutoring Excellence"
          description="Learn about Studytomy's mission to provide accessible, personalized education worldwide. Discover our commitment to academic excellence and student success through expert online tutoring."
          canonicalUrl="/about"
        />
        <SchemaMarkup
          type="WebPage"
          data={{
            name: 'About Studytomy',
            description: 'Learn about our mission to transform education through personalized online tutoring',
            url: 'https://studytomy.com/about'
          }}
        />
      </Head>
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
