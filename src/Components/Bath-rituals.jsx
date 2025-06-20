 import "./BathRituals.css"
 import relaxingImg from '../assets/relaxing.png';
import box1Img from '../assets/Box1.png';
import box2Img from '../assets/Box2.png';

 export default function BathRituals(){
    return(

        <>
      
<section class="bath-section">
  <h2 class="section-title">Bath Rituals</h2>
  <div className="images">
 <div class="card-container">
    <div class="ritual-card">
      <img src={relaxingImg} alt="Relaxing" />
      <span class="card-text">Relaxing</span>
    </div>
    <div class="ritual-card">
      <img src={box1Img} alt="Healing" />
      <span class="card-text">Healing</span>
    </div>
    <div class="ritual-card">
      <img src={box2Img} alt="Nourishing" />
      <span class="card-text">Nourishing</span>
    </div>
  </div>
  </div>
 
</section>

        </>
    )
 }