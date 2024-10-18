import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'
function Login({setIsLoggedIn}) {
  return (
    <Template
    title="Welcome Back"
    dec1="Build skill for today, tomorrow, and beyond"
    dec2="Education to future-proof your career"
    image={loginImg}
    formType="login"
    setIsLoggedIn={setIsLoggedIn}
    
    />
   
  )
}

export default Login
