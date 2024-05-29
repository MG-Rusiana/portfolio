import { Element, Link } from 'react-scroll';
import dp from './../assets/img/resume-removebg-preview.png'
import bg from './../assets/img/homeBG.webp'
import { FaArrowCircleRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import 'animate.css';


export const Home = () => {
  return (
    <Element name="Home" className=' w-full h-screen bg-bg flex justify-center items-center '
            style={{    
            backgroundImage: `url(${bg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
        }}
      >
      
      <div className=' w-[80%] h-full py-10 flex flex-col justify-center items-center gap-10'>

        <div className='w-[full min-h-[200px] flex flex-row md:flex-col items-center justify-center'>

          <div className=' w-1/2 h-full flex flex-col items-start justify-center text-white md:w-full'>
            <div className='w-full text-left flex flex-col font-bold'>
              
              <p className='text-[40px] p-1 '>Hello, I'm</p>
              <p className='text-t1 text-[100px] font-semibold leading-tight translate-y-[-23px]'>Mark Gil</p>
              <p className='text-[25px] font-normal pl-2 translate-y-[-16px]'>Web Developer and Designer</p>
            </div>


            <div className='w-full flex flex-row justify-start items-center gap-5 mt-10 pl-2'>
              <a href="https://www.facebook.com/markgil.rusiana.9/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='w-[30px] h-[30px] cursor-pointer'/>
              </a>
              <a href="https://www.instagram.com/markgilrusiana/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='w-[30px] h-[30px] cursor-pointer'/>
              </a>
              <a href="https://www.linkedin.com/in/mark-gil-rusiana-97553a2ba/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='w-[30px] h-[30px] cursor-pointer'/>
              </a>
            </div>



            <Link className='flex flex-row justify-center items-center gap-5  rounded-md w-[200px] h-[50px] text-t1 bg-transpared border-2 border-t1 hover:bg-opacity-80 mt-4 cursor-pointer ml-2 text-[20px] hover:scale-95 hover:bg-bg' to='About' smooth={true} duration={500}>
              See more 
              <FaArrowCircleRight className='w-[22px] h-[22px]' />
            </Link>
              



          </div>

          <div className=' md:w-[300px] w-1/2 h-full flex justify-end items-end '>
              <img src={dp} style={{objectFit:'contain', width: '100%', height: '100%', borderRadius: '5%'}} />
          </div>
        </div>

      </div>
    </Element>
  )
}
