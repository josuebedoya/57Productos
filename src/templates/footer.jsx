import { useState } from 'react';
import TextArea from "@ui/input/fields/textarea/index.tsx";
import { Path_page } from '@/routes.ts';
import Button from '@ui/button/index.tsx';
import Form from '@ui/form/index.tsx';
import { CSSTransition } from 'react-transition-group';
import Copyright from "@ui/copyright/index.tsx";
import Icon from "@ui/icons/index.js";
import MenuNav from "@ui/menu/index.tsx";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const [ comment, setComment ] = useState( '' );
  const [ showTextW, setShowTextW ] = useState( false );
  const { addMessage } = {
    message: 'HOlaaaaa', addMessage: () => {
    }
  };//useComment();
  const [ sendEmpty, setSendEmpty ] = useState( false );
  const [ showForm, setShowForm ] = useState( false );
  const [ email, setEmail ] = useState( '' );
  const [ name, setName ] = useState( '' );

  const handleComments = ( e ) => {
    console.log( e.target.value );
    setComment( e.target.value );
    setSendEmpty( false );
  };

  const sendMessage = ( comment, name ) => {
    addMessage( comment, name );
    setComment( '' );
    setEmail( '' );
    setName( '' );
  };

  const handleShowForm = () => {
    if ( comment ) {
      setShowForm( true );
    } else {
      setSendEmpty( true );
    }
  };

  const itemsMenus = [
    [
      { link: Path_page.STORE, label: 'Tienda' },
      { link: Path_page.FEATURED, label: 'Destacados' },
      { link: Path_page.OFFER, label: 'Ofertas' },
      { link: Path_page.NEW, label: 'Nuevos' }
    ],
    [ { link: Path_page.SERVICES, label: 'Servicios' },
      { link: Path_page.US, label: 'Nosotros' },
      { link: Path_page.CONTACT, label: 'Contacto' },
      { link: Path_page.PROFILE, label: 'Tu Perfil' }
    ],
    [
      { link: Path_page.TERMS_AND_CONDITIONS, label: 'Términos y Condiciones', target: '_blank' },
      { link: Path_page.PRIVACY_POLICY, label: 'Politica de Privacidad', target: '_blank' },
      { link: Path_page.FAQ, label: 'Preguntas Frecuentes', target: '_blank' }
    ]
  ];

  const artMenus = 'text-sm tl:text-base family-oswald text-stone-300 tracking-wider leading-6 tl:leading-8 capitalize hover:text-white hover:underline';

  const onChangeValueName = ( e ) => {
    setName( e.value );
  }

  const onChangeValueEmail = ( e ) => {
    setEmail( e.value );
  }

  const inputs = [
    {
      value: name,
      placeholder: t( 'forms.input.label.name' ),
      type: 'text',
      name: 'name',
      onChange: onChangeValueName,
      isRequired: true,
    },
    {
      value: email,
      placeholder: t( 'forms.input.label.email' ),
      type: 'email',
      name: 'email',
      onChange: onChangeValueEmail,
      isRequired: true,
      maxLength: 50
    },
  ]

  return (
   <footer className='footer  bg-Primary pt-8 tl:pt-14 shadow-top-black' id='footer'>
     <CSSTransition in={ showForm } timeout={ 300 } unmountOnExit mountOnEnter classNames='send'>
       <div className='form absolute w-full xn:w-auto xn:right-8 flex justify-center'>
         <div className='flex justify-between max-w-95 xn:max-w-[450px] rounded-3xl shadow-custom-white bg-Primary'>
           <Form action={ () => {
             sendMessage( comment, name );
             setShowForm( false )
           } }
                 fields={ inputs }
                 withButton
                 nameForm='FormComment'
                 termsAndConditions
           />
           <i className='relative w-2' onClick={ () => setShowForm( false ) }>
             <Icon name='IoMdClose'
                   className='text-white text-lg w-7 h-7 absolute -left-5 top-2 cursor-pointer hover:animate-shaking'/>
           </i>
         </div>
       </div>
     </CSSTransition>
     <div className='comments container mx-auto px-3 pb-5 tl:pb-10'>
       <h2 className='text-stone-200 text-center text-base tl:text-lg tracking-wider w-full mb-5'>
         Dejanos tu opinion, es de gran ayuda para nosotros poder ser mejores dia a dia.
       </h2>
       <div className='send-message flex flex-col xn:flex-row justify-between items-end w-3/4 mx-auto'>
         <TextArea
          onChange={ handleComments }
          placeholder='Dejanos tu comentario...  ¿Qué opinas acercá de Nosotros?'
          name='message'
          value={ comment }
          maxLength={ 300 }
          className={ ` ${ sendEmpty ? 'empty' : '' } scrollbar scrollbar-track-transparent py-2` }
         />
         <Button
          variant='flat'
          color='white'
          rounded='full'
          variantHover='outline'
          colorHover='white'
          size='md'
          icon='BiSolidPaperPlane'
          iconRight
          onClick={ handleShowForm }
         >
           Enviar...
         </Button>
       </div>
     </div>
     <div
      className='comunication flex flex-row justify-between items-center w-full container mx-auto px-3 mb-3 tl:mb-12 pb-3 border-b border-b-white'>
       <div className='watssapp flex flex-row justify-center items-center'>
         <a href='https://wa.me/573247775394?text=¡Hola!%20Quiero%20más%20información' target='_blank' rel='noreferrer'>
           <i onMouseEnter={ () => setShowTextW( true ) } onMouseLeave={ () => setShowTextW( false ) }>

             <Icon name='FaWhatsapp'
                   className='whatsapp text-green-500 cursor-pointer w-6 h-6 sm:w-9 sm:h-9 p-0.5 sm:p-1.5 hover:shadow-[0_0_5px_5px_#72B01D] rounded-full duration-200'/>
           </i>
         </a>
         <p
          className={ `text-w text-13 tl:text-15 text-Primary bg-white rounded-r-full rounded-t-full px-3 py-0.5 shadow-custom-white -mt-8 ml-4 font-semibold family-oswald tracking-wide duration-500 pointer-events-none ${ showTextW ? 'animate-fade-in cursor-default' : 'animate-fade-out cursor-default' }` }>
           ¡Hola, estamos a tu servicio!
         </p>
       </div>
       <div className=' social flex flex-row justify-around items-center sm:gap-0.5'>
         <a href='https://www.facebook.com'
            className=' facebook p-0.5 sm:p-1.5 hover:shadow-[0_0_5px_5px_#090C9B] rounded-full duration-200'
            target='_blank'>
           <Icon name='FaFacebook' className='text-blue-700 cursor-pointer w-5 h-5 sm:w-6 sm:h-6'/>
         </a>
         <a href='https://youtube.com'
            className='youtube p-0.5 sm:p-1.5 hover:shadow-[0_0_5px_5px_#BF0603] rounded-full duration-200'
            target='_blank'>
           <Icon name='FaYoutube' className='text-red-600 cursor-pointer w-5 h-5 sm:w-6 sm:h-6'/>
         </a>
         <a href='https://www.instagram.com'
            className='instagram p-0.5 sm:p-1.5 hover:shadow-[0_0_5px_5px_#FDB833] rounded-full duration-200'
            target='_blank'>
           <Icon name='CuInstagramColor'
                 className='cursor-pointer w-5 h-5 sm:w-6 sm:h-6 rounded-full'/>
         </a>
         <a href='https://www.tiktok.com'
            className='tiktok p-0.5 sm:p-1.5 hover:shadow-[0_0_5px_5px_#FFFFFF] rounded-full duration-200'
            target='_blank'>
           <Icon name='FaTiktok' className='text-stone-200 cursor-pointer w-5 h-5 sm:w-6 sm:h-6'/>
         </a>
       </div>
     </div>
     <div className='menus grid grid-cols-1 xn:grid-cols-3 container mx-auto px-3 py-6 sm:py-10'>
       <div
        className='menu-store block sm:flex sm:justify-center xn:border-r xn:border-r-white sm:border-r-0 mr-0  xn:mr-10 sm:mr-0'>
         <MenuNav
          items={ itemsMenus[ 0 ] }
          orientation='vertical'
          classNameItem={ artMenus }
         />
       </div>
       <div
        className='menu-info block sm:flex sm:justify-center  border-y xn:border-y-0 border-y-white xn:border-r xn:border-r-white sm:border-x sm:border-x-white py-6 my-6 xn:py-0 xn:my-0 mx-0 xn:mr-10 sm:mr-0'>
         <MenuNav
          items={ itemsMenus[ 1 ] }
          orientation='vertical'
          classNameItem={ artMenus }
         />
       </div>
       <div className='menu-policy block sm:flex sm:justify-center'>
         <MenuNav
          items={ itemsMenus[ 2 ] }
          orientation='vertical'
          classNameItem={ artMenus }
         />
       </div>
     </div>
     <Copyright
      className='text-sm family-oswald tracking-wider tl:text-15 text-stone-200 text-end px-3 py-4 border-t border-t-stone-50 font-extralight'/>
   </footer>
  );
};

export { Footer };