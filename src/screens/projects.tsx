import { Element } from 'react-scroll';
import { useState } from 'react';

import fb from './../assets/img/webp/fb_copy.webp'
import yt from './../assets/img/webp/yt_copy.webp'
import ga from './../assets/img/webp/google_account_copy.webp'
import bt from './../assets/img/webp/budgeterist.webp'
import tb from './../assets/img/webp/taskBuddy.webp'
import is from './../assets/img/webp/iShare.webp'
import pb from './../assets/img/webp/Playbook.webp'
import ad from './../assets/img/webp/miam.webp'
import ps from './../assets/img/webp/poster.webp'
import cl from './../assets/img/webp/collage.webp'
import bk from './../assets/img/webp/bookmars_collage.webp'



export const Projects = () => {

    const[showFrontEnd, setShowFrontEnd]=useState(false)
    const[showPrototype, setShowPrototype]=useState(true)
    const[showGraphic, setShowGraphic]=useState(false)

    const frontend = [
      {name: "Facebook UI Copy", img: fb, link: "https://mg-rusiana.github.io/fb_copy/"},
      {name: "Youtube UI Copy", img: yt, link: "https://mg-rusiana.github.io/yt_copy/"},
      {name: "Google UI Copy", img: ga, link: "https://mg-rusiana.github.io/google-account_copy/"},
    ]

    const prototype = [
      {name: "Budgeterist", img: bt, link: "https://www.figma.com/design/6wlqDIISTfqL83zcQR7kUq/Budgeterist-Wireframe?node-id=0-1&t=MfzALBb8B2WMoUR7-1"},
      {name: "TaskBuddy", img: tb, link: "https://www.figma.com/design/RdycMZIljiTs7PtAG3AZl4/Taskbuddy?t=MfzALBb8B2WMoUR7-1"},
      {name: "iShare", img: is, link: "https://www.figma.com/design/ru5GpY3ZO3GgQrEUYwRU7v/iShare?node-id=0-1&t=rD31epdonsNoxWTH-1"},
    ]

    const canva = [
      {name: "Playbook", img: pb, link: "https://www.canva.com/design/DAGGjpxjLr4/rg1SLPbM-rurdJBs1cDngw/view?utm_content=DAGGjpxjLr4&utm_campaign=designshare&utm_medium=link&utm_source=editor"},
      {name: "Advertisement", img: ad, link: "https://www.canva.com/design/DAEYE0UJq5M/0sUE2BRcRIZObI_7clFZ2A/view?utm_content=DAEYE0UJq5M&utm_campaign=designshare&utm_medium=link&utm_source=editor"},
      {name: "Poster", img: ps, link: "https://www.canva.com/design/DAEcz1fGpl4/UInkqLcmNqBvh4uPGusq3w/view?utm_content=DAEcz1fGpl4&utm_campaign=designshare&utm_medium=link&utm_source=editor"},
      {name: "Collage", img: cl, link: "https://www.canva.com/design/DAFcPo9DLcI/LL8Wjxqql__qJGsq8jkyNQ/view?utm_content=DAFcPo9DLcI&utm_campaign=designshare&utm_medium=link&utm_source=editor"},
      {name: "Bookmarks", img: bk, link: "https://www.canva.com/design/DAF0Mb01oKM/pblr7VPfYWNG8C_XdAI2jQ/view?utm_content=DAF0Mb01oKM&utm_campaign=designshare&utm_medium=link&utm_source=editor"},
    ]

    const [isHoveredFE, setIsHoveredFE] = useState(Array(frontend.length).fill(false));
    const [isHoveredPD, setIsHoveredPD] = useState(Array(prototype.length).fill(false));
    const [isHoveredCD, setIsHoveredCD] = useState(Array(canva.length).fill(false));

    return (
      <Element name="Projects" className=' w-full min-h-screen bg-bg flex flex-col items-center '>


        <div className='w-[80%] text-white flex flex-col mt-[120px]'>
            <h1 className='text-t1 text-[50px] text-center mb-5'>Projects</h1>

            <div className='w-full min-h-[300px] rounded-md bg-[#575d5d] bg-opacity-10 backdrop-filter shadow-md p-10 flex flex-col'>

            <ul className='w-full h-[80px] flex justify-center items-center gap-5 text-[25px] md:text-[20px] '>
              <li className={` cursor-pointer ${showFrontEnd ? 'underline text-t1' : ''} `} onClick={()=>{
                setShowFrontEnd(true)
                setShowPrototype(false)
                setShowGraphic(false)
              }}>Front End Designs</li>
              <li>|</li>
              <li className={` cursor-pointer ${showPrototype ? 'underline text-t1' : ''} `} onClick={()=>{
                setShowFrontEnd(false)
                setShowPrototype(true)
                setShowGraphic(false)
              }}>Prototype Designs</li>
              <li>|</li>
              <li className={` cursor-pointer ${showGraphic ? 'underline text-t1' : ''} `} onClick={()=>{
                setShowFrontEnd(false)
                setShowPrototype(false)
                setShowGraphic(true)
              }}>Canva Designs</li>
            </ul>

            <div className=' w-full h-full flex flex-wrap gap-10 justify-center items-center mt-[35px]'>

              {showFrontEnd && (
                <>
                  {frontend.map((e:any, index:number)=>(
                    <div className='flex flex-col w-[500px] h-[350px] md:w-[400px] md:h-[250px] sm:w-[300px] sm:h-[150px] justify-center items-center px-5 rounded-md bg-[#575d5d] bg-opacity-30 backdrop-filter shadow-md gap-2'>
                      <div className='w-full h-[75%] relative bg-white' 
                        onMouseEnter={() => {
                          const newIsHovered = [...isHoveredFE];
                          newIsHovered[index] = true;
                          setIsHoveredFE(newIsHovered);
                        }}
                        onMouseLeave={() => {
                          const newIsHovered = [...isHoveredFE];
                          newIsHovered[index] = false;
                          setIsHoveredFE(newIsHovered);
                        }}
                      >
                        <img src={e.img} className='w-full h-full hoverEffect z-10' style={{objectFit:"cover", backgroundPosition: 'center',}} />
                        <a href={e.link} target="_blank" rel="noopener noreferrer"><button 
                          className={
                            isHoveredFE[index]
                              ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bg text-white w-[140px] h-[40px] rounded-md'
                              : 'hidden'
                            }>Go to Website</button>
                          </a>
                      </div>

                      <p className='text-[23px] sm:truncate'>{e.name}</p>
                    </div>
                  ))}
                </>
              )}

              {showPrototype && (
                <>
                  {prototype.map((e:any, index:number)=>(
                    <div className='flex flex-col w-[500px] h-[350px] md:w-[400px] md:h-[250px] sm:w-[300px] sm:h-[150px] justify-center items-center px-5 rounded-md bg-[#575d5d] bg-opacity-30 backdrop-filter shadow-md gap-2'>
                      <div className='w-full h-[75%] relative bg-white' 
                        onMouseEnter={() => {
                          const newIsHovered = [...isHoveredPD];
                          newIsHovered[index] = true;
                          setIsHoveredPD(newIsHovered);
                        }}
                        onMouseLeave={() => {
                          const newIsHovered = [...isHoveredPD];
                          newIsHovered[index] = false;
                          setIsHoveredPD(newIsHovered);
                        }}
                      >
                        <img src={e.img} className='w-full h-full hoverEffect z-10' style={{objectFit:"cover", backgroundPosition: 'center',}} />
                        <a href={e.link} target="_blank" rel="noopener noreferrer"><button 
                          className={
                            isHoveredPD[index]
                              ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bg text-white w-[140px] h-[40px] rounded-md'
                              : 'hidden'
                            }>Go to Figma</button>
                          </a>
                      </div>

                      <p className='text-[23px] sm:truncate'>{e.name}</p>
                    </div>
                  ))}
                </>
              )}

              {showGraphic && (
                <>
                  {canva.map((e:any, index:number)=>(
                    <div className='flex flex-col w-[500px] h-[350px] md:w-[400px] md:h-[250px] sm:w-[300px] sm:h-[150px] justify-center items-center px-5 rounded-md bg-[#575d5d] bg-opacity-30 backdrop-filter shadow-md gap-2'>
                      <div className='w-full h-[75%] relative bg-white' 
                        onMouseEnter={() => {
                          const newIsHovered = [...isHoveredCD];
                          newIsHovered[index] = true;
                          setIsHoveredCD(newIsHovered);
                        }}
                        onMouseLeave={() => {
                          const newIsHovered = [...isHoveredCD];
                          newIsHovered[index] = false;
                          setIsHoveredCD(newIsHovered);
                        }}
                      >
                        <img src={e.img} className='w-full h-full hoverEffect z-10' style={{objectFit:"cover", backgroundPosition: 'center',}} />
                        <a href={e.link} target="_blank" rel="noopener noreferrer"><button 
                          className={
                            isHoveredCD[index]
                              ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bg text-white w-[140px] h-[40px] rounded-md'
                              : 'hidden'
                            }>Go to Canva</button>
                          </a>
                      </div>

                      <p className='text-[23px] sm:truncate'>{e.name}</p>
                    </div>
                  ))}
                </>
              )}  
        
            </div>
            </div>
        </div>
      </Element>
    )
  }
  