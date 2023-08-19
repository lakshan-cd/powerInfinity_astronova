import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import React from "react";
import { Navigate } from "react-router-dom";


 const AuthMiddleware = (props) => {
   
    const token = localStorage.getItem("logintoken")
  if (token) {
    const decodedToken = jwtDecode(token)
    console.log(decodedToken.exp)
    console.log(Date.now())
    if (decodedToken.exp < Date.now()/1000) {
      alert('Your session timed out')
      return <Navigate to={{ pathname: "/signout", state: { from: props.location } }} />
    }
    }else if(!token){
      alert("Please login to access this page")
     return <Navigate to={{ pathname: "/signout", state: { from: props.location } }} />
    }
  return (
    <React.Fragment>
    {props.children}
  </React.Fragment>
  )
}
export default AuthMiddleware;