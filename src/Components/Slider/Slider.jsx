import './Slider.css'

const Slider = ({ title, children }) => {
  return (
    <>
      <div className='slider-section '>
        <div className='container mx-auto'>
          <div class='content pt-10 '>
            <div className='content-title '>
              <div className='flex justify-center '>
                <h1 class='title text-8xl font-bold'>{title}</h1>
              </div>
            </div>
            <div class='content-description flex justify-end w-2/4 text-white'>
              <div className='description  text-xl w-3/4  mt-10'>
                <p>
                  {children}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export { Slider };