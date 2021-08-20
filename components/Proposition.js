import Link from 'next/link'
import Divider from './Divider'
import { VscQuote } from 'react-icons/vsc'
import SectionHeading from './SectionHeading'

const Proposition = () => {
  return (
    <div className='w-full bg-[#FBF8F4] p-8 flex flex-col gap-8'>
      <div className='flex flex-col items-center gap-8 lg:gap-16 max-w-screen-xl mx-auto'>
        <SectionHeading title='Restaurante' />
        <div className='flex flex-col items-center gap-8 lg:flex-row relative'>
          <div className='flex-1 flex flex-col items-center lg:items-start gap-4'>
            <VscQuote className='text-4xl lg:text-6xl text-[#D2B48C]' />
            <h1 className='font-serif text-4xl leading-tight text-center lg:text-left'>
              Aquele que divulga, cantando ou declamando, poemas próprios ou
              alheios. Diz-se de qualquer Poeta.
            </h1>
          </div>
          <div className='flex-1'>
            <img src='./img/fado-1.jpg' alt='fado' className='rounded' />
          </div>
        </div>
        <Link href='/restaurante'>
          <a className='border-b-2 border-solid border-black w-[fit-content] py-1 lg:text-lg'>
            Descubra a nossa história
          </a>
        </Link>
        <Divider />
      </div>
    </div>
  )
}

export default Proposition
