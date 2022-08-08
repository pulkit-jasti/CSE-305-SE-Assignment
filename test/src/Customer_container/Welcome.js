import React, { useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { Form } from 'react-bootstrap';
import { useNavigate,useParams } from 'react-router-dom';
const Welcome = () => {

  let navigate = useNavigate();
  let { username }= useParams();

  const [custdetails, setcustDetails] = useState([]);

  function Getname() {
    console.log("Enter insided");
    useEffect(() => {
        Axios.post("http://localhost:3001/cust",{username : username}).then((response) => {
            console.log("Got");
            console.log(response.data);
            setcustDetails(response.data);
            
        });
        
    }, []);

}

Getname();


  console.log(custdetails);
  return (
    <div className="container" >
    <center >
        <hr></hr>
        {custdetails.map((val, key) => {
        return(
        <h1 style={{color: "Blue",fontSize: "50px"}}>Welcome , {val.Name}</h1>

        );
        })}
        <hr></hr>
    </center>
    </div>
  )
}

export default Welcome