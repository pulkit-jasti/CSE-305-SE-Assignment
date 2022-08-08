import React from 'react'

const Card = () =>
{  

    const links = ['https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',"https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/115/2020/08/20094748/spa-4.jpg","https://imgmedia.lbb.in/media/2018/11/5c016875d7a5832ac34d51be_1543596149373.jpg"];
    /*
    const [data,setData] = React.useState([]);


    React.useEffect(() => {

        fetch("https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos?hotel_id=363464", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
		"x-rapidapi-key": "afe39452b3msh2bd8f206c91335ep11efb3jsn9637fcc52c45"
        }
    })
    .then(

        response => response.json()
        
    )
    .then(json => {
        setData(json)
        
    })

    },[])

    //console.log(data)
    */
    
    return (

    
    
    <div style={{marginBottom: '50px',marginTop: '50px'}}>
        
        <center>
        <hr></hr>
        
        <h1 style={{color: "Green",fontSize: "50px"}}>Features And Services</h1>
        <hr></hr>
        {links.length > 0 ? 

            <div className="container mt-4">
                    
            <div className="row row-cols-1 row-cols-md-4 g-3">

                <div className="col-md-4">
                    <div className="card h-100">
                    <img style={{width: '500px', height: '300px'}} src='https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg' class="img-fluid img-thumbnail" alt="..."></img>
                    <div className="card-body">
                        <br/>
                        <h2 className="card-title">Room Booking </h2>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        
                    </div> 
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100">
                    <img style={{width: '500px', height: '300px'}} src='https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/115/2020/08/20094748/spa-4.jpg' class="img-fluid img-thumbnail" alt="..."></img>
                    <div className="card-body">
                        <br/>
                        <h2 className="card-title">Room Services </h2>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        
                    </div> 
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100">
                    <img style={{width: '500px', height: '300px'}} src='https://imgmedia.lbb.in/media/2018/11/5c016875d7a5832ac34d51be_1543596149373.jpg' class="img-fluid img-thumbnail" alt="..."></img>
                    <div className="card-body">
                        <br/>
                        <h2 className="card-title">Food Menu </h2>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        
                    </div> 
                    </div>
                </div>
                
                
            </div>

            </div>
         
         
         
        : 
        
        <div className="spinner-border text-primary"></div>
        
        }


        
       
        </center>
    

    </div>
  )
}

export default Card


/*
    const [data,setData] = React.useState([]);
    React.useEffect(() => {

        fetch("https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos?hotel_id=363464", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
		"x-rapidapi-key": "afe39452b3msh2bd8f206c91335ep11efb3jsn9637fcc52c45"
        }
    })
    .then(

        response => response.json()
        
    )
    .then(json => {
        setData(json)
        
    })

    },[])

console.log(data);
*/