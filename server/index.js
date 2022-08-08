const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "hotel",
  port: '3306',
});

app.post("/employees", (req, res) => {

  var roomtype = req.body.roomtype;
  
  if(roomtype == "All Rooms"){
    roomtype = "%";
  }

  db.query("SELECT * FROM rooms Where Room_type Like ?",[roomtype],(err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  
    
  });


  app.post("/validate_customer", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    //username = "subbu123";
    console.log(username);
    console.log(1);
    
    db.query("SELECT * FROM customer Where Username Like ? and password Like ?",[username,password],(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    
      
    });

  

  app.post("/validate_admin", (req, res) => {

      const username = req.body.username;
      const password = req.body.password;
      //username = "subbu123";
      console.log(username);
      console.log(1);
      
      db.query("SELECT * FROM admin Where Username Like ? and password Like ?",[username,password],(err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });
      
        
      });
  

app.post("/create", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const username = req.body.username;
    const password = req.body.password;
    const mailid = req.body.mailid;
    const gender = req.body.gender;
    const mobile = req.body.mobile;
    const address = req.body.address;

    db.query(
      "INSERT INTO customer VALUES (?,?,?,?,?,?,?,?)",
      [username, password, name, mailid, age,gender,mobile,address],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

  app.post("/addfeedback", (req, res) => {
    
    const username = req.body.username;
    const name = req.body.name;
    const rating = req.body.rating;
    const review = req.body.review;
    const suggest = req.body.suggest;
    var visit = req.body.visit;
    
    if(visit == "1"){
      visit = "Yes"
    }
    else{
      visit = "No"
    }

    db.query(
      "INSERT INTO feedback VALUES (?,?,?,?,?,?)",
      [username, rating, review, suggest,visit,name],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });
  

  
app.put("/update", (req, res) => {
    const Room_No = req.body.Room_No;
    const price = req.body.price;

  
    db.query(

      "UPDATE rooms SET Room_price = ? WHERE Room_No = ?",
      [price, Room_No],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );

    
  });
  
  
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });



  app.get("/Roomsview", (req, res) => {

    
    
    
  
    db.query("SELECT * FROM rooms" ,(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    
      
    });

    app.get("/paysview", (req, res) => {

    
    
    
  
      db.query("SELECT * FROM payment" ,(err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });
      
        
      });


app.get("/Menu", (req, res) => {

    
    
    
  
        db.query("SELECT * FROM food_services",(err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          });
        
          
        });
  
app.post("/Menu_specific",(req, res) => {

  var filter = req.body.filter;

  console.log(filter);

  if(filter == "All Items"){

    filter = "%"
  }

  db.query("SELECT * FROM food_services WHERE Category Like ?",[filter],(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });

  
});


app.post("/cust", (req, res) => {

  const username = req.body.username;
  console.log(username);
  db.query("SELECT * FROM customer Where username = ?",[username],(err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  
    
  });

  app.post("/specificroom", (req, res) => {

    const roomno = req.body.roomno;
    console.log(roomno);
    db.query("SELECT * FROM rooms Where Room_No = ?",[roomno],(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    
      
    });
  
    app.post("/updateMenuPrice", (req, res) => {

      const price = req.body.price;
      const Item_id = req.body.Item_id;

      
      db.query("UPDATE food_services SET Item_price = ? WHERE Item_id = ?",[price,Item_id],(err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });
      
        
      });

app.post("/addItem", (req, res) => {

        const itemprice = req.body.itemprice;
        const itemname = req.body.itemname; 
        const link = req.body.link; 
        const choose = req.body.choose;
  
        
        db.query("INSERT INTO food_services (Item_name,Category,Item_price,Image) VALUES (?,?,?,?)",[itemname,choose,itemprice,link],(err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          });
        
          
        });

app.post("/addRooms", (req, res) => {

          const roomno = req.body.roomno;
          const roomprice = req.body.roomprice;
          const roomfloor = req.body.roomfloor;
          const roomservice = "Massage";
          const roomtype = req.body.roomtype
    
          
          db.query("INSERT INTO rooms VALUES (?,?,?,?,?,?)",[roomno,roomtype,roomfloor,roomservice,roomprice,1],(err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send(result);
              }
            });
          
            
          });


app.get("/ratings", (req, res) => {

    
    
    
  
            db.query("SELECT * FROM feedback Where Customer_username Not Like ''",(err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  res.send(result);
                }
              });
            
              
            });


app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });