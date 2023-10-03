import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'
import patientAvater from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

const Testtimonial = () => {
   
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvater} alt='patient avatar' />
              <div className='text-[18px] leading-[30px] font-semibold text-headingBg'>
                <h4>Muhibur Rahman</h4>
                <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-headingBg font-[400]'>"i have taken medical services from them. They treat me so well and they are providing the best medical services.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvater} alt='patient avatar' />
              <div className='text-[18px] leading-[30px] font-semibold text-headingBg'>
                <h4>Muhibur Rahman</h4>
                <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-headingBg font-[400]'>"i have taken medical services from them. They treat me so well and they are providing the best medical services.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvater} alt='patient avatar' />
              <div className='text-[18px] leading-[30px] font-semibold text-headingBg'>
                <h4>Muhibur Rahman</h4>
                <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-headingBg font-[400]'>"i have taken medical services from them. They treat me so well and they are providing the best medical services.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvater} alt='patient avatar' />
              <div className='text-[18px] leading-[30px] font-semibold text-headingBg'>
                <h4>Muhibur Rahman</h4>
                <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                    <HiStar className='text-yellow w-[18px] h-5'/>
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-headingBg font-[400]'>"i have taken medical services from them. They treat me so well and they are providing the best medical services.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testtimonial