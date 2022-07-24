import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ background: "#B1EDE8 !important" }}>
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              //   src="https://img.freepik.com/premium-vector/cute-ramen-noodle-cartoon-icon-illustration_138676-2580.jpg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgdFj1OoFMNVBUmzOIBCtKgFY99cq7pGSLw&usqp=CAU"
              alt=""
            />
            <p>Savoy Cuisine</p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item dropdown"></li>
              <li className="nav-item"></li>
            </ul>

            <button className="btn btn-primary">Menu</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
