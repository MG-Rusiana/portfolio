import { Element } from 'react-scroll';
import { useState } from 'react';

import fb from './../assets/img/fb_copy.png'
import yt from './../assets/img/yt_copy.png'
import ga from './../assets/img/google_account_copy.png'
import bt from './../assets/img/budgeterist.png'
import tb from './../assets/img/taskBuddy.png'
import is from './../assets/img/iShare.png'
import ad from './../assets/img/miam.jpg'
import ps from './../assets/img/poster.jpg'
import cl from './../assets/img/collage.jpg'



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
      {name: "Advertisement", img: ad, link: "https://www.canva.com/design/DAEYE0UJq5M/0sUE2BRcRIZObI_7clFZ2A/view?utm_content=DAEYE0UJq5M&utm_campaign=designshare&utm_medium=link&utm_source=editor"},
      {name: "Poster", img: ps, link: "https://www.canva.com/design/DAEcz1fGpl4/UInkqLcmNqBvh4uPGusq3w/view?utm_content=DAEcz1fGpl4&utm_campaign=designshare&utm_medium=link&utm_source=editor"},
      {name: "Collage", img: cl, link: "https://www.canva.com/design/DAFcPo9DLcI/LL8Wjxqql__qJGsq8jkyNQ/view?utm_content=DAFcPo9DLcI&utm_campaign=designshare&utm_medium=link&utm_source=editor"},
    ]

    const [isHovered, setIsHovered] = useState(Array(frontend.length).fill(false));

    return (
      <Element name="Projects" className=' w-full min-h-screen bg-bg flex flex-col items-center '>


        <div className='w-[80%] text-white flex flex-col mt-[120px]'>
            <h1 className='text-t1 text-[50px] text-center'>Projects</h1>

            <div className='w-full min-h-[300px] rounded-md bg-[#575d5d] bg-opacity-10 backdrop-filter shadow-md p-10 flex flex-col'>

            <ul className='w-full h-[80px] flex justify-center items-center gap-5'>
              <li className={`text-[25px] cursor-pointer ${showFrontEnd ? 'underline text-t1' : ''} `} onClick={()=>{
                setShowFrontEnd(true)
                setShowPrototype(false)
                setShowGraphic(false)
              }}>Front End Designs</li>
              <li className='text-[25px]'>|</li>
              <li className={`text-[25px] cursor-pointer ${showPrototype ? 'underline text-t1' : ''} `} onClick={()=>{
                setShowFrontEnd(false)
                setShowPrototype(true)
                setShowGraphic(false)
              }}>Prototype Designs</li>
              <li className='text-[25px]'>|</li>
              <li className={`text-[25px] cursor-pointer ${showGraphic ? 'underline text-t1' : ''} `} onClick={()=>{
                setShowFrontEnd(false)
                setShowPrototype(false)
                setShowGraphic(true)
              }}>Graphic Designs</li>
            </ul>

            <div className=' w-full h-full flex flex-wrap gap-10 justify-center items-center mt-[35px] '>

              {showFrontEnd && (
                <>
                  {frontend.map((e:any, index:number)=>(
                    <div className='flex flex-col justify-center items-center p-5 rounded-md bg-[#575d5d] bg-opacity-30 backdrop-filter shadow-md gap-5'>
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
                        <img src={e.img} className='w-full h-full hoverEffect z-10' style={{objectFit:"cover", backgroundPosition: 'center',}} />
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
                </>
              )}

              {showPrototype && (
                <>
                  {prototype.map((e:any, index:number)=>(
                    <div className='flex flex-col justify-center items-center p-5 rounded-md bg-[#575d5d] bg-opacity-30 backdrop-filter shadow-md gap-5'>
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
                        <img src={e.img} className='w-full h-full hoverEffect z-10' style={{objectFit:"cover", backgroundPosition: 'center',}} />
                        <a href={e.link} target="_blank" rel="noopener noreferrer"><button 
                          className={
                            isHovered[index]
                              ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bg text-white w-[140px] h-[40px] rounded-md'
                              : 'hidden'
                            }>Go to Figma</button>
                          </a>
                      </div>

                      <p className='text-[23px]'>{e.name}</p>
                    </div>
                  ))}
                </>
              )}  
              {showGraphic && (
                <>
                  {canva.map((e:any, index:number)=>(
                    <div className='flex flex-col justify-center items-center p-5 rounded-md bg-[#575d5d] bg-opacity-30 backdrop-filter shadow-md gap-5'>
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
                        <img src={e.img} className='w-full h-full hoverEffect z-10' style={{objectFit:"cover", backgroundPosition: 'center',}} />
                        <a href={e.link} target="_blank" rel="noopener noreferrer"><button 
                          className={
                            isHovered[index]
                              ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bg text-white w-[140px] h-[40px] rounded-md'
                              : 'hidden'
                            }>Go to Canva</button>
                          </a>
                      </div>

                      <p className='text-[23px]'>{e.name}</p>
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
  