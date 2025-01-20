const TextCustom = ( { title, lineTitle, atrTitle, titlePosition, atrSummary, linePosition, classTitle = '', classSummary = '', children } ) => {
  return (
   <>
     <div className='text-custom'>
       <div className='container mx-auto'>
         <div className='title-section' style={ { textAlign: titlePosition } }>
           {
            title && (
             <h2
              className={ `title ${ classTitle } ${ lineTitle ? `TitleWithLine${linePosition}` :'' }` }
              style={ atrTitle }
             >
               { title }
             </h2>
            )
           }
         </div>
         <div className='summary-section'>
           {
            children && (
             <div className={ `summary ${ classSummary }` }>
               <p style={ atrSummary }> { children } </p>
             </div>
            )
           }
         </div>
       </div>
     </div>
   </>
  );
};

export { TextCustom };