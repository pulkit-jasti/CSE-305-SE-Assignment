import React from 'react'
import Card from './Container/Card'
import Filter from './Container/Filter'
import Header from './Container/Header'
import Table from './Container/Table'
import "./Home.css";
const Home = () => {
  return (
    <div>
      
  <body>
    <div class="container">
        <div class="navbar">
            <img src="/images/logo.png" alt="logo" style={{paddingTop: '50px'}}/>
            <nav>
                <ul>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="register.html">Register</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="welcome.html">Welcome</a></li>
                </ul>
            </nav>
        </div>

        <div class="row">
            <div class="col">
                <h1>SKB</h1>
                <p>We are honoured to welcome you to out officila website of our hotel. We request you to login and experience our wonderful services.</p>
                <a href="login.html">
                    <button type="button">Login</button>
                </a>
                <a href="register.html">
                    <button type="button">Register</button>
                </a>
            </div>
            <div class="col">
                <div class="card card1">
                    <h5>Rooms</h5>
                </div>
                <div class="card card2">
                    <h5>Food</h5>
                </div>
                <div class="card card3">
                    <h5>Pool</h5>
                </div>
                <div class="card card4">
                    <h5>Services</h5>
                </div>
                <div class="card card5">
                    <h5>Restaurent</h5>
                </div>
                <div class="card card6">
                    <h5>Gym</h5>
                </div>
            </div>
        </div>
    </div>
</body>

      
    </div>
  )
}

// Divide the home component into nav, table , filter, content

export default Home