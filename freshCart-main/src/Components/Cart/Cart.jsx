import React, { useContext, useEffect, useState } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext'
import Loding from '../Lodind/Loding'
import { Link } from 'react-router-dom'

export default function Cart() {
  const [cartItem, setCartItem] = useState(null)

  let { RemoveProductsCart, UpdateProductsCart, getProductsCart, Cart } = useContext(CartContext)
  async function getCartData() {
    let response = await getProductsCart()
    console.log(response.data);
    setCartItem(response.data)
  }

  async function UpdateCartItem(id, count) {
    if (count == 0) {
      RemoveCartItem(id)
    } else {
      let response = await UpdateProductsCart(id, count)
      // console.log(response.data);
      setCartItem(response.data)
    }
  }
  async function RemoveCartItem(id) {
    let response = await RemoveProductsCart(id)
    // console.log(response.data);
    setCartItem(response.data)
  }

  useEffect(() => {
    getCartData()
  }, [])

  return <>

    {cartItem ? <div className="relative  overflow-x-auto w-full md:w-3/4 mx-auto my-10 md:my-5">
      <div className='hidden md:block my-10'>
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

            {cartItem?.products?.map((product) => <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
                <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {product.product.title}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <button onClick={() => UpdateCartItem(product.product.id, product.count - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only">Quantity button</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                    </svg>
                  </button>
                  <div>
                    <span>{product.count}</span>
                  </div>

                  <button onClick={() => UpdateCartItem(product.product.id, product.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only">Quantity button</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {product.price}EGP
              </td>
              <td className="px-6 py-4">
                <button onClick={() => RemoveCartItem(product.product.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
              </td>
            </tr>)}




          </tbody>
        </table>


      </div>

      {cartItem.products.map((product) => <div className=' md:hidden  block w-[95%] mx-auto productRebops py-1 px-1 my-14 ' key={product.product.id}>
        <img src={product.product.imageCover} className="w-[80%] md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        <h2 className='text-lg text-center'> {product.product.title}</h2>
        <div className="flex items-center justify-center text-lg my-5">
          <button onClick={() => UpdateCartItem(product.product.id, product.count - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
            </svg>
          </button>
          <div>
            <span className='text-lg'>{product.count}</span>
          </div>

          <button onClick={() => UpdateCartItem(product.product.id, product.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-4 font-semibold text-gray-900 flex justify-between items-center dark:text-white">
          <p>{product.price}EGP</p>
          <button onClick={() => RemoveCartItem(product.product.id)} className="rounded-2xl w-[40%]   py-2 bg-red-900    font-medium text-white  dark:text-red-500 hover:underline">Remove</button>
        </div>
        <div className='mx-auto  w-[95%]  '>
       
        </div>
        
      </div>)}

      <div className="flex justify-between text-[15px]   bg-gray-400 px-8 py-2">
        <span>total cart price</span>
        <span>{cartItem?.totalCartPrice} EGP</span>
      </div>
      

      <div className='w-[95%] md:w-[20%] mx-auto md:mx-0'>
      <button className='my-3 w-full  p-2 bg-emerald-600 text-white rounded'> <Link className='text-white' to={'/chiekOut'}>check out</Link></button>
      </div>
     

    </div> : <div className="flex justify-center items-center h-screen"> <Loding />  </div>}
  </>
}
