import { StaticImageData } from "next/image"

export type Techonology =
    'nextjs'
    | 'react'
    | 'typescript'
    | 'tailwindcss'
    | 'mongodb'
    | 'nodejs'
    | 'express'
    | 'socket'
    | 'docker'
    | 'mySql'
    | 'js'



interface link {
    label: string
    url: string
}

export interface Proyetc {
    title: string;
    desc: string;
    subDesc?: string;
    image: StaticImageData;
    links: link[];
}