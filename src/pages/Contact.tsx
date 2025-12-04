import { motion } from 'framer-motion';
import Head from 'next/head';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import GoogleMap from '../components/contact/GoogleMap';
import { EducationalBackground } from '../components/animations/EducationalAnimations';
import SEOHead from '../components/SEO/SEOHead';
import SchemaMarkup from '../components/SEO/SchemaMarkup';

const Contact = () => {
  return (
    <EducationalBackground variant="minimal" intensity="low">
      <Head>
        <SEOHead
          title="Contact Studytomy - Get in Touch | Melbourne, Australia"
          description="Contact Studytomy for personalized tutoring inquiries. Located in Melbourne, Australia. Reach us at +61 461 367 702 or info@studytomy.com for expert online tutoring services."
          canonicalUrl="/contact"
        />
        <SchemaMarkup
          type="Organization"
          data={{
            name: 'Studytomy',
            description: 'Global online tutoring platform',
            url: 'https://studytomy.com',
            telephone: '+61 461 367 702',
            email: 'info@studytomy.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Melbourne',
              addressRegion: 'VIC',
              addressCountry: 'Australia'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+61 461 367 702',
              contactType: 'customer service',
              email: 'info@studytomy.com',
              availableLanguage: ['English']
            }
          }}
        />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <ContactHeader />
        <ContactInfo />
        <ContactForm />
        <GoogleMap />
      </motion.div>
    </EducationalBackground>
  );
};

export default Contact;