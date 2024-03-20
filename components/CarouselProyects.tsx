
import { Proyects } from '@/data/localData'
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious
} from './ui/carousel'
import { ProyectItem } from './components/ProyectItem'

const colors = ['violet', 'skyblue', 'blue', 'radial']

export const CarouselProyects = () => {
    return (
        <Carousel orientation='horizontal'>
            <CarouselContent className="h-[800px] w-[1600px]">
                {
                    Proyects.map((proyect, index) => (
                        <ProyectItem
                            key={index}
                            Proyect={proyect}
                            color={colors[index]}
                        />
                    ))
                }
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
