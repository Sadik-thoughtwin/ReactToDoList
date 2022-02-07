import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";


export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

   async function signUp() {
    let item = {
      name,
      password,
      email
       };  
    console.log(item)

  //    let result = await fetch("https://fakestoreapi.com/products?limit=5",{
  //      method:'POST',
  //      headers:{
  //       'Content-Type': 'application/json',
  //       'Accept':'application/json'
  //      },
  //      body:JSON.stringify(item)
  //    })
  //    result = await  result.json();
  //    console.log("result",result)

    localStorage.setItem("user-info", JSON.stringify(item));

    navigate("/add");
  }
  return (
    <>
      <Header />
      <div className="col-sm-4 offset-sm-4">
        <br />

        <h1>User Registration</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="form-control"
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="form-control" />
        <br />
        <br />
        <input type='email'   
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="form-control" />
        <br />
        <br />
        <button onClick={signUp} className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </>
  );
}
