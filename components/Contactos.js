import Link from 'next/link'
import SectionHeading from './SectionHeading'
import Divider from './Divider'

const Contactos = () => {
  return (
    <div className='bg-trovador-background w-full p-8 flex flex-col gap-8 items-center'>
      <SectionHeading title='Contactos' />
      <h1 className='font-serif text-4xl text-center'>
        Estamos à espera do seu contacto
      </h1>
      <div className='flex-1'>
        <img
          src='./img/restaurante-13.jpg'
          alt='restaurante'
          className='rounded'
        />
      </div>
      <Link href='/ementas'>
        <button className='bg-trovador-primary px-4 py-2 rounded uppercase tracking-widest text-sm'>
          contacte-nos
        </button>
      </Link>
      <Divider />
    </div>
  )
}

export default Contactos
