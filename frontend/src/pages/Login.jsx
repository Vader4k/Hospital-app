import { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import {BASE_URL} from '../config'
import {toast} from 'react-toastify'
import { useAuthContext } from "../context/AuthContext.jsx"
import HashLoader from 'react-spinners/HashLoader'

const Login = () => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const [formData, setFormData] = useState({
    email : '',
    password : '',

  })

  const handleInputChange = e =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const submitHandler = async (e) =>{
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await res.json()
      if(!res.ok){
        throw new Error(result.message)
      }

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload:{
          user: result.data,
          token: result.token,
          role: result.role
        }
      });

      console.log(result, "login data")

      setLoading(false)
      toast.success(result.message) 
      navigate('/home')

    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingBg text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primary">Welcome</span> Back 🎊</h3>

          <form className="py-4 md:py-0" onSubmit={submitHandler}>
            <div className="mb-5">
              <input 
                type="email"
                placeholder="Enter Your Email"
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-headingBg placeholder:text-textcol cursor-pointer"
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
                className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-headingBg placeholder:text-textcol cursor-pointer"
                required
              />
            </div>

            <div className="mt-7">
              <button 
              type="submit" 
              className="w-full bg-primary text-white text-[18px] leading-[30px] rounded-lg py-3 px-4">{
                loading ? (
                  <HashLoader size={35} color='#ffffff'/>
                  ) : (
                    "Login"
                  )}
              </button>
            </div>

            <p 
              className="mt-5 text-textcol">Don{"'"}t have an account? 
              <Link to='/register' className="ml-2 font-medium text-primary">Register</Link> 
            </p>
          </form>
      </div>
    </section>
  )
}

export default Login