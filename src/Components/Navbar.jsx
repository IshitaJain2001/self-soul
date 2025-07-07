


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
    const [showValueMenu, setValueMenu] = useState(false);
     const [showGiftMenu, setGiftMenu] = useState(false);
  const location = useLocation();

  return (
    <div className={`drop ${showBathMenu || showBodyMenu || showFaceMenu||showValueMenu||showGiftMenu ? "active-drop" : ""}`}>
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


 <li
                className={`dropdown-wrapper ${location.pathname.startsWith("/value") ? "active" : ""}`}
                onMouseEnter={() => setValueMenu(true)}
                onMouseLeave={() => setValueMenu(false)}
              >
                <div>Value Sets</div>

                {showValueMenu && (
                  <div className="dropdown-content">
                    <ul className="dropdown-left">
                      <Link to="/Face-view-all"><li>VIEW ALL</li></Link>
                     <Link to="/Facewash"><li>BATH</li>
                     </Link> 
                   <Link to="/Facescrubs">
                   <li>FACE</li>
                   </Link>   
                    </ul>
                    <div className="dropdown-img">
                      <img src={rosebar} alt="rosebar" />
                      <img src={scrub} alt="scrub" />
                    </div>
                  </div>
                )}
              </li>


               <li
                className={`dropdown-wrapper ${location.pathname.startsWith("/Gift") ? "active" : ""}`}
                onMouseEnter={() => setGiftMenu(true)}
                onMouseLeave={() => setGiftMenu(false)}
              >
                <div>Gift</div>

                {showGiftMenu && (
                  <div className="dropdown-content">
                    <ul className="dropdown-left">
                      <Link to="/Gift-view-all"><li>VIEW ALL</li></Link>
                     <Link to="/Gift-bathbox"><li>BATH GIFT BOX</li>
                     </Link> 
                   <Link to="/Gift-skincare">
                   <li>SKINCARE GIFT BOX</li>
                   </Link>  
                    <Link to="/Gift-miniset">
                   <li>MINI TREAT SET</li>
                   </Link>
                   <Link to="/Gift-selfcare">
                   <li>SELF-CARE KIT</li>
                   </Link>   
                    </ul>
                    <div className="dropdown-img">
                      <img src={rosebar} alt="rosebar" />
                      <img src={scrub} alt="scrub" />
                    </div>
                  </div>
                )}
              </li>
             
           
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
