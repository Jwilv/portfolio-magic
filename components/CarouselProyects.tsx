
import { Proyects } from '@/data/localData'
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious
} from './ui/carousel'
import { ProyectItem } from './components/ProyectItem'

const colors = ['violet', 'skyblue', 'green', 'blue', 'radial', 'grey']

export const CarouselProyects = () => {
    return (
        <Carousel orientation='horizontal'>
            <CarouselContent className="h-[800px] 2xl:w-[1600px] w-[400px] md:w-[800px] xl:w-[1200px]">
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
