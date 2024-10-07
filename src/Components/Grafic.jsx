const Grafic = () => {
  return (
    <>
      <div id="Grafic">
        <div className=' flex justify-center items-end w-auto'>
          <div class='grafic-content inline-flex gap-3 justify-center items-end bg-gray-200 border-x-2 border-x-gray-50 border-y-2 border-y-blue-800 py-12 px-8 rounded-full hover:border-y-gray-50 hover:border-x-blue-800 hover:cursor-pointer'>
            <div className='bar barOne h-4 w-2.5 bg-transparent border border-purple-800'>
            </div>
            <div className='bar barTwo h-7 w-2.5 bg-transparent border border-amber-400'>
            </div>
            <div className='bar barThree h-16 w-2.5 bg-transparent border border-blue-600'>
            </div>
            <div className='bar barFour h-10 w-2.5 bg-transparent border border-red-600'>
            </div>
            <div className='bar barFive h-14 w-2.5 bg-transparent border border-green-600'>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Grafic };