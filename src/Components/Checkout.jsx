 import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
 import "./Checkout.css"
 import { IoMdCard } from "react-icons/io";
 import { BsBank } from "react-icons/bs";
 import { HiCash } from "react-icons/hi";
 import imgg from "../assets/upi.png"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
 export default function Checkout() {
      const radioRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);
    const handleRadioClick = () => {
    if (isChecked) {
      radioRef.current.checked = false;
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };
  const cartItems = useSelector((state) => state.cartDetails.product);
const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
   return (
    <>
    
  <div className="viewall-nav">
    <Navbar/>
  </div>
    
     <div className='checkout-container'>
      <h1>CHECKOUT</h1>

      <div className="checkout-parts">
   <div className="profile-details">
   <div className="head">
      <label htmlFor="">CONTACT</label>
<Link to="/Login">
 <a href="">Log in</a> </Link>
    </div>     

   <br />        
          
<input type="text" name="" id="" placeholder='Email ID or Phone Number'/>
<br />
<div className="address-details">
<label htmlFor="">ADDRESS</label>
<br />
<input type="text" placeholder='Full Name'/>
<br />
<input type="text" placeholder='Address'/>
<br />
<input type="text" placeholder='Landmark (optional)' />
<br />
<div className="add">
<input type="text" placeholder='State' />
<input type="text" placeholder='Pincode' />
<input type="text" placeholder='Country'/>
</div>

<br />
<input type="text" placeholder='Phone Number' />

<div className="radio-btn">
<input type="radio" name="" id=""  ref={radioRef}
        onClick={handleRadioClick}
        readOnly/>
<span>Save this Address for Future Purchases</span>
</div>

</div>
<div className="payment-details">
    <label htmlFor="">PAYMENT</label>
    <span>All transactions are secure and encrypted.</span>
<div>
    <div>
       <input type="radio" name="" id="" /> 
     <span>UPI</span>
      </div>
     <img src={imgg} alt="" />
    </div>  
    <div>
      <div>
  <input type="radio" name="" id="" />
  <span>Debit or Credit Card</span>
      </div>

  <IoMdCard />
    </div>
 <div>
 <div>
   <input type="radio" name="" id="" />
  <span>Net Banking</span>
 </div>
  <BsBank />
 </div>
 <div>
  <div>
 <input type="radio" name="" id="" />
   <span>Pay on Delivery</span>
  </div>
  
   <HiCash />
 </div>

</div>
<button className='proceed-btn'>
          PROCEED
        </button>
        <hr />
        </div>


        
   <div className="cart-details">
    {
      cartItems.length>0?
      cartItems.map((item,index)=>{return(
<div key={index}>
              <li>{item.item}</li>
              <p>{item.price*item.quantity}</p>
          </div>
    
      )
        
      })
      : <p>nothing in the cart</p>
    }
    </div>   
      </div>
       
     </div>
       </>
   )
 }
 
