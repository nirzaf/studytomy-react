import ContactHeader from '../components/contact/ContactHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <ContactHeader />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;