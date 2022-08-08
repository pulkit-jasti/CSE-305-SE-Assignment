import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className='navbar-brand' >Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                    </li>
                    <li className="nav-item dropdown">
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>

                    <button className="btn btn-primary" >

                    <Link to={"Orders"} activeClassName="current" style={{color: "yellow"}}>Menu</Link>

                    </button>
                
                </div>
            </div>
        </nav>



    </div>
  )
}

export default Header