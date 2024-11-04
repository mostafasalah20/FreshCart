import React, { useContext, useEffect, useState } from 'react'
import { WishlistContext } from '../../Context/WishlistContext'
import { CartContext } from '../../Context/CartContext'
import Loding from '../Lodind/Loding'


export default function Wishlist() {

    // const [wishListData, setWishListData] = useState(second)
    let { getWishlist, wishList, RemoveWishlist } = useContext(WishlistContext)
    let { addCartProduct } = useContext(CartContext)
    const [getResponse, setGetResponse] = useState([])


    useEffect(()=>{
        getWishlist()
    },[])

// console.log(wishList?.data);



    return <>
    {wishList ? <div className="relative   overflow-x-auto w-full md:w-3/4 mx-auto my-16 md:my-6">
            <div className='md:block hidden'>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishList?.data?.map((product)=> <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className='py-4'>
                                <img src={product.imageCover} className='w-16 md:w-32 max-w-full max-h-full' alt="" />
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {product.title.split(' ').slice(0, 2).join(' ')}
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={()=>addCartProduct(product.id)} className="font-medium text-green-600  dark:text-red-500 hover:underline">AddToCart</button>
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                               {product.price} EGP
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={()=>RemoveWishlist(product.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                            </td>
                        </tr>    )}
                        





                    </tbody>

                </table>

            </div>
            {wishList?.data.map((product) => <div key={product.id} className=" md:hidden  block w-[95%] mx-auto productRebops py-1 px-1 my-14 " >
                <img src={product.imageCover} alt={product.title} className="w-full" />
                <h2 className='text-center text-2xl my-5 font-bold'>{product?.title?.split(' ').slice(0, 2).splice(' ')}</h2>
                <h2 key={product.id} className='px-3 text-2xl my-5'>  price: {product.price}  EGP</h2>
                <div className='flex justify-around w-full'>
                    <button onClick={() => addCartProduct(product.id)} className="font-medium p-3 m-3 rounded-lg bg-green-600 text-white  dark:text-red-500 hover:underline">Add ToCart</button>
                    <button onClick={() => RemoveWishlist(product.id)} className="font-medium  p-3 m-3 rounded-lg  bg-red-600 text-white dark:text-red-500 hover:underline">Remove</button>
                </div>

            </div>)}








        </div> : <div className="flex justify-center items-center h-screen"> <Loding />  </div>}

        



    </>
}
