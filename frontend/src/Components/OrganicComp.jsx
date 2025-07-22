 import img from "../assets/nature2.png"
 import "./OrganicComp.css"
 export default function OrganicComp(){
    return(
        <div className="organic-section">
  <div className="organic-text">
   <div className="text">


  <h2>Dive into the world of Organic Works</h2>
    <p>
      Elevate your senses with the purity of our secret ingredients, lovingly nurtured by the Scottish landscape.
      Our commitment to authenticity goes beyond the surface – it’s a dedication to preserving the very essence
      of the land, ensuring that each fragrance, feel and texture orchestrated into the Organic Works range,
      is a genuine connection to the heart of Scotland.
    </p>
    <a href="#">Learn More</a>

     </div>
  </div>
  <div className="organic-image">
    <img src={img} alt="Organic Works Image" />
  </div>
</div>

    )
 }