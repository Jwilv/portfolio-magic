
export type Techonology =
    'nextjs'
    | 'react'
    | 'typescript'
    | 'tailwindcss'
    | 'mongodb'
    | 'nodejs'
    | 'express'
    | 'prisma'
    | 'socket'
    | 'docker'
    | 'mySql'
    | 'js'

export interface Proyetc {
    name: string
    description: string
    repositoryUrl: string
    technologies: Techonology[]
    image: string
}