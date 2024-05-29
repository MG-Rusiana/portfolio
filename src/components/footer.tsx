import { FaEnvelope, FaPhone } from "react-icons/fa"


export const Footer = () => {
    return (
        <div className=" flex flex-row justify-center items-center w-full h-[50px] bg-t1/50 gap-5 text-white">
          <div className='h-full min-w-[100px] flex flex-row justify-center items-center gap-2'>
            <FaPhone className='w-[20px] h-[20px]'/>
            <p>0950 974 3849</p>
          </div>
          <div className='h-full min-w-[100px] flex flex-row justify-center items-center gap-2'>
            <FaEnvelope className='w-[20px] h-[20px]'/>
            <p>markgilrusiana437@gmail.com</p>
          </div>
        </div>
    )
}
