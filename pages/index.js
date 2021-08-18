import Head from 'next/head'
import Hero from '../components/Hero'
import Proposition from '../components/Proposition'
import Scroll from '../components/Scroll'
import Menus from '../components/Menus'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Restaurante O Trovador | Início</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <Proposition />
      <Menus />
    </div>
  )
}