import { Github } from "lucide-react"


export const Proyect = () => {
    return (
        <div className="h-[275px] w-[400px] shadowItem bg-[#fff] rounded-3xl m-10">
            <div className="h-[150px] w-[400px] rounded-t-3xl overflow-hidden">
                <img
                    src="https://raw.githubusercontent.com/Jwilv/port-3d/main/assets/code.jpg"
                    alt=""
                    className="bg-cover"
                />
            </div>
            <h2 className="font-semibold text-xl ml-2">
                App name lite
            </h2>
            <p className="ml-2 mr-5">
                Lorem ipsum dolor sit, amet consectetur adii. Pariatur ad quaerat ipsua aaaaaaaa aaaa aaaaaa aaaaaaam?aaaaa
            </p>
            <div className="w-full relative">
                <a
                    href="https://github.com/Jwilv/port-3d"
                    target="_blank"
                    className="-mt-4 right-5 absolute cursor-pointer"
                >
                    <Github className="h-8 w-8 cursor-pointer" />
                </a>
            </div>
        </div>
    )
}
