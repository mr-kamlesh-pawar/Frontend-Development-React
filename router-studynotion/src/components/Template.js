import React from 'react'
import frameImg from'../assets/frame.png'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import { FcGoogle } from "react-icons/fc";

const Template = ({title, dec1, dec2, image, formType, setIsLoggedIn}) => {
  return (
    <div className=' w-screen text-white flex overflow-x-hidden'>
      <div className='w-[70%] flex mx-auto mt-10 justify-between'>


      <div className='text-white flex flex-col space-y-4'>
      <h1 className='font-bold text-2xl'>{title}</h1>

      <p className='text-lg'>
        <span>{dec1}</span> <br/>
        <span className='text-blue-800'>{dec2}</span>
      </p>

      {formType === "signup" ? 
      (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : 
      (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}


        <div className='flex w-full items-center gap-x-3 '>
            <div className='h-[1px] bg-gray-700 w-full   '></div>
            <p className='text-gray-700 font-medium'>OR</p>
            <div className='h-[1px] bg-gray-700 w-full  '></div>

        </div>

        <button className='flex justify-center items-center text-md bg-gray-900 border border-gray-600 rounded-md py-2  gap-x-3'>
        <FcGoogle  className='size-5'/>
            <p className='text-gray-300'> Sign Up with Google</p>
        </button>



</div>

<div className='relative w-11/12 max-w-[450px] mt-4'>
    <img 
        src={frameImg}
        width={458}
        height={404}
        alt='pattern'
        loading='lazy'
        className=''
    />

    <img 
        src={image}
        width={458}
        height={404}
        alt='students'
        loading='lazy'
        className='absolute -top-4 -left-4'
    />
</div>

      </div>
     
    </div>
  )
}

export default Template
