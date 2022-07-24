import React from 'react'

const Feedback = () => {
  return (

    <div style={{marginBottom: '50px'}}>
       
    <center>        
    <hr></hr>     
    <h1 style={{color: "Green",fontSize: "50px"}}>Feedback Section</h1>
    <hr></hr> 

    

    

        <div className="card" style={{width: "1000px",marginBottom: '50px'}}>
            <form className="row g-3" style={{marginBottom: '50px',marginTop: '50px',marginLeft: "50px",marginRight: '50px'}}>

                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Name</label>
                    <input type="email" className="form-control" id="inputEmail4"></input>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Email Id</label>
                    <input type="password" className="form-control" id="inputPassword4"></input>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Message</label>
                    <textarea rows="5" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></textarea>
                </div>
               
                <div className="col-12">
                    <button style={{width:'882px',height:'40px',fontStyle:'bold'}} type="submit" className="btn btn-success"><h4>Submit</h4></button>
                </div>

            </form>
    
        </div>
        </center>
    </div>
  )
}

export default Feedback