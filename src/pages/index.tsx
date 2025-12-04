import { useEffect } from 'react';
import Head from 'next/head';
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
import SEOHead from '../components/SEO/SEOHead';
import SchemaMarkup from '../components/SEO/SchemaMarkup';

export default function Home() {
  useEffect(() => {
    trackVisitor();
  }, []);

  return (
    <>
      <Head>
        <SEOHead
          title="Studytomy - Global Online Tutoring Platform | Expert IGCSE & IB Tutors"
          description="Transform your learning with Studytomy's expert 1-on-1 online tutoring. Personalized IGCSE, IB, and A-Level tutoring from qualified teachers worldwide. Book your free trial today!"
          canonicalUrl="/"
          ogImage="https://ik.imagekit.io/studytomy/minimal%20primary%20logo%20mini.png?updatedAt=1732379724951"
        />
        <SchemaMarkup
          type="EducationalOrganization"
          data={{
            name: 'Studytomy',
            description: 'Global online tutoring platform offering personalized 1-on-1 learning with expert IGCSE & IB tutors',
            url: 'https://studytomy.com',
            telephone: '+61 461 367 702',
            email: 'info@studytomy.com',
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Tutoring Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'IGCSE Tutoring',
                    description: 'Expert tutoring for IGCSE examinations'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'IB Tutoring',
                    description: 'Personalized International Baccalaureate tutoring'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'A-Level Tutoring',
                    description: 'Comprehensive A-Level exam preparation'
                  }
                }
              ]
            }
          }}
        />
      </Head>
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
