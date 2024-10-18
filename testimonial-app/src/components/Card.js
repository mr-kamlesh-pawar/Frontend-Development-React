import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;




  return (
    <div className=" px-8 ">
      
     

        <div className="relative p-7 flex flex-col justify-center place-items-center">
        <img
          src={review.image}
          className=" w-[120px] h-[120px]  absolute bottom-1  left-[50px] z-20 rounded-full hover:scale-110 transition-all duration-300"
        />

        <div className=" w-[120px] h-[120px] absolute bottom-1 left-[60px] -z-21  bg-purple-700 rounded-full"></div>

        </div>
        <div className="flex flex-col justify-center place-items-center" >


        <div className="">
          <p className=" font-bold text-2xl">{review.name}</p>
        </div>

        <div>
          <p className="text-sm opacity-60">{review.job.toUpperCase()}</p>
        </div>

        <div className="mt-3 mb-3">
          <ImQuotesLeft className="text-purple-700 text-2xl"/>
        </div>

        <div className="text-lg h-[6rem] flex  place-items-center">
          <p> {review.text}</p>
        </div>
        <div className="mb-3 mt-5">
          <ImQuotesRight className="text-purple-700 text-2xl" />
        </div>

    




      </div>
    </div>
  );
};

export default Card;
