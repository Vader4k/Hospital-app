import React from 'react'
import {Link} from 'react-router-dom'
import {logo} from '../../assets/images/'
import {AiFillLinkedin, AiFillGithub, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'

const socialLinks =[
  {
    path: 'https://linkedin.com/',
    icon: <AiFillLinkedin className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: 'https://github.com/',
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: 'https://instagram.com/',
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: 'https://twitter.com/',
    icon: <AiOutlineTwitter className='group-hover:text-white w-4 h-5'/>
  },
]

const quickLinks01 = [
  {
    path: '/home/',
    display: "home",
  },
  {
    path: '/',
    display: 'About US',

  },
  {
    path: '/services',
    display: 'Services',

  },
  {
    path: '/',
    display: 'Blog',

  },
]


const quickLinks02 = [
  {
    path: '/find-a-doctor',
    display : "Find a Doctor",
  },
  {
    path: '/',
    display : "Request An Appointment",
  },
  {
    path: '/',
    display : "Find a Location",
  },
  {
    path: '/',
    display : "Get an Opinion",
  },
]

const quickLinks03 = [
  {
    path: '/',
    display : "Donate",
  },
  {
    path: '/',
    display : "Contact Us",
  },
]
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt='logo'/>
            <p className='text-[16px] leading-7 font-[400] text-textcol'>copyrigth @ {year} developed by daniel , all rights reserved
            </p>

            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index)=><Link className='w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primary hover:border-none' to={link.path} key={index}>{link.icon}</Link>)}
            </div>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingBg'> Quick Links</h2>

            <ul>
              {quickLinks01.map((item, index)=><li key={index}><Link className='text-[16px] leading-7 font-[40] text-textcol' to={item.path}>{item.display} </Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingBg'> I want to:</h2>

            <ul>
              {quickLinks02.map((item, index)=><li key={index}><Link className='text-[16px] leading-7 font-[40] text-textcol' to={item.path}>{item.display} </Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingBg'> Support</h2>

            <ul>
              {quickLinks03.map((item, index)=><li key={index}><Link className='text-[16px] leading-7 font-[40] text-textcol' to={item.path}>{item.display} </Link></li>)}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer