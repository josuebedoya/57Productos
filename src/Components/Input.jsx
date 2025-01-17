const Input = ( { value, onChange, placeholder, type = 'text', name, maxLength = 20, minLength = 0, isRequired, label, classContent, classLabel, classInput, children, textTarea } ) => {
  const Component = textTarea ? 'textarea' : 'input';
  return (
   <div className={ `${ classContent ? classContent : '' } input w-full flex-col items-center justify-center` }>
     { label && (
      <label htmlFor={ name } className={ `${ classLabel ? classLabel : '' } label-input` }>{ children }</label>
     ) }
     <Component
      type={ !textTarea ? type : undefined }
      maxLength={ maxLength }
      minLength={ !textTarea ? minLength : undefined }
      placeholder={ placeholder ? placeholder.trim() : '' }
      value={ value }
      onChange={ ( e ) => onChange( { name, value: e.target.value } ) }
      name={ name }
      id={ name }
      required={ isRequired }
      className={ `bg-transparent text-Primary text-sm rounded-xl border border-Primary px-5 focus:outline-none focus:shadow-custom w-full ${ classInput && classInput }` }
     />
   </div>
  );
};

export { Input };