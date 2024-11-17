import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const subjects = [
  {
    name: "Biology",
    image: "https://ik.imagekit.io/studytomy/dna_biology.gif?updatedAt=1717609338343",
    color: "color-1",
    alt: "Depicting a double helix structure commonly associated with DNA, the animation breaks down its elements: The double helix structure represents the double-stranded DNA molecule, with each strand consisting of nucleotide sequences held together by hydrogen bonds between complementary nucleotide pairs."
  },
  {
    name: "Human Biology",
    image: "https://ik.imagekit.io/studytomy/human_biology.gif?updatedAt=1717608938761",
    color: "color-2",
    alt: "The animation depicts a double helix structure commonly associated with DNA, deoxyribonucleic acid."
  },
  {
    name: "Physics",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Physics.gif?updatedAt=1717445522157",
    color: "color-3",
    alt: "Illustrates the process of cell division, which is a fundamental aspect of all living organisms."
  },
  {
    name: "Chemistry",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Chemistry.gif?updatedAt=1717445685976",
    color: "color-1",
    alt: "The GIF depicts the molecular structure and vibrations of a methane molecule (CH4)."
  },
  {
    name: "Language",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Language.gif?updatedAt=1717445835969",
    color: "color-2",
    alt: "Simplified representation of the concept of English language learning."
  },
  {
    name: "Literature",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Literature.gif?updatedAt=1717446027265",
    color: "color-3",
    alt: "Depicting a stack of books is a common symbol associated with learning, knowledge, and education."
  },
  {
    name: "Business",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Business.gif?updatedAt=1717446092410",
    color: "color-1",
    alt: "A stylized representation of business and technology."
  },
  {
    name: "Psychology",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Psychology.gif?updatedAt=1717446158250",
    color: "color-2",
    alt: "Represents the field of psychology, which is the scientific study of the mind and behavior."
  },
  {
    name: "Mathematics",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Mathematics.gif?updatedAt=1717446227422",
    color: "color-3",
    alt: "Mathematical concepts and formulas visualization"
  },
  {
    name: "Business Studies",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Business_Studies.gif?updatedAt=1717446288822",
    color: "color-1",
    alt: "Depicting a seminar setting for business studies"
  },
  {
    name: "Accounting",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Accounting.gif?updatedAt=1717446366752",
    color: "color-2",
    alt: "Financial and accounting concepts visualization"
  },
  {
    name: "Economics",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Economics.gif?updatedAt=1717446529182",
    color: "color-3",
    alt: "Economic concepts and market visualization"
  },
  {
    name: "Additional Maths",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Additional_Maths.gif?updatedAt=1717446609660",
    color: "color-1",
    alt: "Advanced mathematical concepts visualization"
  },
  {
    name: "Com. Science",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Computer_Science.gif?updatedAt=1717446689115",
    color: "color-2",
    alt: "Computer science and programming concepts"
  },
  {
    name: "Statistics",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Statistics.gif?updatedAt=1717446784304",
    color: "color-3",
    alt: "Statistical analysis and data visualization"
  },
  {
    name: "ICT",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Information_and_Communications_Technology.gif?updatedAt=1717446901778",
    color: "color-1",
    alt: "Information and Communication Technology concepts"
  },
  {
    name: "Sociology",
    image: "https://ik.imagekit.io/studytomy/studytomy_sociology.gif?updatedAt=1717608364405",
    color: "color-2",
    alt: "Sociological concepts and human interaction visualization"
  }
];

const Subjects = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Subjects we offer</h2>
          <p className="text-gray-600">Explore our wide range of subjects taught by expert tutors</p>
        </div>
        
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
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
          className="subjects-carousel"
        >
          {subjects.map((subject, index) => (
            <SwiperSlide key={index}>
              <div className={`subject-card ${subject.color} bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105`}>
                <div className="p-4">
                  <div className="subject-icon mb-4 h-24 flex items-center justify-center">
                    <img 
                      src={subject.image} 
                      alt={subject.alt}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center">{subject.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Subjects;
