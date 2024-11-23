import React from 'react';
import { motion } from 'framer-motion';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import GoogleMap from '../components/contact/GoogleMap';
import WhatsAppButton from '../components/WhatsAppButton';

const Contact = () => {
  return (
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
      <WhatsAppButton />
    </motion.div>
  );
};

export default Contact;