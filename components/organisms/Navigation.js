import Link from 'next/link'
import Sidebar from '../molecules/Sidebar'

const Header = () => {
  return (
    <div className='flex sm:justify-between items-center p-8'>
      <Sidebar />
      <Link href='/'>
        <img
          src='/wordmark-white.svg'
          alt='logo'
          className='w-48 sm:w-64 m-auto cursor-pointer z-10'
        />
      </Link>
      <Link href='/reservas'>
        <button className='hidden sm:block sm:text-white sm:border-2 sm:border-solid sm:border-white sm:px-4 sm:py-2 sm:rounded sm:bg-transparent sm:hover:bg-white sm:hover:text-gray-900 sm:transition sm:duration-500 z-10'>
          Reservas
        </button>
      </Link>
    </div>
  )
}

export default Header
