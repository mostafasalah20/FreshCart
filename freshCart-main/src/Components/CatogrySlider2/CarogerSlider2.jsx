import Slider from "react-slick";
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CategorySlider() {
    const [getCategory, setGetCategory] = useState([])


    async function getCategorySliders() {
        try {

            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
            // console.log(data.data);
            setGetCategory(data.data)


        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        getCategorySliders()

    }, [])

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        rtl:true
    };

    return <>
        <Slider {...settings}>
            {getCategory.map((item, index) => (
                <div key={index}>
                    <img src={item.image} className='w-full m-0 p-0 h-[200px]' alt="nature" />
                    <h2>{item.slug}</h2>
                </div>
            ))}
        </Slider>


    </>
}
