import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const subjectsOnDemand = [
  {
    name: "Geography",
    image: "https://ik.imagekit.io/studytomy/Subjects_On_Demand/globe-earth.gif?updatedAt=1732474210127",
    color: "from-blue-500 to-cyan-500",
    alt: "Geographic concepts and global studies visualization"
  },
  {
    name: "Environmental Management",
    image: "https://ik.imagekit.io/studytomy/Subjects_On_Demand/eco.gif?updatedAt=1732474210051",
    color: "from-green-500 to-emerald-500",
    alt: "Environmental management and sustainability concepts"
  },
  {
    name: "History",
    image: "https://ik.imagekit.io/studytomy/Subjects_On_Demand/history.gif?updatedAt=1732474210023",
    color: "from-amber-500 to-yellow-500",
    alt: "Historical concepts and timeline visualization"
  }
];

const SubjectsOnDemand = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @property --angle {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
      }
      @keyframes gradient-rotate {
        0% { --angle: 0deg; }
        100% { --angle: 360deg; }
      }
      .animate-border-rotate {
        animation: gradient-rotate 3s linear infinite;
      }
      @keyframes borderAnimation {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }
      .animated-border {
        position: relative;
      }
      .animated-border::before {
        content: '';
        position: absolute;
        inset: -3px;
        background: linear-gradient(45deg, #FF8C00, #FFD700, #FFA500, #FFD700);
        background-size: 200% 200%;
        animation: borderAnimation 4s ease infinite;
        border-radius: 16px;
        z-index: -2;
      }
      .animated-border::after {
        content: '';
        position: absolute;
        inset: -2px;
        background: #963A0B;
        border-radius: 15px;
        z-index: -1;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
      className="group relative animated-border"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500" style={{
        background: `linear-gradient(var(--angle, 0deg), ${subject.color.split(' ')[0].replace('from-', '')}66, ${subject.color.split(' ')[1].replace('to-', '')}66)`
      }}/>
      
      <div className="absolute -inset-0.5 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 animate-border-rotate" style={{
          background: `linear-gradient(var(--angle, 0deg), transparent, ${subject.color.split(' ')[0].replace('from-', '')}40, ${subject.color.split(' ')[1].replace('to-', '')}40, transparent)`
        }}/>
      </div>

      <div className={`
        relative rounded-xl p-6
        shadow-lg group-hover:shadow-2xl
        transition-all duration-500
        bg-white
      `}>
        <div className="relative">
          <div className="relative z-10">
            <motion.div 
              className="subject-icon mb-6 h-32 flex items-center justify-center bg-white rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative group-hover:animate-float p-4">
                <img 
                  src={subject.image} 
                  alt={subject.alt}
                  className="w-24 h-24 object-contain relative z-10"
                />
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold text-center mb-4 
                         bg-clip-text text-transparent bg-gradient-to-r 
                         from-gray-900 to-gray-700">
              {subject.name}
            </h3>

            <div className="mt-4 text-center">
              <motion.span 
                className="inline-block px-6 py-2.5 rounded-full text-sm font-medium
                         bg-gradient-to-r from-orange-500 to-pink-500
                         text-white shadow-lg shadow-orange-500/30
                         hover:shadow-orange-500/50 transition-all duration-300
                         transform hover:-translate-y-0.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Available on request
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4 max-w-[98%]">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            Subjects On Demand
          </h2>
          <p className="text-gray-600 text-lg">
            Additional subjects available upon request
          </p>
        </motion.div>
        
        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            spaceBetween={20}
            slidesPerView={1}
            className="subjects-carousel !overflow-hidden pb-8"
          >
            {subjectsOnDemand.map((subject, index) => (
              <SwiperSlide key={index} className="!h-auto">
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