import React from 'react'
import Radium from 'radium';
const Rating = () => {
    

    
  return (
    
    <div >     
    <div style={{marginBottom: '50px'}}>
    
    

    
    <center>        
    <hr></hr>     
    <h1 style={{color: "Green",fontSize: "50px"}}>Rating Section</h1>
    <hr></hr> 
            
            <div class="container mt-5">
            <div class="card" style={{borderColor: "Green"}}>
                <div class="row no-gutters">
                    
                    <div class="col-md-4 border-right">
                        <div class="ratings text-center p-4 py-5"> <span class="badge bg-success">4.1 <i class="fa fa-star-o"></i></span> <span class="d-block about-rating">VERY GOOD</span> <span class="d-block total-ratings">183 ratings</span> </div>
                    </div>

                    <div class="col-sm-1 border-right">
                        <div style={{marginTop:"20px",align:"left"}}>

                            <h6>Excellent</h6>
                            <h6>Very Good</h6>
                            <h6>Good</h6>
                            <h6>Average</h6>
                            <h6>Poor</h6>


                        </div>
                    </div>
                    
                    <div class="col-md-7">
                        <div class="rating-progress-bars p-4" >

                            <div class="progress-1 align-items-center" >
                            
                                <div class="progress" style={{height:'25px'}}>
                                 <div class="progress-bar bg-success" role="progressbar" style={{width: "70%",height: "30px"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"> 71% </div>
                                </div>
                                
                                <div class="progress " style={{height:'25px'}}>
                                <div class="progress-bar bg-primary" role="progressbar" style={{width: '55%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">55%</div>
                                </div>
                                <div class="progress" style={{height:'25px'}}>
                                <div class="progress-bar bg-secondary" role="progressbar" style={{width: '48%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">48%</div>
                                </div>
                                <div class="progress" style={{height:'25px'}}>
                                <div class="progress-bar bg-warning" role="progressbar" style={{width: '30%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
                                </div>
                                <div class="progress" style={{height:'25px'}}>
                                <div class="progress-bar bg-danger" role="progressbar" style={{width: '15%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">15%</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            
            
            </div>
    

    </div>


    <div class="card" style={{width: '18rem'}}>
    
    <div class="card mb-6">
  <div class="row g-0">
    <div class="col-md-4">
      <img style={{borderRadius: '100%'}}src="https://www.seekpng.com/png/detail/421-4219874_icone-homem-png-man-icon-png.png" className="img-fluid " alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    
        <div class="card-body">
    
            <h5 class="card-title">Card title</h5>
    
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
            <button  className="btn btn-primary">Go somewhere</button>
    
        </div>
    </div>














{/*   
<div style={{backgroundColor: '#ad655f'}}>
  <div class="container my-5 py-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12 col-lg-10">
        <div class="card text-dark">
          <div class="card-body p-4">
            <h4 class="mb-0">Recent comments</h4>
            <p class="fw-light mb-4 pb-2">Latest Comments section by users</p>

            <div class="d-flex flex-start">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 class="fw-bold mb-1">Maggie Marsh</h6>
                <div class="d-flex align-items-center mb-3">
                  <p class="mb-0">
                    March 07, 2021
                    <span class="badge bg-primary">Pending</span>
                  </p>
                  <a href="#!" class="link-muted"><i class="fas fa-pencil-alt ms-2"></i></a>
                  <a href="#!" class="link-muted"><i class="fas fa-redo-alt ms-2"></i></a>
                  <a href="#!" class="link-muted"><i class="fas fa-heart ms-2"></i></a>
                </div>
                <p class="mb-0">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled it.
                </p>
              </div>
            </div>
          </div>

          <hr class="my-0" />

          <div class="card-body p-4">
            <div class="d-flex flex-start">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 class="fw-bold mb-1">Lara Stewart</h6>
                <div class="d-flex align-items-center mb-3">
                  <p class="mb-0">
                    March 15, 2021
                    <span class="badge bg-success">Approved</span>
                  </p>
                  <a href="#!" class="link-muted"><i class="fas fa-pencil-alt ms-2"></i></a>
                  <a href="#!" class="text-success"><i class="fas fa-redo-alt ms-2"></i></a>
                  <a href="#!" class="link-danger"><i class="fas fa-heart ms-2"></i></a>
                </div>
                <p class="mb-0">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It
                  has roots in a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more obscure
                  Latin words, consectetur, from a Lorem Ipsum passage, and going through
                  the cites.
                </p>
              </div>
            </div>
          </div>

          <hr class="my-0" style={{height: '1px'}} />

          <div class="card-body p-4">
            <div class="d-flex flex-start">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 class="fw-bold mb-1">Alexa Bennett</h6>
                <div class="d-flex align-items-center mb-3">
                  <p class="mb-0">
                    March 24, 2021
                    <span class="badge bg-danger">Rejected</span>
                  </p>
                  <a href="#!" class="link-muted"><i class="fas fa-pencil-alt ms-2"></i></a>
                  <a href="#!" class="link-muted"><i class="fas fa-redo-alt ms-2"></i></a>
                  <a href="#!" class="link-muted"><i class="fas fa-heart ms-2"></i></a>
                </div>
                <p class="mb-0">
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to be sure.
                </p>
              </div>
            </div>
          </div>

          <hr class="my-0" />

          <div class="card-body p-4">
            <div class="d-flex flex-start">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).webp" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 class="fw-bold mb-1">Betty Walker</h6>
                <div class="d-flex align-items-center mb-3">
                  <p class="mb-0">
                    March 30, 2021
                    <span class="badge bg-primary">Pending</span>
                  </p>
                  <a href="#!" class="link-muted"><i class="fas fa-pencil-alt ms-2"></i></a>
                  <a href="#!" class="link-muted"><i class="fas fa-redo-alt ms-2"></i></a>
                  <a href="#!" class="link-muted"><i class="fas fa-heart ms-2"></i></a>
                </div>
                <p class="mb-0">
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
    <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
                <div class="card">
                    <div class="row justify-content-left d-flex">
                        <div class="col-md-4 d-flex flex-column">
                            <div class="rating-box">
                                <h1 class="pt-4">4.0</h1>
                                <p class="">out of 5</p>
                            </div>
                            <div> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-inactive mx-1"></span> </div>
                        </div>
                        <div class="col-md-8">
                            <div class="rating-bar0 justify-content-center">
                                <table class="text-left mx-auto">
                                    <tr>
                                        <td class="rating-label">Excellent</td>
                                        <td class="rating-bar">
                                            <div class="bar-container">
                                                <div class="bar-5"></div>
                                            </div>
                                        </td>
                                        <td class="text-right">123</td>
                                    </tr>
                                    <tr>
                                        <td class="rating-label">Good</td>
                                        <td class="rating-bar">
                                            <div class="bar-container">
                                                <div class="bar-4"></div>
                                            </div>
                                        </td>
                                        <td class="text-right">23</td>
                                    </tr>
                                    <tr>
                                        <td class="rating-label">Average</td>
                                        <td class="rating-bar">
                                            <div class="bar-container">
                                                <div class="bar-3"></div>
                                            </div>
                                        </td>
                                        <td class="text-right">10</td>
                                    </tr>
                                    <tr>
                                        <td class="rating-label">Poor</td>
                                        <td class="rating-bar">
                                            <div class="bar-container">
                                                <div class="bar-2"></div>
                                            </div>
                                        </td>
                                        <td class="text-right">3</td>
                                    </tr>
                                    <tr>
                                        <td class="rating-label">Terrible</td>
                                        <td class="rating-bar">
                                            <div class="bar-container">
                                                <div class="bar-1"></div>
                                            </div>
                                        </td>
                                        <td class="text-right">0</td>
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
    </div>

    </div>


  )
}

export default Rating