import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const subjectsOnDemand = [
  {
    name: "Geography",
    image: "https://ik.imagekit.io/studytomy/Subjects_On_Demand/globe-earth.gif?updatedAt=1732474210127",
    color: "color-1",
    alt: "Geographic concepts and global studies visualization"
  },
  {
    name: "Environmental Management",
    image: "https://ik.imagekit.io/studytomy/Subjects_On_Demand/eco.gif?updatedAt=1732474210051",
    color: "color-2",
    alt: "Environmental management and sustainability concepts"
  },
  {
    name: "History",
    image: "https://ik.imagekit.io/studytomy/Subjects_On_Demand/history.gif?updatedAt=1732474210023",
    color: "color-3",
    alt: "Historical concepts and timeline visualization"
  }
];

const SubjectsOnDemand = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const SubjectCard = ({ subject, index }: { subject: typeof subjectsOnDemand[0], index: number }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`subject-card ${subject.color} bg-white rounded-lg shadow-lg 
                 transition-transform duration-300 hover:scale-105 h-full
                 border border-gray-100 hover:shadow-xl`}
    >
      <div className="p-6">
        <div className="subject-icon mb-6 h-32 flex items-center justify-center">
          <img 
            src={subject.image} 
            alt={subject.alt}
            className="w-24 h-24 object-contain"
          />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 text-center">{subject.name}</h3>
        <div className="mt-4 text-center">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
            Available on request
          </span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[98%]">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Subjects On Demand</h2>
          <p className="text-gray-600">Additional subjects available upon request</p>
        </motion.div>
        
        {isMobile ? (
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            spaceBetween={20}
            slidesPerView={1}
            className="subjects-carousel !overflow-hidden"
          >
            {subjectsOnDemand.map((subject, index) => (
              <SwiperSlide key={index} className="!h-auto pb-8">
                <SubjectCard subject={subject} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjectsOnDemand.map((subject, index) => (
              <SubjectCard key={index} subject={subject} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SubjectsOnDemand; 