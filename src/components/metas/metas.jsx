import { Helmet } from 'react-helmet-async';

const Metas = ( { title, description, name, type, favicon, children } ) => {
  return (
   <Helmet>
     <title>{ title }</title>
     <meta name="description" content={ description }/>
     <link rel="icon" type="image/png" href={ favicon || '/favicon.png' }/>

     {/* Facebook */ }
     <meta property="og:type" content={ type }/>
     <meta property="og:title" content={ title }/>
     <meta property="og:description" content={ description }/>

     {/* Twitter */ }
     <meta name="twitter:creator" content={ name }/>
     <meta name="twitter:card" content={ type }/>
     <meta name="twitter:title" content={ title }/>
     <meta name="twitter:description" content={ description }/>

     {/* Extra */ }
     { children }
   </Helmet>
  );
};

export { Metas };