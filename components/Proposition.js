import Link from 'next/link'
import Image from 'next/image'
import image from '../public/img/fado-1.jpg'
import Divider from './Divider'

const Proposition = () => {
  return (
    <div className='w-full bg-[#FBF8F4] p-8 flex flex-col gap-8'>
      <div className='flex flex-col items-center gap-8 max-w-screen-xl mx-auto'>
        <div className='flex flex-col items-center gap-2'>
          <h3 className='tracking-widest uppercase font-bold lg:text-2xl'>O Restaurante</h3>
          <div className="h-0.5 w-16 lg:h-0.5 lg:w-32 bg-black"></div>
        </div>
        <div className='flex flex-col items-center gap-8 lg:flex-row'>
          <h1 className='font-serif text-4xl leading-tight text-center flex-1 lg:text-left'>
            Aquele que divulga, cantando ou declamando, poemas próprios ou
            alheios. Diz-se de qualquer Poeta.
          </h1>
          <img src='./img/fado-1.jpg' alt='fado' className='flex-1 rounded' />
        </div>
        <Link href='/restaurante'>
          <a className='border-b-2 border-solid border-black w-[fit-content] py-1'>
            Descubra a nossa história
          </a>
        </Link>
        <Divider />
      </div>
    </div>
  )
}

export default Proposition
