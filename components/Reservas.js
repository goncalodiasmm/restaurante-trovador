import Divider from './Divider'
import SectionHeading from './SectionHeading'

const Reservas = () => {
  return (
    <div className='bg-[#FBF8F4] w-full p-8 flex flex-col gap-8'>
      <SectionHeading title='Reservas' />
      <h1 className='font-serif text-4xl'>
        A tradição da gastronomia portuguesa
      </h1>
      <Divider />
    </div>
  )
}

export default Reservas
