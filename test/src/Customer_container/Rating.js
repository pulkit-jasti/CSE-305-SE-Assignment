import React, { useEffect } from 'react'
import Radium from 'radium';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import Axios from "axios";
const Rating = () => {
    
  let navigate = useNavigate();
  const [ratingList, setRatingsList] = useState([]);
  var out = "";
  function Score() {
    console.log(1);
    useEffect(() => {
        Axios.get("http://localhost:3001/ratings").then((response) => {
            console.log("Got");
            console.log(response.data);
            setRatingsList(response.data);
            
        });
        
    }, []);

}

Score();
console.log(ratingList)

    
  return (
    
    <div >     
    <div style={{marginBottom: '50px'}} >
    
    

    
    <center>        
    <hr></hr>     
    <h1 style={{color: "Green",fontSize: "50px"}}>Rating Section</h1>
    <hr></hr> 
            
            <div className="container mt-6" >
            <div className="card" style={{borderColor: "Green"}}>
                <div className="row no-gutters">
                    
                    <div className="col-md-4 border-right">
                        <div className="ratings text-center p-4 py-5"> <span style={{"fontSize": '20px'}} className="badge bg-success">4.1 <span className="fa fa-star-o"></span> </span> <span className="d-block about-rating">VERY GOOD</span> <span className="d-block total-ratings">183 ratings</span> </div>
                    </div>

                    <div className="fw-bold col-sm-1 border-right">
                        
                        <div style={{marginTop:"20px",textAlign:"left"}}>
                            
                            <span style={{marginTop:"15px"}}>Excellent</span><br></br>
                            <span style={{marginTop:"15px"}}>VeryGood</span><br></br>
                            <span style={{marginTop:"15px"}}>Good</span><br></br>
                            <span style={{marginTop:"15px"}}>Average</span><br></br>
                            <span style={{marginTop:"15px"}}>Poor</span><br></br>
                            
                        
                        </div>
                        
                    </div>
                    
                    <div className="col-md-7">
                        <div className="rating-progress-bars p-4" >

                            <div className="progress-1 align-items-center" >
                            
                                <div className="progress" style={{height:'25px'}}>
                                 <div className="progress-bar bg-success" role="progressbar" style={{width: "70%",height: "30px"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"> 71% </div>
                                </div>
                                
                                <div className="progress " style={{height:'25px'}}>
                                <div className="progress-bar bg-primary" role="progressbar" style={{width: '55%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">55%</div>
                                </div>
                                <div className="progress" style={{height:'25px'}}>
                                <div className="progress-bar bg-secondary" role="progressbar" style={{width: '48%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">48%</div>
                                </div>
                                <div className="progress" style={{height:'25px'}}>
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: '30%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
                                </div>
                                <div className="progress" style={{height:'25px'}}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: '15%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">15%</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            
            
            </div>
    

    </div>


    














{/*   
<div style={{backgroundColor: '#ad655f'}}>
  <div className="container my-5 py-5">
    <div className="row d-flex justify-content-center">
      <div className="col-md-12 col-lg-10">
        <div className="card text-dark">
          <div className="card-body p-4">
            <h4 className="mb-0">Recent comments</h4>
            <p className="fw-light mb-4 pb-2">Latest Comments section by users</p>

            <div className="d-flex flex-start">
              <spanmg className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 className="fw-bold mb-1">Maggie Marsh</h6>
                <div className="d-flex align-items-center mb-3">
                  <p className="mb-0">
                    March 07, 2021
                    <span className="badge bg-primary">Pending</span>
                  </p>
                  <a href="#!" className="link-muted"><span className="fas fa-pencil-alt ms-2"></span></a>
                  <a href="#!" className="link-muted"><span className="fas fa-redo-alt ms-2"></span></a>
                  <a href="#!" className="link-muted"><span className="fas fa-heart ms-2"></span></a>
                </div>
                <p className="mb-0">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled it.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-0" />

          <div className="card-body p-4">
            <div className="d-flex flex-start">
              <spanmg className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 className="fw-bold mb-1">Lara Stewart</h6>
                <div className="d-flex align-items-center mb-3">
                  <p className="mb-0">
                    March 15, 2021
                    <span className="badge bg-success">Approved</span>
                  </p>
                  <a href="#!" className="link-muted"><span className="fas fa-pencil-alt ms-2"></span></a>
                  <a href="#!" className="text-success"><span className="fas fa-redo-alt ms-2"></span></a>
                  <a href="#!" className="link-danger"><span className="fas fa-heart ms-2"></span></a>
                </div>
                <p className="mb-0">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It
                  has roots in a piece of classNameical Latin literature from 45 BC, making it
                  over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more obscure
                  Latin words, consectetur, from a Lorem Ipsum passage, and going through
                  the cites.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-0" style={{height: '1px'}} />

          <div className="card-body p-4">
            <div className="d-flex flex-start">
              <spanmg className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 className="fw-bold mb-1">Alexa Bennett</h6>
                <div className="d-flex align-items-center mb-3">
                  <p className="mb-0">
                    March 24, 2021
                    <span className="badge bg-danger">Rejected</span>
                  </p>
                  <a href="#!" className="link-muted"><span className="fas fa-pencil-alt ms-2"></span></a>
                  <a href="#!" className="link-muted"><span className="fas fa-redo-alt ms-2"></span></a>
                  <a href="#!" className="link-muted"><span className="fas fa-heart ms-2"></span></a>
                </div>
                <p className="mb-0">
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to be sure.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-0" />

          <div className="card-body p-4">
            <div className="d-flex flex-start">
              <spanmg className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).webp" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 className="fw-bold mb-1">Betty Walker</h6>
                <div className="d-flex align-items-center mb-3">
                  <p className="mb-0">
                    March 30, 2021
                    <span className="badge bg-primary">Pending</span>
                  </p>
                  <a href="#!" className="link-muted"><span className="fas fa-pencil-alt ms-2"></span></a>
                  <a href="#!" className="link-muted"><span className="fas fa-redo-alt ms-2"></span></a>
                  <a href="#!" className="link-muted"><span className="fas fa-heart ms-2"></span></a>
                </div>
                <p className="mb-0">
                  It uses a dictionary of over 200 Latin words, combined with a handful of
                  model sentence structures, to generate Lorem Ipsum which looks
                  reasonable. The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>    


*/} 


    {/* 
    <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
                <div className="card">
                    <div className="row justify-content-left d-flex">
                        <div className="col-md-4 d-flex flex-column">
                            <div className="rating-box">
                                <h1 className="pt-4">4.0</h1>
                                <p className="">out of 5</p>
                            </div>
                            <div> <span className="fa fa-star star-active mx-1"></span> <span className="fa fa-star star-active mx-1"></span> <span className="fa fa-star star-active mx-1"></span> <span className="fa fa-star star-active mx-1"></span> <span className="fa fa-star star-inactive mx-1"></span> </div>
                        </div>
                        <div className="col-md-8">
                            <div className="rating-bar0 justify-content-center">
                                <table className="text-left mx-auto">
                                    <tr>
                                        <td className="rating-label">Excellent</td>
                                        <td className="rating-bar">
                                            <div className="bar-container">
                                                <div className="bar-5"></div>
                                            </div>
                                        </td>
                                        <td className="text-right">123</td>
                                    </tr>
                                    <tr>
                                        <td className="rating-label">Good</td>
                                        <td className="rating-bar">
                                            <div className="bar-container">
                                                <div className="bar-4"></div>
                                            </div>
                                        </td>
                                        <td className="text-right">23</td>
                                    </tr>
                                    <tr>
                                        <td className="rating-label">Average</td>
                                        <td className="rating-bar">
                                            <div className="bar-container">
                                                <div className="bar-3"></div>
                                            </div>
                                        </td>
                                        <td className="text-right">10</td>
                                    </tr>
                                    <tr>
                                        <td className="rating-label">Poor</td>
                                        <td className="rating-bar">
                                            <div className="bar-container">
                                                <div className="bar-2"></div>
                                            </div>
                                        </td>
                                        <td className="text-right">3</td>
                                    </tr>
                                    <tr>
                                        <td className="rating-label">Terrible</td>
                                        <td className="rating-bar">
                                            <div className="bar-container">
                                                <div className="bar-1"></div>
                                            </div>
                                        </td>
                                        <td className="text-right">0</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    */}

    </center>


    <div class="row row-cols-1 row-cols-md-2">

      {ratingList.map((val, key) => {
        return(
        <div class="col">

            <div className="card" style={{width: '33rem',marginLeft:"110px",marginTop:"50px",borderColor: "Green"}} >
              
            <div className="card mb-6">
            <div className="row g-0">
              <div className="col-md-4">
                <img style={{borderRadius: '100%'}}src="https://www.seekpng.com/png/detail/421-4219874_icone-homem-png-man-icon-png.png" className="img-fluid " alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body" style={{textAlign:"left"}} >
                  <h4 className="fw-bold card-title" >{val.Customer_name}</h4>
                
                  <span className="badge bg-success" style={{"fontSize": '20px'}}>{val.Rating}.0 </span>
                  <script>
                  
                  </script>
                 {val && (<h5 style={{marginTop:'20px',fontWeight:"bold"}}>{val.Rating === 5? "Excellent" : val.Rating === 4? "Very Good": "Average" }</h5>)}

                  <p style={{marginTop:'20px'}}  className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
                
                  <div className="card-body">
              
                      <p className="card-text">{val.Review}</p>
                  
                  </div>
              </div>
        </div>
        );
        })};
        
              
          
        </div>


    </div>

    </div>


  )
}

export default Rating