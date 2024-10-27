import { useState, useEffect } from 'react';

const examBoards = [
  {
    name: 'Edexcel',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_crop,ar_16:9/v1705853337/edexel_jx0djp.jpg',
    description: 'One of the UK\'s largest awarding organisations offering academic and vocational qualifications and testing.',
    subjects: ['Mathematics', 'Sciences', 'Languages', 'Humanities']
  },
  {
    name: 'Cambridge International',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_crop,ar_16:9/v1705853338/Cambridge_CIE_akyerh.png',
    description: 'Provides international education programs and qualifications for 5 to 19 year olds.',
    subjects: ['IGCSE', 'AS Level', 'A Level', 'Pre-U']
  },
  {
    name: 'AQA',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_scale,h_160,w_320/v1705853337/AQA_ovicue.jpg',
    description: 'The largest provider of academic qualifications taught in schools and colleges in England.',
    subjects: ['English', 'Mathematics', 'Sciences', 'Languages']
  },
  {
    name: 'OCR',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_crop,ar_16:9/v1705853337/OCR_A_iotkun.jpg',
    description: 'Provides qualifications for learners of all ages at school, college, in work or through part-time learning programmes.',
    subjects: ['Sciences', 'Mathematics', 'Languages', 'ICT']
  },
  {
    name: 'IB',
    logo: 'https://res.cloudinary.com/durxawmiv/image/upload/c_crop,ar_16:9/v1705853337/IB_BI_unmu2v.jpg',
    description: 'Offers international education programs to develop the intellectual, personal, emotional and social skills needed in a globalizing world.',
    subjects: ['Diploma Programme', 'Career-related Programme', 'Middle Years Programme']
  }
];

export default function ExamBoardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === examBoards.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Exam Boards</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We support multiple examination boards to help students achieve their academic goals worldwide.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="whitespace-nowrap transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {examBoards.map((board, index) => (
                <div
                  key={board.name}
                  className="inline-block w-full bg-white rounded-lg shadow-sm hover:shadow-md transition p-6"
                  style={{ minWidth: '100%' }}
                >
                  <div className="md:flex items-start space-x-6">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <img
                        src={board.logo}
                        alt={`${board.name} Logo`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{board.name}</h2>
                      <p className="text-gray-600 mb-4">{board.description}</p>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Subjects Offered:</h3>
                        <ul className="grid grid-cols-2 gap-2">
                          {board.subjects.map((subject) => (
                            <li key={subject} className="text-gray-600">• {subject}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
