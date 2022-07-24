import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useState } from "react";
import Axios from "axios";
import { Form } from 'react-bootstrap';
const Search = () => {


    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [roomtype, setRoomtype] = useState("");
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);

    //const [newWage, setNewWage] = useState(0);

    const [employeeList, setEmployeeList] = useState([]);

   
    
      const getEmployees = () => {
        Axios.get("http://localhost:3001/employees").then((response) => {
          console.log("Got");
        });
      };
    
      


  return (



    <div className="container">
        

        <div className="card">
        
            <div className="card-header">
                <h1>Room Booking ( Book A Room Of Your Choice )</h1>
            </div>
        
        
            <div className="card-body">
            




            <div class="form-group">
              <label for="exampleInputEmail1" >Pickup - Location</label>
              <input type="date" name="date" class="form-control" id="exampleInputPassword1" placeholder="Date" onChange={(event) => {
            setCheckin(event.target.value);
          }}/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
              <label for="exampleInputPassword1">Drop Off - Location</label>
              <input type="date" name="date" class="form-control" id="exampleInputPassword1" placeholder="Date"  onChange={(event) => {setCheckout(event.target.value);}} />
          </div>
          <br/>
          
          
        
          <div class="input-group mb-3">

            <div>

              <label for="exampleInputEmail1">Room Type</label>
              <select class="form-select" aria-label="Default select example" onChange={(event) => {setRoomtype(event.target.value);}}>
                <option selected>Open this select menu</option>
                <option value="1">All Rooms</option>
                <option value="2">Queen</option>
                <option value="3">King</option>
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

    <div>

    {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Country: {val.country}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Wage: {val.wage}</h3>
              </div>
              
            </div>
          );
        })}




    </div>

    </div>

    
  )
}

export default Search