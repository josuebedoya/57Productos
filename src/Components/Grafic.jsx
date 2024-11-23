const Grafic = () => {
  return (
    <>
      <div id="Grafic">
        <div className=' flex justify-center items-end w-auto'>
          <div class='grafic-content h-52 w-52 inline-flex gap-3 justify-center items-end duration-800 bg-gray-200 border-x-2 border-x-gray-50 border-y-2 border-y-blue-800 py-12 px-8 rounded-full hover:border-y-gray-50 hover:border-x-blue-800 hover:cursor-pointer'>
            <div className='bar barOne w-2.5 bg-transparent border border-purple-800'>
            </div>
            <div className='bar barTwo w-2.5 bg-transparent border border-amber-400'>
            </div>
            <div className='bar barThree w-2.5 bg-transparent border border-blue-600'>
            </div>
            <div className='bar barFour w-2.5 bg-transparent border border-red-600'>
            </div>
            <div className='bar barFive w-2.5 bg-transparent border border-green-600'>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Grafic };