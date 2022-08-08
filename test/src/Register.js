import React from 'react'
import "./Register.css";
import { Redirect } from 'react-router-dom';
import { useState } from "react";
import Axios from "axios";
import { useNavigate,useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Register = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mailid, setMailid] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const [details, setDetails] = useState([]);

  const postDetails = () => {
    
    Axios.post("http://localhost:3001/create", {
      
    name:name,
    age:age,
    username:username,
    password:password,
    mailid:mailid,
    gender:gender,
    mobile:mobile,
    address:address,
  
  
    }).then((response) => {
      setDetails([
        ...details,
        {
          name: name,
          age: age,
          username:username,
          password:password,
          mailid:mailid,
          gender:gender,
          mobile:mobile,
          address:address,
  
        },
      ]);
      alert("Registration Successfull")
      
    });
  };

  const red = () => {




  };
  

  return (
    <div>
        <section class="h-100 bg-dark">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
              <img  src="https://wallpaperaccess.com/full/2690549.jpg"alt="" class="img-fluid" style={{borderTopLeftRadius: '.25rem;', borderBottomLeftRadius: ".25rem",height: '1100px',width: '1000px'}} />
            </div>
            <div class="col-xl-6">
              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">Customer Registration</h3>

                <div class="row">
                  <div class="col-md-12 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m" class="form-control form-control-lg" onChange={(event) => {
            setName(event.target.value);
          }}/>
                      <label class="form-label" for="form3Example1m">Full Name</label>
                    </div>
                  </div>
                  
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m1" class="form-control form-control-lg" onChange={(event) => {
            setUsername(event.target.value);
          }}/>
                      <label class="form-label" for="form3Example1m1">Username</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n1" class="form-control form-control-lg" onChange={(event) => {
            setPassword(event.target.value);
          }} />
                      <label class="form-label" for="form3Example1n1">Password</label>
                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example97" class="form-control form-control-lg" onChange={(event) => {
            setMailid(event.target.value);
          }} />
                  <label class="form-label" for="form3Example97">Email ID</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="number" id="form3Example8" class="form-control form-control-lg"onChange={(event) => {
            setAge(event.target.value);
          }} />
                  <label class="form-label" for="form3Example8">Age</label>
                </div>

                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 class="mb-0 me-4">Gender: </h6>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="Female" onChange={(event) => {
                        setGender(event.target.value);
                      }} />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="Male" onChange={(event) => {
                        setGender(event.target.value);
                      }}/>
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline mb-0">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="Other" onChange={(event) => {
                        setGender(event.target.value);
                      }}/>
                    <label class="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>

                
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example9" class="form-control form-control-lg" onChange={(event) => {
                        setMobile(event.target.value);
                      }} />
                  <label class="form-label" for="form3Example9">Mobile Number</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example90" class="form-control form-control-lg" onChange={(event) => {
                        setAddress(event.target.value);
                      }}/>
                  <label class="form-label" for="form3Example90">Address</label>
                </div>

                

                
                
               
                  
                  <button type="button" style={{width:'550px'}} onClick={red} class="btn btn-warning btn-lg">Submit form</button>
                  <br></br><br></br>
                  <p class="mb-5 pb-lg-2" style={{color: "#393f81;"}}>Have an account?<Link to={"Register"} activeClassName="current" style={{color: "#393f81;"}}>Login</Link></p>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Register