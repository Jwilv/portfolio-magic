import { Pyramid } from "lucide-react"


export const WelcomeProyects = () => {
    return (
        <div className="flex items-center justify-center w-screen h-36">
            <div className="flex -mb-14">
                <Pyramid className="h-20 w-20" />
                <h1 className="m-4 text-4xl font-semibold">Mis proyectos</h1>
            </div>
        </div>
    )
}
