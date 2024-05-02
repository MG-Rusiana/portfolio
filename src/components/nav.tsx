
import { useState } from 'react';
import MG from '../assets/img/MG.png'

import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

export const Nav = () => {

    const [showMenu, setShowMenu] = useState(false)
    const handleShowMenu = () => setShowMenu(!showMenu)

    const nav = [
        {nav: "Home"},
        {nav: "About"},
        {nav: "Projects"},
        {nav: "Contact"},
    ]

    return (
        <div className="bg-bg fixed flex flex-row justify-between w-full h-[100px] items-center text-white px-10 backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-md">
            
    
            <img src={MG} style={{width: '80px'}} />
            

            <div className='hidden md:flex'>
                <ul className=' flex flex-row text-3xl gap-5'>
                    {nav.map((e:any)=>(

                        <li className='hover:cursor-pointer hover:text-t1 hover:border-b-[1px] hover:border-t1'><Link to={e.nav} smooth={true} duration={500}>{e.nav}</Link></li>
                    ))}
                </ul>
            </div>

            <div className='flex md:hidden' onClick={handleShowMenu}>
                {!showMenu 
                    ? <FaBars className='w-[25px] h-[25px] cursor-pointer hover:text-t1'/> 
                    : <FaXmark className='w-[30px] h-[30px] cursor-pointer hover:text-t1'/>
                }
                
            </div>

            {/* menu */}
            <ul className={showMenu ? ' absolute top-[100px] left-0 w-full h-screen bg-bg flex flex-col justify-center items-center gap-5 text-white' : 'hidden'}>
                    {nav.map((e:any)=>(

                        <li  className='hover:cursor-pointer hover:text-t1 hover:border-b-[1px] hover:border-t1 text-[35px]'><Link onClick={handleShowMenu} to={e.nav} smooth={true} duration={500}>{e.nav}</Link></li>
                    ))}
            </ul>



        </div>
    )
}
