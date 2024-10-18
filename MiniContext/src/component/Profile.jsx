import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(UserContext)

  if(!user) return <div>Please Login</div>
  return <div className="">Welcome {user.usernm}</div>
}

export default Profile
