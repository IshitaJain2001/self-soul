//  import React, { useEffect, useRef } from 'react'
// import Navbar from './Navbar'
//  import "./Heritage.css"
//  import { BsCaretRight } from "react-icons/bs";
//  import img1 from "../assets/naturalingredients.png"
//  import img2 from "../assets/clinicallytested.png"
//  import img3 from "../assets/awardwinning.png"
//    import img from "../assets/footer.png"
//    import logo from "../assets/logoo.png"
//    import section1 from "../assets/section1.png"
//     import section2 from "../assets/section2.png"
//      import section3 from "../assets/section3.png"
//      import iceland from "../assets/iceland.png"
//      import japan from "../assets/japan.png"
//      import egypt from "../assets/egypt.png"
//      import taiwan from "../assets/taiwan.png"
//  export default function Heritage() {
   
  
//   const [showLeftCaret, setShowLeftCaret] = useState(false);
//   const scrollRef = useRef(null);

// useEffect(() => {
//   const el = scrollRef.current;

//   const handleScroll = () => {
//     if (!el) return;

//     const maxScroll = el.scrollWidth - el.clientWidth;
//     setShowLeftCaret(el.scrollLeft >= maxScroll - 10); // 10px buffer
//   };

//   el.addEventListener("scroll", handleScroll);
//   handleScroll(); // initialize on mount

//   return () => el.removeEventListener("scroll", handleScroll);
// }, []);

//    return (
//      <div>
//         <div className="viewall-nav">
//             <Navbar/>
//         </div>
//         <video src=""></video>
//         <div className="origin-heritage">
//             <div className="inner">

          
// <h2>ORIGIN OF INDIA</h2>
// <h3>FOUNDED 2023</h3>
// <p>Organic Works understands that true beauty should not come at the expense of the environment. Every product is crafted with love and care, minimizing it's carbon footprint. The true source of strength for the brand, is the earth itself, using ingredients sourced from Organic farming. With 99% of it's plant based ingredients derived from sustainable sources, the brand is firmly rooted in Nature's abundance.</p>
//   </div>
//         </div>
//         <div className="our-heritage-cards">
//           <div className="card">
// <img src={img1} alt="" />
//           </div>
//           <div className="card">
//             <img src={img2} alt="" />
//           </div>
//           <div className="card">
//             <img src={img3} alt="" />
//           </div>
//         </div>

//         <div className="our-story">
//           <div className="profile"></div>
//           <div className="profile-content">
//             <h4>ABOUT OUR STORY</h4>
//           <h2>Hi, My Name is Aanchal</h2>
//           <p>I founded Inoki Self soul out of my deep love for bath rituals and because nothing like it existed—a physical product crafted from premium teas and botanicals that authentically captures the tranquility of luxury bathhouses.</p>
//           <button>Read More About Us</button>
//           </div>
//         </div>
//             <div className='footer-container'>
                     
//        <img src={img} alt="" />
//        <div className="footer-outlay">
//        <img src={logo} alt="" />
//        </div>
       
                  
//              </div>

//              <div className="sensationspage">
//              <div className="sections">
// <img src={section1} alt="" />
//  <div className="sections-content">
//                 <h4>OUR PURPOSE</h4>
//                 <h2>Putting You First</h2>
//                 <p>Our goal is to help you prioritize your mental, physical, and spiritual well-being by transforming a part of your home into a sanctuary of peace.</p>
//               </div>
//              </div>
//              <div className="sections">
            
//               <div className="sections-content">
//                 <h4>OUR METHODS</h4>
//                 <h2>Prioritizing Integrity</h2>
//                 <p>We hold ourselves to the highest standard when it comes to crafting our baths. We work with dozens of suppliers to ensure we are using the highest quality and most ethically-sourced ingredients in our baths.</p>
//                 <button>SEE OUR INGREDIENTS</button>
//               </div>
//               <div> <img src={section2} alt="" /> </div> 
//              </div>
//              <div className="sections">
//             <div><img src={section3} alt="" /> </div>  
//             <div className="sections-content">
//                 <h4>OUR MORALS</h4>
//                 <h2>Created consciously</h2>
//                 <p>Sustainability is a core part of our business decisions. We strive to make our packaging is fully eco-conscious (recyclable and compostable), as we want to make sure we are leaving a low environmental impact.</p>
//                 <button>Our Sustainability Focus</button>
//               </div>
//              </div>

//              <div className="sensations-section">
//               <h2>INSPIRED BY GLOBAL SPA SENSATIONS</h2>
//               <div className="card-section" >
//                 <img src={iceland} alt="" />
//                 <img src={japan} alt="" />
//                 <img src={egypt} alt="" />
//                 <img src={taiwan} alt="" />
//               </div>
//              </div>
//              </div>
//         </div>
//    )
//  }
 


import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import './Heritage.css';
import { BsCaretRight } from "react-icons/bs";

import img1 from '../assets/naturalingredients.png';
import img2 from '../assets/clinicallytested.png';
import img3 from '../assets/awardwinning.png';
import img from '../assets/footer.png';
import logo from '../assets/logoo.png';
import section1 from '../assets/section1.png';
import section2 from '../assets/section2.png';
import section3 from '../assets/section3.png';
import iceland from '../assets/iceland.png';
import japan from '../assets/japan.png';
import egypt from '../assets/egypt.png';
import taiwan from '../assets/taiwan.png';

export default function Heritage() {
  const scrollRef = useRef(null);
  const [showLeftCaret, setShowLeftCaret] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;

    const handleScroll = () => {
      if (!el) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      setShowLeftCaret(el.scrollLeft >= maxScroll - 10);
    };

    el.addEventListener("scroll", handleScroll);
    handleScroll(); // on load

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="viewall-nav">
        <Navbar />
      </div>

      <video src=""></video>

      <div className="origin-heritage">
        <div className="inner">
          <h2>ORIGIN OF INDIA</h2>
          <h3>FOUNDED 2023</h3>
          <p>
            Organic Works understands that true beauty should not come at the expense of the environment. Every product is crafted with love and care, minimizing its carbon footprint. The true source of strength for the brand, is the earth itself, using ingredients sourced from Organic farming. With 99% of its plant based ingredients derived from sustainable sources, the brand is firmly rooted in Nature's abundance.
          </p>
        </div>
      </div>

      <div className="our-heritage-cards">
        <div className="card"><img src={img1} alt="" /></div>
        <div className="card"><img src={img2} alt="" /></div>
        <div className="card"><img src={img3} alt="" /></div>
      </div>

      <div className="our-story">
        <div className="profile"></div>
        <div className="profile-content">
          <h4>ABOUT OUR STORY</h4>
          <h2>Hi, My Name is Aanchal</h2>
          <p>I founded Inoki Self Soul out of my deep love for bath rituals and because nothing like it existed—a physical product crafted from premium teas and botanicals that authentically captures the tranquility of luxury bathhouses.</p>
          <button>Read More About Us</button>
        </div>
      </div>

      <div className="footer-container">
        <img src={img} alt="" />
        <div className="footer-outlay">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="sensationspage">
        <div className="sections">
          <img src={section1} alt="" />
          <div className="sections-content">
            <h4>OUR PURPOSE</h4>
            <h2>Putting You First</h2>
            <p>Our goal is to help you prioritize your mental, physical, and spiritual well-being by transforming a part of your home into a sanctuary of peace.</p>
          </div>
        </div>

        <div className="sections">
          <div className="sections-content">
            <h4>OUR METHODS</h4>
            <h2>Prioritizing Integrity</h2>
            <p>We hold ourselves to the highest standard when it comes to crafting our baths. We work with dozens of suppliers to ensure we are using the highest quality and most ethically-sourced ingredients in our baths.</p>
            <button>SEE OUR INGREDIENTS</button>
          </div>
          <div><img src={section2} alt="" /></div>
        </div>

        <div className="sections">
          <div><img src={section3} alt="" /></div>
          <div className="sections-content">
            <h4>OUR MORALS</h4>
            <h2>Created consciously</h2>
            <p>Sustainability is a core part of our business decisions. We strive to make our packaging fully eco-conscious (recyclable and compostable), as we want to make sure we are leaving a low environmental impact.</p>
            <button>Our Sustainability Focus</button>
          </div>
        </div>

        <div className="sensations-section">
          <h2>INSPIRED BY GLOBAL SPA SENSATIONS</h2>

          <div className="scroll-controls">
            {!showLeftCaret ? (
              <button className="scroll-btn" onClick={scrollRight}>
                <BsCaretRight size={24} />
              </button>
            ) : (
              <button className="scroll-btn" onClick={scrollLeft}>
                <BsCaretRight size={24} style={{ transform: 'rotate(180deg)' }} />
              </button>
            )}
          </div>

          <div className="card-section" ref={scrollRef}>
          <div className="card">
            <img src={iceland} alt="" />
             <div className="info">
              <h3>Luxury of an Iceland Bathhouse</h3>
              <p>Bath in a bio-rich mineral tea bath to detox, restore, and refresh the body</p>
              <a href="">SHOP XYZ</a>
            </div>
            </div>  
          <div className="card">
            <img src={japan} alt="" />
            <div className="info">
              <h3>Luxury of an Iceland Bathhouse</h3>
              <p>Bath in a bio-rich mineral tea bath to detox, restore, and refresh the body</p>
              <a href="">SHOP XYZ</a>
            </div>
            </div>  
            <div className="card">
  <img src={egypt} alt="" />
   <div className="info">
              <h3>Luxury of an Iceland Bathhouse</h3>
              <p>Bath in a bio-rich mineral tea bath to detox, restore, and refresh the body</p>
              <a href="">SHOP XYZ</a>
            </div>
            </div>
          <div className="card">
 <img src={taiwan} alt="" />
  <div className="info">
              <h3>Luxury of an Iceland Bathhouse</h3>
              <p>Bath in a bio-rich mineral tea bath to detox, restore, and refresh the body</p>
              <a href="">SHOP XYZ</a>
            </div>
          </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
