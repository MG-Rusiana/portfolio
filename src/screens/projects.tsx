import { Element } from 'react-scroll';

import fb from './../assets/img/fb_copy.png'
import yt from './../assets/img/yt_copy.png'
import ga from './../assets/img/google_account_copy.png'
import { useState } from 'react';

//import bg from './../assets/img/projectsBG.webp'


export const Projects = () => {

    const projects = [
      {name: "Facebook UI Copy", img: fb, link: "https://mg-rusiana.github.io/fb_copy/"},
      {name: "Youtube UI Copy", img: yt, link: "https://mg-rusiana.github.io/yt_copy/"},
      {name: "Google UI Copy", img: ga, link: "https://mg-rusiana.github.io/google-account_copy/"},
    ]

    const [isHovered, setIsHovered] = useState(Array(projects.length).fill(false));

    return (
      <Element name="Projects" className=' w-full min-h-screen bg-bg flex flex-col items-center '
      //   style={{    
      //     backgroundImage: `url(${bg})`,
      //     backgroundSize: 'contain',
      //     backgroundPosition: 'center',
      // }}
      >
        <div className='w-[80%] text-white flex flex-col mt-[120px]'>
            <h1 className='text-t1 text-[50px] text-center'>Projects</h1>
            <div className=' w-full min-h-[300px] flex flex-wrap gap-10 justify-center items-center mt-[35px]'>
              {projects.map((e:any, index:number)=>(
                  <div className='flex flex-col justify-center items-center p-5 rounded-md bg-[#575d5d] shadow-md gap-5'>
                    <div className='w-[450px] h-[260px] relative ' 
                      onMouseEnter={() => {
                        const newIsHovered = [...isHovered];
                        newIsHovered[index] = true;
                        setIsHovered(newIsHovered);
                      }}
                      onMouseLeave={() => {
                        const newIsHovered = [...isHovered];
                        newIsHovered[index] = false;
                        setIsHovered(newIsHovered);
                      }}
                    >
                      <img src={e.img} className='w-full h-full hoverEffect z-10' style={{backgroundSize: 'cover', backgroundPosition: 'center',}} />
                      <a href={e.link} target="_blank" rel="noopener noreferrer"><button 
                        className={
                          isHovered[index]
                            ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bg text-white w-[140px] h-[40px] rounded-md'
                            : 'hidden'
                          }>Go to Website</button>
                        </a>
                    </div>

                    <p className='text-[23px]'>{e.name}</p>
                  </div>
                ))}
            </div>
        </div>
      </Element>
    )
  }
  