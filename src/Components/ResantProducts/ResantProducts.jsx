import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import Wishlist from '../Wishlist/Wishlist';
import { WishlistContext } from '../../Context/WishlistContext';
import { replace } from 'formik';




export default function ResantProducts({ product }) {
    // console.log(props);
    let { addCartProduct, getProductsCart } = useContext(CartContext)
    let { addWishlist, getWishlist, wishList } = useContext(WishlistContext)




    useEffect(() => {
        getWishlist()


    }, [])


  

    return <>



        <div className="w-[100%] mx-auto md:w-1/6 my-6 relative product px-2 py-4">

            <i onClick={() =>addWishlist(product.id)}  className={` text-3xl fa - solid fa-heart ${wishList?.data.some((item) => item.id === product.id) ? ' WishList  text-red-500' : ' demo text-black'}`}></i>

            <Link to={`/ProductDetails/${product?.id}`}>
                <div className="">
                    <img className='w-full' src={product?.imageCover} alt={product?.title} />
                    <h2 className='text-[#0aad0a] f' >{product?.category.name}</h2>
                    <h2>{product?.title.split(' ').slice(0, 2).splice(' ')}</h2>
                    <div className="flex justify-between">
                        <h3>Price: {product?.price}EGP</h3>
                        <h3> <i className='fas fa-star rating-color' ></i> {product?.ratingsAverage}</h3>
                    </div>
                </div>
            </Link>
            <button onClick={() => addCartProduct(product?.id)} className='btn bg-[#0aad0a] w-full text-white rounded-md  '>Add to Cart</button>
        </div >
    </>
}






