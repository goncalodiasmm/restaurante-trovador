import { HiMenuAlt4 } from 'react-icons/hi'
import { HiX } from 'react-icons/hi'
import { useState } from 'react'

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)

  const handleClick = () => {
    setSidebar(!sidebar)
  }

  return (
    <div className='z-50'>
      <div
        className={`flex p-8 bg-[#FBF8F4] min-h-screen w-full sm:w-1/4 items-start justify-between text-gray-900 absolute top-0 left-0 transition-all duration-700 ${
          sidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className='flex flex-col gap-4 text-xl cursor-pointer'>
          <li>O Restaurante</li>
          <li>Ementas</li>
          <li>Reservas</li>
          <li>Contactos</li>
        </ul>
        <HiX className='text-xl cursor-pointer' onClick={handleClick} />
      </div>
      <HiMenuAlt4
        className={`text-white text-xl cursor-pointer`}
        onClick={handleClick}
      />
    </div>
  )
}

export default Sidebar
