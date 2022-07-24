import React from 'react'

const Filter = () => {

    const rooms = ["Pizza","Starters","Main Course","Deserts","Ice Creams"]

    const [filter,setFilter] = React.useState("All Items"); // By default;

    return (
        <div className="mt-3">
            
            <center className="mt-3">

                <span className="h4 m-2">Filter</span>

                <select name="filter" className="p-1" onChange={(e) => setFilter(e.target.value)}>

                    {rooms.map((item,index)=>(

                        <option value ={item} key={index}>{item}</option>
                    )
                
                    )}


                </select>

                <button className="btn btn-sm btn-primary m-2" onClick={() => console.log(filter) }>
                    
                    Filter
                </button>

            </center>


        </div>
    )
}

export default Filter