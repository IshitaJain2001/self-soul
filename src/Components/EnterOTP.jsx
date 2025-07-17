 import React from 'react'
 import { TbPencilMinus } from "react-icons/tb";
import Navbar from './Navbar';
import "./EnterOTP.css"
import { Link } from 'react-router-dom';
 export default function EnterOTP() {
   return (
     <div className='enterotp-container'>
        <div className="viewall-nav">
            <Navbar/>
        </div>
        <div className="innerotp">

       
       <h1>ENTER OTP</h1>
       <span>The OTP is sent on Mobile Number</span>
       <span>
        phone number
        <TbPencilMinus />
       </span>
       <div className="otp-boxes">
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
       </div>
      <Link to="/AccountDetails">
      <button>VERIFY OTP</button>
      </Link> 
       <h5>Didn't Receive the OTP?</h5>
       <a href="">Resend OTP</a>
        </div>
     </div>
   )
 }
 