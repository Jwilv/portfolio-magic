import { Blocks } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "./ui/dropdown-menu"

import { Separator } from "./ui/separator"
import { Techonology } from "@/type"

const technologyMap = {
    "nextjs": 'devicon-nextjs-original colored',
    "react": 'devicon-react-original colored',
    "typescript": 'devicon-typescript-plain colored',
    "tailwindcss": 'devicon-tailwindcss-plain colored',
    "mongodb": 'devicon-mongodb-plain colored',
    "nodejs": 'devicon-nodejs-plain colored',
    "express": 'devicon-express-original colored',
    "socket": 'devicon-socketio-original colored',
    "docker": 'devicon-docker-plain colored',
    "mySql": 'devicon-mysql-plain colored',
    "js": 'devicon-javascript-plain colored',
}

export const ProyectDropMenu = ({ type }: { type: Techonology }) => {

    const technologyIcon = technologyMap[type]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="-mt-3 absolute right-20 cursor-pointer">
                <Blocks />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <DropdownMenuLabel>
                    Tecnologias
                </DropdownMenuLabel>
                <Separator className=" bg-zinc-300" />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="m-1">
                        <i className={`${technologyIcon} text-xl mr-2`}></i>
                        <span>Next.js</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}