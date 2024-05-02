import { Element } from 'react-scroll';


export const Home = () => {
  return (
    <Element name="Home" className=' w-full h-screen bg-bg flex justify-center items-center '>
      <div>
        <div className=' flex flex-col items-start text-white'>
          <p>Hello, I'm</p>
          <p className='text-t1 text-[30px] font-bold'>Mark Gil</p>
          <p>Web Developer</p>
        </div>
      </div>
    </Element>
  )
}
