"use client"

import { about, back } from '@/assets'
import Curve from '@/lib'
import { ArrowLeft, Download, Github, Linkedin, User } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const page = () => {

    const router = useRouter()

    return (
        <Curve backgroundColor={"#ffffff"}>

            <div className='h-screen w-screen flex items-center justify-center'>
                <ArrowLeft
                    className='max-w-7 max-h-7 lg:m-10 lg:top-10 lg:left-10 absolute lg:text-black 
                    cursor-pointer text-white top-10 left-6'
                    onClick={() => router.back()}
                />
                <div className='bg-black h-full w-full lg:h-[600px] lg:w-[1200px] flex justify-center'>

                    <div className='h-full fg:w-1/2 w-full overflow-hidden'>
                        <h1 className='text-white ml-10 lg:mt-10 font-semibold italic fg:text-5xl
                            text-3xl mt-20'
                        >
                            Juan Ignacio Wilvers
                        </h1>
                        <p className='text-white ml-10 mt-1 lg:text-3xl text-2xl'>
                            FrontEnd Developer
                        </p>
                        <p className='text-white ml-10 mt-2 lg:text-2xl text-xl mr-3'>
                            Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. A architecto saepe est magni quod rerum, omnis optio
                            debitis molestidas distinctio error. Culpa quibusdam architecto maiores animi
                            reiciendis in officiis quae.
                        </p>
                        <button
                            className='text-white ml-10 mt-10 border p-2 hover:bg-white hover:text-black transition text-lg'
                        >
                            <a
                                href="https://github.com/juaniwilvers"
                                target="_blank"
                                className='flex'
                            >
                                <Github className='w-7 h-7 mr-1' />
                                GitHub
                            </a>
                        </button>

                        <button
                            className='text-white ml-10 mt-10 border p-2 hover:bg-white hover:text-black transition text-lg'
                        >
                            <a
                                href="https://github.com/juaniwilvers"
                                target="_blank"
                                className='flex'
                            >
                                <User className='w-7 h-7 mr-1' />
                                Linkedin
                            </a>
                        </button>

                        <button
                            className='text-white ml-10 mt-10 border p-2 hover:bg-white hover:text-black transition text-lg'
                        >
                            <a
                                href="https://github.com/juaniwilvers"
                                target="_blank"
                                className='flex'
                            >
                                <Download className='w-7 h-7 mr-1' />
                                Curriculum
                            </a>
                        </button>
                    </div>
                </div>
            </div>

        </Curve>
    )
}

export default page