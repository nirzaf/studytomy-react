import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const examBoards = [
  {
    name: "Pearson Edexcel GCSEs",
    image: "https://ik.imagekit.io/studytomy/exexcel_logo?updatedAt=1717838828260",
    color: "color-1"
  },
  {
    name: "Pearson Edexcel Int'l GCSEs",
    image: "https://ik.imagekit.io/studytomy/pearson_logo?updatedAt=1717838876917",
    color: "color-2"
  },
  {
    name: "Cambridge IGCSE",
    image: "https://ik.imagekit.io/studytomy/cambridge-logo?updatedAt=1717838929465",
    color: "color-3"
  },
  {
    name: "IGCSE Core and Extended",
    image: "https://ik.imagekit.io/studytomy/What_is_the_difference_between_IGCSE_Core_and_IGCSE_Extended?updatedAt=1717839020481",
    color: "color-1"
  },
  {
    name: "AQA",
    image: "https://ik.imagekit.io/studytomy/AQA_logo?updatedAt=1717839109349",
    color: "color-2"
  },
  {
    name: "OCR A and OCR B",
    image: "https://ik.imagekit.io/studytomy/ocr-recognising-acievement?updatedAt=1717839173145",
    color: "color-3"
  },
  {
    name: "IB",
    image: "https://ik.imagekit.io/studytomy/international_baccalaureate_logo?updatedAt=1717839224089",
    color: "color-1"
  }
];

const ExamBoardsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Exam Boards</h2>
        
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
          className="examboards-carousel"
        >
          {examBoards.map((board, index) => (
            <SwiperSlide key={index} className="pb-4">
              <div className={`examboard-card ${board.color} bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                <div className="p-4">
                  <div className="examboard-icon mb-4 h-32 flex items-center justify-center">
                    <img 
                      src={board.image} 
                      alt={`${board.name} Logo`}
                      className="w-32 h-24 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center min-h-[3rem] flex items-center justify-center">
                    {board.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ExamBoardsSection; 