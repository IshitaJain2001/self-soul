import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import heartIcon from "../assets/heart.png";
import cartIcon from "../assets/cart.png";
import userIcon from "../assets/profile.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />

        <div className="nav-tab-wrapper">
          <ul className="nav-links">
            <li className="active">Home</li>
            <li>Bath</li>
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
  );
};

export default Navbar;
