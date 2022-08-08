import React from 'react'

import 'bootstrap-icons/font/bootstrap-icons.css';

import { useState } from "react";
import Axios from "axios";
import { Form } from 'react-bootstrap';
const Paymentview = () => {

    const [payList, setPaysList] = useState([]);

   
    
      const getPays = () => {
        
        Axios.get("http://localhost:3001/paysview").then((response) => {
          console.log("Got");
          console.log(response.data);
          setPaysList(response.data);
        });
    };

  return (
    <div>
        <br></br><hr></hr>
    <div className="container" style={{marginLeft:"150px"}}>
        <h1>Payment View</h1>
        <div class="row">
        <div class="col-sm-6">
            <div class="card">
            <div class="card-body">
                <h4 class="card-title">Click the button to view the Payments</h4>
                
                <button type="submit" class="btn btn-warning" onClick={getPays}><span >Payment History</span></button>
            </div>
            </div>
        </div>

        <hr></hr>
        
        </div>
        <div class="container" style={{marginTop:"50px;"}}>        
        <div class="row row-cols-1 row-cols-md-4" style={{marginLeft:"-30px"}}>
        {payList.map((val, key) => {
          return (
            <div class="col-md-7 col-xl-5 mb-4 mb-md-0">
                    <div class="py-4 d-flex flex-row">
                    
                    <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="https://thumbs.dreamstime.com/b/illustration-phone-payment-icon-white-background-phone-payment-icon-white-background-117773240.jpg" class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <br></br><br></br>
                            <p>           </p><h2 class="card-title">{val.Customer_name}</h2>
                            
                            
                        </div>
                        </div>
                        <hr></hr>
                        <div class="col-md-12">
                        <div class="row g-0">    
                        <div class="col-md-6">
                        <div class="card-body">
                            <p class="card-text">Payment Id: {val.Payment_id}</p>
                            
                            <p class="card-text">Payment Method: {val.Payment_option}</p>
                            <p class="card-text">Total Amount: {val.Amount}</p>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="card-body">
                        <p class="card-text">Room Type: {val.Room_type}</p>
                            <p class="card-text">Room No: {val.Room_no}</p>
                            <p class="card-text">Payment Status: {val.Status}</p>
                            
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    </div>
                    
                </div>
            
          );
        })}
        </div>
        </div>

    </div></div>
  )
}

export default Paymentview