import { Helmet, HelmetProvider } from "react-helmet-async";

type SeoType = {
  title: string;
  description: string;
  canonicalUrl: string;
};

export const SEOComponent = ({ title, description, canonicalUrl }: SeoType) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        {/* Puedes añadir más metadatos según tus necesidades */}
      </Helmet>
    </HelmetProvider>
  );
};
