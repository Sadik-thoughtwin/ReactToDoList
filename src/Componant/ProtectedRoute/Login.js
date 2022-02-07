import Header from "./Header";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);
  async function LoginData(){
    // console.log(email,password)
    let item = {
      email,
      password
    }
     console.log('data',email,password)
    // let result = await fetch("https://fakestoreapi.com/products?limit=5",{
    //   method:'POST',
    //   headers:{
    //     'Content-Type': 'application/json',
    //     'Accept':'application/json'
    //    },
    //    body:JSON.stringify(item)
        
    // })
    // result = await result.json()
    // localStorage.setItem('user-info',JSON.stringify(item))
    // navigate("/add"); 
  }
  return (<>
    <Header />
    <div className="col-sm-4 offset-sm-4">
      
      <h2>Login Page </h2>
      <input type="text" className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="email" /><br />
      <input type="text" className="form-control" onChange={(e)=>setPassword(e.target.value)} placeholder="password" />  <br />
      <button onClick={LoginData} className="btn btn-primary">Login</button>
    </div>
    </>
  );
}
