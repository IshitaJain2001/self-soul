import React from 'react'
import "./FooterSection.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
export default function FooterSection() {
  return (
    <div className='footerSection-container'>
      <div className="footer-wrapper">
 
    
    <ul className="footer-col">
      <h4>The Self'soul STORE</h4>
      <li>Our Heritage</li>
      <li>What Makes Us Different</li>
    </ul>

    <ul className="footer-col">
      <h4>SHOP</h4>
      <li>Bath</li>
      <li>Body</li>
      <li>Face</li>
      <li>Best Seller</li>
      <li>Value Sets</li>
      <li>Gift</li>
    </ul>

    <ul className="footer-col">
      <h4>SUPPORT</h4>
     <Link to="/FAQ">  <li>FAQs</li> </Link>
    <Link to="/Contact">
    <li>Contact Us</li>
    </Link>  
    </ul>

    <ul className="footer-col">
      <h4>USEFUL LINKS</h4>
      <li>Privacy Policy</li>
      <li>Terms & Conditions</li>
      <li>Returns & Refund policy</li>
      <li>Delivery Enquiries</li>
    </ul>

    <ul className="footer-col">
      <h4>CUSTOMER CARE</h4>
      <li><b>Email:</b> hello@self'soul.com</li>
      <li><b>Mon-Fri 10AM to 6:00PM</b></li>
      <li>Call: +44(0) 7438890745</li>
      <div className="social-icons">
        <span><FaFacebook /></span>
        <span><FaInstagram /></span>
        <span><AiOutlineLinkedin /></span>
        <span><MdOutlineMailOutline /></span>
      </div>
    </ul>

  </div>
</div>

   
  )
}
