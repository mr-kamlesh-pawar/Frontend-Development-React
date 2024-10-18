import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value); 
    const dispatch= useDispatch();

  return (
    <div className='w-[full] h-screen flex justify-center items-center place-items-center'>
     
     <div className='flex justify-center space-x-7 text-2xl font-bold items-center '>

      <button onClick={()=> dispatch(increment())} className='bg-slate-300 p-3 rounded-lg'>
        Increment
      </button>
   
      <div>{count}</div>
     

      <button onClick={()=> dispatch(decrement())} className='bg-slate-300 p-3 rounded-lg'>
        Decrement
      </button>
     </div>

    </div>
  )
}

export default Counter
