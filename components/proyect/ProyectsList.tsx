import { Proyects } from '@/data/localData'
import React from 'react'
import { Proyect } from './Proyect'

export const ProyectsList = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-auto mt-5 mb-2'>
            {
                Proyects.map((proyect, index) => (
                    <Proyect key={index} {...proyect} />
                ))
            }
        </div>
    )
}