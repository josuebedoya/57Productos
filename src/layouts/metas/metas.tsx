import {Helmet} from 'react-helmet-async';
import useUrl from "@/hooks/useUrl.tsx";
import type {MetaProps} from "@/layouts/metas/types.d.ts";
import {defaultLng} from "@/i18n/i18n.ts";

const Metas = ({title, description, type, keywords, image, children}: MetaProps) => {
  const {href} = useUrl();
  const keywordList = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  return (
    <Helmet>
      {/* Básic */}
      <title>{title}</title>
      <meta name="description" content={description}/>
      <link rel="canonical" href={href}/>

      {/* Keywords */}
      {keywordList && (
        <meta name="keywords" content={keywordList}/>
      )}

      {/* Open Graph */}
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:url" content={href}/>
      <meta property="og:type" content={type}/>
      <meta property="og:locale" content={defaultLng}/>

      {image && (
        <meta property="og:image" content={image}/>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>

      {image && (
        <meta name="twitter:image" content={image}/>
      )}

      {/* Performance */}
      {image && (
        <link rel="preload" as="image" href={image}/>
      )}

      {/* Extra metas specificness */}
      {children}
    </Helmet>
  );
};

export {Metas};