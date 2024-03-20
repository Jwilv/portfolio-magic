import { dslite } from '@/assets'
import { Button } from '../ui/button'
import { CarouselItem } from '../ui/carousel'
import Image, { StaticImageData } from 'next/image'
import { Proyetc } from '@/type'
import { Proyects } from '../../data/localData';

interface ProyectItemProps {
    Proyect: Proyetc;
    color: string
}


export const ProyectItem = ({ Proyect, color }: ProyectItemProps) => {

    const { title, image, desc, subDesc, links } = Proyect

    return (
        <CarouselItem>
            <div
                className={`w-[full] h-[800px] flex rounded-3xl gradient-${color}`}
            >
                <div className="w-1/2 h-full flex justify-start items-center">

                    <Image
                        src={image}
                        alt="Picture of the author"
                    />
                </div>

                <div className="flex-1 ">
                    <h2 className="text-5xl font-bold text-white ml-20 mt-16">
                        {title}
                    </h2>

                    <p className="text-white ml-20 mt-10 w-[550px] text-2xl">
                        {desc}
                    </p>
                    <p className="text-white ml-20 mt-10 w-[550px] text-2xl">
                        {subDesc}
                    </p>

                    {
                        links.map((link, index) => (
                            <a
                                href={link.url}
                                key={index}
                                target="_blank"
                            >
                                <Button
                                    className="ml-20 mt-10"
                                >
                                    {link.label}
                                </Button>
                            </a>
                        ))
                    }
                </div>
            </div>
        </CarouselItem>
    )
}
