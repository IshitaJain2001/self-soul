 import "./Login.css"
 
 function Login(){

return(
     <div class="login-container">
    <h1 class="login-title">LOGIN</h1>
    <p class="login-subtext">Enter your log in details</p>

    <div class="input-group">
      <span class="prefix">+91</span>
      <input type="tel" class="phone-input" placeholder="Mobile Number" />
    </div>

    <button class="otp-button">REQUEST OTP</button>

    <div class="divider">
      <hr />
      <span>Or Login Using</span>
      <hr />
    </div>

    <button class="email-button">
      📧 Email
    </button>
  </div>


)
 }

 export default Login