import { ButtonBack } from "@/components/ButtonBack"
import { FilterProyects } from "@/components/FilterProyects"
import { ProyectsList } from "@/components/proyect/ProyectsList"
import { Separator } from "@/components/ui/separator"
import { WelcomeProyects } from "@/components/welcome/WelcomeProyects"
import Curve from "@/lib"


const ProyectsPage = () => {
    return (
        <Curve backgroundColor={"#ffffff"}>
            <div className="overflow-x-hidden">
            <ButtonBack type="black"/>
            <WelcomeProyects />
            <FilterProyects />
            <Separator className="bg-zinc-400" />
            <ProyectsList />
            </div>
        </Curve>
    )
}

export default ProyectsPage