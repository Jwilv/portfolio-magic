"use client"

import { about, back } from '@/assets'
import Curve from '@/lib'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const page = () => {

    const router = useRouter()

    return (
        // <Curve backgroundColor={"#ffffff"}>
        // </Curve>
        <div className='h-screen w-screen flex items-center justify-center'>
            {/* <Image src={about} alt='logo' className='h-[400px] w-[400px] ' /> */}
            <ArrowLeft
                className='absolute top-10 left-10 w-7 h-7 cursor-pointer'
                onClick={() => router.back()}
            />
            <div className='bg-black h-[600px] w-[1200px] flex relative'>
                <div className='absolute -left-3 -top-3 h-[60px] w-[60px] bg-white rounded-full' />
                <div className='absolute -left-3 -bottom-3 h-[60px] w-[60px] bg-white rounded-full' />

                <div className='h-full w-1/2 overflow-hidden relative inset-x-1/4'>
                    <h1 className='text-white ml-10 mt-10 font-semibold italic text-5xl'>Juan Ignacio Wilvers</h1>
                    <p className='text-white ml-10 mt-1 text-3xl'>FrontEnd Developer</p>
                    <p className='text-white ml-10 mt-2 text-2xl'>
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. A architecto saepe est magni quod rerum, omnis optio
                        debitis molestidas distinctio error. Culpa quibusdam architecto maiores animi
                        reiciendis in officiis quae.
                    </p>
                </div>

                <div className='absolute -right-3 -top-3 h-[60px] w-[60px] bg-white rounded-full' />
                <div className='absolute -right-3 -bottom-3 h-[60px] w-[60px] bg-white rounded-full' />
            </div>
        </div>
    )
}

export default page