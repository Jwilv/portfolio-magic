import {
  About,
  Hero,
  Presentation,
  Proyects
} from '@/components/screens'
import { Contact } from '@/components/screens/Contact'
import { Experience } from '@/components/screens/Experience'



export default function Home() {
  return (
    <main className='h-screen w-screen overflow-x-hidden'>
        <Presentation />
        <About />
        <Hero />
        <Proyects />
        <Experience />
        <Contact />
    </main>
  )
}
