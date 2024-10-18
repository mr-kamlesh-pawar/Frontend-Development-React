import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function About() {
    const navi= useNavigate();
    function clickHandler(){
        navi("/contact");
    }
  return (
    <div>
        This is About
        <button onClick={clickHandler}> Go to Contact Page</button>
      
    </div>
  )
}

export default About
