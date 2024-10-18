import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {
  const {cart=[]} = useSelector((state)=>state)
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(()=>{
    setTotalAmt(cart.reduce((acc, curr)=> acc+curr.price,0));
  }, [cart]);
  return (
    <div className='mt-8 mb-8 '>
      {
        cart.length >0 ? (
        
        <div className='w-[60%] max-w-6xl flex justify-center mx-auto gap-4 '> 
          <div className='w-[50%] '>
            {
              cart.map((item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>

          <div className='w-[50%] h-[550px] border flex flex-col justify-between px-2 rounded-lg'>
            <div className='flex flex-col justify-between py-7  h-[30%]'>
              <div className='uppercase text-green-700 font-semibold text-2xl'>Your Cart</div>
              <div className='uppercase text-green-700 font-bold text-3xl'>Summary</div>
              <p className='text-gray-700 font-semibold text-xl'>
                <span>Total Items : {cart.length}</span>
              </p>
            </div>

            <div>
              <p className='text-md font-semibold mb-4 text-gray-600'>Total Amount:<span className='font-bold text-black'>  ${totalAmt}</span></p>
           <Link to={"/"}>
           
              <button className='bg-green-700 px-4 py-2  w-full text-white font-bold text-xl rounded-md mb-6'>
                Checkout Now
              </button>
           </Link>
            </div>
          </div>

        </div>
        
      )
        : (
        <div className='w-screen h-[500px] flex flex-col justify-center items-center place'> 
        <h2 className='text-green-700 text-2xl font-bold'>Cart is Empty</h2>

        <Link to={"/"}>
        <button className='bg-green-700 px-4 py-2 text-white font-bold rounded-md mt-4'>
          Shop Now
        </button>
        </Link>

        </div>
        )
      }
      
    </div>
  )
}

export default Cart
