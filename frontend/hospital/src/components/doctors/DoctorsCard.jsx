import { Link } from 'react-router-dom';
import starIcon from '../../assets/images/star.png';
import { BsArrowRight } from 'react-icons/bs';

const DoctorsCard = ({doctors}) => {
  const {name,specialty, avgRating, totalRating ,photo ,totalPatients ,hospital } = doctors
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} className="w-full" alt="doctors pictures"/>
      </div>
      <h2 className="text-[18px] left-[30px] lg:text-[26px] lg:leading-9 text-headingBg font-[700] mt-3 lg:mt-5">
        {name}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className='bg-[#ccf0f3] text-iris py-1 px-2 lg:py-2 lg:px-6 text-[12px] lg:text-[16px] leading-4 lg:leading-7 font-semibold rounded'>{specialty}</span>

        <div className='flex items-center gap-[6px] '>
          <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingBg'>
            <img src={starIcon}/> {avgRating}
          </span>
          <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-headingBg'>({totalRating})</span>
        </div>
      </div>

      <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
        <div>
          <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingBg'>+{totalPatients} patients</h3>
          <p className='text-[14px] leading-6 font-[400] text-headingBg'>At {hospital}</p>
        </div>
        
        <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primary hover:border-none hover:text-white'>
        < BsArrowRight className='group-hover:text-white w-6 h-5'/>
      </Link>
      </div>
    </div>
  )
}

export default DoctorsCard