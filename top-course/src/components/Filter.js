import React from "react";

function Filter({ filterData }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="flex flex-wrap gap-4 justify-center">
        {filterData.map((data) => (
          <button
            key={data.id}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-blue-500 transition-colors"
          >
            {data.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
