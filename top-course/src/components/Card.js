import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course, liked, setLiked }) {
  function clickHandler() {
    if (liked.includes(course.id)) {
      setLiked((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      if (liked.length === 0) {
        setLiked([course.id]);
      } else {
        setLiked((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="relative bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden ztransition-transform transform hover:scale-105">
      <img
        src={course.image.url}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 right-4 bg-gray-700 p-2 rounded-full shadow-md transition-transform transform hover:scale-110">
        <button onClick={clickHandler}>
          {liked ? (
            <FcLike fontSize="1.75rem" className="text-white" />
          ) : (
            <FcLikePlaceholder fontSize="1.75rem" className="text-white" />
          )}
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-100">
            {course.title}
          </h2>
        </div>
        <p className="mt-2 text-gray-300">{course.description}</p>
      </div>
    </div>
  );
}

export default Card;
