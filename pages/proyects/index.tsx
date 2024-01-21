import { FilterProyects } from "@/components/FilterProyects"
import { ProyectsList } from "@/components/proyect/ProyectsList"
import { Separator } from "@/components/ui/separator"
import { WelcomeProyects } from "@/components/welcome/welcomeProyects"
import Curve from "@/lib"


const ProyectsPage = () => {
    return (
        // <Curve backgroundColor={"#ffffff"}>
        // </Curve>
        <>
            <WelcomeProyects />
            <FilterProyects />
            <Separator className="bg-zinc-400" />
            <ProyectsList />
        </>
    )
}

export default ProyectsPage