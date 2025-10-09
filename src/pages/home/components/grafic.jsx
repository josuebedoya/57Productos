import Icon from "@/components/icons/index.js";

const Grafic = () => {
  return (
   <>
     <div id='Grafic'>
       <div className=' flex justify-center items-end w-auto'>
         <div
          className='grafic-content h-52 w-52 inline-flex gap-3 justify-center items-end duration-800 bg-gray-200 border-x-2 border-x-gray-50 border-y-2 border-y-blue-800 py-12 px-8 rounded-full hover:border-y-gray-50 hover:border-x-blue-800 hover:cursor-pointer'>
           <div className='bar barOne w-2.5 bg-transparent border border-purple-800'>
             <Icon name='IoMdAddCircle' className='icon'/>
           </div>
           <div className='bar barTwo w-2.5 bg-transparent border border-amber-400'>
             <Icon name='AiOutlineShoppingCart' className='icon'/>
           </div>
           <div className='bar barThree w-2.5 bg-transparent border border-blue-600'>
             <Icon name='PiMoneyWavyBold' className='icon'/>
           </div>
           <div className='bar barFour w-2.5 bg-transparent border border-red-600'>
             <Icon name='FaSeedling' className='icon'/>
           </div>
           <div className='bar barFive w-2.5 bg-transparent border border-green-600'>
             <Icon name='FaHandshakeSimple' className='icon' versionFamily={6}/>
           </div>
         </div>
       </div>
     </div>
   </>
  )
}

export { Grafic };