 
 import img from "../assets/nature.png"
 import "./NatureComp.css"
 export default function NatureComp(){
    return(
<div className="nature-section">
  <div className="nature-image">
    <img src={img} alt="Nature View"/>
  </div>
  <div className="nature-content">
    <div className="final-content">
<h2>Unveiling the symphony of Nature</h2>
    <p>
      Nature's beauty is timeless and pure. Every step we take is in harmony with the environment. 
      We believe in sustainable living, conscious choices, and products that reflect Earth’s generosity.
      From organic ingredients to mindful packaging, every detail matters.
    </p>
    <a href="#">Learn More</a>
    </div>
    
  </div>
</div>

    )
 }