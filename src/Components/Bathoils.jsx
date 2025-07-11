 import React from 'react'
import Navbar from './Navbar'
import { useDispatch } from 'react-redux'
 
 export default function Bathoils() {
 const dispatch=  useDispatch()
   return (
     <div>
        <div className="viewall-nav">
 <Navbar/>
        </div>
       
        Bathoils
        <button onClick={()=>dispatch({
          type:"ADDED_TO_CART",
          payload:{
            item:"bathoil",
            price:230
          }
        })}>add to cart</button>
        </div>
   )
 }
 