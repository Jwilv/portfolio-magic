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

export interface Proyetc {
    name: string
    description: string
    repositoryUrl: string
    technologies: Techonology[]
    image?: StaticImageData
}