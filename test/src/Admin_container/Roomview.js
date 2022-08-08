import React from 'react'

import 'bootstrap-icons/font/bootstrap-icons.css';

import { useState } from "react";
import Axios from "axios";
import { Form } from 'react-bootstrap';
const Roomview = () => {
    

    const [roomList, setRoomsList] = useState([]);

    const rooms = ["King","Queen","Twin"];
    

    const [newPrice, setNewprice] = useState(0);


    const [roomno,setRoomNo] = useState("");
    const [roomprice,setRoomPrice] = useState("");
    const [roomfloor,setRoomFloor] = useState(0);
    const [roomservice,setRoomService] = useState("");
    const [roomtype,setRoomType] = useState("");

    
    const getRooms = () => {
        
        Axios.get("http://localhost:3001/Roomsview").then((response) => {
          console.log("Got");
          console.log(response.data);
          setRoomsList(response.data);
        });
      };


    const updateRooms = (Room_No) => {
        
        Axios.put("http://localhost:3001/update", { price: newPrice, Room_No: Room_No }).then(
          (response) => {
            alert("Update Successfull")
            //window.location.reload();
            roomList.map((val) => {
                return val.Room_No === Room_No
                  ? {
                      
                      Room_price: val.Room_price,
                    }
                  : val;
              })



          }
        );
      };

    const addRooms = () => {
        
        Axios.post("http://localhost:3001/addRooms", { roomno:roomno,roomprice:roomprice,roomfloor:roomfloor,roomservice:roomservice,roomtype:roomtype }).then(
          (response) => {
            alert("Update Successfull")
            //window.location.reload();
            


          }
        );
      };


  return (
    <div>
    <br></br><hr></hr>
    <div className="container" style={{marginLeft:"150px"}}>
        
        <h1>Room View</h1>

        <div class="row">
          <div class="col-sm-6">
              <div class="card">
              <div class="card-body">
                  <h4 class="card-title">Click the button to view the Rooms</h4>
                  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                  <button type="submit" style={{width:'600px'}} class="btn btn-warning" onClick={getRooms}><span >Search For Rooms</span></button>
              </div>
              </div>
          </div>

          <div class="col-sm-6">
        
            <div class="card">
            <center><h3>Add Room</h3></center>
            <div class="card-body">
            <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m1" class="form-control form-control-lg" onChange={(event) => {
            setRoomNo(event.target.value);
          }}/>
                      <label class="form-label" for="form3Example1m1">Room Number </label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n1" class="form-control form-control-lg" onChange={(event) => {
            setRoomPrice(event.target.value);
          }} />
                      <label class="form-label" for="form3Example1n1">Price</label>
                    </div>
                  </div>
            </div>


            <div class="row">
                  
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <input type="number" id="form3Example1m1" class="form-control form-control-lg" onChange={(event) => {
                    setRoomFloor(event.target.value);
                    
                  }}/>
                  <label class="form-label" for="form3Example1m1">Floor Number </label>
                    
                      
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    
                    <select name="choose" style={{width: '290px'}} className="p-1" onChange={(e) => setRoomType(e.target.value)} >

                      {rooms.map((item,index)=>(

                          <option value ={item} key={index} >{item}</option>
                      )

                      )}


                      </select>
                    </div>
                  </div>

            </div>

            <button style={{width: '600px'}} type="submit" class="btn btn-warning" onClick={addRooms}><span >Submit</span></button>
                
                
            </div>
            </div>
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

                    <div class="input-group mb-3">

                        <input type="text" class="form-control" placeholder="Price" aria-label="Price" onChange={(event) => {setNewprice(event.target.value);}}/>
                        
                        <button  class="btn btn-warning" value={val.Room_No} onClick={() => updateRooms(val.Room_No)}>Update</button>

                    </div>
                    
                </div>

    
            
          );
        })}
        </div>
        </div>

    </div>
    </div>
  )
}

export default Roomview