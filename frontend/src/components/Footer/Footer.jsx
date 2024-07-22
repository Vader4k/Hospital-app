import React from 'react'
import {Link} from 'react-router-dom'
import {logo} from '../../assets/images/'
import {AiFillLinkedin, AiFillGithub, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'

const socialLinks =[
  {
    id:1,
    path: 'https://linkedin.com/',
    icon: <AiFillLinkedin className='w-4 h-5 group-hover:text-white'/>
  },
  {
    id:2,
    path: 'https://github.com/',
    icon: <AiFillGithub className='w-4 h-5 group-hover:text-white'/>
  },
  {
    id:3,
    path: 'https://instagram.com/',
    icon: <AiOutlineInstagram className='w-4 h-5 group-hover:text-white'/>
  },
  {
    id:4,
    path: 'https://twitter.com/',
    icon: <AiOutlineTwitter className='w-4 h-5 group-hover:text-white'/>
  },
]

const quickLinks01 = [
  {
    id:1,
    path: '/home/',
    display: "home",
  },
  {
    id:2,
    path: '/',
    display: 'About US',

  },
  {
    id:3,
    path: '/services',
    display: 'Services',

  },
  {
    id:4,
    path: '/',
    display: 'Blog',

  },
]


const quickLinks02 = [
  {
    id:1,
    path: '/find-a-doctor',
    display : "Find a Doctor",
  },
  {
    id:2,
    path: '/',
    display : "Request An Appointment",
  },
  {
    id:3,
    path: '/',
    display : "Find a Location",
  },
  {
    id:4,
    path: '/',
    display : "Get an Opinion",
  },
]

const quickLinks03 = [
  {
    id:1,
    path: '/',
    display : "Donate",
  },
  {
    id:2,
    path: '/',
    display : "Contact Us",
  },
]
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='pt-10 pb-16'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt='logo'/>
            <p className='text-[16px] leading-7 font-[400] text-textcol'>copyrigth @ {year} developed by daniel , all rights reserved
            </p>

            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link)=><Link className='w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primary hover:border-none' to={link.path} key={link.id}>{link.icon}</Link>)}
            </div>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingBg'> Quick Links</h2>

            <ul>
              {quickLinks01.map((item)=><li key={item.id}><Link className='text-[16px] leading-7 font-[40] text-textcol' to={item.path}>{item.display} </Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingBg'> I want to:</h2>

            <ul>
              {quickLinks02.map((item)=><li key={item.id}><Link className='text-[16px] leading-7 font-[40] text-textcol' to={item.path}>{item.display} </Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingBg'> Support</h2>

            <ul>
              {quickLinks03.map((item)=><li key={item.id}><Link className='text-[16px] leading-7 font-[40] text-textcol' to={item.path}>{item.display} </Link></li>)}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer