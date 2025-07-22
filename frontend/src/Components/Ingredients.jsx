 import React from 'react'
 import "./Ingredients.css"
import Navbar from './Navbar'
import img1 from "../assets/Frame 302.png"
import img2 from "../assets/Frame 303.png"
import img3 from "../assets/Frame 304.png"
import img4 from "../assets/Frame 305.png"
import img5 from "../assets/Frame 306.png"
import img6 from "../assets/Frame 307.png"
import img7 from "../assets/Frame 308.png"
import img8 from "../assets/Frame 309.png"
import img9 from "../assets/Frame 310.png"
import img10 from "../assets/Frame 311.png"
import img11 from "../assets/Frame 312.png"
import img12 from "../assets/Frame 313.png"
import img13 from "../assets/Frame 314.png"
import img14 from "../assets/Frame 315.png"
import img15 from "../assets/Frame 316.png"
import img16 from "../assets/Frame 317.png"
import img17 from "../assets/Frame 318.png"
import img18 from "../assets/Frame 319.png"
import img19 from "../assets/img1.png"
import img20 from "../assets/img2.png"
import img21 from "../assets/img3.png"
import img22 from "../assets/img4.png"
import img23 from "../assets/img5.png"
import img24 from "../assets/img6.png"
import img25 from "../assets/img7.png"
import img26 from "../assets/img8.png"
import img27 from "../assets/img9.png"
import img28 from "../assets/img10.png"
import img29 from "../assets/img11.png"
import img30 from "../assets/img12.png"
import img31 from "../assets/img13.png"
import img32 from "../assets/img14.png"
import img33 from "../assets/img15.png"
import img34 from "../assets/img16.png"
import img35 from "../assets/img17.png"
import img36 from "../assets/img18.png"

 export default function Ingredients() {
    const images=[
        {normal:img1,
            hovered:img19
        },
          {normal:img2,
            hovered:img20
        }
        ,
          {normal:img3,
            hovered:img21
        }
        ,
          {normal:img4,
            hovered:img22
        }
        ,
          {normal:img5,
            hovered:img23
        }
        ,
          {normal:img6,
            hovered:img24
        }
        ,
          {normal:img7,
            hovered:img25
        }
        ,
          {normal:img8,
            hovered:img26
        }
        ,
          {normal:img9,
            hovered:img27
        }
        ,
          {normal:img10,
            hovered:img28
        }
        ,
          {normal:img11,
            hovered:img29
        }
        ,
          {normal:img12,
            hovered:img30
        }
        ,
          {normal:img13,
            hovered:img31
        },
          {normal:img14,
            hovered:img32
        },
          {normal:img15,
            hovered:img33
        },
          {normal:img16,
            hovered:img34
        },
          {normal:img17,
            hovered:img35
        },
          {normal:img18,
            hovered:img36
        }
    ]
   return (
     <div className='ingredients-container'>
        <div className="viewall-nav">
            <Navbar/>
        </div>
<video src=""></video>
<div className="collection">
    <div className="browse">
        <h2>BROWSE OUR HERBAL COLLECTION</h2>
        <p>Our premium, organic bath products are ethically sourced and free of artificial scents. Explore our glossary to learn more about each ingredient and why we selected them to be a part of our carefully curated bath formulas. Hover over the ingredient card to learn more.</p>
        
            </div>

            <div className="grid-images">
<div className="grid-images">
  {images.map((item, index) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
      <img
        key={index}
        src={isHovered ? item.hovered : item.normal}
        alt=""
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    );
  })}
</div>


            </div>
</div>
     </div>
   )
 }
 