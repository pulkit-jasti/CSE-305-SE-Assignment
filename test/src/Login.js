import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  const navigate = useNavigate();

  var x = -1;
  var y = -1;

  const getEmployees = () => {
    //console.log(username);
    Axios.post("http://localhost:3001/validate_customer", { username: username, password: password })
      .then((response) => {
        console.log(response.data.length);

        x = response.data.length; //

        if (x > 0) {
          alert("Login Successful");
          navigate(`/customer/${username}`);
        } else {
          x = 0;
        }

        setEmployeeList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    Axios.post("http://localhost:3001/validate_admin", { username: username, password: password }).then((response) => {
      console.log(response.data.length);

      y = response.data.length; //

      if (y > 0) {
        alert("Login Successful");
        navigate("/Admin");
      } else {
        y = 0;
        if (x === 0 && y === 0) {
          alert("Invalid Username and Password");
        }
      }

      setEmployeeList(response.data);
    });
    console.log(x, y);
  };

  return (
    <div>
      <div className="container">
        <section class="vh-100" style={{ backgroundColor: "#9A616D" }}>
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col col-xl-10">
                <div class="card" style={{ borderRadius: "1rem" }}>
                  <div class="row g-0">
                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://www.lambri.com/wp-content/uploads/2016/11/pexels-photo-244133.jpeg"
                        alt="login form"
                        class="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                      <div class="card-body p-4 p-lg-5 text-black">
                        <form>
                          <center>
                            <div class="d-flex align-items-center mb-3 pb-1">
                              <i class="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                              <span style={{ marginLeft: "100px" }} class="h1 fw-bold mb-0">
                                Login Section
                              </span>
                            </div>
                          </center>
                          <br></br>
                          <h4 class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px;" }}>
                            Sign into your account
                          </h4>

                          <div class="form-outline mb-4">
                            <input
                              type="email"
                              id="form2Example17"
                              class="form-control form-control-lg"
                              onChange={(event) => {
                                setusername(event.target.value);
                              }}
                            />
                            <label class="form-label" for="form2Example17">
                              Username
                            </label>
                          </div>

                          <div class="form-outline mb-4">
                            <input
                              type="password"
                              id="form2Example27"
                              class="form-control form-control-lg"
                              onChange={(event) => {
                                setpassword(event.target.value);
                              }}
                            />
                            <label class="form-label" for="form2Example27">
                              Password
                            </label>
                          </div>

                          <div class="pt-1 mb-4">
                            <button class="btn btn-dark btn-lg btn-block" type="button" onClick={getEmployees}>
                              Login
                            </button>
                          </div>

                          <p class="mb-5 pb-lg-2" style={{ color: "#393f81;" }}>
                            Don't have an account?
                            <Link to={"Register"} activeClassName="current" style={{ color: "#393f81;" }}>
                              Register
                            </Link>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
