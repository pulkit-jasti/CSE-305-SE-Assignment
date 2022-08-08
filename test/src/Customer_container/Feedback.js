import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useState } from "react";
import Axios from "axios";
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Feedback = () => {

    let navigate = useNavigate();
    let { username }= useParams()

    

    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [suggest, setSuggest] = useState("");
    const [visit, setVisit] = useState(0);

    const addfeed = () => {

        console.log("Entered");
        console.log(visit);
    
        Axios.post("http://localhost:3001/addfeedback", {
          
        username: username,
        name : name,
        rating: rating,
        review: review,
        suggest: suggest,
        visit: visit,
        
      
      
        }).then((response) => {
          
          alert("Feedback Entered Successfully")
        });
      };

  return (

    <div style={{marginBottom: '50px'}}>
       
    <center>        
    <hr></hr>     
    <h1 style={{color: "Green",fontSize: "50px"}}>Feedback Section</h1>
    <hr></hr> 

    

    

        <div className="card" style={{width: "1000px",marginBottom: '50px'}}>
            <div className="row g-3" style={{marginBottom: '50px',marginTop: '50px',marginLeft: "50px",marginRight: '50px'}}>

                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputEmail4" onChange={(event) => {setName(event.target.value);}}></input>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Rating</label>
                    <input type="number" className="form-control" id="inputPassword4" onChange={(event) => {setRating(event.target.value);}}></input>
                </div>
                <div className="col-6">
                    <label for="inputAddress" className="form-label">Review</label>
                    <textarea rows="5" type="text" className="form-control" id="inputAddress" onChange={(event) => {setReview(event.target.value);}}></textarea>
                </div>
                <div className="col-6">
                    <label for="inputAddress" className="form-label">Suggestions</label>
                    <textarea rows="5" type="text" className="form-control" id="inputAddress" onChange={(event) => {setSuggest(event.target.value);}}></textarea>
                </div>
                <div className="col-12">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="1" id="1"onChange={(event) => {setVisit(event.target.value);}}/>
                <label class="form-check-label" for="flexCheckDefault">
                    Would You Like To Visit Again ?
                </label>
                </div>
                </div>
                
                <button style={{width:'882px',height:'40px',fontStyle:'bold'}} type="submit" className="btn btn-warning" onClick={addfeed}>Submit</button>
                

            </div>
    
        </div>
        </center>
    </div>
  )
}

export default Feedback