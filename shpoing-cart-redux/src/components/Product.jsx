import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast';
import { remove,add } from '../redux/Slices/CartSlice';

const Product = ({post}) => {

  const cart= useSelector((state)=> state.cart);
  const dispatch = useDispatch();
  const addToCart= ()=>{
    dispatch(add(post));
    toast.success("Item Added to Cart");

  }

  const removeFromCart= ()=>{
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart")
  }

  return (
    <div className='flex flex-col  items-center justify-between 
    hover:scale-105 transition duration-300 ease-in hover:shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]
    shadow-lg shadow-black gap-3 p-4 mt-10 ml-5 rounded-xl outline-gray-600  '>
      
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>

      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left '>{post.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
      </div>

      <div  className='h-[180px]'>
        <img src={post.image} className='w-full h-full' />
      </div>

      <div className='flex justify-between gap-12 items-center w-full mt-5 '>
     <div>

      <p className='text-green-600 font-bold'>${post.price}</p>
     </div>
      
      
      {
        cart.some((p)=> p.id == post.id) ?
        (<button onClick={removeFromCart} className='text-gray-700 border-2 border-gray-700  rounded-full font-bold text-[12px] p-1 px-3 uppercase hover:bg-red-700 hover:text-white transition duration-300 ease-in'> Remove Item</button>) :
        (<button onClick={addToCart} 
        className='text-gray-700 border-2 border-gray-700  rounded-full font-bold text-[12px] p-1 px-3 uppercase hover:bg-green-700 hover:text-white transition duration-300 ease-in'
        > Add to Cart</button>)
      }
      </div>



    </div>
  )
}

export default Product
