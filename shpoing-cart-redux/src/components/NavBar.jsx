import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavBar = () => {
  const {cart} = useSelector((state) => state);

  return (
    <div className='w-full h-20 flex justify-center bg-gray-900'>
        <div className='w-[60%] flex justify-between items-center '>

<NavLink to="/">

        <img src={logo} width="150px" height="120px"/>
</NavLink>
        <div className='relative flex space-x-9 text-white text-xl items-center font-mono' >
            <NavLink to="/">

            <p className='cursor-pointer'>
                Home
            </p>
            </NavLink>
            <NavLink to="/cart">

        <MdShoppingCart  className='cursor-pointer text-2xl'/>
        {
          cart.length > 0 &&  <span className='absolute -top-1 -right-2 bg-green-600 w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
        }
       
            </NavLink>
            </div>
        </div>

      
    </div>
  )
}

export default NavBar
