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
                className={`w-[full] h-[800px] flex flex-col xl:flex-row rounded-3xl gradient-${color}`}
            >
                <div className="md:w-1/2 xl:w-3/4 flex-1 h-full flex justify-start items-center m-auto">

                    <Image
                        src={image}
                        alt="Picture of the author"
                    />
                </div>

                <div className="flex-1 mb-5">
                    <h2 className="text-5xl font-bold text-white xl:ml-20 ml-10 xl:mt-16 ">
                        {title}
                    </h2>

                    <p className="text-white md:ml-20 ml-10 mt-5 md:w-[550px] md:text-2xl text-xl mr-5">
                        {desc}
                    </p>
                    <p className="text-white md:ml-20 ml-10 mt-5 md:w-[550px] md:text-2xl text-xl mr-5">
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
                                    className="md:ml-20 md:mt-10 ml-10 mt-5"
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
