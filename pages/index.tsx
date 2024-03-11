import { Navbar } from '@/components/navigation/Navbar'
import { About } from '@/components/screens/About'
import { Presentation } from '@/components/screens/Presentation'
import Curve from '@/lib'


export default function Home() {
  return (
    <main className='h-screen w-screen overflow-x-hidden'>
      <Curve backgroundColor={"#ffffff"}>
        <Navbar />
        <Presentation />
        <About /> 
      </Curve>
    </main>
  )
}
