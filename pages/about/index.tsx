"use client"

import { about, back, github } from '@/assets'
import Curve from '@/lib'
import { ArrowLeft, Download, Linkedin, User } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const page = () => {

    const router = useRouter()

    return (
        <Curve backgroundColor={"#ffffff"}>

            <div className='h-screen w-screen flex items-center justify-center'>
                <ArrowLeft
                    className='max-w-7 max-h-7 text-Black cursor-pointer m-10 relative'
                    onClick={() => router.back()}
                />
                <div className='bg-black h-[600px] w-[1200px] flex'>

                    <div className='h-full w-1/2 overflow-hidden  inset-x-1/4'>
                        <h1 className='text-white ml-10 mt-10 font-semibold italic text-5xl'>Juan Ignacio Wilvers</h1>
                        <p className='text-white ml-10 mt-1 text-3xl'>FrontEnd Developer</p>
                        <p className='text-white ml-10 mt-2 text-2xl'>
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
                                <Image
                                    src={github}
                                    alt='github'
                                    className='w-7 h-7 mr-1 text-white invertir-color'
                                />
                                GitHub
                            </a>
                        </button>

                        {/* <button
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
        //             </button> */}
                    </div>
                </div>
            </div>

        </Curve>
    )
}

export default page