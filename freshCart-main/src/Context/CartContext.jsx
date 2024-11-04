import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";



export let CartContext = createContext()

export default function CartContextProvider(props) {
    const [cart, setCart] = useState(null)

    let headers = {
        token: localStorage.getItem('token')
    }
    async function addCartProduct(productId) {
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
                productId
            }, {
                headers
            })
            console.log(data);
            setCart(data)
            toast.success(data.message)

        } catch (error) {
            console.log(error);

        }
    }





    async function chekOutSession(shippingAddress) {
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`, {
                shippingAddress
            }, {
                headers
            })
            // console.log(data);
            return data

        } catch (error) {
            console.log(error);

        }
    }


    async function  getProductsCart() {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                return;
            }
    
            let headers = {
                token: localStorage.getItem('token')
            }
    
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers });
            setCart(data)
            // console.log(data);
            
            return data;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log('Unauthorized - Token might be expired.');
            } else {
                console.log(error);
            }
        }
    }








    // async function getProductsCart() {
    //     try {
    //         let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
    //             headers
    //         })
    //         // console.log(data);
    //         setCart(data)
    //         return data
    //     } catch (error) {
    //         console.log(error);

    //     }
    // }



    async function UpdateProductsCart(id, count) {
        try {
            let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
                count: count
            }, {
                headers
            })
            // console.log(data.data);
            setCart(data)
            return data
        } catch (error) {
            console.log(error);

        }
    }

    async function RemoveProductsCart(id) {
        try {
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
                headers
            })
            // console.log(data.data);
            setCart(data)
            return data
        } catch (error) {
            console.log(error);

        }
    }


    useEffect(() => {
        getProductsCart()
    }, [])


    return (
        <CartContext.Provider value={{ chekOutSession,RemoveProductsCart,UpdateProductsCart, getProductsCart, addCartProduct, cart, setCart }}>
            {props.children}
        </CartContext.Provider>
    )
}