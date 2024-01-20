import { Github } from "lucide-react"
import { Proyetc } from "@/type"
import { ProyectDropMenu } from "./ProyectDropMenu"


export const Proyect = ({
    name,
    description,
    image,
    technologies,
    repositoryUrl
}: Proyetc) => {
    return (
        <div className="h-[275px] w-[400px] shadowItem bg-[#fff] rounded-3xl m-10">
            <div className="h-[150px] w-[400px] rounded-t-3xl overflow-hidden">
                <img
                    src="https://raw.githubusercontent.com/Jwilv/port-3d/main/assets/code.jpg"
                    alt=""
                    className="bg-cover"
                />
            </div>
            <h2 className="font-semibold text-xl ml-2">
                {name}
            </h2>
            <p className="ml-2 mr-5">
                {description}
            </p>
            <div className="w-full relative">
                <a
                    href={repositoryUrl}
                    target="_blank"
                    className="-mt-4 right-5 absolute cursor-pointer"
                >
                    <Github className="h-8 w-8 cursor-pointer" />
                </a>

            </div>
        </div>
    )
}
