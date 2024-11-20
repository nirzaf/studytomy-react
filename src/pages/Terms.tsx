import { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 mt-16">Studytomy Terms of Use</h1>
      <p className="text-gray-600 mb-8">Last updated: 02 June 2024</p>

      {/* Agreement Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Agreement to Our Legal Terms</h2>
        <p className="text-gray-700 mb-4">
          We are Studytomy ("Company," "we," "us," "our").
        </p>
        <p className="text-gray-700 mb-4">
          We operate <a href="https://studytomy.com" className="text-blue-600 hover:underline">studytomy.com</a>, 
          as well as any other related products and services that refer or link to these legal terms 
          (collectively, the "Services").
        </p>
        <p className="text-gray-700 mb-4">
          You can contact us by email at info@studytomy.com or by mail to 2202/4 Kurringal Court, 
          Fannie Bay, NT, 0820, Australia.
        </p>
      </section>

      {/* Table of Contents */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
        <nav className="space-y-2">
          {tableOfContents.map(({ id, title }) => (
            <a
              key={id}
              href={`#${id}`}
              className="block text-blue-600 hover:underline"
            >
              {title}
            </a>
          ))}
        </nav>
      </section>

      {/* User Representations Section */}
      <section id="user-representations" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. USER REPRESENTATIONS</h2>
        <p className="text-gray-700 mb-4">By using the Services, you represent and warrant that:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>You have the legal capacity and agree to comply with these Legal Terms</li>
          <li>You are not a minor in the jurisdiction in which you reside</li>
          <li>You will not access the Services through automated or non-human means</li>
          <li>You will not use the Services for any illegal or unauthorized purpose</li>
          <li>Your use of the Services will not violate any applicable law or regulation</li>
        </ul>
      </section>

      {/* Prohibited Activities Section */}
      <section id="prohibited-activities" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. PROHIBITED ACTIVITIES</h2>
        <p className="text-gray-700 mb-4">
          You may not access or use the Services for any purpose other than that for which we make the Services available. 
          The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or 
          approved by us.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Systematically retrieve data or content from the Services without written permission</li>
          <li>Trick, defraud, or mislead us and other users</li>
          <li>Circumvent, disable, or interfere with security-related features</li>
          <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services</li>
          <li>Use any information obtained from the Services to harass, abuse, or harm another person</li>
          <li>Make improper use of our support services</li>
          <li>Use the Services in a manner inconsistent with any applicable laws or regulations</li>
          <li>Engage in unauthorized framing of or linking to the Services</li>
          <li>Upload or transmit viruses, Trojan horses, or other malicious code</li>
          <li>Engage in any automated use of the system</li>
          <li>Delete copyright or proprietary rights notices</li>
          <li>Attempt to impersonate another user or person</li>
          <li>Upload or transmit any material that acts as a passive or active information collection or transmission mechanism</li>
          <li>Interfere with, disrupt, or create an undue burden on the Services</li>
          <li>Harass, annoy, intimidate, or threaten any of our employees</li>
          <li>Copy or adapt the Services' software</li>
          <li>Decipher, decompile, disassemble, or reverse engineer any of the software</li>
          <li>Make any unauthorized use of the Services</li>
          <li>Use the Services as part of any effort to compete with us</li>
        </ul>
      </section>

      {/* Continue with other sections... */}
      {renderSections()}

      {/* Contact Section */}
      <section id="contact" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">19. CONTACT US</h2>
        <p className="text-gray-700 mb-2">
          In order to resolve a complaint regarding the Services or to receive further information regarding use of the 
          Services, please contact us at:
        </p>
        <div className="text-gray-700 space-y-2">
          <p>2202/4 Kurringal Court, Fannie Bay, NT, 0820, Australia</p>
          <p>+61461367702</p>
          <p>info@studytomy.com</p>
        </div>
      </section>
    </div>
  );
};

// Table of contents data
const tableOfContents = [
  { id: 'services', title: '1. OUR SERVICES' },
  { id: 'intellectual-property', title: '2. INTELLECTUAL PROPERTY RIGHTS' },
  { id: 'user-representations', title: '3. USER REPRESENTATIONS' },
  { id: 'prohibited-activities', title: '4. PROHIBITED ACTIVITIES' },
  { id: 'user-generated', title: '5. USER GENERATED CONTRIBUTIONS' },
  { id: 'contribution-license', title: '6. CONTRIBUTION LICENSE' },
  { id: 'services-management', title: '7. SERVICES MANAGEMENT' },
  { id: 'term-termination', title: '8. TERM AND TERMINATION' },
  { id: 'modifications', title: '9. MODIFICATIONS AND INTERRUPTIONS' },
  { id: 'governing-law', title: '10. GOVERNING LAW' },
  { id: 'dispute-resolution', title: '11. DISPUTE RESOLUTION' },
  { id: 'corrections', title: '12. CORRECTIONS' },
  { id: 'disclaimer', title: '13. DISCLAIMER' },
  { id: 'limitations', title: '14. LIMITATIONS OF LIABILITY' },
  { id: 'indemnification', title: '15. INDEMNIFICATION' },
  { id: 'user-data', title: '16. USER DATA' },
  { id: 'electronic-communications', title: '17. ELECTRONIC COMMUNICATIONS' },
  { id: 'miscellaneous', title: '18. MISCELLANEOUS' },
  { id: 'contact', title: '19. CONTACT US' },
];

// Add these sections to your existing sections array
const additionalSections = [
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
    id: 'electronic-communications',
    title: '17. ELECTRONIC COMMUNICATIONS',
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

// Add a helper function to render complex content with subsections
const renderComplexContent = (content: string) => {
  const sections = content.split('\n\n');
  
  return sections.map((section, index) => {
    const [title, ...items] = section.split('\n');
    
    return (
      <div key={index} className="mb-6">
        {title.includes(':') && (
          <h3 className="text-xl font-medium mb-3">{title}</h3>
        )}
        {items.length > 0 && (
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {items.map((item, i) => (
              <li key={i}>
                {item.trim().startsWith('•') ? (
                  <div>
                    {item.substring(1).trim()}
                    {item.includes('-') && (
                      <ul className="list-disc pl-6 mt-2">
                        {item.split('-').slice(1).map((subItem, j) => (
                          <li key={j}>{subItem.trim()}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  item.trim()
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  });
};

// Helper function to render all sections
const renderSections = () => {
  const sections = [
    {
      id: 'user-generated',
      title: '5. USER GENERATED CONTRIBUTIONS',
      content: `The "User-generated Content" means all comments, remarks, information, feedback, text, photographs, links, data, 
      images, video, music, or other material that you or any User post to any part of the Studytomy Platform or provide to 
      Studytomy, including such content or information that is posted as a result of surveys.

      When you create or make available any Contributions, you thereby represent and warrant that:

      • The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of 
        your Contributions do not and will not infringe the proprietary rights of any third party
      • Your Contributions are not false, inaccurate, or misleading
      • Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, 
        spam, mass mailings, or other forms of solicitation
      • Your Contributions do not violate any applicable law, regulation, or rule
      • Your Contributions do not violate the privacy or publicity rights of any third party
      • Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or 
        exploits people under the age of 18
      • Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the 
        health or well-being of minors`
    },
    {
      id: 'contribution-license',
      title: '6. CONTRIBUTION LICENSE',
      content: `By posting your Contributions to any part of the Services, you automatically grant, and you represent and warrant 
      that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, 
      royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, 
      broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt 
      (in whole or in part), and distribute such Contributions for any purpose, commercial, advertising, or otherwise, and to 
      prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of 
      the foregoing.

      The use and distribution may occur in any media formats and through any media channels.

      This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your 
      name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and 
      personal and commercial images you provide.`
    },
    {
      id: 'services-management',
      title: '7. SERVICES MANAGEMENT',
      content: `We reserve the right, but not the obligation, to:
      
      1. Monitor the Services for violations of these Legal Terms
      2. Take appropriate legal action against anyone who violates the law or these Legal Terms
      3. Refuse, restrict access to, or limit the availability of any Service
      4. Remove from the Services any content that is excessive in size or burdensome
      5. Otherwise manage the Services in a manner designed to protect our rights and property`
    },
    {
      id: 'term-termination',
      title: '8. TERM AND TERMINATION',
      content: `These Legal Terms shall remain in full force and effect while you use the Services. We reserve the right to 
      terminate your access to the Services for any reason or no reason, including breach of these Terms.

      If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account 
      under your name, a fake or borrowed name, or the name of any third party.`
    },
    {
      id: 'modifications',
      title: '9. MODIFICATIONS AND INTERRUPTIONS',
      content: `We reserve the right to change, modify, or remove the contents of the Services at any time without notice. 
      We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems 
      or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors.`
    },
    {
      id: 'governing-law',
      title: '10. GOVERNING LAW',
      content: `These Legal Terms shall be governed by and defined following the laws of Australia. Australia and yourself 
      irrevocably consent that the courts of Australia shall have exclusive jurisdiction to resolve any dispute which may 
      arise in connection with these Legal Terms.`
    },
    {
      id: 'dispute-resolution',
      title: '11. DISPUTE RESOLUTION',
      content: `To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms, 
      you and Studytomy agree to first attempt to negotiate any dispute informally for at least 30 days before initiating 
      arbitration.

      Informal Negotiations: Such informal negotiations commence upon written notice from one Party to the other Party.

      Binding Arbitration: Any dispute arising from these Terms shall be referred to and finally resolved by arbitration.`
    },
    {
      id: 'corrections',
      title: '12. CORRECTIONS',
      content: `There may be information on the Services that contains typographical errors, inaccuracies, or omissions. 
      We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information at any 
      time, without prior notice.`
    },
    {
      id: 'disclaimer',
      title: '13. DISCLAIMER',
      content: `THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE 
      AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION 
      WITH THE SERVICES AND YOUR USE THEREOF.`
    },
    {
      id: 'limitations',
      title: '14. LIMITATIONS OF LIABILITY',
      content: `IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, 
      INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS 
      OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES.`
    },
    {
      id: 'indemnification',
      title: '15. INDEMNIFICATION',
      content: `You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our 
      respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, 
      including reasonable attorneys' fees and expenses.`
    },
    {
      id: 'user-data',
      title: '16. USER DATA',
      content: `We will maintain certain data that you transmit to the Services for the purpose of managing the performance 
      of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups 
      of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken 
      using the Services.`
    },
    {
      id: 'electronic-communications',
      title: '17. ELECTRONIC COMMUNICATIONS',
      content: `Visiting the Services, sending us emails, and completing online forms constitute electronic communications. 
      You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other 
      communications we provide to you electronically satisfy any legal requirement that such communication be in writing.`
    },
    {
      id: 'miscellaneous',
      title: '18. MISCELLANEOUS',
      content: `These Legal Terms and any policies or operating rules posted by us on the Services constitute the entire 
      agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these 
      Legal Terms shall not operate as a waiver of such right or provision.`
    }
  ];

  return sections.map(section => (
    <section key={section.id} id={section.id} className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
      <div className="prose prose-gray max-w-none">
        {renderComplexContent(section.content)}
      </div>
    </section>
  ));
};

export default Terms; 