import { Element } from 'react-scroll';

import html from './../assets/img/html.png'
import css from './../assets/img/css.png'
import js from './../assets/img/js.png'
import react from './../assets/img/react.png'
import github from './../assets/img/github.png'
import bitbucket from './../assets/img/bitbucket.png'
import django from './../assets/img/django.png'
import kaggle from './../assets/img/kaggle.png'
// import bg from './../assets/img/about.webp'

export const About = () => {

    const tech = [
        {tech: "HTML", img: html},
        {tech: "CSS", img: css},
        {tech: "JAVASCRIPT", img: js},
        {tech: "REACT", img: react},
        {tech: "DJANGO", img: django},
        {tech: "GITHUB", img: github},
        {tech: "BITBUCKET", img: bitbucket},
        {tech: "KAGGLE", img: kaggle},
    ]
    
    return (
      <Element 
        name='About' 
        className=' w-full min-h-screen bg-bg flex flex-col items-center' 
        // style={{    
        //     backgroundImage: `url(${bg})`,
        //     backgroundSize: 'contain',
        //     backgroundPosition: 'center',
        // }}
      >
        <div className='w-[80%] text-white flex flex-col mt-[120px]'>
            <h1 className='text-t1 text-[50px] text-center'>About Me</h1>
            <p className='text-[18px] text-justify'>I am Mark Gil P. Rusiana, a 4th-year graduating BSIT student at the University of Science and Technology of Southern Philippines, currently an OJT at the Department of Information and Communications Technology. My focus lies in web development, particularly frontend design. Alongside, I am expanding my skills in backend development and database integration to create comprehensive solutions. I am motivated by the endless possibilities of technology and driven to contribute meaningfully to its evolution.</p>
        </div>

        <p className='mt-[20px] text-white text-[40px]'>Technologies I've Used</p>

        <div 
            className='w-[80%] text-white flex flex-wrap mt-[20px] justify-center items-center gap-5'
        >
            
            {tech.map((e:any)=>(
                <div className=' bg-[#575d5d] shadow-md rounded-md lg:w-[20%] md:w-[30%] sm:w-[45%] w-[45%] flex flex-col justify-center items-center h-[220px] gap-3 backdrop-filter bg-opacity-30 hover:bg-[#1c1b19] cursor-pointer'>
                    <img src={e.img} style={{width: '100px'}} />
                    <p>{e.tech}</p>
                </div>
            ))}
        </div>

      </Element>
    )
  }
  