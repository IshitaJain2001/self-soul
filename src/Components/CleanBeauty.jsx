 import "./CleanBeauty.css"
 import img from "../assets/cleanbeauty.png"
 export default function CleanBeauty(){
    return(
        <div className="beauty-container">
            <div className="inner-container">
 <h2>Clean Beauty. It's in our DNA</h2>
        <p>Our entire product portfolio is clean, green, and cruelty-free. At least 99% of plant-based ingredients are derived from organic 
farming, and all products contain a minimum of 98% natural ingredients. We also test our products for suitability to even the most 
sensitive skin, so the whole family can feel confident using OW.</p>
 <div className="imgg" >
    <img src={img} alt="" />
    </div>   
 </div>
 
           
       
        </div>
    )
 }