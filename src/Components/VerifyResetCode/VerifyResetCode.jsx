import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup';

export default function VerifyResetCode() {
  const [Loding, setLoding] = useState(false)
  const [error, setErrors] = useState(null)


  const SignupSchema = Yup.object().shape({

    resetCode: Yup.string().min(6, 'min length 6').max(6, 'max length 6'),
  })

  let formik = useFormik({
    initialValues: {

      resetCode: '',

    },
    validationSchema: SignupSchema,
    onSubmit: handleSubmit
  })






  async function handleSubmit(values) {
    try {
      setLoding(true)
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, values)
      console.log(data);
      setLoding(false)
      navgiate('/resetpassword')
    } catch (error) {
      setErrors(error.response.data.message)
      setLoding(false)
      console.log(error.response.data.message);

    }
  }

  let navgiate = useNavigate()


  return <>
    <div className="w-full  h-screen  flex justify-center items-center ">
      <form onSubmit={formik.handleSubmit} className=" w-4/5 md:w-2/4 mx-auto mt-16">
        {error ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {error}
        </div> : ''}

        <div className="relative z-0 w-full mb-5 group">
          <input type="tel" name="resetCode" id="resetCode" values={formik.values.resetCode} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-d-600 peer" placeholder=" " />
          <label htmlFor="resetCode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-d-600 peer-focus:dark:text-d-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter the reset Code</label>
        </div>
        {formik.errors.resetCode && formik.touched.resetCode ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.resetCode}
        </div> : ''}


        {Loding ? <button type="button" className="text-white bg-emerald-500 hover:bg-emerald-800focus:ring-4 focus:outline-none focus:ring-d-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-d-600 dark:hover:bg-d-700 dark:focus:ring-d-800">
          <i class="fa-solid fa-spinner fa-spin  fa-beat-fade fa-xl"></i>
        </button> :
          <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800focus:ring-4 focus:outline-none focus:ring-d-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-d-600 dark:hover:bg-d-700 dark:focus:ring-d-800">Submit</button>
        }
      </form>

    </div>


  </>
}
