import React from 'react'
import Menuview from './Admin_container/Menuview'
import Paymentview from './Admin_container/Paymentview'
import Roomview from './Admin_container/Roomview'
import Header from './Container/Header'

const Admin = () => {
  return (
    <div>

        <Header/>

        <Roomview/>

        <Paymentview/>

        <Menuview/>

        


    </div>
  )
}

export default Admin