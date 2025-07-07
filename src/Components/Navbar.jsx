// import React, { useState } from "react";
// import "./Navbar.css";
// import logo from "../assets/logo.png";
// import searchIcon from "../assets/search.png";
// import heartIcon from "../assets/heart.png";
// import cartIcon from "../assets/cart.png";
// import userIcon from "../assets/profile.png";
// import img1 from "../assets/summer.png";
// import img2 from "../assets/winter.png";
// import { Link,useLocation } from "react-router-dom";
// import rosebar from "../assets/rosebar.png"
// import scrub from "../assets/scrub.png"

// const Navbar = () => {
//   const [showBathMenu, setShowBathMenu] = useState(false);
//   const [showBodyMenu, setShowBodyMenu] = useState(false);
// const [showFaceMenu, setShowFaceMenu] = useState(false);
// const location= useLocation()
//   return (
//     <div className={`drop ${showBathMenu || showBodyMenu||showFaceMenu ? "active-drop" : ""}`}>
//       <div className="navbar-container">
//         <nav className="navbar">
//           <img src={logo} alt="Logo" className="logo" />

//           <div className="nav-tab-wrapper">
//             <ul className="nav-links">
//               <li className={location.pathname === "/" ? "active" : ""}>Home</li>

           
//               <div
//                 className="dropdown-wrapper"
//                 onMouseEnter={() => setShowBathMenu(true)}
//                 onMouseLeave={() => setShowBathMenu(false)}
//               >
//                 <li className="dropdown" className={location.pathname.startsWith("/Body") ? "active" : ""}>Bath</li>

//                 {showBathMenu && (
//                   <div className="dropdown-content">
//                     <ul className="dropdown-left">
//                       <Link to="/Bath-view-all"><li>VIEW ALL</li></Link>
//                   <Link to="/Bath-soaps">
//                      <li>BATH SOAPS</li>
//                   </Link> 
//                     <Link to="/Bath-salts">
//                     <li>BATH SALTS</li>
//                     </Link>  
//                    <Link to="/Bath-oils">
//                    <li>BATH OILS</li>
//                    </Link>   
//                    <Link to="Bath-scrubs">  <li>BATH SCRUBS</li>
//                    </Link>
                     
//                    <Link to="/Bath-fizz">   <li>BATH FIZZ</li>   </Link>   
//                   <Link to="/Bath-soaks"><li>BATH SOAKS</li>
//                   </Link>    
//                    <Link to="/Bath-powder"> <li>BATH POWDER</li>
//                    </Link>   
//                     </ul>
//                     <div className="dropdown-img">
//                       <img src={img1} alt="summer" />
//                       <img src={img2} alt="winter" />
//                     </div>
//                   </div>
//                 )}
//               </div>

        
//               <div
//                 className="dropdown-wrapper"
//                 onMouseEnter={() => setShowBodyMenu(true)}
//                 onMouseLeave={() => setShowBodyMenu(false)}
//               >
//                 <li><Link to="/Body">Body</Link></li>

//                 {showBodyMenu && (
//                   <div className="dropdown-content">
//                     <ul className="dropdown-left">
//                       <li>Coming Soon</li>
//                     </ul>
//                     <div className="dropdown-img">
//                       <img src={img1} alt="summer" />
//                       <img src={img2} alt="winter" />
//                     </div>
//                   </div>
//                 )}
//               </div>

//         <div className="dropdown-wrapper"
//         onMouseEnter={()=>setShowFaceMenu(true)}
//         onMouseLeave={()=>setShowFaceMenu(false)}
//         >
//           <li>Face</li>
//           {
//             showFaceMenu && (
// <div className="dropdown-content">
//   <ul className="dropdown-left">
// <Link to="/face-view-all"><li>VIEW ALL</li>   </Link>   
// <li>FACEWASH</li>
// <li>FACE SCRUB</li>
//   </ul>
//       <div className="dropdown-img">
//                       <img src={rosebar}  />
//                       <img src={scrub}  />
//                     </div>
// </div>
//             )
//           }
//           </div>      
//               <li>Value Sets</li>
//               <li>Gift</li>
//               <li>Our Heritage</li>
//               <li>Blogs</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>

//           <div className="icons">
//             <img src={searchIcon} alt="Search" />
//             <img src={heartIcon} alt="Wishlist" />
//             <img src={cartIcon} alt="Cart" />
//             <img src={userIcon} alt="User" />
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import heartIcon from "../assets/heart.png";
import cartIcon from "../assets/cart.png";
import userIcon from "../assets/profile.png";
import img1 from "../assets/summer.png";
import img2 from "../assets/winter.png";
import { Link, useLocation } from "react-router-dom";
import rosebar from "../assets/rosebar.png";
import scrub from "../assets/scrub.png";

const Navbar = () => {
  const [showBathMenu, setShowBathMenu] = useState(false);
  const [showBodyMenu, setShowBodyMenu] = useState(false);
  const [showFaceMenu, setShowFaceMenu] = useState(false);
  const location = useLocation();

  return (
    <div className={`drop ${showBathMenu || showBodyMenu || showFaceMenu ? "active-drop" : ""}`}>
      <div className="navbar-container">
        <nav className="navbar">
          <img src={logo} alt="Logo" className="logo" />

          <div className="nav-tab-wrapper">
            <ul className="nav-links">
              <li className={location.pathname === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
              </li>

              <li
                className={`dropdown-wrapper ${location.pathname.startsWith("/Bath") ? "active" : ""}`}
                onMouseEnter={() => setShowBathMenu(true)}
                onMouseLeave={() => setShowBathMenu(false)}
              >
                <div className="dropdown">Bath</div>

                {showBathMenu && (
                  <div className="dropdown-content">
                    <ul className="dropdown-left">
                      <Link to="/Bath-view-all"><li>VIEW ALL</li></Link>
                      <Link to="/Bath-soaps"><li>BATH SOAPS</li></Link>
                      <Link to="/Bath-salts"><li>BATH SALTS</li></Link>
                      <Link to="/Bath-oils"><li>BATH OILS</li></Link>
                      <Link to="/Bath-scrubs"><li>BATH SCRUBS</li></Link>
                      <Link to="/Bath-fizz"><li>BATH FIZZ</li></Link>
                      <Link to="/Bath-soaks"><li>BATH SOAKS</li></Link>
                      <Link to="/Bath-powder"><li>BATH POWDER</li></Link>
                    </ul>
                    <div className="dropdown-img">
                      <img src={img1} alt="summer" />
                      <img src={img2} alt="winter" />
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`dropdown-wrapper`}
                onMouseEnter={() => setShowBodyMenu(true)}
                onMouseLeave={() => setShowBodyMenu(false)}
              >
               Body

                {showBodyMenu && (
                  <div className="dropdown-content">
                    <ul className="dropdown-left">
                      <li>Coming Soon</li>
                    </ul>
                    <div className="dropdown-img">
                      <img src={img1} alt="summer" />
                      <img src={img2} alt="winter" />
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`dropdown-wrapper ${location.pathname.startsWith("/Face") ? "active" : ""}`}
                onMouseEnter={() => setShowFaceMenu(true)}
                onMouseLeave={() => setShowFaceMenu(false)}
              >
                <div>Face</div>

                {showFaceMenu && (
                  <div className="dropdown-content">
                    <ul className="dropdown-left">
                      <Link to="/Face-view-all"><li>VIEW ALL</li></Link>
                     <Link to="/Facewash"><li>FACEWASH</li>
                     </Link> 
                   <Link to="/Facescrubs">
                   <li>FACE SCRUB</li>
                   </Link>   
                    </ul>
                    <div className="dropdown-img">
                      <img src={rosebar} alt="rosebar" />
                      <img src={scrub} alt="scrub" />
                    </div>
                  </div>
                )}
              </li>

              <li>Value Sets</li>
              <li>Gift</li>
              <li>Our Heritage</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="icons">
            <img src={searchIcon} alt="Search" />
            <img src={heartIcon} alt="Wishlist" />
            <img src={cartIcon} alt="Cart" />
            <img src={userIcon} alt="User" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
