import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const { language } = useLanguage();

  const defaults = {
    en: {
      title: "Apart Hotel Amelia | Modern Luxury Living in Buea",
      description: "Experience world-class service and elegant accommodation at Apart Hotel Amelia. Featuring a rooftop pool, sauna, and premium rooms in the heart of Buea."
    },
    fr: {
      title: "Apart Hôtel Amelia | Vie de Luxe Moderne à Buea",
      description: "Découvrez un service de classe mondiale et un hébergement élégant à l'Apart Hôtel Amelia. Doté d'une piscine sur le toit, d'un sauna et de chambres premium au cœur de Buea."
    }
  }[language];

  const metaTitle = title ? `${title} | Amelia` : defaults.title;
  const metaDescription = description || defaults.description;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <html lang={language} />
    </Helmet>
  );
};
