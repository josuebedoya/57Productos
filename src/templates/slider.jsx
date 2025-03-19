import { Spin } from '@/components/spin.jsx';

const Slider = ( { title, children } ) => {
  return ( <>
    <section id="slider" className="relative w-full aspect-100/83 md:aspect-100/48">
      <div className="row-auto h-full overflow-hidden relative">
        <div className="max-w-screen-xl h-full mx-auto px-4">
          <div className="flex flex-row justify-between items-center h-full px-20">
            <div className="content pt-10 z-10 text-center md:text-left">
              <h1 className="title text-2xl tl:text-6xl xl:text-8xl font-bold text-white mb-6">
                { title }
              </h1>
              <div className="description w-3/4 mx-auto md:mx-0 text-white text-15 md:text-lg tl:text-xl">
                <p>{ children }</p>
              </div>
            </div>
            <div className="spin p-5 z-10 hidden md:block">
              <Spin
                autoPlay
                items={ [ 1, 2, 3, 4, 5, 6 ] }
                withButton={ false }
                classItem="h-6 w-6 flex items-center justify-center bg-red-500"
              />
            </div>
          </div>
          <div className="bg-img absolute w-full h-full top-0 left-0 z-0">
            <img
              src="/images/slider-bg.jpg"
              alt={ title ?? 'Image slider' }
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>

  </> );
};

export { Slider };