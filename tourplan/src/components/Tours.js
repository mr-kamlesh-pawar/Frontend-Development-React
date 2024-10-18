import React from "react";
import Card from "./Card";

function Tours({ tours, removeTour, AddTour }) {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-wide uppercase shadow-md bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text p-4 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        Plan With KPawar
      </h2>
      <div
        className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-8 
  p-6 
  bg-gray-100 
  rounded-lg 
  shadow-lg 
  max-w-7xl 
  mx-auto 
  transition-all 
  duration-300 
  ease-in-out 
  transform 
 
"
      >
        {tours.map((tour) => (
          <Card
            key={tour.id}
            {...tour}
            removeTour={removeTour}
            AddTour={AddTour}
          />
        ))}
      </div>
    </div>
  );
}

export default Tours;
