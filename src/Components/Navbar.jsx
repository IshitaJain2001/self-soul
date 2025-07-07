import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import heartIcon from "../assets/heart.png";
import cartIcon from "../assets/cart.png";
import userIcon from "../assets/profile.png";
import img1 from "../assets/summer.png";
import img2 from "../assets/winter.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showBathMenu, setShowBathMenu] = useState(false);
  const [showBodyMenu, setShowBodyMenu] = useState(false);

  return (
    <div className={`drop ${showBathMenu || showBodyMenu ? "active-drop" : ""}`}>
      <div className="navbar-container">
        <nav className="navbar">
          <img src={logo} alt="Logo" className="logo" />

          <div className="nav-tab-wrapper">
            <ul className="nav-links">
              <li className="active">Home</li>

              {/* BATH DROPDOWN */}
              <div
                className="dropdown-wrapper"
                onMouseEnter={() => setShowBathMenu(true)}
                onMouseLeave={() => setShowBathMenu(false)}
              >
                <li className="dropdown">Bath</li>

                {showBathMenu && (
                  <div className="dropdown-content">
                    <ul className="dropdown-left">
                      <Link to="/Bath-view-all"><li>VIEW ALL</li></Link>
                      <li>BATH SOAPS</li>
                      <li>BATH SALTS</li>
                      <li>BATH OILS</li>
                      <li>BATH SCRUBS</li>
                      <li>BATH FIZZ</li>
                      <li>BATH SOAKS</li>
                      <li>BATH POWDER</li>
                    </ul>
                    <div className="dropdown-img">
                      <img src={img1} alt="summer" />
                      <img src={img2} alt="winter" />
                    </div>
                  </div>
                )}
              </div>

              {/* BODY DROPDOWN */}
              <div
                className="dropdown-wrapper"
                onMouseEnter={() => setShowBodyMenu(true)}
                onMouseLeave={() => setShowBodyMenu(false)}
              >
                <li><Link to="/Body">Body</Link></li>

                {showBodyMenu && (
                  <div className="dropdown-content positionn">
                    <ul className="dropdown-left">
                      <li>Coming Soon</li>
                    </ul>
                    <div className="dropdown-img">
                      <img src={img1} alt="summer" />
                      <img src={img2} alt="winter" />
                    </div>
                  </div>
                )}
              </div>

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
