import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const ServiceCard = ({items, index}) => {

    const {name, desc, bgColor , textColor} = items

  return (
    <div className='py-[30px] px-3 lg:px-5'>
        <h2 className='text-[26px] leading-9 text-headingBg font-[700]'>{name}</h2>
        <p className='text-[16px] leading-7 font-[400] text-textcol mt-4'>{desc}</p>

        <div className='flex items-center justify-between mt-[30px]'>
            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  flex items-center justify-center group hover:bg-primary hover:border-none hover:text-white'>
                < BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
            <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-7 font-[600]' style={{background:`${bgColor}`, color:`${textColor}`, borderRadius: "6px 0px 0px 6px"}}>
                {index + 1}
            </span>
        </div>
    </div>
  )
}

export default ServiceCard