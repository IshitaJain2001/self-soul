 import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
 import "./Checkout.css"
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
   return (
    <>
    
  <div className="viewall-nav">
    <Navbar/>
  </div>
     <div className='checkout-container'>
        <h1>CHECKOUT</h1>
        <div className="profile-details">
   <div className="head">
      <label htmlFor="">CONTACT</label>
 <a href="">Log in</a>
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

        </div>
     </div>
       </>
   )
 }
 
