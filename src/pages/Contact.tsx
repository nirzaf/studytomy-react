import { motion } from 'framer-motion';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import GoogleMap from '../components/contact/GoogleMap';
import { EducationalBackground } from '../components/animations/EducationalAnimations';

const Contact = () => {
  return (
    <EducationalBackground variant="minimal" intensity="low">
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