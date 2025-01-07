import { useState } from "react";
import { Input } from "../Components/Input";
import { Path_page } from "../Routes";
import { Button } from "../Components/Button";
import { FacebookIcon, InstagramColorIcon, PaperPlane, TikTokIcon, WhatsappIcon, YoutubeIcon } from "../Resources/Icons";
import { useComment } from "../Components/Context/commentsContext";
import { Menu } from "../Components/Menu";

const Footer = () => {
  const [ comment, setComment ] = useState( '' )
  const [ showTextW, setShowTextW ] = useState( false );
  const { addMessage } = useComment();
  const [ sendEmpty, setSendEmpty ] = useState( false );

  const handleComments = ( e ) => {
    setComment( e.value );
    setSendEmpty( false );
  };

  const sendMessage = ( comment ) => {
    if ( comment ) {
      addMessage( comment );
      setComment( '' );
    } else {
      setSendEmpty( true );
    }
  };

  const itemsMenus = [
    [
      { url: Path_page.STORE, name: 'Tienda' },
      { url: Path_page.STORE + Path_page.CATEGORIES_STORE.FEATURED, name: 'Destacados' },
      { url: Path_page.STORE + Path_page.CATEGORIES_STORE.OFFER, name: 'Ofertas' },
      { url: Path_page.STORE + Path_page.CATEGORIES_STORE.NEW, name: 'Nuevos' }
    ],
    [ { url: Path_page.SERVICES, name: 'Servicios' },
      { url: Path_page.US, name: 'Nosotros' },
      { url: Path_page.CONTACT, name: 'Contacto' },
      { url: Path_page.PROFILE, name: 'Tu Perfil' }
    ],
    [
      { url: Path_page.TERMS_AND_CONDITIONS, name: 'Términos y Condiciones', target: '_blank' },
      { url: Path_page.PRIVACY_POLICY, name: 'Politica de Privacidad', target: '_blank' },
      { url: Path_page.FREQUENTLY_ASKED_QUESTIONS, name: 'Preguntas Frecuentes', target: '_blank' }
    ]
  ];
  
  const artMenus = 'text-sm tl:text-base family-oswald text-stone-300 tracking-wider leading-6 tl:leading-8 capitalize hover:text-white hover:underline';

  return (
   <footer className='footer  bg-Primary pt-8 tl:pt-14 shadow-top-black' id='footer'>
     <div className='comments container mx-auto px-3 pb-5 tl:pb-10'>
       <h2 className='text-stone-200 text-center text-base tl:text-lg tracking-wider w-full mb-5'>
         Dejanos tu opinion, es de gran ayuda para nosotros poder ser mejores dia a dia.
       </h2>
       <div className='send-message flex flex-col xn:flex-row justify-between items-end '>
         <Input type='text' placeholder='Dejanos tu comentario... ¿Qué opinas acercá de Nosotros?'
                onChange={ handleComments } value={ comment } maxLength={ 1000 }
                classInput={` ${sendEmpty ? 'empty' : ''} scrollbar scrollbar-track-transparent py-2`} textTarea></Input>
         <Button classBtn=' ml-2.5 px-4 tl:px-7 py-2 text-stone-200 border border-transparent hover:text-white hover:border-stone-200 rounded-full duration-200 text-sm tl:text-base'
                  btnText icon={ <PaperPlane/> } iconRight
                  onClick={ () => sendMessage( comment ) }>
              Enviar...
         </Button>
       </div>
     </div>
     <div className='comunication flex flex-row justify-between items-center w-full container mx-auto px-3 mb-3 tl:mb-12 pb-3 border-b border-b-white'>
       <div className='watssapp flex flex-row justify-center items-center'>
         <a href="https://wa.me/573247775394?text=¡Hola!%20Quiero%20más%20información" target='_blank' rel="noreferrer">
           <i onMouseEnter={ () => setShowTextW( true ) } onMouseLeave={ () => setShowTextW( false ) }>
             <WhatsappIcon  classIcons='whatsapp text-green-500 cursor-pointer w-6 h-6 sm:w-9 sm:h-9 p-0.5 sm:p-1.5 hover:shadow-[0_0_5px_5px_#72B01D] rounded-full duration-200'/>
           </i>
         </a>
         <p className={ `text-w text-13 tl:text-15 text-Primary bg-white rounded-r-full rounded-t-full px-3 py-0.5 shadow-custom-white -mt-8 ml-4 font-semibold family-oswald tracking-wide duration-500 pointer-events-none ${ showTextW ? 'animate-fade-in cursor-default' : 'animate-fade-out cursor-default' }`}>
           ¡Hola, estamos a tu servicio!
         </p>
       </div>
       <div className=' social flex flex-row justify-around items-center sm:gap-0.5'>
         <a href='/' className=' facebook p-0.5 sm:p-1.5 hover:shadow-[0_0_5px_5px_#090C9B] rounded-full duration-200' target='_blank'>
           <FacebookIcon classIcons='text-blue-700 cursor-pointer w-5 h-5 sm:w-6 sm:h-6'/>
         </a>
         <a href='/' className='youtube p-0.5 sm:p-1.5 hover:shadow-[0_0_5px_5px_#BF0603] rounded-full duration-200' target='_blank'>
           <YoutubeIcon classIcons='text-red-600 cursor-pointer w-5 h-5 sm:w-6 sm:h-6'/>
         </a>
         <a href='/' className='instagram p-0.5 sm:p-1.5 hover:shadow-[0_0_5px_5px_#FDB833] rounded-full duration-200' target='_blank'>
           <InstagramColorIcon classIcons='cursor-pointer w-5 h-5 sm:w-6 sm:h-6 rounded-full'/>
         </a>
         <a href='/' className='tiktok p-0.5 sm:p-1.5 hover:shadow-[0_0_5px_5px_#FFFFFF] rounded-full duration-200' target='_blank'>
           <TikTokIcon classIcons='text-stone-200 cursor-pointer w-5 h-5 sm:w-6 sm:h-6'/>
         </a>
       </div>
     </div>
     <div className='menus grid grid-cols-1 xn:grid-cols-3 container mx-auto px-3 py-6 sm:py-10'>
       <div className='menu-store block sm:flex sm:justify-center xn:border-r xn:border-r-white sm:border-r-0 mr-0  xn:mr-10 sm:mr-0'>
         <Menu items={ itemsMenus[ 0 ] } atr={ artMenus }/>
       </div>
       <div className='menu-info block sm:flex sm:justify-center  border-y xn:border-y-0 border-y-white xn:border-r xn:border-r-white sm:border-x sm:border-x-white py-6 my-6 xn:py-0 xn:my-0 mx-0 xn:mr-10 sm:mr-0'>
         <Menu items={ itemsMenus[ 1 ] } atr={ artMenus }/>
       </div>
       <div className='menu-policy block sm:flex sm:justify-center'>
         <Menu items={ itemsMenus[ 2 ] } atr={ artMenus }/>
       </div>
     </div>
     <div className='copiright text-stone-200 text-end container mx-auto px-3 py-4 border-t border-t-stone-50'>
       <p className='family-oswald tracking-wider text-13 tl:text-15'>
         © 2025. Todos los derechos reservados para este sitio. +57 Productos-Colombia.
       </p>
     </div>
   </footer>
  );
};

export { Footer };