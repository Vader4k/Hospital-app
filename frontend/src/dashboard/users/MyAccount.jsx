import { useAuthContext } from '../../context/AuthContext'
import { useState } from 'react'
import Booking from './Booking'
import Settings from './Settings'
import useGetProfile from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'

const MyAccount = () => {

  const {dispatch} = useAuthContext()
  const [tab, setTab] = useState('bookings')
  const {data:userData, loading, error} = useGetProfile(`${BASE_URL}/users/profile/me`)

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    })
  }

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error}/>}
        {
          !loading && !error &&
          (<div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">

                <figure className="w-[100px] h-[100px] rounded-full overflow-hidde border-2 border-primary">
                  <div className="w-full h-full bg-gray-300 rounded-full"/>
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingBg font-bold">Dannie</h3>
                <p className="text-textcol text-[15px] leading-6 font-medium">example@gmail.com</p>
                <p className="text-textcol text-[15px] leading-6 font-medium">Blood Type: <span className="ml-2 text-headingBg text-[22px] leading-8">O-</span>
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px]">
                <button className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white" onClick={handleLogout}>Logout</button>
                <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">Delete Account</button>
              </div>
            </div>

            <div className='md:col-span-2 md:px-[30px]'> 
              <div>
                <button 
                  onClick={()=> setTab('bookings')} 
                  className={` ${tab === 'bookings' && 'bg-primary text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingBg font-semibold text-[16px] leading-7 border border-solid border-primary transition-all`}
                >
                    My Bookings
                </button>

                <button 
                  onClick={()=> setTab('settings')} 
                  className={`${tab === 'settings' && 'bg-primary text-white font-normal'} py-2 px-5 rounded-md text-headingBg font-semibold text-[16px] leading-7 border border-solid border-primary transition-all`}
                >
                    Profile settings
                </button>
              </div>

              {
                tab === 'settings' && <Settings />
              }
              {
                tab == 'bookings' && <Booking />
              }
            </div>
          </div>)
        }
      </div>
    </section>
  )
}

export default MyAccount