 import React, { useState } from 'react'
import Navbar from './Navbar'
 import "./Whatsdifferent.css"
 import img1 from "../assets/Frame 302.png"
import img2 from "../assets/Frame 303.png"
import img3 from "../assets/Frame 304.png"
import img4 from "../assets/Frame 305.png"
import img5 from "../assets/Frame 306.png"
import img6 from "../assets/Frame 307.png"
import img7 from "../assets/Frame 308.png"
import img8 from "../assets/Frame 309.png"
import img19 from "../assets/img1.png"
import img20 from "../assets/img2.png"
import img21 from "../assets/img3.png"
import img22 from "../assets/img4.png"
import img23 from "../assets/img5.png"
import img24 from "../assets/img6.png"
import img25 from "../assets/img7.png"
import img26 from "../assets/img8.png"
import { RxCaretRight } from "react-icons/rx";
import { Link } from 'react-router-dom'
 export default function WhatDifferent() {
    
    const arr= [
          {normal:img1,
                    hovered:img19
                },
                  {normal:img2,
                    hovered:img20
                }
                ,
                  {normal:img3,
                    hovered:img21
                }
                ,
                  {normal:img4,
                    hovered:img22
                }
                ,
                  {normal:img5,
                    hovered:img23
                }
                ,
                  {normal:img6,
                    hovered:img24
                }
                ,
                  {normal:img7,
                    hovered:img25
                }
                ,
                  {normal:img8,
                    hovered:img26
                }
    ]
   return (
     <div className='different-container'>
        <div className="viewall-nav">
            <Navbar/>
        </div>
        
        <div className="main-container">
            <video src=""></video>
<h2>WHAT MAKES US DIFFERENT</h2>
<p>At the heart of everything we create is a promise of purity, care, and intention. What sets us apart is our commitment to gentle, effective formulations made with skin-loving ingredients — no harsh chemicals, ever. Every product is thoughtfully crafted, dermatologist approved, and designed to bring a touch of calm and luxury to your daily routine. We don’t just make products — we create moments of self-care you can truly trust.</p>
<h1>98% Natural ingredients, like never before</h1>
   
<div className="grid-images">
  {arr.map((item, index) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
      <img
        key={index}
        src={isHovered ? item.hovered : item.normal}
        alt=""
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    );
  })}
</div>

 <Link >
  <button>Learn More About Our Ingredients <RxCaretRight /></button>
 </Link> 
    
        </div>
        </div>
   )
 }
 