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
import { ProyectDropItem } from "./ProyectDropItem"


export const ProyectDropMenu = ({ technologies }: { technologies: Techonology[] }) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="mt-1 absolute right-20 cursor-pointer">
                <Blocks />
            </DropdownMenuTrigger >
            <DropdownMenuContent >
                <DropdownMenuLabel>
                    Tecnologias
                </DropdownMenuLabel>
                <Separator className=" bg-zinc-300" />
                <DropdownMenuGroup>
                    {
                        technologies.map((technology, index) => (
                            <ProyectDropItem key={index} type={technology} />
                        ))
                    }
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}