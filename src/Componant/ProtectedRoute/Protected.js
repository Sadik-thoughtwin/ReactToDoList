import Header from "./Header";
import React,{useState,useEffect} from 'react'; 
import { useNavigate } from "react-router-dom";

export default function PrivateRoute(props) {

  let Cmp =props.Cmp
  
  return (
    <div>
      <Cmp />
      
    </div>  
  );
}
