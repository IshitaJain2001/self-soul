 import React from 'react'
 import "./Search.css"
 import searchIcon from "../assets/search.png";
 export default function Search() {
   return (
     <div className='search-container'>
        <div className="input">
            <img src={searchIcon} alt="Search" className='search-icon'/>
  <input type="text" name="" id="" placeholder='Search Item'/>
        </div>
       
     </div>
   )
 }
 