import { Github, Linkedin } from 'lucide-react'
import { Component1, Component2 } from '@/assets'
import Image from 'next/image'

export const Presentation = () => {
    return (
        <div className='flex flex-col justify-center h-screen w-screen relative'>
            <span className='ml-[180px] text-[#909090] mt-[-150px] font-semibold'>Hola a todos!</span>
            <h1 className='text-9xl font-bold w-[890px] ml-[180px]'>Wilvers Juan<br /> Front End Dev.</h1>
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


            <div className='border-[#E8E7EA] rounded-full border-2 w-12 h-12 flex justify-center items-center absolute left-[46%] top-[70%]'>
                <Github className='w-7 h-7' />
            </div>

            <div className='border-[#E8E7EA] rounded-full border-2 w-12 h-12 flex justify-center items-center absolute right-[46%] top-[70%]'>
                <Linkedin className='w-7 h-7' />
            </div>

        </div>
    )
}
