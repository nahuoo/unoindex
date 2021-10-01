import Head from 'next/head'
import NavBar from '../components/navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import ColumnFeatures from '../components/ColumnFeatures'
import {createClient} from 'contentful'

export async function getStaticProps() {

  const client = createClient({
    space: 'ftv5t2jre3bg',
    accessToken: '4qNarz5C8ZqLGHZFXdvdsEe2OehC3fxp1Qnx_EfNKHI',
  })



  const res = await client.getEntries({ content_type: "equipo" })

  return {
    props: {
      equipos: res.items
    }
  }
}

export default function Home(equipos) {
  return (
    <div>
      <Head>
        <title>Uno Electromedicina</title>
        <meta name="description" content="Servicio tecnico de laboratorios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <Hero equipos={{equipos}}/>
        <Features />
        <ColumnFeatures />
      </main>
    </div>
  )
}
//Teal 200