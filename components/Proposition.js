import Link from 'next/link'
import Divider from './Divider'
import { VscQuote } from 'react-icons/vsc'

const Proposition = () => {
  return (
    <div className='w-full bg-trovador-background p-8 flex flex-col gap-8'>
      <div className='flex flex-col items-center gap-8 lg:gap-16 max-w-screen-xl mx-auto'>
        <div className='flex flex-col items-center gap-8 lg:flex-row relative'>
          <div className='flex-1 flex flex-col items-center lg:items-start gap-4'>
            <VscQuote className='text-4xl lg:text-6xl text-trovador-primary' />
            <h1 className='font-serif text-4xl leading-tight text-center lg:text-left'>
              Aquele que divulga, cantando ou declamando, poemas próprios ou
              alheios. Diz-se de qualquer Poeta.
            </h1>
          </div>
          <div className='flex-1'>
            <img src='./img/fado-1.jpg' alt='fado' className='rounded' />
          </div>
        </div>
        <Link href='/historia'>
          <button className='bg-trovador-primary px-4 py-2 rounded uppercase tracking-widest text-sm'>
            A Nossa História
          </button>
        </Link>
        <Divider />
      </div>
    </div>
  )
}

export default Proposition
