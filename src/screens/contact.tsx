import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane, FaPhone} from 'react-icons/fa';
import { Element } from 'react-scroll';
// import { Footer } from '../components/footer';
import { useEffect, useState } from 'react';
import { FaRotateRight } from 'react-icons/fa6';
import { FaAsterisk } from 'react-icons/fa'
import MG from './../assets/img/MG.png'
import 'animate.css';

export const Contact = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [warning, setWarning] = useState("")

    const [data, setData] = useState({
      name: "",
      email: "",
      message: ""
    })

    useEffect(()=>{
      console.log(warning)
    },[])

    return (
      <Element name="Contact" className=' w-full min-h-screen bg-bg flex flex-col items-center'>
        <div className='w-[80%] h-[100px] text-white flex flex-col mt-[120px]'>
          <h1 className='text-t1 text-[50px] text-center'>Contact Me</h1>
        </div>

        <form method='POST' action='https://getform.io/f/warkpvkb' className='flex flex-row md:flex-col justify-center items-center w-[80%] text-white mb-10 bg-[#575d5d] bg-opacity-30 backdrop-filter rounded-md shadow-md px-10'
          onSubmit={async (event:any) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            setIsLoading(true)
            setWarning("Hang tight, we're processing your message...")
            try {
              const response = await fetch(event.target.action, {
                method: 'POST',
                body: formData,
              });
              if (response.ok) {
                console.log('Form submitted successfully');
                setIsLoading(false)
                setData({
                  name: "",
                  email: "",
                  message: ""
                })
                setWarning("Your message has been successfully submitted. Thank you!")
              } else {
                console.error('Form submission failed');
              }
            } catch (error) {
              console.error('Error submitting form:', error);
            }
            setTimeout(()=>{
              setWarning("")
            }, 5000)
          }}
          >
          <div className=' w-[500px] md:w-[80%] flex flex-col justify-centerp-5 translate-y-[-60px] md:translate-y-0'>

            <h1 className=' text-[40px] mb-5 '>Get in touch</h1>
            <h2 className=' text-[28px] '>Need something?</h2>
            <p className=' text-[16px] '> Feel free to contact me for any inquiries you may have!</p>

            <div className='w-full flex flex-row justify-start items-center gap-5 mt-10'>
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

            <div className='h-full min-w-[100px] flex flex-row justify-start items-center gap-2 mb-4 mt-6'>
              <FaPhone className='w-[20px] h-[20px]'/>
              <p>0950 974 3849</p>
            </div>
            <div className='h-full min-w-[100px] flex flex-row justify-start items-center gap-2'>
              <FaEnvelope className='w-[20px] h-[20px]'/>
              <p>markgilrusiana437@gmail.com</p>
            </div>

          </div>
          <div className='flex flex-col justfy-start items-center gap-6 p-5  md:w-full w-[60%] max-w-[600px] '>
            <input 
              className=' w-full border-[1px] rounded-md bg-bg  outline-none h-[60px] pl-3 px-5' 
              type='text' 
              placeholder='Name' 
              name='name' 
              required
              value={data.name}
              onChange={(e:any)=> setData({...data, name:e.target.value})}
            />
            <input 
              className=' w-full border-[1px] rounded-md bg-bg  outline-none h-[60px] pl-3' 
              type='email' 
              placeholder='Email' 
              name='email' 
              required
              value={data.email}
              onChange={(e:any)=>setData({...data, email:e.target.value})}
            />
            <textarea 
              className=' w-full border-[1px] rounded-md bg-bg  outline-none pl-3 text-start pt-3' 
              rows={10} 
              placeholder='Message' 
              name='message' 
              required
              value={data.message}
              onChange={(e:any)=>setData({...data, message:e.target.value})}
            />
            <div className='flex flex-row justify-center items-center gap-5 rounded-md w-[200px] h-[50px] border-[1px] border-t1 text-t1 hover:bg-bg hover:border-2 hover:border-t1 hover:scale-95 cursor-pointer'>
              <button className=' outline-none flex justify-center items-center gap-3' > Submit
                {isLoading 
                  ?<FaRotateRight className='spin' style={{animation: "spin 2s linear infinite"}}  />
                  : <FaPaperPlane />
                }
              </button>

            </div>

            <div 
              className=
              {warning.length !== 0 
                ?'flex justify-center items-center text-white text-[16px] bg-[#575d5d] px-10 py-2 rounded-md shadow-md'
                :'hidden'
              }        
            >
              {warning}
            </div>
            
          </div>
          
        </form>

        {/* <Footer /> */}

        <div className='w-full h-[60px] flex flex-row justify-center items-center text-t1 gap-8'>
          <img src={MG} style={{width: '50px'}}/>
            <FaAsterisk className='w-[7px] h-[7px]' />
            <p>Mark Gil P. Rusiana</p>
            <FaAsterisk className='w-[7px] h-[7px]' />
            <p>2024</p>
        </div>
      
      </Element>
    )
  }
  