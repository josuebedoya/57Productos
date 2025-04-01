import { getMedia } from "@/utils/getMedia.js";
import { PropTypes } from "prop-types";

const Media = ( { src, defaultSrc = 'default-image.webp', alt, controls, autoplay,
                  muted = true, loop, classFile, ...events } ) => {

  const { filePath, type } = getMedia( src || defaultSrc );

  return ( type === 'image'

    // image
    ? <img src={ filePath } alt={ alt || `image-${ filePath.split( '/' ).pop() }` }
           className={ `media-image ${ classFile ? classFile : 'w-full max-w-full' }` }
           { ...events }
    />

    // Video
    : type === 'video' ?
     <div { ...events }>
       <video autoPlay={ autoplay } controls={ controls } muted={ muted } loop={ loop }
              className={ `media-video ${ classFile }` }>
         <source
          src={ filePath }
          type={ `video/${ filePath.split( '.' ).pop() }` }
         />
         Tu navegador no soporta videos.
       </video>
     </div>

     //  Default Image
     : <img src={ defaultSrc } alt={ alt || `image-${ defaultSrc.split( '/' ).pop() }` }
            className={ `media-image ${ classFile ? classFile : 'w-full max-w-full' }` }
            { ...events }
     />
  );
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