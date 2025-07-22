  import React from 'react'
import Navbar from './Navbar'
  import "./Createdconsciously.css"
  import img1 from "../assets/packaging1.png"
    import img2 from "../assets/packaging2.png"
      import img3 from "../assets/packaging3.png"
        import img4 from "../assets/packaging4.png"
export default function CreatedConsciously() {
    return (
      <div className='creation'>
        <div className="viewall-nav">
            <Navbar/>
        </div>
        <video src=""></video>
        <div className="approach">
<div className="our-approach">
    <h2>Our Approach to Sustainability</h2>
    <p>Here at Inoki Bathhouse, we share your appreciation and gratitude for the environment. We are committed to improving our environmental performance by taking tangible actions to reduce our ecological footprint. We understand that, as a business, we are contributing to the environmental degradation simply by existing, so we are making a conscious and intentional decision to embed sustainability into the fabric of our operations. It is our moral obligation to uphold sustainable and ethical values that are important to us. </p>

<li>For every order made, we plant a tree, remove 10kg of CO2, and rescue a plastic bottle</li>
<li>We are striving for 100% eco-conscious packaging by using materials that are recycled, recyclable, or compostable. More details regarding our packaging can be found below.
    </li>
<li>
    We make our products in small batches to reduce unnecessary waste, tackling the major environmental problem of overproduction while also meeting your needs.
    </li>
    <li>
We pay our employees who package our products fair wages and cover their meals every shift, so each human being is treated with respect and we can foster a close community with our team behind the scenes.
    </li>

</div>
<div className="packaging">
    <h2>About Our Eco-Conscious Packaging</h2>
    <p>Hover over each packaging element to understand what's recyclable or compostable.</p>
</div>

<div className="packaging-images">
    <img src={img1} alt="" />
    
    <img src={img2} alt="" />
    <img src={img3} alt="" />
    <img src={img4} alt="" />
</div>
        </div>
      </div>
    )
  }
  