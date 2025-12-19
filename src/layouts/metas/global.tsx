import {Helmet} from 'react-helmet-async';

/**
 * Here we define global meta tags and links that should be included in the head of the document.
 * */

const GlobalMetas = () => {
  return (
    <Helmet>
      {/* Base */}
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

      {/* Robots global */}
      <meta name="robots" content="index, follow"/>
      <meta name="googlebot" content="index, follow"/>

      {/* Favicon */}
      <link rel="icon" href="/favicon.png"/>

      {/* preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>

      {/* Fonts */}
      <link
        href='https://fonts.googleapis.com/css2?family=Bree+Serif&family=Satisfy&family=Quicksand:wght@300..700&family=Oswald:wght@200..700&display=swap'
        rel='stylesheet'
      />
    </Helmet>
  );
};

export {GlobalMetas};