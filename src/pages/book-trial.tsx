import { useEffect } from 'react';
import Head from 'next/head';
import HubSpotForm from '@/components/book-trial/HubSpotForm';
import SEOHead from '@/components/SEO/SEOHead';
import { CheckCircle2, Star, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Users,
    title: "Expert Tutors",
    description: "Learn from qualified educators from top universities"
  },
  {
    icon: Star,
    title: "Personalized Learning",
    description: "Customized lesson plans tailored to your goals"
  },
  {
    icon: ShieldCheck,
    title: "Risk-Free Trial",
    description: "No commitment required. Try before you decide."
  }
];

const BookTrial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/50 to-white pt-24 pb-12">
      <Head>
        <SEOHead
          title="Book Free Trial Lesson - Start Learning Today | Studytomy"
          description="Book your free trial lesson with expert tutors at Studytomy. Experience personalized 1-on-1 online tutoring risk-free. No commitment required. Start your learning journey today!"
          canonicalUrl="/book-trial"
        />
      </Head>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Content & Trust Signals */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 pt-4"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#003049] mb-4 leading-tight">
                  Start Your Journey to <span className="text-[#F77F00]">Academic Excellence</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the difference of personalized 1-on-1 tutoring. Book your free trial session today and see how we can help you achieve your goals.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-orange-100"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-[#F77F00]" />
                    </div>
                    <h3 className="font-semibold text-lg text-[#003049] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-[#003049] text-white p-6 rounded-xl relative overflow-hidden">
                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#003049] bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                        {/* Placeholder avatars */}
                        <span className="sr-only">User {i}</span>
                        U{i}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[#F77F00]">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-300 mt-1">Trusted by 1000+ students worldwide</p>
                  </div>
                </div>

                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F77F00] opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24"
            >
              <div className="bg-[#003049] p-6 text-center">
                <h2 className="text-2xl font-bold text-white">Book Your Free Session</h2>
                <p className="text-orange-100 text-sm mt-2">Limited slots available for this week</p>
              </div>
              <div className="p-6 md:p-8">
                <HubSpotForm />

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTrial;
