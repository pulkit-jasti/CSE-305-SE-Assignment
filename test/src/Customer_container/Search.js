import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useState } from "react";
import Axios from "axios";
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Search = () => {

    let navigate = useNavigate();
    let { username }= useParams();

    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [roomtype, setRoomtype] = useState("");
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);

    //const [newWage, setNewWage] = useState(0);

    const [roomList, setRoomsList] = useState([]);

   
    
      const getEmployees = () => {
        console.log(roomtype);
        Axios.post("http://localhost:3001/employees", {roomtype: roomtype}).then((response) => {
          console.log("Got");
          console.log(response.data);
          setRoomsList(response.data);
        });
      };

      const proceedpay = (room_No) => {
        console.log(roomtype);
        navigate(`/Payment/${username}/${room_No}`);
      };
    
      


  return (



    <div className="container" >
        

        <div className="card">
        
            <div className="card-header">
                <h1>Room Booking ( Book A Room Of Your Choice )</h1>
            </div>
        
        
            <div className="card-body">
            




            <div class="form-group">
              <label for="exampleInputEmail1" >Check - In</label>
              <input type="date" name="date" class="form-control" id="exampleInputPassword1" placeholder="Date" onChange={(event) => {
            setCheckin(event.target.value);
          }}/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
              <label for="exampleInputPassword1">Check - Out</label>
              <input type="date" name="date" class="form-control" id="exampleInputPassword1" placeholder="Date"  onChange={(event) => {setCheckout(event.target.value);}} />
          </div>
          <br/>
          
          
        
          <div class="input-group mb-3">

            <div>

              <label for="exampleInputEmail1">Room Type</label>
              <select class="form-select" aria-label="Default select example" onChange={(event) => {setRoomtype(event.target.value);}}>
                <option selected>Open this select menu</option>
                <option value="All Rooms">All Rooms</option>
                <option value="Queen">Queen</option>
                <option value="King">King</option>
              </select>
            </div>
            <div>
              <label for="Username">Adults</label>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username"  onChange={(event) => {setAdult(event.target.value);}}/>
            </div>
            <div>
              <label for="child">Children</label>
              <input type="text" class="form-control" placeholder="Username" aria-label="child"  onChange={(event) => {setChild(event.target.value);}}/>

            </div>

          <br/><br/>
          
          
        </div>
        <button type="submit" class="btn btn-warning" onClick={getEmployees}><span >Search For Rooms</span></button>
        
        
        </div>





    </div>

    <div class="container">
        <div class="row row-cols-1 row-cols-md-3">
        {roomList.map((val, key) => {
          return (
            <div class="card" style={{marginTop:"50px",marginLeft:"10px",width:"400px"}}>
                <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" style={{width: '395px', height: '60%',marginLeft:'-10px'}} class="card-img-top" alt="..."/>
                    <div class="row">
                        
                        
                        
                        
                        <div class="col-md-6">
                        <div class="card-body">
                            <p class="card-text">Room Type: {val.Room_type}</p>
                            <p class="card-text">Room No: {val.Room_No}</p>
                            <p class="card-text">Flooe No: {val.Floor}</p>
                            
                            
                            
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="card-body">
                        <p class="card-text">Services: {val.Room_services}</p>
                        <p class="card-text">Room Availability: {val.Availability}</p>
                        <p class="card-text">Room Price: {val.Room_price}</p>
                            
                        </div>
                        </div>
                        
                        
                    </div>                    
                        
                        <button  value = {val.Room_No} onClick={() => proceedpay(val.Room_No)} class="btn btn-warning">Select & Pay</button>

                     
                </div>

    
            
          );
        })}
        </div>
        </div>

    </div>

    
  )
}

export default Search