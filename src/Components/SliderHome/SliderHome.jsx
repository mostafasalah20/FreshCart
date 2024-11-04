import img1 from '../../assets/grocery-banner.png'
import img2 from '../../assets/slider-image-2.jpeg'
import img3 from '../../assets/slider-image-3.jpeg'

import Slider from "react-slick";
import React from 'react'

export default function SliderHome() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    };
    return <>
        <div>
            <div className="w-full bg-black">
                <div className="md:flex">
                    <div className="w-full md:w-3/4 ">
                        <div className="image w-full ">
                            <Slider {...settings}>
                                <img src={img2} className='w-full h-[304px]' alt="nature" />
                                <img src={img1} className='w-full h-[304px]' alt="nature" />
                                <img src={img3} className='w-full h-[304px]' alt="nature" />
                            </Slider>
                        </div>
                    </div>

                    <div className="w-full hidden   md:w-1/4 md:flex  md:flex-col  h-[303px]">
                        <div className=" w-full h-[25vh]">
                            <img className='w-full  h-full' src={img1} alt="nature" />
                        </div>
                        <div className="w-full h-[25vh]">
                            <img className='w-full h-full' src={img2} alt="nature" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}
