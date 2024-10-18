import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'

function Signup({setIsLoggedIn}) {
  return (
    <Template
    title="Welcome Back"
    dec1="Build skill for today, tomorrow, and beyond"
    dec2="Education to future-proof your career"
    image={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}
    
    />
  )
}

export default Signup
