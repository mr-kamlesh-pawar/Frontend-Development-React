import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 


const Tag = () => {

 
    const [tag, setTag] = useState('Car')

    

    const {gif, fetchData, loading}= useGif(tag);

    function clickHandler(){
        fetchData(tag);
    }
    
  return (
    <div className='w-1/2  rounded-md border border-white bg-[#1b278f] flex flex-col items-center gap-y-5 p-5'>
      <h1  className=' uppercase text-3xl underline text-white font-bold'> Random <span className='text-red-400'>  {tag}</span> Gif</h1>
     {
        loading ?(<Spinner/>) : ( <img src={gif} width="400px" height="270px"/>)
     }
     
     <input
     type='text'
     onChange={(event)=>{setTag(event.target.value)}}
     placeholder='Search a Gif...'
     value={tag}
     className='text-xl bg-slate-200 w-[30%]  rounded-md font-bold  py-1 px-3 text-opacity-85'
     />
      <button className='text-2xl bg-white px-[30%] rounded-md font-bold  py-2' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag
