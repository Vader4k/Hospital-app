import React from 'react'
import { avatarIcon } from '../../assets/images'
import { formatDate } from '../../utils/formatDate'
import {AiFillStar} from 'react-icons/ai'

const Feedback = () => {
  return (
    <div className=''>
        <div className='mb-[50px]'>
            <h4 className='text-[20px] leading-[30px] font-bold text-headingBg mb-[30px]'>All reviews (272)
            </h4>

            <div className='flex justify-between gap-10 mb-[30px]'>
                <div className='flex gap-3'>
                    <figure className='w-1- h-10 rounded-full'><img src={avatarIcon} alt='icons of users'/>
                    </figure>

                    <div>
                        <h5 className='text-[16px] leading-6 text-primary font-bold'>Ali ahmed</h5>
                        <p className='text-[14px] leading-6 text-textcol'>
                            {formatDate("02-14-23")}
                        </p>
                        <p className='text_para mt-3 font-medium text-[15px] '>
                            Good services, highly recommended
                        </p>
                    </div>
                </div>

                <div className='flex gap-1'>
                    {/*created an array that returns the item 5 times */}
                    {[...Array(5).keys()].map((_, index)=> <AiFillStar key={index} color='#0067ff'/>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feedback 