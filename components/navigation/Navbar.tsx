import { logo } from "@/assets"
import Image from "next/image"


const items = ["Home", "About", "Work", "Experience", "Contact"]

export const Navbar = () => {
    return (
        <div className="w-screen h-[70px] flex items-end">
            <Image
                src={logo}
                alt="logo"
                className="ml-10 cursor-pointer"
            />
            <div className="flex-1 flex justify-end mr-20">
                {
                    items.map((item, index) => (
                        <span key={index} className="ml-10 mr-10 font-semibold cursor-pointer">{item}</span>
                    ))
                }
            </div>
        </div>
    )
}
