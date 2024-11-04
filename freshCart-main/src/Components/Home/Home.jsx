import React, { useContext, useEffect, useState } from 'react'
import style from './Home.module.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ResantProducts from '../ResantProducts/ResantProducts'
import UseProducts from '../../Hooks/UseProducts'
import Loding from '../Lodind/Loding'
import SliderHome from '../SliderHome/SliderHome'
import CategorySlider from '../CatogrySlider/CatogrySlider.jsx'
import CategorySlider2 from '../CatogrySlider2/CarogerSlider2.jsx'
import { WishlistContext } from '../../Context/WishlistContext.jsx'
import { CartContext } from '../../Context/CartContext.jsx'





export default function Home() {

  const { getProductsCart } = useContext(CartContext)

  useEffect(() => {
    getProductsCart()

    return () => {

    }
  }, [])



  const { data, isLoading } = UseProducts()
  // console.log(data?.data.data);


  return <>

    <SliderHome />
    <CategorySlider />
    <CategorySlider2 />
    <section>
      {!isLoading ? <div className="container m-auto ">
        <div className="flex flex-wrap">
          {data?.data.data.map((product, index) => <ResantProducts key={index} product={product}></ResantProducts>)}
        </div>
      </div> :
        <div className="flex justify-center items-center w-full h-screen">
          <Loding />
        </div>
      }
    </section>

  </>
}
