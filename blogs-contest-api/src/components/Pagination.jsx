import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div>
      <div className="bg-white w-full h-14 flex justify-evenly items-center fixed bottom-0 shadow-lg shadow-slate-700 drop-shadow-md border border-black border-opacity-10 ">
        <div className="flex  space-x-5 ">
          {page > 1 && (
            <button onClick={() => handlePageChange(page - 1)} className="bg-white border border-slate-500 w-20 py-1 rounded-lg font-bold ">
                Previous
                </button>
          )}

          {page < totalPages && (
            <button onClick={() => handlePageChange(page + 1)} className="bg-white border border-slate-500 py-1 w-20 rounded-lg font-bold">Next</button>
          )}
        </div>

        <p className="font-bold">
         
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
