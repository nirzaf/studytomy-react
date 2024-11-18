import { Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Contact() {
  const [showPointer, setShowPointer] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            created_at: new Date()
          }
        ]);

      if (error) throw error;

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setShowSuccessModal(true);
      setTimeout(() => setShowSuccessModal(false), 3000); // Auto hide after 3s
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
  };

  useEffect(() => {
    // Hide the pointer after 5 seconds
    const timer = setTimeout(() => {
      setShowPointer(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-20 relative">
      {showPointer && (
        <div className="hidden md:block fixed bottom-28 right-14 animate-bounce-right">
          <div className="relative">
            <div className="absolute transform -rotate-90">
              👆
            </div>
            <p className="absolute top-0 right-8 whitespace-nowrap text-sm text-gray-600">
              Click here to chat!
            </p>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help. Use live chattig or Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <Mail className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">info@studytomy.com</p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <Phone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+61 461 367 702</p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">
              2202/4 Kurringal Court<br />
              Fannie Bay, NT 0820<br />
              Australia
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <form className="bg-white rounded-lg shadow-sm p-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="What is this about?"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition"
            >
              Send Message
            </button>

            <AnimatePresence>
              {showSuccessModal && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded"
                >
                  <div className="flex items-center justify-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="font-medium">Message sent successfully!</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}