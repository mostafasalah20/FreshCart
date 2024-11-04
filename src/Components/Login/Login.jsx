import React, { useContext, useState } from 'react'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import style from './Login.module.css'
import { UserContext } from '../../Context/UserContext';

export default function Login() {

  let {setUser}=useContext(UserContext)
  let navgiate = useNavigate()
  const [error, setErrors] = useState(null)
  const [Loding, setLoding] = useState(false)

  const SignupSchema = Yup.object().shape({
   
    email: Yup.string().email('Invalid email').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'email invalid').required('Email is required'),
    password: Yup.string().required('password is required '),
   
    // .matches(/^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-7])(?=.*[\W])/, 'password  invalid')
  })


  async function handleSubmit(values) {
    try {
      setLoding(true)
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      localStorage.setItem('token', data.token)
      setUser(data.token)
      setLoding(false)
      navgiate('/')
      console.log(data);
    } catch (error) {
      setErrors(error.response.data.message)
      console.log(error.response.data.message);
      setLoding(false)

    }



  }



  let formik = useFormik({
    initialValues: {
      
      email: '',
      password: '',
     
    },
    validationSchema: SignupSchema,
    onSubmit: handleSubmit
  })

  return <>
    <h1 className="text-3xl my-6 mt-24 text-center font-medium ">sign in</h1>
    <div className=''>
      <form onSubmit={formik.handleSubmit} className=" w-4/5 md:w-2/4 mx-auto">
        {error ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
          {error}
        </div> : ''}


      



        <div className="relative z-0 w-full mb-5 group">
          <input type="email" name="email" id="email" values={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-d-500 focus:outline-none focus:ring-0 focus:border-d-600 peer" placeholder=" " />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-d-600 peer-focus:dark:text-d-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter the email</label>
        </div>
        {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.email}
        </div> : ''}


        <div className="relative z-0 w-full mb-5 group">
          <input type="password" name="password" id="password" values={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-d-500 focus:outline-none focus:ring-0 focus:border-d-600 peer" placeholder=" " />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-d-600 peer-focus:dark:text-d-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter the password</label>
        </div>
        {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.password}
        </div> : ''}


          <div className='my-4'>
            <Link to={'/forgotpassword'}><span className='underline font-light text-slate-700' >Forgot your password?</span></Link>
          </div>

        {Loding ? <button type="button" className="text-white bg-emerald-500 hover:bg-emerald-800focus:ring-4 focus:outline-none focus:ring-d-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-d-600 dark:hover:bg-d-700 dark:focus:ring-d-800">
          <i class="fa-solid fa-spinner fa-spin  fa-beat-fade fa-xl"></i>
        </button> :
          <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800focus:ring-4 focus:outline-none focus:ring-d-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-d-600 dark:hover:bg-d-700 dark:focus:ring-d-800">Submit</button>
        }


      </form>
    </div >
  </>



}
