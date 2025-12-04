import { useEffect } from 'react';
import Head from 'next/head';
import HubSpotForm from '@/components/book-trial/HubSpotForm';
import PageTitle from '@/components/book-trial/PageTitle';
import SEOHead from '@/components/SEO/SEOHead';

const BookTrial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mt-24">
      <Head>
        <SEOHead
          title="Book Free Trial Lesson - Start Learning Today | Studytomy"
          description="Book your free trial lesson with expert tutors at Studytomy. Experience personalized 1-on-1 online tutoring risk-free. No commitment required. Start your learning journey today!"
          canonicalUrl="/book-trial"
        />
      </Head>
      <div className="container mx-auto px-4">
        <PageTitle />
        <HubSpotForm />
      </div>
    </section>
  );
};

export default BookTrial;
