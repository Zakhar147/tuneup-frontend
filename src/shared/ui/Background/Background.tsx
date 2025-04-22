import { ReactNode } from "react"

interface BackgroundProps {
    children: ReactNode
}

const Background: React.FC<BackgroundProps> = ({children}) => {
    //TODO: когда добавляешь много элементов то высота не меняется
    //TODO: сделать чтобы как-то минимальная ширина была
    //TODO: создать отдельную ветку 

    return (
        <div className="relative bg-light-bgColor dark:bg-dark-bgColor w-full h-screen overflow-hidden">
            <div className="absolute w-340 h-340 bg-accent opacity-46 dark:opacity-8 rounded-30 -rotate-56 top-[100px] left-[-150px] blur-2" />
            <div className="absolute w-556 h-556 bg-accent  opacity-46 dark:opacity-8 rounded-30 -rotate-73 top-[710px] left-[-150px] blur-2" />

            <div className="absolute w-376 h-376 bg-accent  opacity-46 dark:opacity-8 rounded-30 -rotate-56 top-[100px] right-[-150px] blur-2" />
            <div className="absolute w-556 h-556 bg-accent  opacity-46 dark:opacity-8 rounded-30 -rotate-68 top-[710px] right-[-100px] blur-2" />

            <div className="relative z-10">
                {children}
            </div>
        </div>

    )
}

export default Background;