import { FaAsterisk } from 'react-icons/fa'
import MG from './../assets/img/MG.png'

export const Footer = () => {
    return (
        <div className=" flex flex-row justify-center items-center w-full h-[70px] bg-bg border-t-[1px] border-b-[1px] border-t1 gap-5 text-t1">
            <img src={MG} style={{width: '50px'}}/>
            <FaAsterisk className='w-[7px] h-[7px]' />
            <p>Mark Gil P. Rusiana</p>
            <FaAsterisk className='w-[7px] h-[7px]' />
            <p>2024</p>
        </div>
    )
}
