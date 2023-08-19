import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()

useEffect(() =>{
    // delete saved token and logout
    localStorage.removeItem("logintoken")
    navigate("/seller/login")
  
},[])
  return (
    <>
    </>
  )
}

export default Logout