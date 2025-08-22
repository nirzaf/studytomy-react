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
    study materials, and educational resources.

    Service Description:
    • Online tutoring sessions with qualified educators
    • Access to comprehensive study materials
    • Interactive learning tools and resources
    • Progress tracking and assessment
    • Support for various educational curricula

    Service Availability:
    • Services are available 24/7 through our platform
    • Sessions can be scheduled at your convenience
    • Technical support is provided during business hours
    • Emergency support available for critical issues

    Service Quality:
    • All tutors are qualified and experienced
    • Regular quality assessments and feedback
    • Continuous improvement of our services
    • Student satisfaction monitoring and response`
  },
  {
    id: 'intellectual-property',
    title: '2. INTELLECTUAL PROPERTY RIGHTS',
    content: `All content on our platform is protected by intellectual property rights. Users may not copy, reproduce, or 
    distribute any content without explicit permission.

    Our Intellectual Property:
    • Platform design and functionality
    • Educational content and materials
    • Brand names, logos, and trademarks
    • Software and technical implementations
    • Original educational methodologies

    User Content Rights:
    • Users retain ownership of their original content
    • Users grant us license to use their content
    • We may modify content for platform compatibility
    • Users can remove their content at any time

    Third-Party Content:
    • Some materials may be licensed from third parties
    • Users must respect third-party copyrights
    • We are not responsible for third-party content violations
    • Users should report potential copyright issues

    Permitted Uses:
    • Personal educational purposes
    • Sharing within study groups
    • Academic research and citation
    • Non-commercial educational activities

    Prohibited Uses:
    • Commercial distribution without permission
    • Modification of our proprietary content
    • Reverse engineering of our platform
    • Unauthorized copying or reproduction`
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
    • You can revoke the license at any time`
  },
  {
    id: 'guidelines',
    title: '7. GUIDELINES FOR REVIEWS',
    content: `Review Guidelines:

    Review Standards:
    • Reviews must be based on actual experience
    • Reviews should be constructive and helpful
    • Reviews must not contain false or misleading information
    • Reviews should focus on educational value and service quality

    Prohibited Review Content:
    • Personal attacks or harassment
    • False or misleading statements
    • Spam or promotional content
    • Offensive or inappropriate language
    • Violation of privacy or confidentiality

    Review Moderation:
    • We reserve the right to moderate all reviews
    • Inappropriate reviews may be removed
    • Users may be asked to revise reviews
    • Repeated violations may result in account restrictions

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
    • Our platform may integrate with social media services
    • You can share your learning achievements
    • Connect with other students and tutors
    • Participate in educational discussions

    Social Media Guidelines:
    • Maintain appropriate and respectful behavior
    • Protect your privacy and personal information
    • Respect intellectual property rights
    • Follow platform-specific terms of service

    Content Sharing:
    • You control what you share on social media
    • We may provide sharing options for achievements
    • Social media posts are subject to their platform rules
    • We are not responsible for social media content

    Privacy Considerations:
    • Be mindful of what you share publicly
    • Consider the privacy of other users
    • Review privacy settings on social media platforms
    • Report inappropriate social media behavior`
  },
  {
    id: 'submissions',
    title: '9. SUBMISSIONS',
    content: `Content Submissions:

    Submission Types:
    • Study materials and resources
    • Questions and answers
    • Feedback and suggestions
    • Creative educational content
    • Technical improvements

    Submission Requirements:
    • Content must be original or properly licensed
    • Submissions must be relevant to education
    • Content must meet quality standards
    • Submissions must comply with our policies

    Review Process:
    • All submissions are reviewed for quality
    • Content may be edited for clarity or accuracy
    • Inappropriate submissions will be rejected
    • We may request modifications to submissions

    Submission Rights:
    • You retain ownership of your submissions
    • We may use submissions to improve our platform
    • Submissions may be shared with other users
    • You can withdraw submissions at any time`
  },
  {
    id: 'third-party',
    title: '10. THIRD-PARTY WEBSITES AND CONTENT',
    content: `Third-Party Integration:

    External Links:
    • Our platform may contain links to external websites
    • We do not endorse third-party content
    • External sites have their own terms and policies
    • We are not responsible for external content

    Third-Party Services:
    • We may use third-party services for functionality
    • Payment processing and security services
    • Analytics and performance monitoring
    • Customer support and communication tools

    User Responsibility:
    • Review third-party terms and policies
    • Exercise caution when visiting external sites
    • Report broken or inappropriate external links
    • Understand that external sites are not under our control

    Our Limitations:
    • We cannot guarantee third-party service availability
    • We are not liable for third-party actions
    • Third-party services may have different privacy policies
    • We will notify users of significant third-party changes`
  },
  {
    id: 'advertisers',
    title: '11. ADVERTISERS',
    content: `Advertising and Sponsorship:

    Advertising Content:
    • Our platform may display advertisements
    • Advertisements are clearly marked as such
    • We do not endorse advertised products or services
    • Advertisements are subject to our content standards

    Advertiser Guidelines:
    • Advertisements must be appropriate for educational audiences
    • Advertisements must not be misleading or deceptive
    • Advertisements must comply with applicable laws
    • We reserve the right to reject or remove advertisements

    User Experience:
    • Advertisements should not interfere with learning
    • We limit the frequency and placement of ads
    • Users can report inappropriate advertisements
    • We strive to maintain a balanced user experience

    Revenue and Transparency:
    • Advertising helps support our free services
    • We are transparent about our advertising practices
    • User data is not sold to advertisers
    • We maintain editorial independence from advertisers`
  },
  {
    id: 'site-management',
    title: '12. SITE MANAGEMENT',
    content: `Platform Management:

    Content Moderation:
    • We actively monitor platform content
    • Inappropriate content is removed promptly
    • Users can report problematic content
    • We maintain community standards and guidelines

    Technical Maintenance:
    • Regular platform updates and improvements
    • Security patches and vulnerability fixes
    • Performance optimization and monitoring
    • Backup and disaster recovery procedures

    User Support:
    • Technical support for platform issues
    • Help with account and billing questions
    • Guidance on platform features and usage
    • Response to user feedback and suggestions

    Policy Enforcement:
    • Consistent application of our terms and policies
    • Fair treatment of all users
    • Transparent decision-making processes
    • Appeals process for policy violations`
  },
  {
    id: 'privacy-policy',
    title: '13. PRIVACY POLICY',
    content: `Privacy and Data Protection:

    Data Collection:
    • We collect information necessary for service provision
    • Personal information is collected with consent
    • Usage data helps improve our services
    • We minimize data collection to essential information

    Data Usage:
    • Personal data is used to provide our services
    • We do not sell or rent user data
    • Data may be used for service improvement
    • We respect user privacy preferences

    Data Security:
    • Industry-standard security measures
    • Regular security audits and updates
    • Limited access to personal information
    • Encryption of sensitive data

    User Rights:
    • Access to your personal information
    • Correction of inaccurate data
    • Deletion of your data upon request
    • Control over marketing communications

    Data Retention:
    • Data is retained as long as necessary
    • Inactive accounts may be deleted
    • Legal requirements may extend retention
    • Users can request data deletion`
  },
  {
    id: 'limitations',
    title: '14. LIMITATIONS OF LIABILITY',
    content: `Liability Limitations:

    Service Limitations:
    • We provide services "as is" without warranties
    • We are not liable for service interruptions
    • Technical issues may affect service availability
    • We strive for high service quality but cannot guarantee perfection

    User Responsibility:
    • Users are responsible for their own learning outcomes
    • We are not liable for academic performance
    • Users must verify information and materials
    • We encourage critical thinking and verification

    Financial Limitations:
    • Our liability is limited to amounts paid for services
    • We are not liable for indirect or consequential damages
    • Claims must be made within specified timeframes
    • Some jurisdictions may not allow liability limitations

    Force Majeure:
    • We are not liable for events beyond our control
    • Natural disasters and technical failures
    • Government actions and regulatory changes
    • Third-party service disruptions`
  },
  {
    id: 'indemnification',
    title: '15. INDEMNIFICATION',
    content: `User Indemnification:

    Your Obligations:
    • You agree to defend and indemnify us
    • Protection against claims arising from your use
    • Coverage for violations of these terms
    • Responsibility for your content and actions

    Covered Claims:
    • Violations of intellectual property rights
    • Breach of these terms and conditions
    • Misuse of our platform or services
    • Harm caused to other users or third parties

    Defense and Settlement:
    • We have the right to control defense
    • You must cooperate with our defense
    • We may settle claims on reasonable terms
    • You are responsible for settlement costs

    Limitations:
    • Indemnification does not cover our negligence
    • We must provide prompt notice of claims
    • You have the right to participate in defense
    • Indemnification survives termination of service`
  },
  {
    id: 'user-data',
    title: '16. USER DATA',
    content: `Data Management:

    Data Ownership:
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
    • You can request data deletion subject to legal requirements

    Data Security:
    • Encryption of sensitive data
    • Secure transmission protocols
    • Regular security assessments
    • Incident response procedures

    Data Access:
    • You can access your data through our platform
    • Export functionality for your information
    • Data portability options
    • Transparent data handling practices`
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
    • Essential service communications cannot be opted out

    Electronic Signatures:
    • Digital agreements are legally binding
    • Click acceptance constitutes valid consent
    • Electronic records are admissible in legal proceedings
    • You acknowledge the validity of electronic transactions`
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
    • Cannot be modified except in writing by us

    Governing Law:
    • These terms are governed by applicable law
    • Disputes will be resolved in appropriate jurisdictions
    • International users are subject to local laws`
  }
];

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Debug: Check if all sections are rendered with correct IDs
    setTimeout(() => {
      console.log('Checking rendered sections...');
      tableOfContents.forEach(item => {
        const element = document.getElementById(item.id);
        console.log(`Section ${item.id}:`, element ? 'Found' : 'NOT FOUND');
      });
    }, 1000);
    
    // Add smooth scrolling behavior
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling
        
        const id = target.getAttribute('href')?.substring(1);
        console.log('Anchor clicked:', id); // Debug log
        
        if (id) {
          // Wait a bit for the DOM to be ready
          setTimeout(() => {
            const element = document.getElementById(id);
            console.log('Element found:', element); // Debug log
            
            if (element) {
              // Add offset for fixed header
              const headerHeight = 80; // Approximate header height
              const elementPosition = element.offsetTop - headerHeight;
              
              console.log('Scrolling to position:', elementPosition); // Debug log
              
              window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
              });
              
              // Add visual feedback
              element.style.scrollMarginTop = `${headerHeight}px`;
              
              // Update URL hash without triggering navigation
              const currentHash = window.location.hash;
              const newHash = `#${id}`;
              if (currentHash !== newHash) {
                window.history.replaceState(null, '', newHash);
              }
            } else {
              console.warn('Element not found for ID:', id); // Debug warning
            }
          }, 100);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8" style={{ scrollBehavior: 'smooth' }}>
      <h1 className="text-3xl font-bold mb-6 mt-16">Studytomy Terms of Use</h1>
      <p className="text-gray-600 mb-8">Last updated: 02 June 2024</p>

      {/* Debug section - remove this after testing */}
      <div className="mb-8 p-4 bg-yellow-100 border border-yellow-400 rounded">
        <h3 className="font-bold mb-2">Debug Info:</h3>
        <p>Total sections: {tableOfContents.length}</p>
        <p>Additional sections: {additionalSections.length}</p>
        <p>Current URL: {window.location.href}</p>
      </div>

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