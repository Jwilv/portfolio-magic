"use client"

import { back } from '@/assets'
import Curve from '@/lib'
import Image from 'next/image'
const page = () => {

    return (
        <Curve backgroundColor={"#ffffff"}>
        <div className='bg-about h-screen w-screen'>
            <div className='p-16 m-30 flex flex-col'>
                <h1 className='text-white font-semibold text-5xl'>
                    <i>Lorem ipsum dolor sit</i>
                </h1>
                <p className='text-white text-3xl mt-2 mb-2'>texty kuagf kuajd af</p>
                <p className='text-white text-2xl w-1/2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam omnis blanditiis quas? 
                    Nemo beatae nihil ipsum.Blanditiis error neque laborum rem atque dolore, 
                    numquam nesciunt labore quo optio corrupti vero?
                </p>
                <p className='text-white text-2xl w-1/2 mt-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam omnis blanditiis quas? 
                    Nemo beatae nihil ipsum.Blanditiis error neque laborum rem atque dolore, 
                    numquam nesciunt labore quo optio corrupti vero?
                </p>
            </div>
        </div>
        </Curve>
    )
}

export default page