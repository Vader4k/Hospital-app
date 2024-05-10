import  {useRef} from 'react'
import {logo, avatarIcon} from '../../assets/images'
import {NavLink, Link} from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'

const navLinks = [
  {
    path: '/home',
    name: 'Home',
  },
  {
    path: '/doctors',
    name: 'Find a Doctor',
  },{
    path: '/services',
    name: 'Services',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
]

const Header = () => {
  const menuRef = useRef(null)

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

  return (
   <header className='header flex items-center sticky top-0 left-0 z-[100] bg-white'>
    <div className='container'>
      <div className='flex items-center justify-between'>
        {/*=========== logo ==========*/}
        <div>
          <img src={logo} alt='logo'/>
        </div>

        {/*========== menu =========*/}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem] '>
              {
                navLinks.map((link,index)=> 
                <li key={index}>
                  <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primary text-[16px] leading-7 font-[600]' : "text-textcol text-[16px] leading-7 font-[500] hover:text-primary"}>
                    {link.name}
                  </NavLink>
                </li>)
              }
            </ul>
          </div>


        {/*=========== nav right =============*/}
        <div className='flex items-center  gap-4'>
              <div className='hidden'>
                <Link to='/'>
                  <figure className='w-[35px] h-[35px] rounded-full object-cover cursor-pointer'>
                    <img src={avatarIcon} className='w-full rounded-full' alt='user image'/>
                  </figure>
                </Link>
              </div>

              <Link to='/login'>
                <button className='bg-primary py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
              </Link>

              <span className='sm:hidden' onClick={toggleMenu}>
                <BiMenu className='w-6 h-6 cursor-pointer'/>
              </span>
          </div>
      </div>
    </div>
   </header>
  )
}

export default Header