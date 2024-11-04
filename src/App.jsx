import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Products from './Components/Products/Products.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import UserContextProvider from './Context/UserContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import CartContextProvider from './Context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import ChiekOut from './Components/chiekout/ChiekOut.jsx'
import Allorders from './Components/Allorders/Allorders.jsx'
import WishlistContextProvider, { WishlistContext } from './Context/WishlistContext.jsx'
import Wishlist from './Components/Wishlist/Wishlist.jsx'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword.jsx'
import VerifyResetCode from './Components/VerifyResetCode/VerifyResetCode.jsx'
import ResetPassword from './Components/ResetPassword/ResetPassword.jsx'



let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'cart', element: <Cart /> },

      { path: 'chiekOut', element: <ChiekOut /> },
      { path: 'allorders', element: <Allorders /> },

      { path: 'forgotpassword', element: <ForgotPassword /> },
      { path: 'verifyresetcode', element: <VerifyResetCode /> },
      { path: 'resetpassword', element: <ResetPassword /> },




      { path: 'products', element: <Products /> },
      { path: 'Wishlist', element: <Wishlist /> },
      { path: 'productDetails/:id', element: <ProductDetails /> },
      { path: 'categories', element: <Categories /> },
      { path: 'brands', element: <Brands /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <Notfound /> },
    ]
  }
])

const queryClient = new QueryClient()
function App() {



  return <CartContextProvider>
    <WishlistContextProvider>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <RouterProvider router={routers}></RouterProvider>
          <Toaster />
        </UserContextProvider>
      </QueryClientProvider>
    </WishlistContextProvider>
  </CartContextProvider>



}

export default App
