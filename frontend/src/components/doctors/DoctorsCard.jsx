import { Link } from 'react-router-dom';
import { star } from '../../assets/images';
import { BsArrowRight } from 'react-icons/bs';
import PropTypes from 'prop-types';

const DoctorsCard = ({ doctors }) => {
  const { name, specialty, avgRating, totalRating, photo, totalPatients, hospital } = doctors;

  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} className="w-full" alt="doctor's picture" />
      </div>
      <h2 className="text-[18px] left-[30px] lg:text-[26px] lg:leading-9 text-headingBg font-[700] mt-3 lg:mt-5">
        {name}
      </h2>
      <div className="flex items-center justify-between mt-2 lg:mt-4">
        <span className='bg-[#ccf0f3] text-iris py-1 px-2 lg:py-2 lg:px-6 text-[12px] lg:text-[16px] leading-4 lg:leading-7 font-semibold rounded'>{specialty}</span>

        <div className='flex items-center gap-[6px]'>
          <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingBg'>
            <img src={star} alt="star" /> {avgRating}
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
          <BsArrowRight className='w-6 h-5 group-hover:text-white' />
        </Link>
      </div>
    </div>
  );
};

DoctorsCard.propTypes = {
  doctors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    totalRating: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    totalPatients: PropTypes.number.isRequired,
    hospital: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorsCard;
