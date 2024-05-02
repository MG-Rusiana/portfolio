import { Element, Link } from 'react-scroll';
import dp from './../assets/img/resume-removebg-preview.png'
import bg from './../assets/img/homeBG.webp'
import { FaArrowCircleRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


export const Home = () => {
  return (
    <Element name="Home" className=' w-full h-screen bg-bg flex justify-center items-center '
            style={{    
            backgroundImage: `url(${bg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
        }}
      >
      
      <div className=' w-[80%] h-full py-10 flex flex-row justify-center items-center gap-10'>
        <div className=' w-[400px] min-h-[200px] flex flex-col items-start text-white '>
          <div className=' w-full flex flex-col font-bold'>
            <p className='text-[30px] md:text-[40px] text-start pl-1'>Hello, I'm</p>
            <p className='text-t1 text-[50px] md:text-[90px] font-bold text-start'>Mark Gil</p>
            <p className='text-[18px] md:text-[25px] font-semibold text-start pl-2'>Web Developer</p>
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



          <Link className='flex flex-row justify-center items-center gap-5  rounded-md w-[200px] h-[40px] bg-t1 text-bg hover:bg-opacity-80 mt-7 cursor-pointer ml-2' to='About' smooth={true} duration={500}>
            See more 
            <FaArrowCircleRight className='w-[22px] h-[22px]' />
          </Link>
            



        </div>
        <div className='w-[650px] h-full flex justify-end items-end'>
            <img src={dp} style={{objectFit:'contain', width: '900px', height: '100%', borderRadius: '5%'}} />
        </div>
      </div>
    </Element>
  )
}
