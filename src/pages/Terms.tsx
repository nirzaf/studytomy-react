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
    id: 'user-generated',
    title: '5. USER GENERATED CONTRIBUTIONS',
    content: `The Services may provide you with the opportunity to create, submit, post, display, transmit, perform, publish,
    distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings,
    video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively,
    "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such,
    any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available
    any Contributions, you thereby represent and warrant that...`
  },
  {
    id: 'contribution-license',
    title: '6. CONTRIBUTION LICENSE',
    content: `By posting your Contributions to any part of the Services, you automatically grant, and you represent and warrant
    that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable,
    royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish,
    broad-cast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt
    (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any
    purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works,
    such Contributions, and grant and authorize sublicenses of the foregoing.`
  },
  {
    id: 'guidelines',
    title: '7. GUIDELINES FOR REVIEWS',
    content: `We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with
    the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews
    should not contain offensive profanity, or abusive, racist, offensive, or hate language; (3) your reviews should not
    contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual
    orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be
    affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality
    of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging
    others to post reviews, whether positive or negative.`
  },
  {
    id: 'social-media',
    title: '8. SOCIAL MEDIA',
    content: `As part of the functionality of the Services, you may link your account with online accounts you have with
    third-party service providers (each such account, a “Third-Party Account”) by either: (1) providing your Third-Party
    Account login information through the Services; or (2) allowing us to access your Third-Party Account, as is permitted
    under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant
    that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your
    Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable
    Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed
    by the third-party service provider of the Third-Party Account.`
  },
  {
    id: 'submissions',
    title: '9. SUBMISSIONS',
    content: `You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information
    regarding the Services ("Submissions") provided by you to us are non-confidential and shall become our sole property.
    We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted
    use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or
    compensation to you.`
  },
  {
    id: 'third-party',
    title: '10. THIRD-PARTY WEBSITES AND CONTENT',
    content: `The Services may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites")
    as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications,
    software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such
    Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness,
    or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any
    Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy,
    offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites
    or the Third-Party Content.`
  },
  {
    id: 'advertisers',
    title: '11. ADVERTISERS',
    content: `We allow advertisers to display their advertisements and other information in certain areas of the Services,
    such as sidebar advertisements or banner advertisements. If you are an advertiser, you shall take full responsibility
    for any advertisements you place on the Services and any services provided on the Services or products sold through
    those advertisements. Further, as an advertiser, you warrant and represent that you possess all rights and authority
    to place advertisements on the Services, including, but not limited to, intellectual property rights, publicity rights,
    and contractual rights.`
  },
  {
    id: 'site-management',
    title: '12. SITE MANAGEMENT',
    content: `We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms;
    (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms,
    including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without
    limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible)
    any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability,
    to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way
    burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property
    and to facilitate the proper functioning of the Services.`
  },
  {
    id: 'privacy-policy',
    title: '13. PRIVACY POLICY',
    content: `We care about data privacy and security. Please review our Privacy Policy:
    [link to your privacy policy]. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated
    into these Legal Terms. Please be advised the Services are hosted in Australia. If you access the Services from any other
    region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ
    from applicable laws in Australia, then through your continued use of the Services, you are transferring your data to
    Australia, and you expressly consent to have your data transferred to and processed in Australia.`
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