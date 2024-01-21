import { Techonology } from "@/type"
import { DropdownMenuItem } from "../ui/dropdown-menu"

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

export const ProyectDropItem = ({ type }: { type: Techonology }) => {

    const technologyIcon = technologyMap[type]

    return (
        <DropdownMenuItem className="m-1">
            <i className={`${technologyIcon} text-xl mr-2`}></i>
            <span>{type.toString()}</span>
        </DropdownMenuItem>
    )
}
