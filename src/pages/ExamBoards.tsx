import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const examBoards = [
  {
    name: "Pearson Edexcel GCSEs",
    logo: "https://ik.imagekit.io/studytomy/exexcel_logo?updatedAt=1717838828260",
    description: "GCSEs (General Certificates of Secondary Education) are the main qualifications taken by students at school-leaving age in England, Wales and Northern Ireland. Studytomy offers one-to-one tutoring sessions on Pearson Edexcel GCSEs in all three sciences (Biology, Physics, Chemistry), Mathematics and statistics, English, English Literature, and the main business-related subjects.",
    subjects: ["Biology", "Physics", "Chemistry", "Mathematics", "Statistics", "English", "English Literature", "Business"],
    color: "from-blue-500/10 to-blue-500/5"
  },
  {
    name: "Pearson Edexcel International GCSEs",
    logo: "https://ik.imagekit.io/studytomy/pearson_logo?updatedAt=1717838876917",
    description: "Pearson Edexcel International GCSEs are globally recognized qualifications with academic content and assessment designed specifically for international learners. International GCSEs are part of iProgress, the complete series of Pearson Edexcel academic qualifications for 5- to 19-year-olds, for international schools.",
    subjects: ["Foundation Tier", "Higher Tier", "GCSE", "AS Level", "A Level"],
    color: "from-purple-500/10 to-purple-500/5"
  },
  {
    name: "Cambridge IGCSE",
    logo: "https://ik.imagekit.io/studytomy/cambridge-logo?updatedAt=1717838929465",
    description: "The Cambridge IGCSE curriculum offers a variety of routes for learners with a wide range of abilities, including those whose first language is not English. For schools, Cambridge IGCSE offers a flexible and stimulating curriculum, supported with excellent resources and training.",
    subjects: ["Subject Content", "Applied Knowledge", "Intellectual Inquiry", "Flexibility", "English Communication", "Cultural Awareness"],
    color: "from-red-500/10 to-red-500/5"
  },
  {
    name: "IGCSE Core and Extended",
    logo: "https://ik.imagekit.io/studytomy/What_is_the_difference_between_IGCSE_Core_and_IGCSE_Extended?updatedAt=1717839020481",
    description: "To take into account differing abilities, there is a choice between Core and Extended curriculum papers in some subjects. The Core curriculum provides a full overview of the subject and is targeted at students expected to achieve grades C to G. The Extended curriculum is designed for more academically able students.",
    subjects: ["Core Curriculum", "Extended Curriculum", "Flexible Learning", "Comprehensive Assessment"],
    color: "from-green-500/10 to-green-500/5"
  },
  {
    name: "AQA",
    logo: "https://ik.imagekit.io/studytomy/AQA_logo?updatedAt=1717839109349",
    description: "AQA's high-quality qualifications are valued and respected by employers and universities around the world. At Studytomy, they offer tutoring for both foundation tier and Higher tier students in most of the subjects for GCSE, AS, and AL.",
    subjects: ["Foundation Tier", "Higher Tier", "GCSE", "AS Level", "A Level"],
    color: "from-orange-500/10 to-orange-500/5"
  },
  {
    name: "OCR A and OCR B",
    logo: "https://ik.imagekit.io/studytomy/ocr-recognising-acievement?updatedAt=1717839173145",
    description: "OCR (Oxford, Cambridge and RSA) provides GCSEs and A Levels in over 40 subjects and offers over 100 vocational qualifications. Their expertise across academic and vocational qualifications ensures reliably high standards.",
    subjects: ["Academic Subjects", "Vocational Qualifications", "Research Skills", "Practical Applications"],
    color: "from-teal-500/10 to-teal-500/5"
  },
  {
    name: "IB",
    logo: "https://ik.imagekit.io/studytomy/international_baccalaureate_logo?updatedAt=1717839224089",
    description: "The International Baccalaureate® (IB) offers challenging programmes for a worldwide community of schools. IB learners are encouraged to think critically, solve complex problems, and develop intercultural understanding.",
    subjects: ["Critical Thinking", "Problem Solving", "Self-Directed Learning", "Global Engagement", "Cultural Awareness"],
    color: "from-indigo-500/10 to-indigo-500/5"
  }
];

const ExamBoards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Our Exam Boards
        </motion.h1>

        <div className="grid gap-8">
          {examBoards.map((board, index) => (
            <motion.div
              key={board.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-r ${board.color} backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/4">
                    <div className="bg-white p-6 rounded-xl shadow-inner">
                      <img 
                        src={board.logo}
                        alt={`${board.name} Logo`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:w-3/4 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">{board.name}</h2>
                    <p className="text-gray-700 leading-relaxed">{board.description}</p>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {board.subjects.map((subject) => (
                          <div 
                            key={subject}
                            className="flex items-center space-x-2 text-gray-700"
                          >
                            <ChevronRight className="w-4 h-4 text-blue-500" />
                            <span>{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamBoards; 