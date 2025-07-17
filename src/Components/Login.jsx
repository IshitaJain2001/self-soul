 import { Link } from "react-router-dom";
import "./Login.css"
 import Navbar from "./Navbar"
 import { MdOutlineMail } from "react-icons/md";
 function Login(){

return(
<>

<div className="viewall-nav">
<Navbar/>
</div>
     <div class="login-container">
      <div className="login-details">


    <h1 class="login-title">LOGIN</h1>
    <p class="login-subtext">Enter your log in details</p>

    <div class="input-group">
      <span class="prefix">+91</span>
      <input type="tel" class="phone-input" placeholder="Mobile Number" />
    </div>

  <Link to="/EnterOTP">
  <button class="otp-button">REQUEST OTP</button> 
  </Link>  

  <div class="divider">
  <hr  />
  <span >Or Login Using</span>
  <hr />
</div>

    <button class="email-button">
    <MdOutlineMail className="email-icon"/>
 Gmail
    </button>
          </div>
  </div>

</>
)
 }

 export default Login