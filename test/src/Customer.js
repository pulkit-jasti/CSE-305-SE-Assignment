import React from 'react'
import Card from './Customer_container/Card'
import Feedback from './Customer_container/Feedback'
import Header from './Customer_container/Header'
import Rating from './Customer_container/Rating'
import Search from './Customer_container/Search'
import Welcome from './Customer_container/Welcome'


const Customer = () => {
  return (
    <div>
      
      <Header />
      
      <Welcome />
     
      <Card />

      <Feedback />
    
      <Rating />       

      <Search/>
    </div>
  )
}

// Divide the home component into nav, table , filter, content

export default Customer