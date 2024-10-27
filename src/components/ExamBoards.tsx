import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const examBoards = [
  {
    name: 'Edexcel',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_crop,ar_16:9/v1705853337/edexel_jx0djp.jpg'
  },
  {
    name: 'Cambridge',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_crop,ar_16:9/v1705853338/Cambridge_CIE_akyerh.png'
  },
  {
    name: 'AQA',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_scale,h_160,w_320/v1705853337/AQA_ovicue.jpg'
  },
  {
    name: 'OCR',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_crop,ar_16:9/v1705853337/OCR_A_iotkun.jpg'
  },
  {
    name: 'IB',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_crop,ar_16:9/v1705853337/IB_BI_unmu2v.jpg'
  },
  {
    name: 'OSSD',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_pad,b_gen_fill,ar_16:9/v1705853338/OSSD_mtjhiy.jpg'
  },
  {
    name: 'VCE',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_crop,ar_16:9/v1705854975/vce_fakkmz.jpg'
  },
  {
    name: 'Edexcel',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_crop,ar_16:9/v1705853337/edexel_jx0djp.jpg'
  },
  {
    name: 'Cambridge',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_crop,ar_16:9/v1705853338/Cambridge_CIE_akyerh.png'
  },
  {
    name: 'AQA',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_scale,h_160,w_320/v1705853337/AQA_ovicue.jpg'
  },
  {
    name: 'OCR',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_crop,ar_16:9/v1705853337/OCR_A_iotkun.jpg'
  },
  {
    name: 'IB',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_crop,ar_16:9/v1705853337/IB_BI_unmu2v.jpg'
  },
  {
    name: 'OSSD',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_pad,b_gen_fill,ar_16:9/v1705853338/OSSD_mtjhiy.jpg'
  },
  {
    name: 'VCE',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_crop,ar_16:9/v1705854975/vce_fakkmz.jpg'
  }
];

const ExamBoards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, currentIndex]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? examBoards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === examBoards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleBoards = () => {
    const visibleBoards = [];
    // Add last items to the beginning for a smooth backward transition
    const extendedBoards = [...examBoards.slice(-3), ...examBoards, ...examBoards.slice(0, 3)];
    
    for (let i = 0; i < 4; i++) {
      const index = currentIndex + i;
      visibleBoards.push(extendedBoards[index + 3]);
    }
    return visibleBoards;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
          Exam Boards
        </h2>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
            >
              {getVisibleBoards().map((board, index) => (
                <div 
                  key={`${board.name}-${index}`}
                  className="w-1/4 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 h-32 flex items-center justify-center group">
                    <img
                      src={board.logo}
                      alt={`${board.name} Logo`}
                      className="max-h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-center mt-4 font-medium text-gray-700">{board.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: examBoards.length - 3 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-blue-600 w-4' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamBoards;
