const SectionHeading = ({ title }) => {
  return (
    <div>
      <div className='flex flex-col items-center gap-2'>
        <h3 className='tracking-widest uppercase font-bold lg:text-2xl'>
          {title}
        </h3>
        <div className='h-0.5 w-16 lg:h-0.5 lg:w-32 bg-black'></div>
      </div>
    </div>
  )
}

export default SectionHeading
