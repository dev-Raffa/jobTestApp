import './page.css'
import { Carousel } from "./components/carousel";
import { Header } from "./components/header/header";
import { SectionCards } from './components/card';

export default function HomePage (){

  return (
    <>
      <Header />
      <section>
        <Carousel />
      </section>
      <main>
        <SectionCards />
      </main>
    </>

  )
} 