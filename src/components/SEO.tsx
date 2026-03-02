import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
}) => {
  const siteName = 'Gaia Circle Lab';
  const defaultTitle = 'Gaia Circle Lab | La perfezione nella imperfezione';
  const defaultDescription = 'Gaia Circle Lab è un\'agenzia creativa di Arte e Tecnologia con sede a Moruzzo (UD). Servizi: Web Design, Amplificazione Creativa IA, Eventi Immersivi.';
  const defaultKeywords = 'Gaia Circle Lab, Creative Agency, Web Design, AI, Eventi, Moruzzo, Udine, FVG, Studio 16';
  const siteUrl = 'https://www.gaiacirclelab.com'; // Adjust if different
  const defaultImage = `${siteUrl}/assets/logo-solo.png`; // Fallback image

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;
  const metaImage = ogImage ? (ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`) : defaultImage;
  const canonicalUrl = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : window.location.href;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": siteUrl,
    "logo": defaultImage,
    "sameAs": [
      "https://www.instagram.com/gaiacirclelab",
      "https://www.linkedin.com/company/gaia-circle-lab"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39-340-949-0109",
      "contactType": "customer service",
      "areaServed": "IT",
      "availableLanguage": "Italian"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Centa 15",
      "addressLocality": "Moruzzo",
      "addressRegion": "UD",
      "postalCode": "33030",
      "addressCountry": "IT"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
