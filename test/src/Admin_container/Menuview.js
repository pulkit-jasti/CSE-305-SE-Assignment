import React from 'react';
import { useState } from "react";
import Axios from "axios";
const Menuview = () => {

  const rooms = ["All Items","Starters","Main Course","Deserts","Ice Creams"]

  const [filter,setFilter] = React.useState("All Items");
  const [menu,setMenu] = React.useState([]);

  const [choose,setChoose] = React.useState("");

  const getMenu = () => {
    Axios.get("http://localhost:3001/Menu").then((response) => {
      setMenu(response.data);
    });
  };
  
  const [newPrice, setNewprice] = useState(0);

  const [itemprice, setItemPrice] = useState(0);
  const [itemname, setItemName] = useState("");
  const [link, setLink] = useState("");
  const updateMenuPrice = (Item_id) => {
      
    console.log("Endited")

    Axios.post("http://localhost:3001/updateMenuPrice", { price: newPrice, Item_id: Item_id }).then(
      (response) => {
        alert("Update Successfull")
        //window.location.reload();
        



      }
    );

    
  };

  const addItem = () => {
  Axios.post("http://localhost:3001/addItem", { itemname : itemname,itemprice: itemprice,choose : choose,link : link}).then(
      (response) => {
        alert("Update Successfull")
        //window.location.reload();
        setMenu([
          ...menu,
          {
            itemprice : itemprice,
            itemname : itemname, 
            link : link,
            choose : choose,
            
    
          },
        ]);



      }
    );
  };

  const searchMenu = (filter) => {

    console.log(filter);

    Axios.post("http://localhost:3001/Menu_specific",{filter : filter}).then((response) => {

    setMenu(response.data);

    }); 

};
  return (
    <div>
        <br></br><hr></hr>
    <div className="container" style={{marginLeft:"150px"}}>
        <h1>Menu </h1>
        <div class="row" style={{marginBottom:"50px"}}>
        <div class="col-sm-6">
            <div class="card">
            <div class="card-body"  style={{marginBottom:"00px"}}>
                <h4 class="card-title">Click the button to view the Menu</h4>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <button style={{width:"600px"}} type="submit" class="btn btn-warning" ><span >View Menu</span></button>
            </div>
            </div>
        </div>

        <div class="col-sm-6">
        
            <div class="card">
            <center><h3>Add Item To Menu</h3></center>
            <div class="card-body">
            <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m1" class="form-control form-control-lg" onChange={(event) => {
            setItemName(event.target.value);
          }}/>
                      <label class="form-label" for="form3Example1m1">Item Name </label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n1" class="form-control form-control-lg" onChange={(event) => {
            setItemPrice(event.target.value);
          }} />
                      <label class="form-label" for="form3Example1n1">Price</label>
                    </div>
                  </div>
            </div>


            <div class="row">
                  
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <input type="text" id="form3Example1m1" class="form-control form-control-lg" onChange={(event) => {
                    setLink(event.target.value);
                    
                  }}/>
                  <label class="form-label" for="form3Example1m1">Image Link </label>
                    
                      
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    
                    <select name="choose" style={{width: '290px'}} className="p-1" onChange={(e) => setChoose(e.target.value)} >

                      {rooms.map((item,index)=>(

                          <option value ={item} key={index} >{item}</option>
                      )

                      )}


                      </select>
                    </div>
                  </div>

            </div>

            <button style={{width: '600px'}} type="submit" class="btn btn-warning" onClick={addItem}><span >Submit</span></button>
                
                
            </div>
            </div>
        </div>
        

        
        
        </div>
        <hr></hr>
        <br></br>

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
        <div class="container" style={{marginTop:"50px;"}}>        
        
          
                         
                      

                  {/*<button  class="btn btn-warning" onClick={getMenu}>View Menu</button><br></br><hr></hr>*/}

                  {menu.length > 0 ? 

                    <div class="row">

                      {menu.map((num,index) => ( 

                      <div className="col-md-3">
                          <div className="card ">
                          <img style={{width: '500px', height: '250px'}}  src={num.Image} class="img-fluid img-thumbnail" alt="..."></img>
                          <div className="card-body">
                              <br/>
                              <h5 className="card-title">{num.Item_name}</h5>
                              <p className="card-text">This Item belongs to the {num.Category}</p>
                              <button style={{width: '270px'}}   className="btn btn-primary">&#x20b9; {num.Item_price}.00</button>
                              <br></br><br></br>
                              <div class="input-group mb-3">
                              
                            <input type="text" class="form-control" placeholder="Price" aria-label="Price" onChange={(event) => {setNewprice(event.target.value);}}/>
                            
                            <button  class="btn btn-warning" value={num.Item_id} onClick={() => updateMenuPrice(num.Item_id)}>Update</button>

                    </div>
                          </div> 
                          </div>
                      </div>
                      
                      

                      ))}
                      
                  
                    </div>




                  : 

                  <div className="spinner-border text-primary"></div>

                  }




                  




        </div>
        </div>

    </div>
  )
}

export default Menuview