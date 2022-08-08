import React from 'react'

import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';
import Customer from './Customer';
import Tester from './Tester';
import Login from './Login';
import Register from './Register';
import Payment from './Payment';
import Admin from './Admin';
const App = () => {
  return (
    
    <div>

      <BrowserRouter>
      
        <Routes>

          <Route path= "/" element={<Login />}/>

          <Route path= "customer/:username/orders" element = {<Orders />}/>

          <Route path= "/customer/:username" element = {<Customer />}/>

          <Route path= "/tester" element = {<Tester />}/>

          <Route path= "/Login" element = {<Login />}/>

          <Route path= "/Register" element = {<Register />}/>

          <Route path= "/Payment/:username/:roomno" element = {<Payment />}/>

          <Route path= "/Admin" element = {<Admin />}/>

        </Routes>
      
      </BrowserRouter>
  
    </div>


  )
}

export default App