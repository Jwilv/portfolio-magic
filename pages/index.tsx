import { Component1, Component2 } from '@/assets'
import Curve from '@/lib'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-screen w-screen'>
      <Curve backgroundColor={"#ffffff"}>
        <div className='flex flex-col justify-center h-screen w-screen'>
          <span className='ml-[180px] text-[#909090] mt-[-150px] font-semibold'>Hola a todos!</span>
          <h1 className='text-9xl font-bold w-[890px] ml-[180px]'>Wilvers Juan<br /> Front End Dev.</h1>
        </div>
        <Image
          src={Component1}
          alt="Picture of the author"
          className='absolute top-[30%] right-[40%]'
        />
        <Image
          src={Component2}
          alt="Picture of the author"
          className='absolute top-[32.3%] right-[42%]'
        />

      </Curve>
    </main>
  )
}
