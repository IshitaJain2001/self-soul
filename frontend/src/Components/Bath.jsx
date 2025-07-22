import Navbar from "./Navbar";
import "./Bath.css"
import img from "../assets/bathingr.png"
 export default function Bath(){
    return(
        <div>
          <div className="viewall-nav">
<Navbar/>
          </div>
        
    <video src="" className="bath-video"></video>
        <div className="ingredients-section">
      <h2>98% Natural Ingredients</h2>
      <p>
        99% of plant-based ingredients derived from organic farming and all
        products contain a minimum of 98% natural ingredients.
      </p>

      <div className="ingredients-icons">
        <img src={img} alt="bath" />
      </div>
    </div>

    <div className="soaps-collection">
        
    </div>
        </div>
    )
 }