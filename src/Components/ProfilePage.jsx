 import React from 'react'
import Navbar from './Navbar'
 
 export default function ProfilePage() {
   return (
     <div className='profile-container'>
       <div className="viewall-nav">
        <Navbar/>
       </div>
       <div className="inner-profile">
        <h1></h1>
        <p></p>
        <label htmlFor=""></label>
        <input type="text" name="" id="" readOnly/>
        <label htmlFor=""></label>
        <input type="text" name="" id="" readOnly/>
        <label htmlFor=""></label>
        <input type="text" name="" id="" readOnly/>
       </div>
     </div>
   )
 }
 