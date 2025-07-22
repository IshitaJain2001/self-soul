 import React from 'react'
import Navbar from './Navbar'
 import "./Wishlist.css"
  import { RxCross1 } from "react-icons/rx";
 import searchIcon from "../assets/search.png";
 export default function Wishlist() {
   return (
     <div>
        <div className="viewall-nav">
            <Navbar/>
        </div>
        <div className="wishlist">
              <h1>MY WISHLIST</h1> 
                <div className="input1">
                   <img src={searchIcon} alt="Search" className='search-icon'/>
         <input type="text" name="" id="" placeholder='Search Item'/>
         <RxCross1 className='cross'/>
               </div>
               <p>No products found</p>
              </div>
     </div>
   )
 }
 