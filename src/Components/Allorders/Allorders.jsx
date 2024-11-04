import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loding from '../Lodind/Loding';

export default function Allorders() {
    const [allOrderCart, setAllOrderCart] = useState([])
    async function getAllorders() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/`);
        console.log(data?.data);
        setAllOrderCart(data?.data)
    }
    useEffect(() => {
        getAllorders();
    }, [])
    return <>
        {allOrderCart ? <div className="relative   overflow-x-auto w-full md:w-3/4 mx-auto my-16 md:my-6">
            <div className='md:block hidden'>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                shippingPrice
                            </th>
                            <th scope="col" className="px-6 py-3">
                                details
                            </th>
                            <th scope="col" className="px-6 py-3">
                                totalOrderPrice
                            </th>
                            <th scope="col" className="px-6 py-3">
                                paymentMethodType
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrderCart?.map((product) => <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {product?.createdAt}
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {product?.shippingPrice}
                            </td>
                            <td className="px-6 py-4">
                                {product?.shippingAddress?.details}
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {product.totalOrderPrice} EGP
                            </td>
                            <td className="px-6 py-4">
                                {product.paymentMethodType}
                            </td>
                        </tr>)}






                    </tbody>

                </table>

            </div>
            {allOrderCart?.map((product) => <div key={product.id} className=" md:hidden  block w-[95%] mx-auto productRebops py-1 px-1 my-14 " >
                {product?.createdAt}

                <h2 className='text-center text-2xl my-5 font-bold'>price: {product?.totalOrderPrice} EGP</h2>
                <h2 key={product.id} className='px-3 text-2xl my-5'>  {product?.shippingPrice} </h2>
                <div className='flex justify-around w-full'>

                    <div className="font-medium p-3 m-3 rounded-lg bg-green-600 text-white  dark:text-red-500 hover:underline"> {product.shippingAddress?.details} </div>
                    <div className="font-medium  p-3 m-3 rounded-lg  bg-red-600 text-white dark:text-red-500 hover:underline"> {product.paymentMethodType}</div>
                </div>

            </div>)}








        </div> : <div className="flex justify-center items-center h-screen"> <Loding />  </div>}

    </>


}
