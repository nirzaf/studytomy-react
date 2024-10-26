import React from 'react';
import Hero from '../components/Hero';
import Subjects from '../components/Subjects';
import WhyUs from '../components/WhyUs';
import DoubtSection from '../components/DoubtSection';
import ExamBoards from '../components/ExamBoards';
import Testimonials from '../components/Testimonials';
import GroupDiscount from '../components/GroupDiscount';

export default function Home() {
  return (
    <>
      <Hero />
      <Subjects />
      <WhyUs />
      <DoubtSection />
      <ExamBoards />
      <Testimonials />
      <GroupDiscount />
    </>
  );
}