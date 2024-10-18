import React, { useState } from "react";
import Card from "./Card";

function Cards({ courses }) {
  let allCourses = [];

  const [liked, setLiked] = useState([]);

  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });

    return allCourses;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {!courses ? (
        <div className="col-span-full flex justify-center items-center h-64">
          <p className="text-gray-400">No Data Found</p>
        </div>
      ) : (
        getCourses().map((course) => (
          <Card
            key={course.id}
            course={course}
            liked={liked}
            setLiked={setLiked}
          />
        ))
      )}
    </div>
  );
}

export default Cards;
