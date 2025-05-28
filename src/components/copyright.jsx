import { getSetting } from "@/settings.js";

const Copyright = ( { copyrightClass } ) => {
  const date = new Date().toLocaleDateString( 'es-co', { 'year': 'numeric' } );

  return (
   <div className='copiright container mx-auto'>
     <p className={ `${ copyrightClass } text-13` }>
       © { date }. Todos los derechos reservados para <span className='bottom-0.5 relative'>«</span> { getSetting( 'site.name' ) } <span className='bottom-0.5 relative'>»</span>.
     </p>
   </div>
  );
};

export { Copyright };