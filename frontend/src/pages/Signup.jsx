import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {signup} from '../assets/images'
import uploadImageToCloudinary from '../utils/uploadCloudinary'
import {BASE_URL} from '../config'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'

const Signup = () => {

  const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewURL, setPreviewURL] = useState("")
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name : '',
    email : '',
    password : '',
    role : 'patient',
    gender : '',
    photo : selectedFile,

  })

  const handleInputChange = e =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFileInputChange = async(e) =>{
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file)
    setPreviewURL(data.url)
    setSelectedFile(data.url)
    setFormData({...formData, photo: data.url})
  }

  const submitHandler = async (e) =>{
    e.preventDefault();
    setLoading(true)

    try {
      setLoading(true)
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const {message} = await res.json()
      if(!res.ok){
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message) 
      navigate('/login')

    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/*   img box     */}
          <div className='hidden rounded-l-lg lg:block bg-primary'>
            <figure className='rounded-l-lg'>
              <img src={signup}
              alt='signup image'
              className='w-full rounded-l-lg'/>
            </figure>
          </div>

          {/*======= sign up form =======*/}
          <div className='py-10 rounded-l-lg lg:pl-16'>
            <h3 className='text-text-headingBg text-[22px] leading-9 font-bold mb-10'>Create an <span className='text-primary'>account</span></h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input 
                  type="text"
                  placeholder="Enter Your Name"
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-headingBg placeholder:text-textcol cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input 
                  type="email"
                  placeholder="Enter Your Email"
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-headingBg placeholder:text-textcol cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input 
                  type="password"
                  placeholder="Password"
                  name="password" 
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-headingBg placeholder:text-textcol cursor-pointer"
                  required
                />
              </div>

              <div className='flex items-center justify-between mb-5'>
                <label 
                  className='text-headingBg font-bold text-[16px] leading-7'>Are you a :
                    <select 
                      name='role' 
                      value={formData.role}
                      onChange={handleInputChange}
                      className='text-textcol font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                    </select>
                  </label>

                  <label 
                  className='text-headingBg font-bold text-[16px] leading-7'>Gender :
                    <select 
                      name='gender' 
                      value={formData.gender}
                      onChange={handleInputChange}
                      className='text-textcol font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                        <option>Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="disturbed">Other</option>
                    </select>
                  </label>
              </div>

              <div className='flex items-center gap-3 mb-5'>
                { selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primary flex items-center justify-center overflow-hidden'>
                  <img className='w-full rounded-full' src={previewURL}/>
                </figure>}

                <div className='relative w-[130px] h-[50px]'>
                  <input
                    type='file' 
                    name='photo' 
                    id='customFile' 
                    accept='.jpg, .png'
                    onChange={handleFileInputChange}
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>

                  <label 
                    htmlFor='customFile' 
                    className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingBg font-semibold rounded-lg truncate cursor-pointer'>
                      upload a photo
                  </label>
                </div>
              </div>

            <div className="mt-7">
                <button 
                  type="submit"
                  disabled={loading} 
                  className="w-full bg-primary text-white text-[18px] leading-[30px] rounded-lg py-3 px-4"
                  onClick={handleInputChange}>
                    { loading ? (
                      <HashLoader size={35} color='#ffffff'/>
                      ) : (
                        "Sign Up"
                      )}
                </button>
            </div>

            <p 
              className="mt-5 text-textcol">Already have an account? 
              <Link to='/login' className="ml-2 font-medium text-primary">Login</Link> 
            </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup