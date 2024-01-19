import Image from 'next/image'
import { logo } from '@/assets'
import Link from 'next/link'
import Curve from '@/lib'

export default function Home() {
  return (
    <main className='h-screen w-screen flex items-center justify-center'>
      <Curve backgroundColor={"#ffffff"}>
        <h1 className='text-black font-semibold ml-14 mb-10 text-3xl md:hidden'>
          <Link href='/about'>About</Link>
        </h1>
        <Image
          src={logo}
          alt='logo'
          className='md:h-[400px] md:w-[400px] h-[200px] w-[200px]'
        />
        <h1 className='text-black font-semibold text-3xl md:hidden ml-5
        mt-10'>
          Experience
        </h1>
        <h1 className='text-black absolute md:left-10 -left-5 -rotate-90 font-semibold text-3xl top-1/2'>Contact</h1>
        <h1 className='text-black absolute md:right-10 -right-5 -rotate-90 font-semibold text-3xl top-1/2'>Proyects</h1>
        <h1 className='text-black absolute md:bottom-10 md:left-1/3 bottom-36 left-10 font-semibold text-3xl md:visible invisible'>Experience</h1>
        <h1 className='text-black absolute md:bottom-10 md:right-1/3 bottom-36 right-10 md:visible invisible font-semibold text-3xl'>
          <Link href='/about'>About</Link>
        </h1>
      </Curve>
    </main>
  )
}
