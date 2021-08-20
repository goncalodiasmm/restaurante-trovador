import { HiOutlineChevronDown } from 'react-icons/hi'

const Scroll = () => {
  return (
    <div className='absolute top-full left-1/2 -translate-x-1/2 -my-12'>
      <a href='' className='relative block w-32 h-32 rounded-full bg-[#FBF8F4]'>
        <HiOutlineChevronDown className='w-8 absolute top-1/2 left-1/2' />
      </a>
    </div>
  )
}

export default Scroll
