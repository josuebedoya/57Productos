import { PropTypes } from "prop-types";
import { useSettings } from "@/context/settings.jsx";
import { useEffect, useState } from "react";
import { useMedia } from "@/hooks/useMedia.jsx";
import { CodeBlock } from "@/components/code.jsx";

const Media = ( {src, defaultSrc = '/images/system/default-image.webp', alt, controls = true,
                  autoplay, muted = true, loop, classFile, ...events } ) => {

  const [ allowedExtensions, setAllowedExtensions ] = useState( [] );
  const { settings } = useSettings();
  const { filePath, type } = useMedia( src, defaultSrc, allowedExtensions );
  const [ fileContent, setFileContent ] = useState( '' );

  useEffect( () => {

    // Validate extensions
    const extensions = settings?.site?.media;
    if ( !extensions ) return;

    // Reformat extensions
    const allowed = Object.values( extensions ).flat();
    setAllowedExtensions( allowed );
  }, [ settings?.site?.media ] );

  useEffect( () => {
    if ( type === 'text' || type === 'integration' ) {
      fetch( filePath )
       .then( res => res.text() )
       .then( text => setFileContent( text ) )
       .catch( () => setFileContent( 'Error al cargar archivo' ) );
    }
  }, [ filePath ] );

  // Loading
  if ( !type ) {
    return <p
     className={ `img ${ classFile ? classFile : 'w-full max-w-full flex justify-center items-center' }` }>
      Cargando archivo...
    </p>;
  }

  return ( <div className={ `file ${ type }` }>
    {
      // image
      type === 'image' ? <picture className='f-img'>
         <img src={ filePath } alt={ alt || `image-${ filePath.split( '/' ).pop() }` }
              className={ `img ${ classFile ? classFile : 'w-full max-w-full' }` }
              { ...events }
         />
       </picture>


       // Video
       : type === 'video' ? <div { ...events } className='f-video'>
          <video autoPlay={ autoplay } controls={ controls } muted={ muted } loop={ loop }
                 className={ `video ${ classFile }` }>
            <source
             src={ filePath }
             type={ `video/${ filePath.split( '.' ).pop() }` }
            />
            Tu navegador no soporta videos.
          </video>
        </div>


        // Audio
        : type === 'audio' ? <div { ...events } className='f-audio'>
           <audio autoPlay={ autoplay } controls={ controls } muted={ muted } loop={ loop }
                  className={ `audio ${ classFile }` }>
             <source
              src={ filePath }
              type={ `audio/${ filePath.split( '.' ).pop() }` }
             />
             Tu navegador no soporta Audios.
           </audio>
         </div>


         //  Document type
         : type === 'officedocument' || type === 'document' ? <div className='f-document'>
            { // Microsoft Office Document
              type === 'officedocument' ?
               <iframe src={ `https://view.officeapps.live.com/op/view.aspx?src=${settings?.site?.hostname+ filePath }` }
                       className={ `iframe ${ classFile ? classFile : 'w-full max-w-full' } office-document` }
                       frameBorder="0"
                       height={ '900px' }
                       width={ '800px' }
                       title='Documento - Microsoft Office'
                       style={ { aspectRatio: '1/1' } }
               />

               : // Other document type
               <iframe src={ filePath }
                       className={ `iframe ${ classFile ? classFile : 'w-full max-w-full' } iframe-document` }
                       frameBorder="0"
                       height={ '900%' }
                       width={ '800%' }
                       title='Documento - Google Docs'
                       style={ { aspectRatio: '1/1' } }
               /> }
          </div>


          // Text and integration Type
          : type === 'text' || type === 'integration' ? <div className='f-text'>
             <CodeBlock classBlock={ `${ classFile ? classFile : 'w-full max-w-full' } text` } editable={ true }
             >
               { fileContent }
             </CodeBlock>
           </div>


           // unsupported type
           : type === 'unsupported' || type === 'unknown' ? <picture className='f-img'>
              <source srcSet='/assets/images/system/unsupported.png' type="image/webp"/>
              <img src='/assets/images/system/unsupported.png' alt='image-unsupported.png'
                   className={ `img ${ classFile ? classFile : 'w-full max-w-full' } img-unsupported` }
                   { ...events }
              />
            </picture>


            // Not found file type
            : type === 'notfound' ? <picture className='f-img'>
               <source srcSet='/assets/images/system/not-found.png' type="image/webp"/>
               <img src='/assets/images/system/not-found.png' alt='image-not-found.png'
                    className={ `img ${ classFile ? classFile : 'w-full max-w-full' } img-unsupported` }
                    { ...events }
               />
             </picture>


             //  Default Image
             : <picture className='f-img'>
               <source srcSet={ defaultSrc } type="image/webp"/>
               <img src={ defaultSrc } alt={ alt || `image-${ defaultSrc.split( '/' ).pop() }` }
                    className={ `img ${ classFile ? classFile : 'w-full max-w-full' } img-default` }
                    { ...events }
               />
             </picture>
    }
  </div> );
};

Media.prototype = {
  src: PropTypes.string,
  defaultSrc: PropTypes.string,
  alt: PropTypes.string,
  classFile: PropTypes.string,
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
  muted: PropTypes.bool,
  loop: PropTypes.bool
};

export { Media };