import { Element } from 'react-scroll';
import { useState } from 'react';

import p1 from './../../assets/img/webp/p1.webp'
import p2 from '../../assets/img/webp/p2.webp'
import c1 from './../../assets/img/webp/c1.webp'
import c2 from '../../assets/img/webp/c2.webp'

import pdf1 from './pdf/p1.pdf'
import pdf2 from './pdf/p2.pdf'
import pdf3 from './pdf/c1.pdf'
import pdf4 from './pdf/c2.pdf'


export const Certificates = () => {

    const certs = [
      {name: "Python for Beginners", img: p1, link: pdf1},
      {name: "Intermediate Python", img: p2, link: pdf2},
      {name: "CCNAv7: Introduction to Networks", img: c1, link: pdf3},
      {name: "CCNAv7: Switching, Routing, and Wireless Essentials", img: c2, link: pdf4},
    ]

    const [isHovered, setIsHovered] = useState(Array(certs.length).fill(false));

    return (
      <Element name="Certificates" className=' w-full min-h-screen bg-bg flex flex-col items-center '>


        <div className='w-[80%] text-white flex flex-col mt-[120px]'>
            <h1 className='text-t1 text-[50px] text-center mb-5'>Certificates</h1>

            <div className='w-full min-h-[300px] rounded-md bg-[#575d5d] bg-opacity-10 backdrop-filter shadow-md p-10 flex flex-col'>


            <div className=' w-full h-full flex flex-wrap gap-10 justify-center items-center mt-[35px] '>

                {certs.map((e:any, index:number)=>(
                    <div className='flex flex-col w-[500px] h-[350px] md:w-[400px] md:h-[250px] sm:w-[300px] sm:h-[150px] justify-center items-center px-5 rounded-md bg-[#575d5d] bg-opacity-30 backdrop-filter shadow-md gap-2'>
                      <div className='w-full h-[75%] relative bg-white' 
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
                        <img src={e.img} className='w-full h-full hoverEffect z-10' style={{objectFit:"cover", backgroundPosition: 'center',}} />
                        <a 
                          onClick={()=>{window.open(e.link, '_blank')}} 
                          target="_blank" rel="noopener noreferrer">
                          
                          <button 
                            className={
                            isHovered[index]
                              ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bg text-white w-[140px] h-[40px] rounded-md'
                              : 'hidden'
                            }>View</button>
                        </a>
                      </div>

                      <p className='text-[23px] text-center sm:truncate'>{e.name}</p>
                    </div>
                  ))}



        
            </div>
            </div>
        </div>
      </Element>
    )
  }
  