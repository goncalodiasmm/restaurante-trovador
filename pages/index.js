import Head from "next/head";
import Hero from "../components/organisms/Hero";
import Footer from "../components/organisms/Footer";
import Section from "../components/organisms/Section";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Restaurante O Trovador | Início</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Section
        header="Aquele que divulga, cantando ou declamando, poemas próprios ou alheios. Diz-se de qualquer Poeta."
        src="./img/fado-1.jpg"
        alt="Um grupo de fado a atuar no restaurante"
        link="/historia"
        button="A nossa história"
        icon
      ></Section>
      <Section
        header="Uma ementa recheada da tradição da gastronomia portuguesa"
        src="./img/restaurante-12.jpg"
        alt="As ementas na mesa do restaurante"
        link="/ementas"
        button="A nossa ementa"
      >
        Ementa
      </Section>
      <Section
        header="Reserve já a sua próxima refeição"
        src="./img/restaurante-10.jpg"
        alt="A porta de entrada do restaurante"
        link="/reservas"
        button="Faça a sua reserva"
      >
        Reservas
      </Section>
      <Section
        header="Estamos à espera do seu contacto"
        src="./img/restaurante-13.jpg"
        alt="Um cartão de visita na mesa do restaurante"
        link="/contactos"
        button="Contacte-nos"
      >
        Contactos
      </Section>
      <Footer />
    </div>
  );
}
