import { heroImg1, heroImg2, heroImg3, icon1, icon2, icon3, featureImg, videoImg, faqImg, avatarIcon } from '../assets/images'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import About from '../components/about/About'
import ServiceList from '../components/services/ServiceList'
import DoctorsList from '../components/doctors/DoctorsList'
import FaqList from '../components/Faq/FaqList'
import Testtimonial from '../components/testimonials/Testtimonial'

const Home = () => {
  return (
    <>
    {/*============== hero section =====================*/}
      <section className='hero_section pt-[60px] 2xl:4-[8]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/*============== hero content =================*/}
            <div>
              <div className="lg:w-[570px]">
                <h1 className='text-[36px] leading-[46px] text-headingBg font-[800] md:text-[60px] md:leading-[70px]'>We help patients live a healthy, longer life
                </h1>
                <p className='text_para'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex natus dolore doloribus laborum temporibus maiores fugiat! Sequi ea nisi dolorem repudiandae animi tenetur. Magni vero harum molestias aut veniam quis.
                </p>

                <button className='btn'>Request an Appointment</button>
              </div>

              <div className='mt-[30px] lg:mt-[70px] flex flex-col  lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingBg'>30+
                  </h2>
                  <span className='w-[100px] h-2 bg-yellow rounded-full block mt-[-14px]'>
                  </span>
                  <p className='text_para'>Years of Experience</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingBg'>15+
                  </h2>
                  <span className='w-[100px] h-2 bg-purple rounded-full block mt-[-14px]'>
                  </span>
                  <p className='text_para'>Clinic Location</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingBg'>100%
                  </h2>
                  <span className='w-[100px] h-2 bg-iris rounded-full block mt-[-14px]'>
                  </span>
                  <p className='text_para'>Patient Satisfaction</p>
                </div>
              </div>
            </div>

             {/*============== hero content =================*/}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-full' src={heroImg1} alt='doctor-1'/>
              </div>
              <div className='mt-[30px]'>
                <img src={heroImg2} alt='hero image2' className='w-full mb-[30px]'/>
                <img src={heroImg3} alt='hero-img1' className='w-full'/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*============== hero section ends =====================*/}

      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Providing the best medical services</h2>
            <p className='text_para text-center'>World-class care for eeryone. Our health System offers unmatched expert health care.</p>
          </div>
        

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] '>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon1} alt='first icon'/>
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingBg font-[700] text-center'>Find a Doctor
                </h2>
                <p className='text-[16px] leading-7 text-textcol font-[400] mt-4 text-center max-w-[400px] m-auto'>World-class care for everyone, Our health System offers unmwatched expert health care. From the lab to the clinic 
                </p>

                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none hover:text-white'>
                  < BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                  <img src={icon2} alt='second icon'/>
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingBg font-[700] text-center'>Find a Location
                  </h2>
                  <p className='text-[16px] leading-7 text-textcol font-[400] mt-4 text-center max-w-[400px] m-auto'>World-class care for everyone, Our health System offers unmwatched expert health care. From the lab to the clinic 
                  </p>

                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none hover:text-white'>
                    < BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>
                </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                  <img src={icon3} alt='third icon'/>
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingBg font-[700] text-center'>Book Appointment
                  </h2>
                  <p className='text-[16px] leading-7 text-textcol font-[400] mt-4 text-center max-w-[400px] m-auto'>World-class care for everyone, Our health System offers unmwatched expert health care. From the lab to the clinic 
                  </p>

                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none hover:text-white'>
                    < BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/*============== medical section =====================*/}
        <section>
          <About/>
        </section>

      {/*============== Services section =====================*/}
        <section>
          <div className='container'>
            <div className='xl:w-[470px] mx-auto'>
              <h2 className='heading text-center'>Our medical services</h2>
              <p className='text_para text-center'>World-class care for everyone. Our health system offers unmatched expert health care. </p>
            </div>
            <ServiceList/>
          </div>
        </section>


      {/*============== Feature section =====================*/}
        <section>
          <div className='container'>
            <div className='flex items-center justify-between flex-col lg:flex-row'>
              {/*======== feature content ===========*/}
              <div className='xl:w-[670px]'>
                <h2 className='heading'>Get Virtual treatment <br/> anytime.</h2>
                <ul className='pl-4'>
                  <li className='text_para'>
                    1. Schedule the appointment directly.
                  </li>
                  <li className='text_para'>
                    2. Search for your physician here, and contact their office.
                  </li>
                  <li className='text_para'>
                    3 . View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.
                  </li>
                </ul>
                <Link to='/'>
                  <button className='btn'>Learn More</button>
                </Link>
              </div>
              {/*======== feature image ===========*/}
              <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
                <img src={featureImg} className='w-3/4' alt='feature image'/>

                <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-[6px] lg:gap-3'>
                      <p className='text-[10px] leading-[10px] lg:lext-[14px] lg:leading-5 text-headingBg font-[600]'>Tue, 03</p>
                      <p className='text-[10px] leading-[10px] lg:lext-[14px] lg:leading-5 text-headingBg font-[400]'>12:53PM</p>
                    </div>
                    <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                      <img src={videoImg} alt='video icon'/>
                    </span>
                  </div>

                  <div className='w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-iris font-[500] mt-2 lg:mt-4 rounded-full'>
                    consultation
                  </div>

                  <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                    <img src={avatarIcon} alt='avatar'/>
                    <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingBg'>Wayne Collins</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*============== our great doctors =====================*/}
        <section>
          <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
              <h2 className='heading text-center'>Our great doctors</h2>
              <p className='text_para text-center'>World-class care for everyone. Our health system offers unmatched expert health care. </p>
          </div>
            <DoctorsList/>
          </div>
        </section>

        {/*============== FaQs sections =====================*/}
        <section>
          <div className='container'>
            <div className='flex justify-between gap-[50px] lg:gap-0'>
              <div className='w-1/2 hidden md:block'>
                <img src={faqImg} alt='faq images'/>
              </div>
              <div className='w-full md:w-1/2'>
                <h2 className='heading'>Most questions by our beloved patients</h2>
                <FaqList/>
              </div>
            </div>
          </div>
        </section>

        {/*============== Testimonials =====================*/}
        <section>
           <div className='container'>
            <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>What our patient say</h2>
                <p className='text_para text-center'>World-class care for everyone. Our health system offers unmatched expert health care. </p>
            </div>
            <Testtimonial/>
           </div>
        </section>
    </>
  )
}

export default Home