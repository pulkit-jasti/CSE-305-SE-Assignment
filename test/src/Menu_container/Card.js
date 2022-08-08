
import React from 'react';
import { useState } from "react";
import Axios from "axios";
const Card = () =>
{  

    const links = ['https://exp.cdn-hotels.com/hotels/4000000/3860000/3851700/3851675/9935c7f1_z.jpg'];

    const [menu,setMenu] = React.useState([]);

    const rooms = ["All Items","Starters","Main Course","Deserts","Ice Creams"]

    const [filter,setFilter] = React.useState("All Items"); // By default;

    {/* 
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
    */}

    //console.log(data)

    const getMenu = () => {
        Axios.get("http://localhost:3001/Menu").then((response) => {
          setMenu(response.data);
        });
      };


    const searchMenu = (filter) => {

        console.log(filter);

        Axios.post("http://localhost:3001/Menu_specific",{filter : filter}).then((response) => {

        setMenu(response.data);

        }); 

    };
    
    return (

    
    
    <div>
        <center className="mt-3">

            <span className="h4 m-2">Filter</span>

                <select name="filter" className="p-1" onChange={(e) => setFilter(e.target.value)} >

                    {rooms.map((item,index)=>(

                        <option value ={item} key={index} >{item}</option>
                    )

                    )}


                </select>

                <button className="btn btn-sm btn-primary m-2" onClick={() => searchMenu(filter) }>
                    
                    Filter
                </button>

        </center>
        <center>    
        
        {/*<button  class="btn btn-warning" onClick={getMenu}>View Menu</button><br></br><hr></hr>*/}
        
        {menu.length > 0 ? 

            <div className="container mt-4">
                    
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {menu.map((num,index) => ( 

                <div className="col-md-3">
                    <div className="card h-100">
                    <img style={{width: '500px', height: '250px'}}  src={num.Image} class="img-fluid img-thumbnail" alt="..."></img>
                    <div className="card-body">
                        <br/>
                        <h5 className="card-title">{num.Item_name}</h5>
                        <p className="card-text">This Item belongs to the {num.Category}</p>
                        <button style={{width: '200px'}}   className="btn btn-primary">&#x20b9; {num.Item_price}.00</button>
                    </div> 
                    </div>
                </div>
                
                

                ))}
                
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