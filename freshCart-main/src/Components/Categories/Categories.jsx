import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
import UseGetCategori from '../../Hooks/UseGetCategori';
import Loding from '../Lodind/Loding';

export default function Categories() {

  let { data, isLoading } = UseGetCategori()


  // console.log(data?.data);
  
  return <>

{isLoading ? <div className="flex w-full h-screen justify-center items-center"><Loding /></div>  : <div className="flex flex-wrap  mt-32 md:mt-10 justify-center ">
      {data?.data.map((categorie) => <div key={categorie._id} className="brand w-[90%] my-4 md:w-[30%]    md:m-4 border border-solid border-gray-400 border-opacity-30">
        <img className='max-h-[300px] w-full'  src={categorie.image} alt={categorie.image} />
        <p className='text-center my-4 text-lg font-bold text-[#4fa74f]'>{categorie.name}</p>
      </div>)}
    </div>}

  </>
}
