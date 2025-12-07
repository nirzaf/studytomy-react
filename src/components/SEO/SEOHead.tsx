
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://studytomy.com';
  const ensureTrailingSlash = (url: string) => (url.endsWith('/') ? url : `${url}/`);
  const fullCanonicalUrl = (() => {
    if (!canonicalUrl) return ensureTrailingSlash(siteUrl);
    if (canonicalUrl.startsWith('http')) return ensureTrailingSlash(canonicalUrl);
    const combined = `${siteUrl}${canonicalUrl}`;
    return ensureTrailingSlash(combined);
  })();

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Studytomy" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="theme-color" content="#003049" />
      <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.clarity.ms" crossOrigin="" />
      <link rel="dns-prefetch" href="https://www.clarity.ms" />
    </>
  );
};

export default SEOHead;
