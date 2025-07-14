import { Button } from './button.jsx';
import { Input } from './input.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Path_page } from '@/routes';

const Form = ( { action, inputs, termsAndConditions, nameForm = 'FormDefault', withButton = true, labelButton, children } ) => {

  const [ checkTerms, setCheckTerms ] = useState( false );

  const eventChangeCheckTerms = () => {
    setCheckTerms( !checkTerms );
  };

  const handleSubmit = ( event ) => {
    event.preventDefault();
    if ( action ) {
      action();
    }
  };


  return ( <>
    <div id='Form' className=' p-10'>
      <form onSubmit={ handleSubmit } id={ nameForm } className='flex flex-col justify-center'>

        { children ? children : inputs?.map( ( input, i ) => ( <Input
         key={ i }
         value={ input.value }
         onChange={ input.onChange }
         placeholder={ input.placeholder }
         type={ input.type }
         name={ input.name }
         maxLength={ input.maxLength }
         isRequired={ input.isRequired }
         label={ input.label }
         classContent={ `mb-6 ${ input.classContent ? input.classContent : '' }` }
         classInput={ input.classInput }
         classLabel={ `text-Primary ${ input.classLabel ? input.classLabel : '' }` }
         properties={ input.properties }
        >
          { input.children }
        </Input> ) ) }

        { termsAndConditions ? ( <div className='terms-and-conditions relative flex'>
          <input
           type='checkbox'
           name='chekTermsAndConditions'
           id='chekTermsAndConditions'
           onChange={ eventChangeCheckTerms }
           required
           className='bg-transparent text-Primary text-sm rounded-xl border border-Primary py-2 px-5  focus:outline-none  focus:shadow-custom'
          />
          <label htmlFor='chekTermsAndConditions' className='label-input'>
            Al marcar la casilla, aceptas nuestros
            <Link to={ Path_page.TERMS_AND_CONDITIONS }
                  className=' font-bold text-Primary mx-2 px-1 decoration-Primary underline'>
              Términos y Condiciónes
            </Link>
          </label>
        </div> ) : null }

        { withButton && <div className='btn-send-form w-full'>
          <Button type='submit' classBtn='submit px-6 py-2 mt-6'>{ labelButton ?? 'Enviar' }</Button>
        </div> }

      </form>
    </div>
  </> );
};

export { Form };