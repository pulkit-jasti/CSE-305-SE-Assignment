import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import Axios from "axios";
const Payment = () => {

    let navigate = useNavigate();
    const { username,roomno }= useParams()

    console.log(username,roomno)

    const getEmployees = () => {
        alert("Payment Successful")
      };

    const [roomList, setRoomsList] = useState([]);
    const [custDetails, setCustDetails] = useState([]);

    function Score() {
        console.log(username);
        useEffect(() => {
            Axios.post("http://localhost:3001/cust",{username : username}).then((response) => {
                console.log("Got");
                console.log(response.data);
                setCustDetails(response.data);
                
            });
            Axios.post("http://localhost:3001/specificroom",{roomno: roomno}).then((response) => {
                console.log("Got");
                console.log(response.data);
                setRoomsList(response.data);
                
            });
        }, []);
    
    }


    function total(cost) {
        
        cost = cost + 450;
        return cost
    
    }

    Score();

    console.log(custDetails)
    console.log(roomList)

    

  return (
    <div>
        
        <section style={{backgroundColor: '#eee'}}>
        <div class="container py-5">
            <div class="card">
            <div class="card-body">
                <div class="row d-flex justify-content-center pb-5">


                {custDetails.map((item,index)=>(



                <div class="col-md-7 col-xl-5 mb-4 mb-md-0">
                    <div class="py-4 d-flex flex-row">
                    
                    <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="http://cdn.onlinewebfonts.com/svg/img_552555.png" class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <br></br><br></br>
                            <h2 class="card-title">{item.Name}</h2>
                            <p class="card-text"></p>
                            
                            
                        </div>
                        <br></br>
                        </div>
                        <hr></hr>
                        <div class="col-md-12">
                        <div class="row g-0">    
                        <div class="col-md-6">
                        <div class="card-body">
                            
                            <p class="card-text">Username: {item.Username}</p>
                            <p class="card-text">Age :     {item.Age}</p>
                            <p class="card-text">Email: {item.Mail_id}</p>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="card-body">
                            <p class="card-text">Gender: {item.Gender}</p>
                            <p class="card-text">Mobile No : {item.Mobile_No}</p>
                            <p class="card-text">Address: {item.Address}</p>
                            
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    </div>
                    
                    
                </div>
                )

                )}
                

            {roomList.map((item,index)=>(
                <div class="col-md-7 col-xl-5 mb-4 mb-md-0">
                    <div class="py-4 d-flex flex-row">
                    
                    <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/489/489870.png" class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <br></br><br></br>
                            <p>           </p><h2 class="card-title">Room Details</h2>
                            
                            
                        </div>
                        </div>
                        <hr></hr>
                        <div class="col-md-12">
                        <div class="row g-0">    
                        <div class="col-md-6">
                        <div class="card-body">
                            <p class="card-text">Room Type: {item.Room_type}</p>
                            <p class="card-text">Room No: {item.Room_No}</p>
                            <p class="card-text">Flooe No: {item.Floor}</p>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="card-body">
                            <p class="card-text">Services: {item.Room_services}</p>
                            <p class="card-text">Room Availability: {item.Availability}</p>
                            <p class="card-text">Room Price: {item.Room_price}</p>
                            
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    </div>
                    
                </div>
                 )

                )}

                
                <div class="col-md-5 col-xl-4 offset-xl-1" style={{marginLeft:"-110px"}}>
                    <div class="py-4 d-flex">
                    
                    </div>
                    <div class="rounded d-flex flex-column p-2" style={{backgroundColor: "#f8f9fa;"}}>
                    
                        <h4>Payment</h4>
                    <div class="row">
                        <div class="col-md-12 mb-4">

                        <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                            <h6 class="mb-0 me-4">Method: </h6>

                            <div class="form-check form-check-inline mb-0 me-4">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                value="Female" />
                            <label class="form-check-label" for="femaleGender">Net Banking</label>
                            </div>

                            <div class="form-check form-check-inline mb-0 me-4">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                value="Male" />
                            <label class="form-check-label" for="maleGender">Card</label>
                            </div>

                            <div class="form-check form-check-inline mb-0">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                value="Other"/>
                            <label class="form-check-label" for="otherGender">UPI</label>
                            </div>

                            </div>


                            <div class="form-outline">
                            <input type="text" id="form3Example1m" class="form-control form-control-lg" />
                            <label class="form-label" for="form3Example1m">Card Holder Name</label>
                            </div>
                        </div>
                  
                    </div>
                    <div class="row">
                        <div class="col-md-12 mb-4">
                            <div class="form-outline">
                            <input type="text" id="form3Example1m" class="form-control form-control-lg" />
                            <label class="form-label" for="form3Example1m">Card Number</label>
                            </div>
                        </div>
                  
                    </div>
                    <div class="row">
                        <div class="col-md-8 mb-4">
                            <div class="form-outline">
                            <input type="date" id="form3Example1m" class="form-control form-control-lg" />
                            <label class="form-label" for="form3Example1m">Expiry Date</label>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="form-outline">
                            <input type="number" id="form3Example1m" class="form-control form-control-lg" />
                            <label class="form-label" for="form3Example1m">CVV</label>
                            </div>
                        </div>
                  
                    </div>
                    <div class="row">
                        <div class="col-md-12 mb-4">
                            <div class="form-outline">
                            <input type="text" id="form3Example1m" class="form-control form-control-lg" />
                            <label class="form-label" for="form3Example1m">Amount</label>
                            </div>
                        </div>
                  
                    </div>
                    
                    <button type="submit" class="btn btn-warning" onClick={getEmployees} ><span >Make Payment</span></button>
                    </div>
                </div>
                
                {roomList.map((item,index)=>(
                
                <div class="col-md-5 col-xl-4 offset-xl-1">
                    <div class="py-4 d-flex">
                    
                    </div>
                    <div class="rounded d-flex flex-column p-2" style={{backgroundColor: "#f8f9fa;"}}>
                    <div class="p-2 me-3">
                        <h4>Order Recap</h4>
                    </div>
                    <div class="p-2 d-flex">
                        <div class="col-8">Room Price</div>
                        <div class="ms-auto">{item.Room_price}.00</div>
                    </div>
                    <div class="p-2 d-flex">
                        <div class="col-8">Amount toward deductible</div>
                        <div class="ms-auto">+ 0.00</div>
                    </div>
                    <div class="p-2 d-flex">
                        <div class="col-8">Insurance</div>
                        <div class="ms-auto">+ 100.00</div>
                    </div>
                    <div class="p-2 d-flex">
                        <div class="col-8">Services </div>
                        <div class="ms-auto">+ 120.00</div>
                    </div>
                    <div class="border-top px-2 mx-2"></div>
                    <div class="p-2 d-flex pt-3">
                        <div class="col-8">CGST (Taxes)</div>
                        <div class="ms-auto">+ 200.00</div>
                    </div>
                    <div class="p-2 d-flex">
                        <div class="col-8">
                        SGST (Taxes)
                        </div>
                        <div class="ms-auto">+ 180.00</div>
                    </div>
                    <div class="border-top px-2 mx-2"></div>
                    <div class="p-2 d-flex pt-3">
                        <div class="col-8">Coupon Code</div>
                        <div class="ms-auto"><b>- 150.00</b></div>
                    </div>
                    
                    <div class="border-top px-2 mx-2"></div>
                    <div class="p-2 d-flex pt-3">
                        <div class="col-8"><b>Total</b></div>
                        <div class="ms-auto"><b class="text-success" >{item.Room_price + 450}.00</b></div>
                    </div>
                    
                    </div>
                </div>)

)}
                
                </div>
            </div>
            </div>
        </div>
        </section>
        
    </div>
  )
}

export default Payment



{/*<h5><span class="far fa-check-square pe-2"></span><b>ELIGIBLE</b> |</h5>
                    <span class="ps-2">Pay</span>
                    </div>
                    <h4 class="text-success">$85.00</h4>
                    <h4>Diabetes Pump and Supplies</h4>
                    <div class="d-flex pt-2">
                    <div>
                        <p>
                        <b>Insurance Responsibility <span class="text-success">$71.76</span></b>
                        </p>
                    </div>
                    <div class="ms-auto">
                        <p class="text-primary">
                        <i class="fas fa-plus-circle text-primary pe-1"></i>Add insurance card
                        </p>
                    </div>
                    </div>
                    <p>
                    Insurance claims and all necessary dependencies will be submitted to your
                    insurer for the coverred portion of this order
                    </p>
                    <div class="rounded d-flex" style={{backgroundColor: '#f8f9fa'}}>
                    <div class="p-2">Aetna-Open Access</div>
                    <div class="ms-auto p-2">OAP</div>
                    </div>
                    <hr />
                    <div class="pt-2">
                    <div class="d-flex pb-2">
                        <div>
                        <p>
                            <b>Patient Balance <span class="text-success">$13.24</span></b>
                        </p>
                        </div>
                        <div class="ms-auto">
                        <p class="text-primary">
                            <i class="fas fa-plus-circle text-primary pe-1"></i>Add payment card
                        </p>
                        </div>
                    </div>
                    <p>
                        This is an estimate for the portion of your order (not covered by
                        insurance) due today . once insurance finalizes their review refunds
                        and/or balances will reconcile automatically.
                    </p>
                    <form class="pb-3">
                        <div class="d-flex flex-row pb-3">
                        <div class="d-flex align-items-center pe-2">
                            <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1"
                            value="" aria-label="..." checked />
                        </div>
                        <div class="rounded border d-flex w-100 p-3 align-items-center">
                            <p class="mb-0">
                            <i class="fab fa-cc-visa fa-lg text-primary pe-2"></i>Visa Debit
                            Card
                            </p>
                            <div class="ms-auto">************3456</div>
                        </div>
                        </div>

                        <div class="d-flex flex-row">
                        <div class="d-flex align-items-center pe-2">
                            <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2"
                            value="" aria-label="..." />
                        </div>
                        <div class="rounded border d-flex w-100 p-3 align-items-center">
                            <p class="mb-0">
                            <i class="fab fa-cc-mastercard fa-lg text-dark pe-2"></i>Mastercard
                            Office
                            </p>
                            <div class="ms-auto">************1038</div>
                        </div>
                        </div>
                    </form>
                    <input type="button" value="Proceed to payment" class="btn btn-primary btn-block btn-lg" />*/}