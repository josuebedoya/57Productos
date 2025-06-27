import { Helmet } from 'react-helmet-async';

const GlobalMetas = () => {
  return (
   <Helmet>
     <link rel='preconnect' href='https://fonts.googleapis.com'/>
     <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin=''/>
     <link
      href='https://fonts.googleapis.com/css2?family=Bree+Serif&family=Satisfy&family=Quicksand:wght@300..700&family=Oswald:wght@200..700&display=swap'
      rel='stylesheet'
     />
   </Helmet>
  );
};

export { GlobalMetas };