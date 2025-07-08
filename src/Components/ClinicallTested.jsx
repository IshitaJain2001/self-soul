 import React from 'react'
import Navbar from './Navbar'
 import "./ClinicalTesting.css"
 import img1 from '../assets/lab.png'
 import img2 from "../assets/rash.png"
 import img3 from "../assets/pigment.png"
 import img4 from "../assets/diseases.png"
 export default function ClinicallTested() {
   return (
     <div>

        <div className="viewall-nav">
            <Navbar/>
        </div>
        <video src=""></video>
        <div className="clinical-proofs">
            <div className="content">
<h3>CLINICALLY TESTED  </h3>
  <h3>  FOR ALL SKIN TYPES</h3>
<p>Our premium, organic bath products are ethically sourced and free of artificial scents. Explore our glossary to learn more about each ingredient and why we selected them to be a part of our carefully curated bath formulas. Hover over the ingredient card to learn more.</p>
            </div>
<div className="diseases">
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    
    <img src={img3} alt="" />
    <img src={img4} alt="" />
</div>

<div className="diseases-description">
   <div className="desc">
    <h3>Dermatologist Approved</h3>
    <p>Our skincare and bath product is proudly Dermatologist Approved, ensuring it's gentle, safe, and effective for all skin types. Tested by skin experts, it’s crafted to nourish, soothe, and care for your skin without causing irritation—making it a trusted choice for your daily routine.</p>
   </div>
   <div className="desc">
     <h3>Hypoallergenic</h3>
    <p>This skincare and bath product is Hypoallergenic, meaning it's carefully formulated to minimize the risk of allergic reactions. Made with skin-friendly ingredients, it’s ideal for even the most sensitive skin, offering a soothing and worry-free experience every time you use it.</p>
   </div>
   <div className="desc">
     <h3>Non-Comedogenic</h3>
    <p>This product is Non-Comedogenic, which means it won’t clog pores or cause breakouts. Perfect for all skin types, especially acne-prone skin, it keeps your skin feeling fresh, clean, and breathable after every use.</p>
   </div>
   <div className="desc">
      <h3>Suitable for All Skin Types</h3>
    <p>Gentle yet effective, this product is Suitable for All Skin Types. Whether you have dry, oily, sensitive, or combination skin, it’s designed to nourish and care without causing irritation—making it a versatile addition to any skincare or bath routine.</p>
   </div>
</div>
<div className="suitability">
    <h3>Suitability</h3>
    <p>Our products are formulated to be gentle yet effective, making them suitable for even the most sensitive skin. Whether you have dry, oily, combination, or sensitive skin, you can trust our clinically tested formulas to deliver visible results without causing irritation.</p>
</div>
        </div>
     </div>
   )
 }
 