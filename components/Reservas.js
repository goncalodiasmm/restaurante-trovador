import Link from 'next/link'
import Divider from './Divider'
import SectionHeading from './SectionHeading'

const Reservas = () => {
  return (
    <div className='bg-trovador-background w-full p-4 flex flex-col gap-8 items-center'>
      <SectionHeading title='Reservas' />
      <h1 className='font-serif text-4xl text-center'>Reserve já a sua próxima refeição</h1>
      <div className='flex-1'>
        <img
          src='./img/restaurante-1.jpg'
          alt='restaurante'
          className='rounded'
        />
      </div>
      <Link href='/reservas'>
        <button className='bg-trovador-primary px-4 py-2 rounded uppercase tracking-widest text-sm'>
          Faça A Sua Reserva
        </button>
      </Link>
      <Divider />
    </div>
  )
}

export default Reservas
