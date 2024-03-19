import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

export const Proyects = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Carousel orientation='horizontal'>
                <CarouselContent className="h-[800px] w-[1600px]">
                    <CarouselItem><div className="w-[full] h-[800px] bg-black rounded-3xl"></div></CarouselItem>
                    <CarouselItem><div className="w-[full] h-[800px] bg-[red]"></div></CarouselItem>
                    <CarouselItem><div className="w-[full] h-[800px] bg-[green]"></div></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
