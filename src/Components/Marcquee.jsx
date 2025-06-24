 import "./Marcquee.css"
 import img from "../assets/marquee.png"

 export default function Marcquee(){
    return(
     <div class="marcquee-container">
    <img src={img} alt="Heal with nature banner"/>
    <div class="features">
      <p>Organic Ingredients</p>
      <p><strong>100%</strong> Clinically Tested</p>
      <p>Suitable For All Skin Types</p>
      <p><strong>100%</strong> Vegan</p>
      <p><strong>100%</strong> Cruelty Free</p>
    </div>
  </div>
    )
 }