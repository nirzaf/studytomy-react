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
    content: `User Generated Contributions:

    Types of Contributions:
    • Reviews and testimonials
    • Forum posts and comments
    • Study group discussions
    • Shared study materials
    • Profile information and photos
    • Feedback and suggestions

    Content Standards:
    • Must be original and accurate
    • Must not violate any laws or regulations
    • Must not infringe on third-party rights
    • Must be appropriate for an educational environment
    • Must not contain harmful, offensive, or inappropriate content

    Our Rights:
    • We may review, edit, or remove any user content
    • We may use your content to improve our services
    • We may display your content on our platform
    • We may share your content with other users as appropriate

    Your Responsibilities:
    • Ensure you have rights to share the content
    • Maintain appropriate and respectful language
    • Report any inappropriate content you encounter
    • Respect intellectual property rights of others`
  },
  {
    id: 'contribution-license',
    title: '6. CONTRIBUTION LICENSE',
    content: `By submitting content to our platform, you grant us a worldwide, non-exclusive, royalty-free license to:

    License Scope:
    • Use, reproduce, and distribute your content
    • Modify and adapt your content for our services
    • Display your content on our platform and related services
    • Use your content for marketing and promotional purposes
    • License your content to other users for educational purposes

    License Duration:
    • The license remains in effect while your content is on our platform
    • The license continues for archived or cached versions
    • You may revoke the license by removing your content
    • We may retain copies for legal and administrative purposes

    Your Rights:
    • You retain ownership of your original content
    • You can use your content elsewhere
    • You can modify or remove your content
    • You can revoke the license at any time

    Third-Party Use:
    • Other users may view and use your content
    • Users must respect your intellectual property rights
    • We are not responsible for third-party misuse of your content`
  },
  {
    id: 'guidelines',
    title: '7. GUIDELINES FOR REVIEWS',
    content: `Review Guidelines:

    Review Standards:
    • Reviews must be based on actual experiences
    • Reviews must be honest and accurate
    • Reviews must not contain false or misleading information
    • Reviews must be respectful and constructive
    • Reviews must not violate our community standards

    Prohibited Content:
    • Personal attacks or harassment
    • Spam or promotional content
    • Offensive or inappropriate language
    • False or fraudulent reviews
    • Reviews that violate privacy rights
    • Reviews that promote illegal activities

    Review Moderation:
    • We review all submissions before publication
    • We may edit or reject inappropriate reviews
    • We may remove reviews that violate our guidelines
    • We may suspend users who repeatedly violate guidelines
    • We encourage constructive feedback and improvement suggestions

    Review Benefits:
    • Help other students make informed decisions
    • Provide valuable feedback to tutors
    • Contribute to platform improvement
    • Build a supportive learning community`
  },
  {
    id: 'social-media',
    title: '8. SOCIAL MEDIA',
    content: `Social Media Integration:

    Platform Integration:
    • We may integrate with various social media platforms
    • You may share content from our platform to social media
    • Social media features are subject to their respective terms
    • We are not responsible for social media platform policies

    Content Sharing:
    • You may share your own content and experiences
    • Respect privacy and confidentiality when sharing
    • Do not share personal information of other users
    • Follow social media platform guidelines
    • Use appropriate hashtags and mentions

    Social Media Conduct:
    • Maintain professional behavior
    • Represent our platform positively
    • Do not engage in harassment or bullying
    • Report inappropriate social media behavior
    • Respect intellectual property rights

    Our Social Media Presence:
    • We maintain official social media accounts
    • We may share user-generated content (with permission)
    • We respond to social media inquiries and feedback
    • We use social media for educational content and updates`
  },
  {
    id: 'submissions',
    title: '9. SUBMISSIONS',
    content: `Content Submissions:

    Submission Types:
    • Study materials and resources
    • Questions and answers
    • Study tips and strategies
    • Educational content and explanations
    • Feedback and suggestions
    • Bug reports and technical issues

    Submission Requirements:
    • Content must be original or properly attributed
    • Content must be accurate and educational
    • Content must not violate copyright or other rights
    • Content must be appropriate for all ages
    • Content must not contain personal information

    Review Process:
    • All submissions are reviewed before publication
    • We may edit submissions for clarity or accuracy
    • We may reject submissions that don't meet our standards
    • We provide feedback on rejected submissions
    • We may request revisions or improvements

    Submission Rights:
    • You retain ownership of your submissions
    • You grant us license to use and distribute your submissions
    • You can modify or remove your submissions
    • You can request removal of your submissions`
  },
  {
    id: 'third-party',
    title: '10. THIRD-PARTY WEBSITES AND CONTENT',
    content: `Third-Party Content and Links:

    External Links:
    • Our platform may contain links to third-party websites
    • We do not endorse or control third-party content
    • Third-party websites have their own terms and policies
    • We are not responsible for third-party website content
    • Use third-party websites at your own risk

    Third-Party Services:
    • We may integrate third-party services (payment, analytics, etc.)
    • Third-party services have their own privacy policies
    • We share data with third parties as outlined in our Privacy Policy
    • Third-party services may collect additional information
    • We are not responsible for third-party service actions

    Content Attribution:
    • We may display third-party content with proper attribution
    • Third-party content is clearly marked
    • We respect intellectual property rights of third parties
    • We respond to legitimate takedown requests
    • We maintain appropriate licensing for third-party content

    User Responsibility:
    • Verify third-party content before relying on it
    • Read third-party terms and privacy policies
    • Report inappropriate third-party content
    • Use third-party services responsibly
    • Respect third-party intellectual property rights`
  },
  {
    id: 'advertisers',
    title: '11. ADVERTISERS',
    content: `Advertising and Sponsorship:

    Advertising Content:
    • We may display advertisements on our platform
    • Advertisements are clearly marked as such
    • We do not endorse advertised products or services
    • Advertisements are subject to our content standards
    • We may use targeted advertising based on user preferences

    Sponsored Content:
    • We may publish sponsored educational content
    • Sponsored content is clearly identified
    • Sponsored content meets our educational standards
    • We maintain editorial control over sponsored content
    • Sponsored content is relevant to our users

    Advertising Standards:
    • Advertisements must be appropriate for educational audiences
    • Advertisements must not be misleading or deceptive
    • Advertisements must comply with applicable laws
    • Advertisements must not contain inappropriate content
    • We review advertisements before publication

    User Privacy:
    • We protect user privacy in advertising
    • We do not share personal information with advertisers
    • Users can opt out of targeted advertising
    • We use anonymized data for advertising purposes
    • We comply with privacy regulations in advertising`
  },
  {
    id: 'site-management',
    title: '12. SITE MANAGEMENT',
    content: `Platform Management and Administration:

    Content Moderation:
    • We actively monitor platform content
    • We remove inappropriate or harmful content
    • We enforce our community guidelines
    • We may suspend or ban users who violate terms
    • We respond to user reports and complaints

    Technical Maintenance:
    • We perform regular platform maintenance
    • We may temporarily suspend services for updates
    • We provide advance notice of scheduled maintenance
    • We work to minimize service disruptions
    • We maintain backup systems and data protection

    Security Measures:
    • We implement security measures to protect user data
    • We monitor for security threats and vulnerabilities
    • We respond to security incidents promptly
    • We maintain secure payment processing
    • We comply with security best practices

    Quality Assurance:
    • We monitor platform performance and reliability
    • We collect user feedback for improvements
    • We conduct regular quality assessments
    • We work with tutors to maintain service quality
    • We continuously improve our platform features`
  },
  {
    id: 'privacy-policy',
    title: '13. PRIVACY POLICY',
    content: `Privacy and Data Protection:

    Data Collection:
    • We collect information you provide directly to us
    • We collect information about your use of our services
    • We collect information from third-party sources
    • We collect technical information about your device
    • We collect information about your interactions with our platform

    Data Use:
    • We use your data to provide our services
    • We use your data to communicate with you
    • We use your data to improve our services
    • We use your data for security and fraud prevention
    • We use your data to comply with legal obligations

    Data Sharing:
    • We share data with tutors and educational partners
    • We share data with service providers and contractors
    • We share data when required by law
    • We share data with your consent
    • We do not sell your personal information

    Data Protection:
    • We implement appropriate security measures
    • We limit access to your personal information
    • We train our staff on data protection
    • We regularly review our security practices
    • We comply with applicable data protection laws

    Your Rights:
    • You can access and update your personal information
    • You can request deletion of your data
    • You can opt out of certain data uses
    • You can request data portability
    • You can lodge complaints with supervisory authorities`
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