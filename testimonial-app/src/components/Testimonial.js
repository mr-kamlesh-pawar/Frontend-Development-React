import React, { useEffect, useState } from 'react'
import Card from './Card';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Testimonial =(props)=> {




    let reviews= props.reviews;

    let [index, setIndex] = useState(0);
    function leftShiftHandler(){

        if(index-1 <0){
            setIndex(reviews.length-1);
        }else{
            setIndex(index-1);
        }

    }
    
    
    function rightShiftHandler(){
        if(index+1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    
    }
    
    function surpriseHandler(){

        let randomIndex= Math.floor(Math.random() * reviews.length)
        setIndex(randomIndex);
    
    }


    useEffect((surpriseHandler),[])
  return (
    <div className='border-4 border-purple-300 rounded-md flex flex-col justify-center place-items-center  '>
      <Card review = {reviews[index]} />

      <div className="text-purple-600 text-4xl space-x-5 mt-3">
          <button onClick={leftShiftHandler}>
            <FaAngleLeft />
          </button>
          <button onClick={rightShiftHandler}>
            <FaAngleRight />
          </button>
        </div>
        <div className="mt-3 mb-4">
          <button
          onClick={surpriseHandler} 
          className="p-2 px-5 bg-purple-600 hover:bg-purple-800 text-white font-bold  rounded-xl">Surprise Me</button>
        </div>
    </div>
  )
}   

export default Testimonial
