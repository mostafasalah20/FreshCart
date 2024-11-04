import React, { useContext, useState } from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Loding from '../Lodind/Loding';
import { CartContext } from '../../Context/CartContext';



export default function ChiekOut() {

    let { chekOutSession } = useContext(CartContext);
    async function chekOut(values) {
        let response = await chekOutSession(values);
        // console.log(response);
        if(response.status=='success'){
            window.location.href=response.session.url;
        }

    }

    let formik = useFormik({
        initialValues: {
            details: "",
            phone: '',
            city: '',
        }, onSubmit: chekOut
    })

    return <>
        <h1 className="text-3xl my-6 text-center font-medium ">ChiekOut</h1>
        <div className=''>
            <form onSubmit={formik.handleSubmit} className=" w-4/5 md:w-2/4 mx-auto">







                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="details" id="details" values={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-d-500 focus:outline-none focus:ring-0 focus:border-d-600 peer" placeholder=" " />
                    <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-d-600 peer-focus:dark:text-d-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter the details</label>
                </div>



                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" name="phone" id="phone" values={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-d-500 focus:outline-none focus:ring-0 focus:border-d-600 peer" placeholder=" " />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-d-600 peer-focus:dark:text-d-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter the phone</label>
                </div>


                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="city" id="city" values={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-d-500 focus:outline-none focus:ring-0 focus:border-d-600 peer" placeholder=" " />
                    <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-d-600 peer-focus:dark:text-d-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter the city</label>
                </div>



                {/* {Loding ? <button type="button" className="text-white bg-emerald-500 hover:bg-emerald-800focus:ring-4 focus:outline-none focus:ring-d-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-d-600 dark:hover:bg-d-700 dark:focus:ring-d-800">
          <i class="fa-solid fa-spinner fa-spin  fa-beat-fade fa-xl"></i>
        </button> :
          <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800focus:ring-4 focus:outline-none focus:ring-d-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-d-600 dark:hover:bg-d-700 dark:focus:ring-d-800">Submit</button>
        } */}

                <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800focus:ring-4 focus:outline-none focus:ring-d-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-d-600 dark:hover:bg-d-700 dark:focus:ring-d-800">Submit</button>
            </form>
        </div >
    </>



}
