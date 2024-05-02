import { Element } from 'react-scroll';

import fb from './../assets/img/fb_copy.png'
import yt from './../assets/img/yt_copy.png'
import ga from './../assets/img/google_account_copy.png'


export const Projects = () => {

  const projects = [
    {name: "fb_copy", img: fb},
    {name: "yt_copy", img: yt},
    {name: "google_account_copy", img: ga},
  ]
    return (
      <Element name="Projects" className=' w-full min-h-screen bg-bg flex flex-col items-center '>
        <div className='w-[80%] text-white flex flex-col mt-[120px]'>
            <h1 className='text-t1 text-[50px] text-center'>Projects</h1>
            <div className=' w-full min-h-[300px] flex flex-wrap gap-10 justify-center items-center mt-[35px]'>
              {projects.map((e:any)=>(
                <div className='min-w-[350px] w-[500px] min-h-[200px] h-[350px] rounded-md'
                  style={{    
                      backgroundImage: `url(${e.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                  }}
                  >    
                  <p className=' text-black text-[30px] font-bold '>{e.name}</p>     
                </div>
              ))}
            </div>
        </div>
      </Element>
    )
  }
  