const Restaurante = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col items-center gap-8 sm:flex-row'>
        <h1 className='text-2xl font-light'>
          Quem entra no Trovador,{' '}
          <span className='font-bold sm:text-4xl'>entra na sua casa</span>
        </h1>
        <img
          loading='lazy'
          src='/img/restaurante-5.jpg'
          alt='restaurante'
          className='max-w-xl flex-grow'
        />
      </div>
      <p className='max-w-prose'>
        No coração da alta da cidade de Coimbra, frente à Sé Velha e a 50 metros
        da Universidade encontra-se O Trovador, desde 1987.
      </p>
      <div className='flex flex-col items-center gap-8'>
        <p className='max-w-prose'>
          É uma paragem obrigatória para todos os visitantes portugueses ou
          estrangeiros que apreciam a excelência da Cozinha Tradicional
          Portuguesa e o som das guitarras e das vozes do Fado de Coimbra.
        </p>
        <img
          loading='lazy'
          src='/img/fado-1.jpg'
          alt='fado'
          className='max-w-xl flex-grow'
        />
      </div>
      <div className='flex flex-col items-center gap-8'>
        <p className='max-w-prose'>
          Valorizamos a consideração, a atenção e os afetos por quem nos faz
          sentir mais felizes: os amigos e os clientes. O seu reconhecimento
          está escrito nas paredes do Trovador – quer venha de doutores,
          futricas ou estudantes de Coimbra, de escritores, professores,
          jornalistas, atores, empresários, políticos ou desportistas – gente
          daqui ou de lugares distantes, famosos ou anónimos, mas, e sobretudo,
          de pessoas de bem que têm honrado O Trovador com a sua presença e o
          seu estímulo.
        </p>
        <img
          loading='lazy'
          src='/restaurante-6.jpg'
          alt='restaurante'
          className='max-w-xl flex-grow'
        />
      </div>
    </div>
  )
}

export default Restaurante
