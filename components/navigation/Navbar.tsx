

const items = ["Inicio", "Sobre mi", "Proyectos", "Experiencia", "Contacto"]

export const Navbar = () => {
    return (
        <div className="w-screen h-[70px] flex items-end">
            <div className="flex-1 flex justify-end mr-20">
                {
                    items.map((item, index) => (
                        <span key={index} className="ml-10 mr-10 font-semibold cursor-pointer" >{item}</span>
                    ))
                }
            </div>
        </div>
    )
}
