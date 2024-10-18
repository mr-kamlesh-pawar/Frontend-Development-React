import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {
    const navigate= useNavigate();
    const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const[showPassword, setShowPassword]= useState(false);
  const[showPassword1, setShowPassword1]= useState(false);
  const [accountType, setAccountType]=useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
        toast.error("Password do not match");
        return;

    }
    setIsLoggedIn(true);
    toast.success("Account Created");

    const accountData= {
      ...formData
    };
    const finalData={
      ...accountData,
      accountType
    }

    console.log("Printing the final account data : ");
    console.log(finalData);
    navigate("/dashboard");



  }
  return (
    <div>
      
      <div className="flex items-center justify-evenly bg-gray-800  w-[47%] h-11 rounded-3xl ">
        <button 
        onClick={()=>{setAccountType("student")}}
        className={`${accountType == "student" 
          ? "bg-gray-900 rounded-3xl text-gray-100"
          : "bg-transparent text-gray-400   "}
         h-9 px-3 transition-all duration-300  }` }
       >Student</button>


        <button 
        onClick={()=>{setAccountType("instructor")}}

        className={`${accountType == "instructor"
          ? "bg-gray-900 rounded-3xl text-gray-100 "
          : "bg-transparent text-gray-400" } transition-all duration-300  h-9 px-3 `}

        >Instructor</button>
      </div>

      <form onSubmit={submitHandler} className="flex flex-col gap-y-4 mt-4">
        <div className="flex justify-between">
        <label className="w-[47%]">
          <p className="text-lg">
            First Name <sup className="text-pink-700">*</sup>
          </p>
          <input
            type="text"
            required
            name="firstname"
            onChange={changeHandler}
            placeholder="Enter First Name"
            value={formData.firstname}
            className="w-full h-10 rounded-md bg-gray-800  hover:border-gray-500 px-2 "
          />
        </label>

        <label className="w-[47%]">
          <p className="text-lg">
            Last Name <sup className="text-pink-700">*</sup>
          </p>
          <input
            type="text"
            required
            name="lastname"
            onChange={changeHandler}
            placeholder="Enter Last Name"
            value={formData.lastname}
            className="w-full h-10 rounded-md bg-gray-800  hover:border-gray-500 px-2 "
          />
        </label>
        </div>
       
       <label>
          <p className="text-lg">
           Email Address <sup className="text-pink-700">*</sup>
          </p>
          <input
            type="email"
            required
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Id"
            value={formData.email}
            className="w-full h-10 rounded-md bg-gray-800  hover:border-gray-500 px-2 "
          />
        </label>

        <div className="flex justify-between">
        <label className="relative w-[47%]">
          <p>
             Create Password <sup className="text-pink-700">*</sup>
          </p>
          <input
            type={showPassword? ("text") : ("password")}
            required
            name="password"
            onChange={changeHandler}
            placeholder="Enter Password"
            value={formData.password}
             className="w-full h-10 rounded-md bg-gray-800  hover:border-gray-500 px-2 active:border-none"
          /> 
           <span onClick={() => setShowPassword((prev) => !prev)} className="absolute top-[38px] cursor-pointer right-4 text-lg">
         
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
        </span>
        </label>

        <label className="relative w-[47%]">
          <p>
             Confirm Password <sup className="text-pink-700">*</sup>
          </p>
          <input
            type={showPassword1? ("text") : ("password")}
            required
            name="confirmPassword"
            onChange={changeHandler}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            className="w-full h-10 rounded-md bg-gray-800  hover:border-gray-500 px-2 active:border-none"

          /> 
           <span onClick={() => setShowPassword1((prev) => !prev)} className="absolute top-[38px] cursor-pointer right-4 text-lg">
         
          {showPassword1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
        </span>

        </label>

      
        </div>

<button className="w-full bg-yellow-500 rounded-md py-2 cursor-pointer text-black font-semibold">Create Account</button>


      </form>
    </div>
  );
};

export default SignupForm;
