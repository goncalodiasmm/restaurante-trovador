import Link from 'next/link'
import Divider from './Divider'
import SectionHeading from './SectionHeading'

const Menus = () => {
  return (
    <div className='bg-trovador-background w-full p-4 flex flex-col gap-8 items-center'>
      <SectionHeading title='Ementa' />
      <h1 className='font-serif text-4xl text-center'>
        Uma ementa recheada da tradição da gastronomia portuguesa
      </h1>
      <div>
        <img src='./img/restaurante-12.jpg' alt='ementas' className='rounded' />
      </div>
      <Link href='/ementas'>
        <button className='bg-trovador-primary px-4 py-2 rounded uppercase tracking-widest text-sm'>A Nossa Ementa</button>
      </Link>
      <Divider />
    </div>
  )
}

export default Menus
