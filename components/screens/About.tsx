import Image from "next/image"
import { Button } from "../ui/button"
import { BlackBg } from "@/assets"


export const About = () => {
    return (
        <div className="w-screen h-screen md:flex" id="about">
            <div className="md:w-1/2 w-auto mr-10 flex flex-col justify-center md:items-start items-center">
                <div className="md:ml-[180px] ml-10 items-center justify-center flex-wrap">
                    <span className="text-xl">Sobre mi</span>
                    <p className="font-semibold md:text-3xl text-2xl md:w-[580px] mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit vitae nihil vero sit labore itaque soluta error totam, temporibus illum et incidunt asperiores laborum unde eligendi odio sapiente nemo. Optio.</p>
                    <p className="font-semibold md:text-3xl text-2xl md:w-[580px] mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit vitae nihil vero sit labore itaque soluta error totam, temporibus illum et incidunt asperiores laborum unde eligendi odio sapiente nemo. Optio.</p>
                    <Button className="mt-10 w-[200px] h-[50px]" >Descargar Cv</Button>
                </div>
            </div>

            <div className="md:w-1/2 w-full mt-10 flex justify-center items-center invisible lg:visible">
                <div className="h-[474px] w-[530px] bg-black flex justify-center items-center rounded-2xl">
                    <Image
                        src={BlackBg}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </div>
    )
}
