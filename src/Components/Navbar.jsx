import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import heartIcon from "../assets/heart.png";
import cartIcon from "../assets/cart.png";
import userIcon from "../assets/profile.png";
import img1 from "../assets/summer.png"
import img2 from "../assets/winter.png"

const Navbar = () => {
  const [showBathMenu, setShowBathMenu] = useState(false);

  return (
    <div className={`drop ${showBathMenu ? "active-drop" : ""}`}>
    <div className="navbar-container">
    

 
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />

        <div className="nav-tab-wrapper">
          <ul className="nav-links">
            <li className="active">Home</li>

            {/* <li
              className="dropdown"
              onMouseEnter={() => setShowBathMenu(true)}
              onMouseLeave={() => setShowBathMenu(false)}
            >
              Bath
              {showBathMenu && (
                <div className="dropdown-content">
                 
                  <ul className="dropdown-left">
                    <li>VIEW ALL</li>
                    <li>BATH SOAPS</li>
                    <li>BATH SALTS</li>
                    <li>BATH OILS</li>
                    <li>BATH SCRUBS</li>
                    <li>BATH FIZZ</li>
                    <li>BATH SOAKS</li>
                    <li>BATH POWDER</li>
                  </ul>
                  <div className="dropdown-img">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                  </div>
                  </div>

             
              )}
            </li> */}

            <li className="dropdown-wrapper"
  onMouseEnter={() => setShowBathMenu(true)}
  onMouseLeave={() => setShowBathMenu(false)}
>
  <div className="dropdown">Bath</div>
  {showBathMenu && (
    <div className="dropdown-content">
      <ul className="dropdown-left">
        <li>VIEW ALL</li>
        <li>BATH SOAPS</li>
        <li>BATH SALTS</li>
        <li>BATH OILS</li>
        <li>BATH SCRUBS</li>
        <li>BATH FIZZ</li>
        <li>BATH SOAKS</li>
        <li>BATH POWDER</li>
      </ul>
      <div className="dropdown-img">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
    </div>
  )}
</li>


            <li>Body</li>
            <li>Face</li>
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
