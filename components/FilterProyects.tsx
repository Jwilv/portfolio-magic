


const itemMap: [string, string][] = [
    ['nextjs', 'devicon-nextjs-original colored'],
    ['react', 'devicon-react-original colored'],
    ['typescript', 'devicon-typescript-plain colored'],
    ['tailwindcss', 'devicon-tailwindcss-plain colored'],
    ['mongodb', 'devicon-mongodb-plain colored'],
    ['nodejs', 'devicon-nodejs-plain colored'],
    ['express', 'devicon-express-original colored'],
    ['socket', 'devicon-socketio-original colored'],
    ['docker', 'devicon-docker-plain colored'],
    ['mySql', 'devicon-mysql-plain colored'],
    ['js', 'devicon-javascript-plain colored'],
]
export const FilterProyects = () => {
    return (
        <div className='h-60 w-screen m-auto flex items-center justify-center'>
            <div className='ml-1 md:m-0 items-center flex flex-wrap gap-2'>
                {
                    itemMap.map((item, index) => (
                        <button
                            key={index}
                            className='p-1 m-1 border-zinc-500 border rounded-lg flex justify-center items-center'
                        >
                            <i className={`${item[1]}  text-xl mr-2`}></i>
                            <span className="font-semibold">{item[0].toString()}</span>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}
