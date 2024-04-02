import { Navbar } from '@/components/navigation/Navbar'
import {
  About,
  Hero,
  Presentation,
  Proyects
} from '@/components/screens'
import { Contact } from '@/components/screens/Contact'
import { Experience } from '@/components/screens/Experience'

import Curve from '@/lib'


export default function Home() {
  return (
    <main className='h-screen w-screen overflow-x-hidden'>
      <Curve backgroundColor={"#ffffff"}>
        <Navbar />
        <Presentation />
        <About />
        <Hero />
        <Proyects />
        <Experience />
        <Contact />
      </Curve>
    </main>
  )
}
