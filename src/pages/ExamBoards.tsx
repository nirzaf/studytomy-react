import { useEffect } from 'react';
import ExamBoardsList from '../components/examboards/ExamBoardsList';
import WhatsAppButton from '../components/WhatsAppButton';

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
      <ExamBoardsList />
      <WhatsAppButton />
    </div>
  );
};

export default ExamBoards;