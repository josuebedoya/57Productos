import Image from "next/image";

const Header = () => {
  return (
    <header className='py-10 container mx-auto text-center flex'>
      <div className='flex-auto relative'>
        <Image
          alt='Logo'
          src='/img/logo-black.png'
          loading='eager'
          fill className="object-contain"
        />
      </div>
      <div className='flex-auto text-right self-center'>
        <nav>
          <a href='#' className='mx-4 text-gray-600 hover:text-gray-900'>Home</a>
          <a href='#' className='mx-4 text-gray-600 hover:text-gray-900'>About</a>
          <a href='#' className='mx-4 text-gray-600 hover:text-gray-900'>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;