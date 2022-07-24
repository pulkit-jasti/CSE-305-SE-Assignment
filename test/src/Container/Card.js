import React from "react";

const Card = () => {
  const links = ["https://exp.cdn-hotels.com/hotels/4000000/3860000/3851700/3851675/9935c7f1_z.jpg"];

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos?hotel_id=363464", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
        "x-rapidapi-key": "afe39452b3msh2bd8f206c91335ep11efb3jsn9637fcc52c45",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  //console.log(data)

  return (
    <div>
      <center>
        {data.length > 0 ? (
          <div className="container mt-4">
            <div className="card-container">
              {data.map((num, index) => (
                <div className="card h-100">
                  <img src={num.mainUrl} alt="..."></img>
                  <div className="card-body">
                    <br />
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-primary">Click for more Info</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="spinner-border text-primary"></div>
        )}
      </center>
    </div>
  );
};

export default Card;

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
