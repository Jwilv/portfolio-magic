import Image from "next/image"
import { Button } from "../ui/button"
import { BlackBg } from "@/assets"


export const About = () => {
    return (
        <div className="w-screen h-screen flex">
            <div className="w-1/2 flex flex-col justify-center items-start">
                <div className="ml-[180px]">
                    <span className=" text-xl">Sobre mi</span>
                    <p className="font-semibold text-3xl w-[580px] mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit vitae nihil vero sit labore itaque soluta error totam, temporibus illum et incidunt asperiores laborum unde eligendi odio sapiente nemo. Optio.</p>
                    <p className="font-semibold text-3xl w-[580px] mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit vitae nihil vero sit labore itaque soluta error totam, temporibus illum et incidunt asperiores laborum unde eligendi odio sapiente nemo. Optio.</p>
                    <Button className="mt-10 w-[200px] h-[50px]" >Descargar Cv</Button>
                </div>
            </div>

            <div className="w-1/2 flex justify-center items-center">
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
