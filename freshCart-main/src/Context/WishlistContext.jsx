import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";



export let WishlistContext = createContext()

export default function WishlistContextProvider(props) {
    let headers = {
        token: localStorage.getItem('token')
    }
    const [wishList, setWishList] = useState(null)


    // async function addWishlist(productId) {
    //     // console.log(status);

    //     try {
    //         const isInWishlist = wishList.data.includes(productId);
    //         if (isInWishlist) {
    //             let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
    //                 headers
    //             })
    //             // setWishList(data)
    //             setWishList(wishList.filter(id => id !== productId))

    //         } else {


    //             let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    //                 productId
    //             }, {
    //                 headers
    //             })
    //             toast.success(data.message)
    //             setWishList(data)
    //             // setWishList([...wishList, productId])
    //             console.log(data);

    //         }

    //     // try {


    //     //     let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    //     //         productId
    //     //     }, {
    //     //         headers
    //     //     })
    //     //     toast.success(data.message)
    //     //     setWishList(data)

    //     //     console.log(data);
    //     } catch (error) {
    //         console.log(error);

    //     }
    // }



    async function addWishlist(productId) {
        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
            productId
        }, {
            headers
        });
        try {
            if (wishList?.data.some((item) => item.id === productId)) {
                // console.log(item);
    
                RemoveWishlist(productId)
                toast.success('Successfully removed from wishlist')
                // console.log(item);
            } else if (wishList?.data.some((item) => item.id != productId)) {
    
                // setWishList(data)
                getWishlist()
                // console.log(data);
                
                toast.success(data.message)
            }
            
        } catch (error) {
            toast.success(error.data.message)
            console.log(error);
            
        }
       
    }



    async function getWishlist() {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                return;
            }
    
            let headers = {
                token: localStorage.getItem('token')
            }
    
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, { headers });
            setWishList(data);
            return data;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log('Unauthorized - Token might be expired.');
            } else {
                console.log(error);
            }
        }
    }
    




    useEffect(() => {
        getWishlist()
    }, [])




    async function RemoveWishlist(id) {
        try {
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
                headers
            })

            getWishlist();

        } catch (error) {
            console.log(error);

        }
    }


    useEffect(() => {
        getWishlist
    }, [])


    return (
        <WishlistContext.Provider value={{ getWishlist, addWishlist, wishList, setWishList, RemoveWishlist }}>
            {props.children}
        </WishlistContext.Provider>
    )
}

