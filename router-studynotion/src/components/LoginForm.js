import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {
 
        const navigate= useNavigate();

  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In")
    navigate("/dashboard");

    
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-y-4">
      <label className="">
        <p className="text-lg">
          Email Address <sup> *</sup>
        </p>

        <input
          required
          type="email"
          name="email"
          value={FormData.email}
          placeholder="Enter Your Email"
          onChange={changeHandler}
          className="w-full h-10 rounded-md bg-gray-800  hover:border-gray-500 px-2 "
        />
      </label>
      <label className="relative">
        <p className="text-lg">
          Password <sup> *</sup>
        </p>


  
        <input
          required
          name="password"
          type={showPassword ? "text" : "password"}
          value={FormData.password}
          placeholder="Enter Your Password"
          onChange={changeHandler}
          className="w-full h-10 rounded-md bg-gray-800  hover:border-gray-500 px-2 active:border-none"
        />
        <span onClick={() => setShowPassword((prev) => !prev)} className="absolute top-[38px] cursor-pointer right-4 text-lg">
          {" "}
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
        </span>



        <Link to="#">
          <p className="text-sm text-blue-700 flex justify-end"> Forgot Password</p>
        </Link>
      </label>

      <button className="w-full bg-yellow-500 rounded-md py-2 cursor-pointer text-black font-semibold">Sign In</button>
    </form>
  );
};

export default LoginForm;
