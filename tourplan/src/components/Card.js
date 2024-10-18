import React, { useState } from "react";

function Card({ id, image, name, price, info, removeTour, AddTour }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)} ....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img src={image} className="w-full h-64 object-cover" alt={name} />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
          <h4 className="text-xl font-semibold text-blue-600">${price}</h4>
        </div>
        <div className="text-gray-600 mb-4">
          {description}
          <span
            onClick={readmoreHandler}
            className="text-blue-500 cursor-pointer ml-2 font-medium hover:underline"
          >
            {readmore ? "Show less" : "Read More"}
          </span>
        </div>
        <div className="flex space-x-9">
          <button
            onClick={() => AddTour(id)}
            className="bg-green-600 w-full text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
          >
            Interested
          </button>
          <button
            onClick={() => removeTour(id)}
            className="bg-red-600 w-full text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
