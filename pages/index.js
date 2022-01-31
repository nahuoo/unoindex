import Head from 'next/head'
import NavBar from '../components/navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import ColumnFeatures from '../components/ColumnFeatures'
import {createClient} from 'contentful'
import { SliderSection } from '../components/SliderSection'
import { Newsletter } from '../components/newsletter'
import { Contact }  from '../components/Contact'
import { AboutUs } from '../components/AboutUs'
import { Carrousel } from '../components/Carrousel'

export async function getStaticProps() {

  const res = await fetch(`https://res.cloudinary.com/unoelectromedicina/image/list/logo.json`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
   

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Uno Electromedicina</title>
        <meta name="description" content="Servicio tecnico de laboratorios" />
        <link rel="icon" href="/favicon.ico" />
    <script
          async
          src="https://s.widgetwhats.com/wwwa.js"
          data-wwwa="9487"
        ></script>
      </Head>
      <main>
        <NavBar />
        <Carrousel />
        <SliderSection data={data} />
        <Features />
        <ColumnFeatures />
        <AboutUs />
        <Contact />
      </main>
    </div>
  );
}
//<SliderSection />
//Teal 200
