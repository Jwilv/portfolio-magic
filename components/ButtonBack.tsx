import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"


export const ButtonBack = ({ type = 'white' }: { type?: 'white' | 'black' }) => {

    const router = useRouter();

    return (
        <ArrowLeft
            className={`w-8 h-8 lg:top-10 lg:left-10 absolute lg:text-black text-${type} cursor-pointer top-5 left-5`}
            onClick={() => router.push('/')}
        />
    )
}
