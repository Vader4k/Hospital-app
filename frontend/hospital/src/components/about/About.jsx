import React from 'react'
import {about, aboutcard} from '../../assets/images'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='container'>
      <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-[0] flex-col lg:flex-row'>
          {/*========= about image ========*/}
          <div className='relative w-3/4 lg:w-1/2 xl:w-[720px] z-10 order-2 lg:order-1'>
            <img src={about} alt='about image'/>
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30px] md:right-[-7%] lg:right-[22%]'>
              <img src={aboutcard}/>
            </div>
          </div>

          {/*========= about content ========*/}
          <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
            <h2 className='heading'>Proud to be one of the nations best</h2>
            <p className='text_para'>
              for 30 years in a row, U.s, News & world Report has recognized us as one of the best public hospitals in the Nation and #1 in Texas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam natus quibusdam ducimus officia similique accusamus .
            </p>
            <p className='text_para mt-[20px]'>
              Our best is something we strive for each day, caring for our patients-not looking back at what we accomplised but towards what we can do tomorrow. Providing the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusantium nostrum .
            </p>

            <Link to='/'>
              <button className='btn'>Learn More</button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default About