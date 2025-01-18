const Slider = ( { title, children } ) => {
  return (
   <>
     <section id='slider'>
       <div className='container mx-auto'>
         <div className='content pt-10 '>
           <div className='content-title '>
             <div className='flex justify-center '>
               <h1 className='title text-8xl font-bold'>{ title }</h1>
             </div>
           </div>
           <div className='content-description flex justify-end w-2/4 text-white'>
             <div className='description  text-xl w-3/4  mt-10'>
               <p>
                 { children }
               </p>
             </div>
           </div>
         </div>
       </div>
     </section>
   </>
  )
};

export { Slider };