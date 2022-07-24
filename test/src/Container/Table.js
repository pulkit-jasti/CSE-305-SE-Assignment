import React from 'react'

const Table = () => {

    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

    const inActiveBtn = 'btn btn-outline-primary m-2';

    const activeBtn = 'btn btn-outline-primary m-2 active'; 

    const [number,setNumber] = React.useState(null);

    return (
        <div>
            
            <center className = "mt-5">

                {numbers.map((num,index) => (

                    <div style={{display: 'inline'}} key = {index}>

                        <button className={number === num ? activeBtn : inActiveBtn} onClick = { () => setNumber(num) }>

                            {num}

                        </button>
                    </div>
                ))}


            </center>


        </div>
    )
}

export default Table