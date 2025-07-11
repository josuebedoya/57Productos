const Tab = ( {
                children,
                click,
                active,
                tapClass = 'rounded-md text-Primary m-1 text-sm',
                activeClass = 'bg-stone-300 font-semibold shadow-sm shadow-Primary',
                ...events
              } ) => {

  const itemClass = `${ tapClass } ${ active ? activeClass : '' }`;

  return (
   <button
    onClick={ click }
    className={ `p-2 font-medium transition-all duration-200 flex items-center gap-2 ${ itemClass }` }
    { ...events }
   >
     { children }
   </button>
  );
};

export { Tab };