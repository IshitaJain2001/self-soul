  import React from 'react'
  import img from "../assets/footer.png"
  import "./FooterContact.css"
  import logo from "../assets/logoo.png"
  export default function FooterContact() {
    return (
      <>
      
   
      <div className='footer-container'>
              
<img src={img} alt="" />
<div className="footer-outlay">
<img src={logo} alt="" />
</div>

           
      </div>
        <div className="emaill">
    <div className="email-inner">
      <h2>STAY UP TO DATE</h2>
      <input type="text" name="" id="" placeholder='Enter Email'/>
      <button>Subscribe & Get 15% Off</button>
      <p>*By joining, you agree to receive email marketing . Unsubscribe at any time. View Privacy Policy & Terms of Service.</p>
    </div>
    </div> 
       </>
    )
  }
  