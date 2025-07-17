 import React from 'react'
 import Navbar from "./Navbar"
 import { RiGoogleFill } from "react-icons/ri";
 import "./Googlesignin.css"
 export default function Googlesignin() {
   return (
     <div className='google-container'>
       <div className="viewall-nav">
        <Navbar/>
       </div>
       <div className="inner">
<h1>login</h1>
<button>
    <RiGoogleFill />
    Continue with Google
</button>
       </div>
       
     </div>
   )
 }
 