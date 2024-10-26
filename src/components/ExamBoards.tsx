import React, { useEffect, useState } from 'react';

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
  }
];

export default function ExamBoards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % examBoards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const visibleBoards = [...examBoards.slice(currentIndex), ...examBoards.slice(0, currentIndex)].slice(0, 4);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
          Exam Boards
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {visibleBoards.map((board) => (
            <div 
              key={board.name} 
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-500"
            >
              <img
                src={board.logo}
                alt={`${board.name} Logo`}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
