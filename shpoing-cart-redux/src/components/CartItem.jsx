import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';


const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart= ()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed")
  }
  return (
    <div>

      <div className='h-52 flex  max-w-[100%] p-4 gap-4 items-center border-b-2' >

        <div className='h-[140px] w-[200px]'>
          <img src={item.image} alt="" className='w-full h-full' />
        </div>

        <div className='flex flex-col justify-center space-y-2'>
          <h1 className='font-bold text-gray-700'>{item.title}</h1>
          <h1 className='text-gray-500 font-semibold text-sm'>{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>

          <div className='flex justify-between'>
            <p className='font-bold text-green-700 text-md'>${item.price}</p>
          

          <div onClick={removeFromCart} className='bg-red-300 rounded-full p-2 cursor-pointer'>
          <AiFillDelete />
          </div>
          </div>

        </div>

      </div>
      
      
    </div>
  )
}

export default CartItem
