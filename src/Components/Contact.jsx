 import React from 'react'
import Navbar from './Navbar'
 import "./Contact.css"
 export default function Contact() {
   return (
 <>
 
<div className="viewall-nav">
    <Navbar/>
</div>
  <div class="contact-section">
    <h1>CONTACT US</h1>
    <p>If you have any questions or feedback or would just like to get in touch please email us</p>
   <a href="mailto:hello@selfsoul.com" >hello@selfsoul.com</a> 
    <p>We'd love to connect with you on social media!  </p>
      <p class="social">fb.me/selfsoul @selfsoul_healthwithnature</p>
   

    <form class="contact-form">
      <div class="row">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email*" required />
      </div>
      <input type="text" placeholder="Phone Number" className='ph'/>
      <textarea placeholder="Comment"></textarea>
      <button type="submit" className='sub-btn'>SEND</button>
    </form>
  </div>

 </>
   )
 }
 