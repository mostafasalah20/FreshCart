import React, { useContext, useEffect, useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'
import { WishlistContext } from '../../Context/WishlistContext'

export default function Navbar() {
  const navigate = useNavigate()
  let { user, setUser } = useContext(UserContext)


  let { wishList } = useContext(WishlistContext)

  let { cart } = useContext(CartContext)


  function logout() {
    localStorage.removeItem('token');
    setUser(null)
    navigate('/login')
  }



  const [isOpen, setIsOpen] = useState(false);

  const [newscroll, setnewscroll] = useState(false)
  const change = () => {
    if (window.scrollY > 30) {
      setnewscroll(true)
    
    } else {
      setnewscroll(false)
      
    }

  }
  window.addEventListener('scroll', change)



  return <>

    <nav className='bg-gray-200   md:flex  fixed z-50 top-0 inset-x-0 py-5 text-center capitalize'>

      <div className='flex justify-between items-center  md:w-[15%]'>
        <div className='px-4'>
          <img src={logo} width={120} alt="" />
        </div>


        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center mx-3   p-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 000 2h12a1 1 0 100-2H4z"
              clipRule="evenodd"
            />
          </svg>
        </button>


      </div>




      <div className={`${isOpen ? 'block   ' : 'hidden '} w-full md:block md:w-[85%] md:px-3  `}>






        <div className="container flex flex-col md:flex-row justify-between   items-center md:w-[85%] text-gray-500">
          <div className='flex flex-col md:flex-row space-x-3'>
            {user && <ul className='flex flex-col md:flex-row space-x-2'>
              <li><NavLink to="">Home</NavLink></li>
              <li><NavLink to="cart">cart <span className='text-white px-1 rounded-md bg-red-950'>{cart?.numOfCartItems}</span></NavLink></li>
              <li><NavLink to="products">products</NavLink></li>
              <li><NavLink to="categories">categories</NavLink></li>
              <li><NavLink to="brands">brands</NavLink></li>

              <li><NavLink to="wishList">wishList <span className='text-white px-1 rounded-md bg-red-950'>{wishList?.count}</span> </NavLink></li>
            </ul>}

          </div>
          <div className=''>
            <ul className='flex flex-col md:flex-row space-x-2'>
              <li className='space-x-2 text-black'>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-linkedin-in'></i>
                <i className='fab fa-youtube'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-instagram'></i>
              </li>
              {user ? <>
                <NavLink to={'/cart'}>
                  <div className='relative'>
                    <i className='fa-solid fa-cart-shopping fa-2xl text-green-500' ></i>
                    <span className='absolute bottom-1 left-0 right-0 md:left-[6px] text-white text-lg font-medium'>{cart?.numOfCartItems}</span>
                  </div>
                </NavLink>
                <li onClick={() => logout()} className='cursor-pointer'><span>logout</span></li>
              </> :
                <>
                  <li><NavLink to="login">Login</NavLink></li>
                  <li><NavLink to="register">Register</NavLink></li>
                </>
              }


            </ul>
          </div>
        </div>
      </div>
    </nav>

  </>
}
