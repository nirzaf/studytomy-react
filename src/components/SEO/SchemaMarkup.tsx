import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  type: 'Organization' | 'EducationalOrganization' | 'Course' | 'Service' | 'WebPage' | 'FAQPage';
  data: Record<string, any>;
}

const SchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  // Create the base organization data
  const organizationData = {
    name: 'Studytomy',
    url: 'https://studytomy.com',
    logo: 'https://ik.imagekit.io/studytomy/minimal%20primary%20logo%20mini.png?updatedAt=1732379724951',
    sameAs: [
      'https://www.facebook.com/studytomy',
      'https://www.instagram.com/studytomy',
      'https://twitter.com/studytomy',
      'https://www.linkedin.com/company/studytomy'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Melbourne',
      addressRegion: 'VIC',
      addressCountry: 'Australia'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+61-000-000-000',
      contactType: 'customer service',
      email: 'info@studytomy.com'
    }
  };

  // Generate the appropriate schema based on the type
  let schema;
  
  // Filter out @type from data to prevent duplication
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(([key]) => key !== '@type')
  );
  
  switch (type) {
    case 'Organization':
    case 'EducationalOrganization':
      schema = {
        '@context': 'https://schema.org',
        '@type': type,
        ...organizationData,
        ...filteredData
      };
      break;
      
    case 'Course':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: data.name || 'Online Tutoring Course',
        description: data.description || 'Expert tutoring for students worldwide',
        provider: { '@type': 'EducationalOrganization', ...organizationData },
        ...filteredData
      };
      break;
      
    case 'Service':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Tutoring',
        provider: { '@type': 'EducationalOrganization', ...organizationData },
        ...filteredData
      };
      break;
      
    case 'WebPage':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        isPartOf: {
          '@type': 'WebSite',
          name: 'Studytomy',
          url: 'https://studytomy.com'
        },
        ...filteredData
      };
      break;
      
    case 'FAQPage':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.questions?.map((q: any) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer
          }
        })) || []
      };
      break;
      
    default:
      schema = {
        '@context': 'https://schema.org',
        '@type': type,
        ...filteredData
      };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
