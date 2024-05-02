import { FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane} from 'react-icons/fa';
import { Element } from 'react-scroll';


export const Contact = () => {
    return (
      <Element name="Contact" className=' w-full min-h-screen bg-bg flex flex-col items-center'>
        <div className='w-[80%] h-[100px] text-white flex flex-col mt-[120px]'>
          <h1 className='text-t1 text-[50px] md:text-center'>Contact Me</h1>
        </div>

        <form method='POST' className='flex flex-col md:flex-row justify-center items-center w-[80%] text-white'>
          <div className='w-[400px] flex flex-col justify-center items-center p-5'>
            <h1 className=' text-[40px] mb-5 w-[300px]'>Get in touch</h1>
            <h2 className=' text-[28px] w-[300px]'>Need something?</h2>
            <p className=' text-[16px] w-[300px]'> Feel free to contact me for any inquiries you may have!</p>
            <div className='w-full flex flex-row justify-start items-center gap-5 mt-10 pl-7'>
              <FaFacebook className='w-[30px] h-[30px] cursor-pointer'/>
              <FaInstagram className='w-[30px] h-[30px] cursor-pointer'/>
              <FaLinkedin className='w-[30px] h-[30px] cursor-pointer'/>
            </div>
          </div>
          <div className='flex flex-col justfy-start items-center gap-6 p-5 w-[500px] '>
            <input className=' w-full border-[1px] rounded-md bg-bg  outline-none h-[60px] pl-3 px-5' type='text' placeholder='Name' name='name'/>
            <input className=' w-full border-[1px] rounded-md bg-bg  outline-none h-[60px] pl-3' type='text' placeholder='Email' name='email'/>
            <textarea className=' w-full border-[1px] rounded-md bg-bg  outline-none pl-3 text-start pt-3' rows={10} placeholder='Message' name='message' />
            <div className='flex flex-row justify-center items-center gap-5 border-[1px] rounded-md w-[200px] h-[40px] bg-t1 text-bg hover:bg-opacity-80'>
              <button className=' outline-none '>Submit</button>
              <FaPaperPlane />
            </div>
            
          </div>
          
        </form>
      </Element>
    )
  }
  