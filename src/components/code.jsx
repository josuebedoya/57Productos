import { Prism as Code } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ( { language = 'javascript', styles, classBlock = '', children } ) => {
  return (
   <Code language={ language } style={ materialDark } customStyle={ styles }
         className={ `code-block ${ classBlock }` }>
     { children }
   </Code>
  );
};

export { CodeBlock };