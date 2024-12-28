# Project Content

## Table of Contents
- [Home](#home)
- [About](#about)
- [Contact](#contact)
- [Book Trial](#book-trial)
- [Career](#career)
- [Exam Boards](#exam-boards)
- [Home School](#home-school)
- [Terms](#terms)

## Home
### Hero
- **Component**: `Hero`
- **Description**: The main hero section of the home page.

### Subjects
- **Component**: `Subjects`
- **Description**: Section displaying the subjects offered.

### Why Us
- **Component**: `WhyUs`
- **Description**: Section explaining why to choose the service.

### Doubt Section
- **Component**: `DoubtSection`
- **Description**: Section addressing common doubts.

### Exam Boards Section
- **Component**: `ExamBoardsSection`
- **Description**: Section displaying the exam boards.

### Group Discount
- **Component**: `GroupDiscount`
- **Description**: Section offering group discounts.

### Testimonials
- **Component**: `Testimonials`
- **Description**: Section displaying testimonials.

### WhatsApp Button
- **Component**: `WhatsAppButton`
- **Description**: Button for WhatsApp contact.

### Image Gallery
- **Component**: `ImageGallery`
- **Description**: Section displaying an image gallery.

### Achievement Card
- **Component**: `AchievementCardComponent`
- **Description**: Section displaying achievement cards.

#### Text of the Home Page
```typescript
import { useEffect } from 'react';
import Hero from '../components/Hero';
import Subjects from '../components/Subjects';
import WhyUs from '../components/WhyUs';
import DoubtSection from '../components/DoubtSection';
import ExamBoardsSection from '../components/ExamBoardsSection';
import GroupDiscount from '../components/GroupDiscount';
import Testimonials from '../components/Testimonials';
import WhatsAppButton from '../components/WhatsAppButton';
import ImageGallery from '../components/ImageGallery';
import { trackVisitor } from '../lib/visitorTracking';
import AchievementCardComponent from '../components/AchievementCard';

export default function Home() {
  useEffect(() => {
    trackVisitor();
  }, []);

  return (
    <>
      <div className="relative">
        <Hero />
        <AchievementCardComponent />
        <Subjects />
        <WhyUs />
        <ImageGallery />
        <DoubtSection />
        <ExamBoardsSection />
        <GroupDiscount />
        <Testimonials />
        <WhatsAppButton />
      </div>
    </>
  );
}
```

## About
### Hero Section
- **Component**: `HeroSection`
- **Description**: The main hero section of the about page.

### Mission Vision
- **Component**: `MissionVision`
- **Description**: Section displaying the mission and vision.

### Key Features
- **Component**: `KeyFeatures`
- **Description**: Section displaying key features.

### Statistics
- **Component**: `Statistics`
- **Description**: Section displaying statistics.

### WhatsApp Button
- **Component**: `WhatsAppButton`
- **Description**: Button for WhatsApp contact.

#### Text of the About Page
```typescript
import WhatsAppButton from '../components/WhatsAppButton';
import HeroSection from './About/components/HeroSection';
import MissionVision from './About/components/MissionVision';
import KeyFeatures from './About/components/KeyFeatures';
import Statistics from './About/components/Statistics';

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <MissionVision />
        <KeyFeatures />
        <Statistics />
      </div>
      <WhatsAppButton />
    </div>
  );
}
```

## Contact
### Contact Header
- **Component**: `ContactHeader`
- **Description**: Header section of the contact page.

### Contact Info
- **Component**: `ContactInfo`
- **Description**: Section displaying contact information.

### Contact Form
- **Component**: `ContactForm`
- **Description**: Section displaying the contact form.

### Google Map
- **Component**: `GoogleMap`
- **Description**: Section displaying the Google Map.

### WhatsApp Button
- **Component**: `WhatsAppButton`
- **Description**: Button for WhatsApp contact.

#### Text of the Contact Page
```typescript
import { motion } from 'framer-motion';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import GoogleMap from '../components/contact/GoogleMap';
import WhatsAppButton from '../components/WhatsAppButton';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <ContactHeader />
      <ContactInfo />
      <ContactForm />
      <GoogleMap />
      <WhatsAppButton />
    </motion.div>
  );
};

export default Contact;
```

## Book Trial
### Page Title
- **Component**: `PageTitle`
- **Description**: Section displaying the page title.

### HubSpot Form
- **Component**: `HubSpotForm`
- **Description**: Section displaying the HubSpot form.

### WhatsApp Button
- **Component**: `WhatsAppButton`
- **Description**: Button for WhatsApp contact.

#### Text of the Book Trial Page
```typescript
import { useEffect } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import HubSpotForm from './BookTrial/components/HubSpotForm';
import PageTitle from './BookTrial/components/PageTitle';

const BookTrial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mt-24">
      <div className="container mx-auto px-4">
        <PageTitle />
        <HubSpotForm />
      </div>
      <WhatsAppButton />
    </section>
  );
};

export default BookTrial;
```

## Career
### Career Application Form
- **Component**: `iframe`
- **Description**: Section displaying the career application form.

### WhatsApp Button
- **Component**: `WhatsAppButton`
- **Description**: Button for WhatsApp contact.

#### Text of the Career Page
```typescript
import { useEffect } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <section id="why-choose-us" className="mt-12">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <iframe 
              src="https://baserow.io/form/9TGwYrZSkDNQ1591Aom8mQ8Ku4lxkot5aNKnAGkppFo" 
              className="w-full h-[4200px] border-0"
              title="Career Application Form"
            />
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
};

export default Career; 
```

## Exam Boards
### Exam Boards List
- **Component**: `ExamBoardsList`
- **Description**: Section displaying the list of exam boards.

### WhatsApp Button
- **Component**: `WhatsAppButton`
- **Description**: Button for WhatsApp contact.

#### Text of the Exam Boards Page
```typescript
import { useEffect } from 'react';
import ExamBoardsList from '../components/examboards/ExamBoardsList';
import WhatsAppButton from '../components/WhatsAppButton';

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
```

## Home School
### Home School Hero
- **Component**: `HomeSchoolHero`
- **Description**: The main hero section of the home school page.

### Home School Benefits
- **Component**: `HomeSchoolBenefits`
- **Description**: Section displaying the benefits of home schooling.

### Home School Content
- **Component**: `HomeSchoolContent`
- **Description**: Section displaying the content of home schooling.

### Home School Join
- **Component**: `HomeSchoolJoin`
- **Description**: Section displaying the join information for home schooling.

#### Text of the Home School Page
```typescript
import { useEffect } from 'react';
import HomeSchoolHero from '../components/homeschool/HomeSchoolHero';
import HomeSchoolBenefits from '../components/homeschool/HomeSchoolBenefits';
import HomeSchoolContent from '../components/homeschool/HomeSchoolContent';
import HomeSchoolJoin from '../components/homeschool/HomeSchoolJoin';

const HomeSchool = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HomeSchoolHero />
      <HomeSchoolBenefits />
      <HomeSchoolContent />
      <HomeSchoolJoin />
    </div>
  );
};

export default HomeSchool;
```

## Terms
### Agreement Section
- **Component**: `AgreementSection`
- **Description**: Section displaying the agreement terms.

### Table of Contents
- **Component**: `TableOfContents`
- **Description**: Section displaying the table of contents.

### User Representations
- **Component**: `UserRepresentations`
- **Description**: Section displaying user representations.

### Prohibited Activities
- **Component**: `ProhibitedActivities`
- **Description**: Section displaying prohibited activities.

### Terms Section
- **Component**: `TermsSection`
- **Description**: Section displaying the terms.

### Contact Section
- **Component**: `ContactSection`
- **Description**: Section displaying the contact information.

#### Text of the Terms Page
```typescript
import { useEffect } from 'react';
import AgreementSection from './Terms/components/AgreementSection';
import TableOfContents from './Terms/components/TableOfContents';
import UserRepresentations from './Terms/components/UserRepresentations';
import ProhibitedActivities from './Terms/components/ProhibitedActivities';
import TermsSection from './Terms/components/TermsSection';
import ContactSection from './Terms/components/ContactSection';

// Table of contents data
const tableOfContents = [
  { id: 'services', title: '1. OUR SERVICES' },
  { id: 'intellectual-property', title: '2. INTELLECTUAL PROPERTY RIGHTS' },
  { id: 'user-representations', title: '3. USER REPRESENTATIONS' },
  { id: 'prohibited-activities', title: '4. PROHIBITED ACTIVITIES' },
  { id: 'user-generated', title: '5. USER GENERATED CONTRIBUTIONS' },
  { id: 'contribution-license', title: '6. CONTRIBUTION LICENSE' },
  { id: 'guidelines', title: '7. GUIDELINES FOR REVIEWS' },
  { id: 'social-media', title: '8. SOCIAL MEDIA' },
  { id: 'submissions', title: '9. SUBMISSIONS' },
  { id: 'third-party', title: '10. THIRD-PARTY WEBSITES AND CONTENT' },
  { id: 'advertisers', title: '11. ADVERTISERS' },
  { id: 'site-management', title: '12. SITE MANAGEMENT' },
  { id: 'privacy-policy', title: '13. PRIVACY POLICY' },
  { id: 'limitations', title: '14. LIMITATIONS OF LIABILITY' },
  { id: 'indemnification', title: '15. INDEMNIFICATION' },
  { id: 'user-data', title: '16. USER DATA' },
  { id: 'electronic', title: '17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES' },
  { id: 'miscellaneous', title: '18. MISCELLANEOUS' },
  { id: 'contact', title: '19. CONTACT US' }
];

// Additional sections data
const additionalSections = [
  {
    id: 'services',
    title: '1. OUR SERVICES',
    content: `We provide online tutoring services through our platform. Our services include one-on-one tutoring sessions, 
    study materials, and educational resources.`
  },
  {
    id: 'intellectual-property',
    title: '2. INTELLECTUAL PROPERTY RIGHTS',
    content: `All content on our platform is protected by intellectual property rights. Users may not copy, reproduce, or 
    distribute any content without explicit permission.`
  },
  {
    id: 'limitations',
    title: '14. LIMITATIONS OF LIABILITY',
    content: `LIMITATIONS OF LIABILITY:
    TO THE MAXIMUM EXTENT PERMITTED BY LAW:

    • We will not be liable for any indirect, incidental, special, consequential, or punitive damages, including:
      - Lost profits or revenues
      - Lost data or content
      - Lost business opportunities
      - Personal injury or property damage
      - Any other losses

    Monetary Limits:
    • Our total liability shall not exceed the greater of:
      - The amount paid by you to us in the 12 months prior to the claim
      - $100 AUD

    Exceptions:
    These limitations do not apply to:
    • Damages arising from death or personal injury
    • Fraud or willful misconduct
    • Any other liability that cannot be excluded by law

    Time Limitation:
    • Any claim must be brought within one (1) year of the incident`
  },
  {
    id: 'indemnification',
    title: '15. INDEMNIFICATION',
    content: `You agree to indemnify, defend, and hold harmless Studytomy and its affiliates from and against any claims, 
    liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising 
    out of or relating to:

    • Your violation of these Terms
    • Your use of the Services
    • Your Content or submissions
    • Your interaction with other users
    • Your violation of any third party rights
    • Your violation of any laws, rules, or regulations

    Scope of Indemnification:
    • Includes all direct and indirect damages
    • Covers all reasonable legal fees and costs
    • Applies to all related investigations and defenses
    • Extends to our officers, directors, employees, and agents

    Our Rights:
    • We may assume exclusive defense and control of any matter
    • You agree to cooperate with our defense of such claims
    • We may settle any claim without your prior written consent`
  },
  {
    id: 'user-data',
    title: '16. USER DATA',
    content: `Data Collection and Use:
    • We collect and process your personal data in accordance with our Privacy Policy
    • You retain ownership of your data
    • We maintain security measures to protect your data
    • We perform regular backups but are not responsible for data loss

    Your Responsibilities:
    • Maintaining accurate and up-to-date information
    • Protecting your account credentials
    • Reporting unauthorized access
    • Backing up your own data

    Data Retention:
    • We retain data as outlined in our Privacy Policy
    • We may delete inactive account data after 180 days
    • We comply with data protection regulations
    • You can request data deletion subject to legal requirements`
  },
  {
    id: 'electronic',
    title: '17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES',
    content: `By using our Services, you consent to receive electronic communications from us:

    Types of Communications:
    • Service announcements and updates
    • Administrative messages
    • Marketing communications (subject to your preferences)
    • Legal notices and disclosures
    • Support and customer service responses

    Delivery Methods:
    • Email
    • Text messages
    • In-app notifications
    • Push notifications
    • Website announcements

    Your Acknowledgment:
    • Electronic communications satisfy legal requirements
    • You can retain copies for your records
    • You can withdraw marketing consent at any time
    • Essential service communications cannot be opted out`
  },
  {
    id: 'miscellaneous',
    title: '18. MISCELLANEOUS',
    content: `General Provisions:

    Assignment:
    • We may assign our rights and obligations
    • You may not assign your rights without our consent
    • Any attempted assignment in violation is void

    Severability:
    • If any provision is found invalid, other provisions remain in effect
    • Invalid provisions will be modified to achieve intended purpose

    Force Majeure:
    • We are not liable for events beyond our reasonable control
    • Includes natural disasters, pandemics, and technical failures

    Relationship of Parties:
    • No joint venture or partnership is created
    • You and Studytomy are independent contractors
    • No agency relationship is established

    Entire Agreement:
    • These Terms constitute the complete agreement
    • Supersedes all prior agreements and understandings
    • Cannot be modified except in writing by us`
  }
];

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 mt-16">Studytomy Terms of Use</h1>
      <p className="text-gray-600 mb-8">Last updated: 02 June 2024</p>

      <AgreementSection />
      <TableOfContents items={tableOfContents} />
      <UserRepresentations />
      <ProhibitedActivities />
      
      {/* Render additional sections */}
      {additionalSections.map(section => (
        <TermsSection
          key={section.id}
          id={section.id}
          title={section.title}
          content={section.content}
        />
      ))}

      <ContactSection />
    </div>
  );
};

export default Terms;
```
