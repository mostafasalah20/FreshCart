import React, { useState } from 'react'
import style from './Brands.module.css'
import UseAllBrands from '../../Hooks/UseAllBrands'
import Loding from '../Lodind/Loding'

export default function Brands() {

  const { data, isLoading } = UseAllBrands()

  // console.log(data);
  function getsrcimg(srcImg, names) {
    // console.log(srcImg);
    document.getElementById('image').src = srcImg;
    document.getElementById('demo').innerHTML = names
    document.getElementById('box').classList.remove('hidden')
  }

  const closebox = () => {
    document.getElementById('box').classList.add('hidden')
  }

  return <>
    {isLoading ? <div className="flex w-full h-screen  justify-center items-center"><Loding /></div> : <div className="flex flex-wrap mt-32 md:mt-10 justify-center ">
      {data?.data.map((brand) => <div key={brand._id} onClick={() => getsrcimg(brand.image, brand.name)} className="brand w-[95%] my-4 md:w-[20%] md:m-4 border border-solid border-gray-400 border-opacity-30">
        <img src={brand.image} alt={brand.image} />
        <p className='text-center my-4'>{brand.name}</p>
      </div>)}
    </div>}






    <div onClick={closebox} id='box' className='bg-blue-300 bg-opacity-35  h-full fixed top-[0] left-[0] z-20  w-full hidden'>

      <div className="container mx-auto  h-full ">
        <div className=" flex justify-center items-center h-full">
          <div id='contImage' onClick={stop} className="contImage  w-[500px]">
            <img id='image' src={''} className='w-full  rounded-md' alt="" />
            <p id='demo' className='text-center absolute md:bottom-[35%] text-2xl bottom-[35%] lg:bottom-[25%] left-[47%] z-50 '></p>

          </div>
        </div>
      </div>

    </div>



  </>

}
