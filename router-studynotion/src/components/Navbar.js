import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="w-full h-14  justify-center">
      <div className="w-[75%] h-14 flex justify-between text-white mx-auto items-center">
        <Link to="/">
          <img src={logo} width={160} height={32} loading="lazy" />
        </Link>

        <nav className="">
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex  gap-x-4">
          {!isLoggedIn && (
            <Link to="/login">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                }}
             className="bg-gray-600 px-[12px] py-[7px] border border-gray-500 rounded-[8px] bg-opacity-60 text-gray-300  hover:bg-gray-800 "
             >
                {" "}
                Login
              </button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/signup">
              <button 
   className="bg-gray-600 px-[12px] py-[7px] border border-gray-500 rounded-[8px] bg-opacity-60 text-gray-300  hover:bg-gray-800 "             > Signup</button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out ");
                }}
                className="bg-gray-600 px-[12px] py-[7px] border border-gray-500 rounded-[8px] bg-opacity-60 text-gray-300  hover:bg-gray-800 "
             >
                {" "}
                Logout
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/dashboard">
              <button
                className="bg-gray-600 px-[12px] py-[7px] border border-gray-500 rounded-[8px] bg-opacity-60 text-gray-300  hover:bg-gray-800 "
              > Dashboard</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
