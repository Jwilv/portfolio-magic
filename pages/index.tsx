import Image from 'next/image'
import { logo } from '@/assets'
import Link from 'next/link'
import Curve from '@/lib'

export default function Home() {
  return (
    <main className='h-screen w-screen flex items-center justify-center '>
      <Curve backgroundColor={"#ffffff"}>
        <Image
          src={logo}
          alt='logo'
          className='h-[400px] w-[400px]'
        />
        <h1 className='text-black absolute left-10 -rotate-90 font-semibold text-3xl top-1/2'>Contact</h1>
        <h1 className='text-black absolute right-10 -rotate-90 font-semibold text-3xl top-1/2'>Proyects</h1>
        <h1 className='text-black absolute bottom-10 left-1/3 font-semibold text-3xl '>Experience</h1>
        <h1 className='text-black absolute bottom-10 right-1/3  font-semibold text-3xl'>
          <Link href='/about'>About</Link>
        </h1>
      </Curve>
    </main>
  )
}
