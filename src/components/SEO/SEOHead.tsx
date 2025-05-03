import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

const SEOHead = ({
  title = 'Studytomy - Epitome of E-Tutoring',
  description = 'Studytomy is a Global Online Tutoring Platform offering personalized 1-on-1 learning with expert IGCSE & IB tutors worldwide.',
  keywords = 'Global Online Tutoring Platform, E-Learning Solutions, Virtual Classroom Technology, Studytomy Education Hub, Interactive Online Courses, Digital Tutoring Services, Remote Learning Tools, Academic Webinars, Online Study Programs, Educational Web Platform, Distance Education Resources',
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://ik.imagekit.io/studytomy/minimal%20primary%20logo%20mini.png?updatedAt=1732379724951',
}: SEOProps) => {
  // Construct the full canonical URL if a relative path is provided
  const fullCanonicalUrl = canonicalUrl 
    ? (canonicalUrl.startsWith('http') ? canonicalUrl : `https://studytomy.com${canonicalUrl}`) 
    : 'https://studytomy.com';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Studytomy" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;
