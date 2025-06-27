import { useState, useEffect } from 'react';
import { Prism as Code } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { CopyIcon, CopyCheckIcon } from "@/assets/icons.jsx";

const CodeBlock = ( { language = 'javascript', styles, classBlock = '', children, editable = false, onChange } ) => {
  const [ value, setValue ] = useState( '' );
  const [ copied, setCopied ] = useState( false );

  useEffect( () => {
    setValue( children );
  }, [ children ] );

  const handleCopy = async () => {
    if ( !navigator.clipboard ) {
      console.warn( 'Clipboard API not supported in this browser.' );
      return;
    }
    try {
      await navigator.clipboard.writeText( value || children );
      const text = await navigator.clipboard.readText();
      if ( ( value || children ) === text ) {
        setCopied( true );
        setTimeout( () => setCopied( false ), 2000 );
      }
    } catch ( err ) {
      console.error( 'Failed to copy:', err );
    }
  };

  const codeMirrorProps = {
    value, options: {
      mode: language, theme: 'material', lineNumbers: true, viewportMargin: Infinity,
    }, onBeforeChange: ( _, __, val ) => {
      setValue( val );
      onChange && onChange( val );
    }
  };

  return ( <div style={ { position: 'relative', ...styles } } className={ `code-block ${ classBlock }` }>
    <button
     onClick={ handleCopy }
     className='absolute top-3 right-3 z-10 text-white text-md hover:text-lg hover:shadow-white duration-200'
    >
      { copied ? <CopyCheckIcon classIcons='cursor-pointer'/> : <CopyIcon classIcons='cursor-pointer'/> }
    </button>
    { editable ? ( <CodeMirror key="main-editor" { ...codeMirrorProps } /> ) : (
     <Code language={ language } style={ materialDark } className='z-0'>
       { children }
     </Code> ) }

    <style>
      { ` .react-codemirror2 > .CodeMirror:first-of-type{ display:none; } ` }
    </style>
  </div> );
};

export { CodeBlock };
