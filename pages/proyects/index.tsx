import { Proyect } from "@/components/Proyect"
import { Proyects } from "@/data/localData"
import Curve from "@/lib"


const ProyectsPage = () => {
    return (
        // <Curve backgroundColor={"#ffffff"}>
        // </Curve>
        <>
            {
                Proyects.map((proyect, index) => (
                    <Proyect key={index} {...proyect} />
                ))
            }
        </>
    )
}

export default ProyectsPage