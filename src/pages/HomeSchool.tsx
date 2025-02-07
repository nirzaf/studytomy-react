import { useEffect } from 'react';
import HomeSchoolHero from '../components/homeschool/HomeSchoolHero';
import HomeSchoolBenefits from '../components/homeschool/HomeSchoolBenefits';
import HomeSchoolContent from '../components/homeschool/HomeSchoolContent';
import HomeSchoolJoin from '../components/homeschool/HomeSchoolJoin';
import ParentsCorner from '../components/homeschool/ParentsCorner';

const HomeSchool = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HomeSchoolHero />
      <HomeSchoolBenefits />
      <HomeSchoolContent />
      <ParentsCorner />
      <HomeSchoolJoin />
    </div>
  );
};

export default HomeSchool;