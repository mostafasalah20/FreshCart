import React, { useContext, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Slider from "react-slick"
import { CartContext } from '../../Context/CartContext';

// let {addCartProduct}= useContext(CartContext)
export default function ProductDetails() {
  let {addCartProduct}= useContext(CartContext)
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
  };
  const{ id }= useParams()
  const [productDetails, setProductDetails] = useState(null)
  // console.log(id);

  async function getProductsDetails(id) {
    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      console.log(data.data);
      setProductDetails(data.data)
    } catch (error) {
      console.log(error);

    }

  }
  useEffect(()=>{
    getProductsDetails(id)
  },[])

  return <>

 <section>
      <div className="container">
        <div className="flex flex-wrap justify-between items-center ">
          <div className="w-4/5 mx-auto  md:w-1/4 my-6  ">
            
          <Slider {...settings}>
              {productDetails?.images?.map((image,index)=> <img key={index} className='w-full'  src={image} alt="" /> )}
            </Slider> 


           </div>


          <div className="w-[90%] mx-auto  md:w-[70%]">
            <div>
              <h2>{productDetails?.title}</h2>
              <p className='my-6 text-gray-500'>{productDetails?.description}</p>
            <h2>{productDetails?.category?.slug}</h2>
            </div>

            <div className='flex justify-between items-center my-2'>
              <h2 className=' text-base'>{productDetails?.price} EGP</h2>
              <div className="  icon flex justify-between items-center text-base">
                <i className=" fa-solid fa-star text-yellow-400 "></i>
                <span className='ps-1 '>{productDetails?.ratingsAverage}</span>
              </div>

            </div>
            <button onClick={()=>addCartProduct(productDetails?.id)}  className='w-full h-8 bg-emerald-600 text-white rounded'>Add To Cart</button>
          </div>
        </div>
      </div>
    </section> 


  </>
}
