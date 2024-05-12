import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import DoctorCard from '../../components/doctors/DoctorsCard'
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'

const Booking = () => {

  const {data:appointments, loading, error} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`,{

  })

  return (
    <div>
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error}/>}

        {!loading && !error && (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            {
              appointments.map(doctor=> <DoctorCard doctors={doctor} key={doctor._id} />)
            }
          </div>
        )}
        {!loading && !error && appointments.length === 0 && (
          <h2>
            you did not book any doctor yet!
          </h2>
        )}
    </div>
  )
}

export default Booking