import hearthColombia from '/images/corazon.png';
function TextMain() {
  return (
   <section id='textH1' className='text-main container mx-auto flex justify-center items-center gap-1 py-6 md:py-8 tl:py-12 px-3 '>
     <img src={hearthColombia} alt='hearth-colombia' className='h-5 w-5' />
     <h1 className='px-1 md:px-2 text-shadow-black text-15 md:text-lg tl:text-xl text-center'>+57 Productos que ofrecemos del corazón de los Colombianos hacia el mundo.</h1>
     <img src={hearthColombia} alt='hearth-colombia' className='h-5 w-5' />
   </section>
  )
}

export { TextMain };