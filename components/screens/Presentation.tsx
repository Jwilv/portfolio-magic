import { Scroll } from '@/assets'
import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'

export const Presentation = () => {
    return (
        <div className='flex flex-col justify-center h-screen w-screen relative'>
            <span className='md:ml-[180px] text-[#909090] mt-[-150px] font-semibold ml-10'>Hola a todos!</span>
            <h1 className='2xl:text-9xl lg:text-8xl font-bold md:w-[890px] md:ml-[180px] md:text-7xl sm:text-6xl text-5xl ml-10'>Wilvers Juan<br /> Front End Dev.</h1>
            <Image
                src={Scroll}
                alt="Picture of the author"
                className='absolute 2xl:top-[30%] 2xl:right-[40%] lg:top-[30%] lg:left-[60%] top-[15%] left-0 right-0 m-auto'
            />

            <a 
            href='https://github.com/Jwilv'
            target='_blank'
            className='border-[#E8E7EA] rounded-full border-2 w-12 h-12 flex justify-center items-center absolute left-[30%] top-[70%]
            md:left-[40%] cursor-pointer'
            >
                <Github className='w-7 h-7' />
            </a>

            <a 
            href='https://www.linkedin.com/in/juan-wilvers-450a11233/'
            target='_blank'
            className='border-[#E8E7EA] rounded-full border-2 w-12 h-12 flex justify-center items-center absolute right-[30%] top-[70%]
             md:right-[40%]'>
                <Linkedin className='w-7 h-7' />
            </a>

        </div>
    )
}
