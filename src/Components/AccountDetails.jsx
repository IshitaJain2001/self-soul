 import React from 'react'
import Navbar from './Navbar'
import "./Accountdetails.css"
 
 export default function AccountDetails() {
   return (
     <div className='account-contain'>
       <div className="viewall-nav">
        <Navbar/>
  </div>
        <div className="account-inner">
            <h1>Enter Account Details</h1>
            <input type="text" name="" id="" placeholder='Full Name' />
            <input type="text" name="" id="" placeholder='Email'/>
            <input type="text" name="" id="" readOnly placeholder='number'/>
            <button>UPDATE AND CONTINUE</button>
        </div>
     
     </div>
   )
 }
 