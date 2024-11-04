import React, { useState } from 'react'
import style from './Footer.module.css'
import logo from '../../assets/images/freshcart-logo.svg'

export default function Footer() {




  return <>

    <div className="w-full bg-[#d5e3f5da] mt-10  bg-opacity-35 ">
      <div className="container  md:p-3 text-center md:text-start">
        <div className='w-full flex md:justify-start justify-center pt-4'>
          <img className='ms-4' src={logo} width={120} alt="" />
        </div>
        <div>
          <h1 className='mt-4 text-2xl font-bold'>get the freshCart app</h1>
          <p className='text-[#808080ea] my-2'>we will send you a like,open it on your phone to download the app .</p>
        </div>

        <div className='my-8  '>
          <input type="text" className='p-1 rounded-lg md:w-[70%] w-[70%] mb-2  md:mx-3'placeholder='  Email...' />
          <button className="bg-[#0ae60abe] md:ms-4  text-white p-1.5 rounded-lg">share app Link</button>
        </div>

      </div>
    </div>

  </>
}
