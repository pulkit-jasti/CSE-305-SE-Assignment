import React from 'react'
import Card from './Menu_container/Card'
import Filter from './Menu_container/Filter'
import Header from './Menu_container/Header'

const Orders = () => {
  return (
    <div>
    <Header/>
    
    <center> 
        <hr></hr>
        
        <h1> This is orders section </h1>
        
    </center>
    <Filter />
    <Card />
    </div>
  )
}

export default Orders