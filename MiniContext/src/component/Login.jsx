import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [usernm, setUsernm] = useState('')
    const [password, setPassword]= useState('')
   
    const {setUser} = useContext(UserContext)
   
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({usernm,password})


    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={usernm}
      onChange={(e)=>{
        setUsernm(e.target.value)

      }}
      placeholder='UserName' />
      <br></br>  <br></br>
      <input type="password" 
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)

      }}
      placeholder='Password' />
        <br></br>  <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
